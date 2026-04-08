import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import bjjImage from "../assets/bjj.jpeg";

// Home page component
export default function HomePage() {
  return (
    <Container>
      {/* ================= HERO SECTION ================= */}
      <div className="text-center py-5 mb-5">
        <img
          src={logo}
          alt="Chill & Roll Logo"
          style={{ maxWidth: "280px", marginBottom: "20px" }}
        />

        <h1 className="fw-bold mb-3">Chill & Roll BJJ Club</h1>

        <p className="lead mb-4">
          Train hard, stay humble, and roll with a community that supports your
          growth.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Button as={Link} to="/schedule" variant="dark">
            View Schedule
          </Button>

          <Button as={Link} to="/membership" variant="outline-dark">
            Join the Club
          </Button>
        </div>
      </div>

      {/* ================= WHAT IS BJJ ================= */}
      <section className="mb-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4">
            <img
              src={bjjImage}
              alt="Brazilian Jiu-Jitsu training"
              className="img-fluid rounded shadow"
            />
          </Col>

          <Col md={6}>
            <h2 className="mb-3">What is Brazilian Jiu-Jitsu?</h2>
            <p>
              Brazilian Jiu-Jitsu (BJJ) is a martial art focused on grappling,
              ground fighting, and submission techniques. It emphasizes leverage
              and technique over strength, allowing smaller individuals to
              defend themselves effectively.
            </p>

            <p>
              At Chill & Roll, we teach both Gi and No-Gi training in a
              structured, beginner-friendly environment. Whether your goal is
              fitness, self-defense, or competition, BJJ offers a path for
              continuous growth.
            </p>
          </Col>
        </Row>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="mb-5">
        <h2 className="mb-4 text-center">Why Train With Us</h2>

        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Beginner Friendly</Card.Title>
                <Card.Text>
                  Start with no experience. We guide you step-by-step through
                  fundamentals in a safe environment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Flexible Schedule</Card.Title>
                <Card.Text>
                  Morning and evening classes available, including Gi and No-Gi
                  options.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Supportive Community</Card.Title>
                <Card.Text>
                  Train with teammates who push and support each other every
                  day.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <div className="text-center py-5 mb-5 bg-dark text-white rounded">
        <h2 className="mb-3">Ready to Start Training?</h2>

        <p className="mb-4">
          Join our club today and take your first step into Brazilian Jiu-Jitsu.
        </p>

        <Button as={Link} to="/membership" variant="light">
          Become a Member
        </Button>
      </div>
    </Container>
  );
}