import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Container, Row, Badge, Button } from "react-bootstrap";

export default function MyClassesPage() {
  // Used to navigate back to the Schedule page
  const navigate = useNavigate();

  // Store all reserved classes
  const [reservedClasses, setReservedClasses] = useState([]);

  // Load reserved classes from localStorage when the page loads
  useEffect(() => {
    const storedReservations =
      JSON.parse(localStorage.getItem("myReservedClasses")) || [];
    setReservedClasses(storedReservations);
  }, []);

  // Cancel a reservation and sync localStorage
  const handleCancelReservation = (indexToRemove) => {
    const updatedReservations = reservedClasses.filter(
      (_, index) => index !== indexToRemove
    );

    setReservedClasses(updatedReservations);
    localStorage.setItem(
      "myReservedClasses",
      JSON.stringify(updatedReservations)
    );
  };

  return (
    <Container>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>My Classes</h1>
          <p className="mb-0">Here are all of your reserved classes.</p>
        </Col>

        <Col xs="auto">
          <Button variant="dark" onClick={() => navigate("/schedule")}>
            Back to Schedule
          </Button>
        </Col>
      </Row>

      {reservedClasses.length === 0 ? (
        <p>You have not reserved any classes yet.</p>
      ) : (
        <Row>
          {reservedClasses.map((cls, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{cls.title}</Card.Title>

                  <Card.Text>
                    <strong>Day:</strong> {cls.day}
                  </Card.Text>

                  <Card.Text>
                    <strong>Time:</strong> {cls.time}
                  </Card.Text>

                  <Card.Text>
                    <strong>Coach:</strong> {cls.coach}
                  </Card.Text>

                  <div className="mb-3">
                    <Badge bg={cls.type === "Gi" ? "dark" : "secondary"}>
                      {cls.type}
                    </Badge>
                  </div>

                  <div className="mt-auto">
                    <Button
                      variant="outline-danger"
                      onClick={() => handleCancelReservation(index)}
                    >
                      Cancel Reservation
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}