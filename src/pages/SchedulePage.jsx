import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Container, Table, Badge, Modal, Row, Col} from "react-bootstrap";

export default function SchedulePage() {
  // Used to navigate to the My Classes page
  const navigate = useNavigate();

  // Define the days of the week for the table header
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Define the time slots shown in the first column
  const timeSlots = [
    "7:00 AM - 8:00 AM",
    "8:00 AM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
  ];

  // Define schedule data, using "Day-Time" as the key
  const schedule = {
    "Monday-7:00 AM - 8:00 AM": {
      title: "Adult Gi",
      type: "Gi",
      coach: "Coach Daniel Kim",
    },
    "Tuesday-7:00 AM - 8:00 AM": {
      title: "Adult No-Gi",
      type: "No-Gi",
      coach: "Coach Marcus Lee",
    },
    "Wednesday-7:00 AM - 8:00 AM": {
      title: "Adult Gi",
      type: "Gi",
      coach: "Coach Daniel Kim",
    },
    "Thursday-7:00 AM - 8:00 AM": {
      title: "Adult No-Gi",
      type: "No-Gi",
      coach: "Coach Marcus Lee",
    },
    "Friday-7:00 AM - 8:00 AM": {
      title: "Adult Gi",
      type: "Gi",
      coach: "Coach Daniel Kim",
    },

    "Monday-5:00 PM - 6:00 PM": {
      title: "Kids Gi",
      type: "Gi",
      coach: "Coach Sofia Ramos",
    },
    "Wednesday-5:00 PM - 6:00 PM": {
      title: "Kids Gi",
      type: "Gi",
      coach: "Coach Sofia Ramos",
    },
    "Friday-5:00 PM - 6:00 PM": {
      title: "Kids Gi",
      type: "Gi",
      coach: "Coach Sofia Ramos",
    },

    "Tuesday-5:00 PM - 6:00 PM": {
      title: "Kids No-Gi",
      type: "No-Gi",
      coach: "Coach Sofia Ramos",
    },
    "Thursday-5:00 PM - 6:00 PM": {
      title: "Kids No-Gi",
      type: "No-Gi",
      coach: "Coach Sofia Ramos",
    },

    "Monday-6:00 PM - 7:00 PM": {
      title: "Adult Gi",
      type: "Gi",
      coach: "Coach Daniel Kim",
    },
    "Tuesday-6:00 PM - 7:00 PM": {
      title: "Adult Gi",
      type: "Gi",
      coach: "Coach Daniel Kim",
    },
    "Wednesday-6:00 PM - 7:00 PM": {
      title: "Adult Gi",
      type: "Gi",
      coach: "Coach Daniel Kim",
    },
    "Thursday-6:00 PM - 7:00 PM": {
      title: "Adult No-Gi",
      type: "No-Gi",
      coach: "Coach Marcus Lee",
    },
    "Friday-6:00 PM - 7:00 PM": {
      title: "Adult Gi",
      type: "Gi",
      coach: "Coach Daniel Kim",
    },

    "Monday-7:00 PM - 8:00 PM": {
      title: "Adult No-Gi",
      type: "No-Gi",
      coach: "Coach Marcus Lee",
    },
    "Wednesday-7:00 PM - 8:00 PM": {
      title: "Adult No-Gi",
      type: "No-Gi",
      coach: "Coach Marcus Lee",
    },
    "Friday-7:00 PM - 8:00 PM": {
      title: "Adult No-Gi",
      type: "No-Gi",
      coach: "Coach Marcus Lee",
    },
  };

  // Store the currently selected class
  const [selectedClass, setSelectedClass] = useState(null);

  // Control whether the class detail modal is visible
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Control whether the reservation success modal is visible
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  //  Store all reserved classes
  const [reservedClasses, setReservedClasses] = useState([]);

  // Load local reservation data when the page loads
  useEffect(() => {
    const storedReservations =
      JSON.parse(localStorage.getItem("myReservedClasses")) || [];
    setReservedClasses(storedReservations);
  }, []);

  // Return different badge colors based on class type
  const getBadgeVariant = (type) => {
    if (type === "Gi") {
      return "dark";
    } else if (type === "No-Gi") {
      return "secondary";
    } else {
      return "light";
    }
  };

  // Open the detail modal when a class is clicked
  const handleClassClick = (classInfo, day, time) => {
    setSelectedClass({
      ...classInfo,
      day,
      time,
    });
    setShowDetailModal(true);
  };

  // Save the reservation and show success feedback after clicking Reserve
  const handleReserve = () => {
    if (!selectedClass) return;

    const newReservation = {
      title: selectedClass.title,
      day: selectedClass.day,
      time: selectedClass.time,
      type: selectedClass.type,
      coach: selectedClass.coach,
    };

    // Prevent duplicate reservations for the exact same class
    const alreadyReserved = reservedClasses.some(
      (item) =>
        item.day === newReservation.day &&
        item.time === newReservation.time &&
        item.title === newReservation.title
    );

    if (!alreadyReserved) {
      const updatedReservations = [...reservedClasses, newReservation];
      setReservedClasses(updatedReservations);
      localStorage.setItem(
        "myReservedClasses",
        JSON.stringify(updatedReservations)
      );
    }

    setShowDetailModal(false);
    setShowSuccessModal(true);
  };

  return (
    <Container>
      {/* Header area */}
      <Row className="align-items-center mb-4">
        <Col>
          <h1>Weekly Training Schedule</h1>
          <p className="mb-0">
            Click any class on the calendar to view details and reserve your
            spot.
          </p>
        </Col>

        <Col xs="auto">
          <Button variant="dark" onClick={() => navigate("/myclasses")}>
            My Classes
          </Button>
        </Col>
      </Row>

      {/* Weekly class schedule table */}
      <Table bordered hover responsive className="text-center align-middle">
        <thead>
          <tr>
            <th>Time</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {timeSlots.map((time) => {
            // Handle the closed time slot row
            if (time === "8:00 AM - 5:00 PM") {
              return (
                <tr key={time}>
                  <td className="fw-bold">{time}</td>
                  <td
                    colSpan={7}
                    className="text-muted fw-semibold text-center bg-light"
                  >
                    Closed
                  </td>
                </tr>
              );
            }

            return (
              <tr key={time}>
                <td className="fw-bold">{time}</td>

                {days.map((day) => {
                  const classInfo = schedule[`${day}-${time}`];

                  return (
                    <td key={`${day}-${time}`} style={{ minWidth: "140px" }}>
                      {classInfo ? (
                        <Button
                          variant="light"
                          className="w-100 h-100 border"
                          onClick={() =>
                            handleClassClick(classInfo, day, time)
                          }
                        >
                          <div className="fw-semibold">{classInfo.title}</div>
                          <Badge bg={getBadgeVariant(classInfo.type)}>
                            {classInfo.type}
                          </Badge>
                        </Button>
                      ) : (
                        ""
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* Class details modal */}
      <Modal
        show={showDetailModal}
        onHide={() => setShowDetailModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Class Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedClass && (
            <div>
              <p>
                <strong>Class:</strong> {selectedClass.title}
              </p>
              <p>
                <strong>Day:</strong> {selectedClass.day}
              </p>
              <p>
                <strong>Time:</strong> {selectedClass.time}
              </p>
              <p>
                <strong>Style:</strong> {selectedClass.type}
              </p>
              <p>
                <strong>Coach:</strong> {selectedClass.coach}
              </p>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetailModal(false)}>
            Close
          </Button>
          <Button variant="dark" onClick={handleReserve}>
            Reserve
          </Button>
        </Modal.Footer>
      </Modal>

      {/*Reservation success modal */}
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Reservation Status</Modal.Title>
        </Modal.Header>

        <Modal.Body>Reservation successful!</Modal.Body>

        <Modal.Footer>
          <Button variant="dark" onClick={() => setShowSuccessModal(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}