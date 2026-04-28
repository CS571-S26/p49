import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Membership() {
  const navigate = useNavigate();

  const [showApplication, setShowApplication] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferredTime: ""
  });

  const plans = [
    {
      name: "Basic Plan",
      price: "$99 / month",
      description: "Perfect for beginners who want to train a few times each week.",
      features: ["3 classes per week", "Beginner classes", "Basic technique training"]
    },
    {
      name: "Unlimited Plan",
      price: "$159 / month",
      description: "Best for students who want to train consistently and improve faster.",
      features: ["Unlimited classes", "Gi and NoGi classes", "Open mat included"],
      recommended: true
    },
    {
      name: "Kids Plan",
      price: "$89 / month",
      description: "Designed for young students to build discipline and confidence.",
      features: ["3 kids classes per week", "Safe training", "Family friendly environment"]
    }
  ];

  const handleJoin = (planName) => {
    setSelectedPlan(planName);
    setShowApplication(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleViewSchedule = () => {
    setShowApplication(false);
    navigate("/schedule");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.preferredTime) {
      alert("Please fill in all fields.");
      return;
    }

    alert(
      `Application submitted for ${selectedPlan}! Your first class is free. After class, please visit the office to complete your membership. You will also receive a free Gi and NoGi rashguard & shorts set (value $200).`
    );

    setShowApplication(false);
    setFormData({
      name: "",
      email: "",
      preferredTime: ""
    });
  };

  return (
    <Container className="py-5">
      {/* Promotion banner */}
      <div className="mb-5 p-4 text-center bg-dark text-white rounded shadow">
        <h2 className="fw-bold mb-3">New Member Bonus</h2>
        <p className="fs-5 mb-2">Every new member receives a</p>
        <h4 className="fw-bold text-warning">
          FREE Gi + NoGi rashguard & shorts set
        </h4>
        <p className="mb-0">
          Total value: <strong>$200</strong>
        </p>
      </div>

      {/* Page heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Membership Plans</h1>
        <p className="text-muted mt-3">
          Choose a plan that fits your training goals. Your first class is free,
          and after class you can visit the office to complete your membership.
        </p>
      </div>

      {/* Membership cards */}
      <Row className="g-4">
        {plans.map((plan, index) => (
          <Col md={4} key={index}>
            <Card
              className={`membership-card h-100 shadow-sm ${
                plan.recommended ? "border-primary border-3" : ""
              }`}
            >
              <Card.Body className="d-flex flex-column">
                {plan.recommended && (
                  <div className="text-center mb-3">
                    <span className="badge bg-primary">Most Popular</span>
                  </div>
                )}

                <div className="text-center mb-2">
                  <span className="badge bg-success">Free $200 Gear Included</span>
                </div>

                <Card.Title className="text-center fw-bold fs-3">
                  {plan.name}
                </Card.Title>

                <h2 className="text-center my-3">{plan.price}</h2>

                <Card.Text className="text-muted text-center">
                  {plan.description}
                </Card.Text>

                <ul className="mt-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-auto membership-btn"
                  variant={plan.recommended ? "primary" : "outline-primary"}
                  onClick={() => handleJoin(plan.name)}
                >
                  Join Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Extra information */}
      <div className="mt-5 p-4 bg-light rounded shadow-sm text-center">
        <h3 className="fw-bold">How to Start</h3>
        <p className="mb-0 text-muted">
          Submit your application with your preferred first class time. Your first
          class is free. After class, please visit the office to complete your
          membership registration and payment.
        </p>
      </div>

      {/* Application modal */}
      <Modal show={showApplication} onHide={() => setShowApplication(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Membership Application</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <p className="text-muted">
              You are applying for <strong>{selectedPlan}</strong>. Your first
              class is free.
              <br />
              <br />
              After class, please visit the office to complete your membership.
            </p>

            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Preferred First Class Time</Form.Label>

              <div className="d-flex gap-2">
                <Form.Control
                  type="text"
                  name="preferredTime"
                  placeholder="Example: MM/DD 6:00 PM"
                  value={formData.preferredTime}
                  onChange={handleChange}
                />

                <Button
                  type="button"
                  variant="outline-secondary"
                  onClick={handleViewSchedule}
                >
                  View Schedule
                </Button>
              </div>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowApplication(false)}>
              Cancel
            </Button>

            <Button type="submit" variant="primary">
              Submit Application
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Hover effects */}
      <style>{`
        .membership-card {
          transition: all 0.3s ease;
          border-radius: 16px;
          overflow: hidden;
        }

        .membership-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2) !important;
        }

        .membership-btn {
          transition: all 0.3s ease;
        }

        .membership-btn:hover {
          transform: scale(1.05);
        }
      `}</style>
    </Container>
  );
}

export default Membership;