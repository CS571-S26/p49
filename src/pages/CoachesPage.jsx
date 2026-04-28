import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Badge } from "react-bootstrap";

import coach1 from "../assets/coach1.png";
import coach2 from "../assets/coach2.png";
import coach3 from "../assets/coach3.png";

function CoachesPage() {
  const [selectedCoach, setSelectedCoach] = useState(null);

  const coaches = [
    {
      name: "Coach Daniel Kim",
      belt: "Black Belt",
      role: "Adult Gi Coach",
      experience: "10 years of Brazilian Jiu Jitsu experience",
      image: coach1,
      specialties: ["Adult Gi", "Fundamentals", "Pressure Passing"],
      bio: "Coach Daniel Kim teaches Adult Gi classes with a focus on strong fundamentals, safe drilling, and controlled technique."
    },
    {
      name: "Coach Sofia Ramos",
      belt: "Brown Belt",
      role: "Kids Gi Coach",
      experience: "7 years of coaching experience",
      image: coach2,
      specialties: ["Kids Gi", "Beginner Safety", "Confidence Building"],
      bio: "Coach Sofia Ramos leads Kids Gi and No-Gi classes, helps young students build confidence, discipline, and respect through structured training."
    },
    {
      name: "Coach Marcus Lee",
      belt: "Black Belt",
      role: "Adult No-Gi Coach",
      experience: "9 years of grappling experience",
      image: coach3,
      specialties: ["Adult No-Gi", "Takedowns", "Submission Defense"],
      bio: "Coach Marcus Lee teaches Adult No-Gi classes with a focus on movement, wrestling entries, and practical submission defense."
    }
  ];

  return (
    <Container className="py-5">

      {/* Page heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Meet Our Coaches</h1>
        <p className="text-muted mt-3">
          Train with experienced instructors who help you grow on and off the mats.
        </p>
      </div>

      {/* Cards */}
      <Row className="g-4">
        {coaches.map((coach, index) => (
          <Col md={4} key={index}>
            <Card className="coach-card h-100 border-0 shadow-sm">
              
              <div className="image-wrapper">
                <Card.Img
                  src={coach.image}
                  alt={coach.name}
                  className="coach-img"
                />
              </div>

              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold fs-4">
                  {coach.name}
                </Card.Title>

                <div className="mb-2">
                  <Badge bg="dark" className="me-2">
                    {coach.belt}
                  </Badge>
                  <Badge bg="secondary">
                    {coach.role}
                  </Badge>
                </div>

                <Card.Text className="text-muted">
                  {coach.experience}
                </Card.Text>

                <div className="mb-3">
                  {coach.specialties.map((s, i) => (
                    <Badge bg="primary" className="me-2 mb-2" key={i}>
                      {s}
                    </Badge>
                  ))}
                </div>

                <Button
                  className="mt-auto coach-btn"
                  variant="outline-primary"
                  onClick={() => setSelectedCoach(coach)}
                >
                  View Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Philosophy */}
      <div className="mt-5 p-4 bg-light rounded shadow-sm text-center">
        <h3 className="fw-bold">Our Coaching Philosophy</h3>
        <p className="mb-0 text-muted">
          Safe training, strong fundamentals, and steady improvement.
        </p>
      </div>

      {/* Modal */}
      <Modal
        show={selectedCoach !== null}
        onHide={() => setSelectedCoach(null)}
        centered
      >
        {selectedCoach && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedCoach.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <img
                src={selectedCoach.image}
                alt={selectedCoach.name}
                className="img-fluid rounded mb-3"
              />

              <h5 className="fw-bold">{selectedCoach.role}</h5>

              <p className="text-muted">
                {selectedCoach.belt} • {selectedCoach.experience}
              </p>

              <p>{selectedCoach.bio}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setSelectedCoach(null)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      <style>{`
        .coach-card {
          transition: all 0.3s ease;
          border-radius: 16px;
          overflow: hidden;
        }

        .coach-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }

        .image-wrapper {
          overflow: hidden;
        }

        .coach-img {
          height: 420px;
          object-fit: cover;
          object-position: top;
          transition: transform 0.4s ease;
        }

        .coach-card:hover .coach-img {
          transform: scale(1.08);
        }

        .coach-btn {
          transition: all 0.3s ease;
        }

        .coach-btn:hover {
          background-color: #0d6efd;
          color: white;
          transform: scale(1.05);
        }
      `}</style>

    </Container>
  );
}

export default CoachesPage;