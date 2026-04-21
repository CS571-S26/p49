import '../App.css';
import { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
  // State to control trial form modal
  const [showTrialModal, setShowTrialModal] = useState(false);

  // State to control success modal
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // State to control error modal
  const [showErrorModal, setShowErrorModal] = useState(false);

  // State to store form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    preferredContact: "email"
  });

  // Open trial modal
  const handleOpenTrialModal = () => {
    setShowTrialModal(true);
  };

  // Close trial modal
  const handleCloseTrialModal = () => {
    setShowTrialModal(false);
  };

  // Close success modal and reset form
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
      preferredContact: "email"
    });
  };

  // Handle form input change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle confirm submission
  const handleConfirmSubmit = () => {
    // Check if any field is empty
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber ||
      !formData.emailAddress
    ) {
      setShowErrorModal(true);
      return;
    }

    setShowTrialModal(false);
    setShowSuccessModal(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="fw-bold">About Our Club</h1>
              <p className="lead">
                We are a welcoming Brazilian Jiu-Jitsu community focused on
                discipline, confidence, and growth on and off the mats.
              </p>
              <Button variant="warning" onClick={handleOpenTrialModal}>
                Join a Free Trial Class
              </Button>
            </Col>

            <Col md={6}>
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
                alt="BJJ training"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* What is BJJ Section */}
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold text-center">What is Brazilian Jiu-Jitsu?</h2>
            <p
              className="text-center text-muted mx-auto"
              style={{ maxWidth: "800px" }}
            >
              Brazilian Jiu-Jitsu is a martial art that focuses on grappling,
              technique, and leverage. It allows a smaller person to defeat a
              larger opponent using skill and positioning.
            </p>
          </Col>
        </Row>

        {/* Why Train With Us */}
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Beginner Friendly</Card.Title>
                <Card.Text>
                  No experience needed. We guide you step by step.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Supportive Community</Card.Title>
                <Card.Text>
                  Train in a positive and respectful environment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Real Growth</Card.Title>
                <Card.Text>
                  Improve fitness, discipline, and confidence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Coaches Section */}
      <div className="bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold">Meet Our Coaches</h2>
              <p>
                Our coaching team is dedicated to helping you grow and improve
                your skills at your own pace.
              </p>
              <Button as={Link} to="/coaches" variant="dark">
                View Coaches
              </Button>
            </Col>

            <Col md={6}>
              <img
                src="data:image/webp;base64,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"   // Placeholder image (intentionally left blank)
                alt="Coaches"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Facility Section */}
      <div className="py-5">
        <Container>
          <Row className="align-items-center">
            
            {/* Image Placeholder */}
            <Col md={6}>
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExIVFRUXFRYVFRUYGBcVFRUVFRUWFxUVFxcYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS8tLS0tLS0tLS0tLS0tLS0tLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAEQQAAIBAgMEBgcFBgUDBQAAAAECAAMRBBIhBTFBUQYTYXGBkSIyUqGxwdEUQmKC8BUzU3KSogcjsuHxFkPyJTREwtL/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAOREAAgECAwQIBQQCAgIDAAAAAAECAxEEITESMkFRBRNhcYGRobEiwdHh8BRCUvEzghUjcpI0Q1P/2gAMAwEAAhEDEQA/APF5WSHAgAYSABtoIh3IoxCgAoAKADiAx4CHEADAgMNSBGI3+ilektdDVF0DDN3SSEz2HaWO2O1FrJYlTbdvtpx+UlmRPCdp2ztl3XNpFjM920iAubQwuWo4XVFJVWBBBC6Ag8b2vFdEtiXIpGIQ0BitABWgMUACUQGgqlMjQwG1bUAiBFjgwAJWtARPSxLDcZK4tRVKpO8+cVx2IGHb5RBYE2gMbNABs0AFAQEACWAHb9BNk4SuWXE1hRNvRJFwTygN3RP036K4bDU1qUMUla5sVHrDttASOCYQAaADXgA8ACgMQgBZwVSmjXqUutW1sudqevA5l/WsTJRcU/iV/QhqMCSQLC5IFybC+gud9hpeMi9R1jQielUtJBYsnFtuuY7isVKjXgFivIiGtExhEiIkMzCACVCYXBRbJhg+br/d9JHaLOpfF+4HUi9sw14nQeJO6NMi42drlzCI4XNTVSed7sPA7pCVr2ZfSUlG8EijUZmNySTJpWM8m5O7By9sYrD2EAHBEAyHLwABmgIa8AGgAsvZAA1WAEow7cj5QAqgwANRxgMmp1iNbwC4VTEMd5gIrtABi19/K0B3EICEBAYQ0gA5aAXGgIIQGODAQYkgJRTNt0YETQAjJiEEtBjwkG0TVOTD6kDeYr8iewlqxdYg3C/67YWYbUVoM1ZuAt+u2Fgc5EbXO8yViF29WIAQFkdZ0a6CYrGUjWoquTMVuWCi43jU90aQrnNY+gabtTO9WKniLg2NjxiY7lYwAaAhWgMcntgAwtABEwAYtAQhADp+hmNwlKqWxdE1Vy6KGC+lzN+EAO1/632WNBs5LDdd2v8AGO4rHkSLEMTGAxrwEPeADXgAQMBl/Y+zXxFVaNMBnc2VbgXNr7zpAC10h6PV8GypXplCwzL2i9ri0BGPAY4gAoAOQYAIQES0wTuEkNJs9A6J7XwNHDlMThBVe5OfMRoRujUh9W+Jx20Wo5yUBAubAnMfMAD3SLbJKMFqUzW5Lb3SNh7dtERtVPPyhYi5t8SMkRkRZoBca8AuORABhAC9h9pVEXKrsByBsI7gU6lS5vEBHeAFivVUqgAIyoVP4mLu2byYD8sBWK8ADFInW0AuAYAMdOEBjAwEPAYgYEWh7mAWOl6P4jB01ZcThmrXIysKhplRxGgN5G5bsdpi4rDqWYpcLc5QdSBfQE8dOMNoOrIfsx5iG0HVsb7M3ZHdC6tjfZ25Qug2JDGk3smF0LZfIKi7KcwuCOIjI2uS4rEvUsXZmtuuSfjALECISbCAB1qDIbMpB5EW+MABRGO4E9whcaTegMBEiNbgPGA07EnXnnbugkS22Xdl4Pr2K9bSp2F81V8i6W0B567pIi2Uq65WK3BsSLg3BsbXB4iJiITEAxHbAYrQEK3ZABxADa2vVwRpUxQp1lqD94zurq3o65VCi3pdu6NgYZiAV4ANeAC1gA1oAICAHRU+lOITC/ZAtNabKRfqkzsrEknOVzHvvALHOsYAEKxtb5k+7dAd3awIqEbtO7SAJtCZid5v36wBu44Q2vceevlENRdrgRkTRCmQuXIRBgSuClS/CDQKVw79kRIV4APmgFxlItpGRVksg6R0EGSjoS4WrkYOujKQwI3gg3BHbFcdkW9s7SqYpxUruajAZQzHWwube8x3YtiPIzxRFra24i5hcNhWsMcItri44H5GG0R6qIBwg5mPaF1XaMMJ2xpkeqdy1szB0zUUVnKU9czIudhppZSQDrbjJXE6bINoYUB2FMlkucpNlYrwJF7A9lzC5HYkim1JuRiDZYGU8oCEB3QFmXjhzh6wFekTazNSfOmYHcDuYA8xACLHV1Z2ZEFNSdEBLBewFiSfGAFYtAVxeEAuNeAXDSk53K3gDFckot8C++PrCh9nNhTLX/dpnLE3F6mXP4XjuDi1qUnwpBt8Ln4CK6J9XLkCKJ17N+8fGFyOyx0S9tey2pgCVyRcPz098Lj2URVktbQ7+ItBEWrFqlQW1zl3cz2chIXdy9Rhs3FUQbhl4ag7uzWFwsuCQNZxksFXTe1v1rFHeHOS2LZFC8tMxvnDdokci5XI2pHkfIfWAZlZfW3HtFt3bBoSbuWLdh8j9JEsuNccj5N9ID2hzb9X+kBORHQp6nTQ6jvO8SViCaRaoUtNdNT8YrFkZK2o2ReY90Q7xK9RFDA303EcuRkrMg2k7ljqh/xIlisx1o24H36wCxGlHU6kjgfke2NoinmSdR2xEiHEAgb9OMkVybDemYDZBVUiMg2CUMYrkZgRbHKdkBDGgSBp2+dvpAViF6VoCsNiHBy2RVsADbMcxH3mzE6nssOyAiJEPAGAi1SxDDcLm/63RWLIza0BdGaxysdbnQ27YxZsmFKof+21+5hFZEry5DnAVjf0Dr+uPfDIGp8gqWArgAZD5gfOF0CjMmGzqmmlj3j3WMLoOrmI7CrPqALC/Huvw7vOQlUjHUsjh6klkTHo+wTO9ekoDZDvazWvlIGt7dkg66vZJlywc2rtoJ+jel/tNPWn1uit6lwL99zu39kSr34DlgZJZyXqVRsq+me47jqOB1/QNxwlqkUOk72bH/Y68zHtC6lGuHpe2IEws1L21iGBUSkRbOvnESIVKjQsD2/WAyVVT2h5wGP1ascoYdpv8IAWlwiAaFR5QFYzKuJZGKhcwuTffrpYSV0VNSvkjRwtDOoZgASLkb7dkRZHTNCqbMQ62W/PSIlsx5EH2BNxRb9wsYXDZjyJG2agF8q+QjI7MeRPR2OtvVF9/jGLYjyCbZI5HwYj5wHsopYzZItf0tPxEj3mMi4oR2YBYBie5s3x3QIuKRDX2a1xYnidwO4a/GTTXIqZGdmsNNeP3e75/SSvDk/P7Ec+ZVq7Pc/8eRv4fKJ7PL1+wncelhWytfgp4WPH6RNLgM6jA7EzU6ZtvUH3R2EY+2NmZDug0Mydm4bNWUHdrpw9UyqTzsaKVG8HN8DohhFAv6It2gb+yKxLIcUV5jzELDJVpLa+YW53FvOFgeWoQakN9RP6l+sdhbSHNeh/Gpf1r9YrBtIVJ6TmyVEY2vZWDG3PQx7IKSHfDxWHcEAgZeB/X15b5FxT1ROM3HQsNgsO49JmFxYgKtvWzb733/SVNPkXqqrakOJw1IaqSTctqqAXYgk2HaB5CSjfiiqpNvRlN6VzewG/cLbyST5mWFF2LqYDuaq7Fpfw1k7Fdwv2JS/hiKxJMBtjUvYELDuRHZFP2BFYdxDZFP2YWHclTYtL2feYWC5MNg0fY95+sdhORY2PstF6xQgsKgsCA29UPEHjfzMayIXGxGwqRdiU3m+hIG4cBuhYkpELbBpez7zCxLaI/wBh0vZ95isPaDXYlH9MYbInImTYNA/+R+sdkR2wm2BRHP8ArMMhbTM/HbKpKDZvDNDIbYG0dmU9MjBTfU3t3bo8iEpGPVpKGKmtqLqGzMdWUHyHfrGkUuQlqLxqjiR6TaWs4vfhY2/4jI3B6xBY5wfR3Zi2qtY6xhcsYVFqJXIN8tN77/x2Ovj5RBc9G2LQXqKP8i/6JNIRhdK8ELXETROJxGDoenU7Ef8A0GZm/wDssdSEbYKUu36GVi6IHCWnLZfoUR9mp6b6lT3FRIVMos2YGO1Viu00VoD7K2m+qB/ZeV0HdM3dMxUakUuXzOcqYRiSFUm3KWynGO8zjxhKe6rhfs6t/DbylfX0v5Is/T1f4s2Oh1AjEOGFitI3B3i7IR7pbGSkroglKMrNWOpq2jsS2yq4hYXWEZMVh9YDaKw9scJCw9oLLCwtoxKvSTFKSrBVI0IKkEHtuY7FW0xqXSLFuyqpBZiFUAb2Y2A8yIWDaZ6Vs7ZVFW6qrUqValhmbNkQNa5VAlifG/0odeHWOnxR0Y4Cq6CrvR8OPK/YV8Dsxar3KVFpm9iGewHA3JNz2cZko1atWV81H87zqYrCYXDU7ZOeWTbzfHJNWXbw7S9iNgUtaahzoP8AMDurqSLi28Oba2y6cZrTkpbOvb/WvkcuVOnOG3uvglmssm83kuGbd3oY+H6H1A5z4ysyg3yqoz24KSRa/bYASTk75L3+3qQjRgknJ66XaS7ebfhmzjuke0KqYh0p1MqiwCq2fLYWsX+83MjS5Nt0dLON2V4tKFS0eS5/Pz9NTMo7WrjNas+8cTyEssjNdgVNoVibmrUP5j9YWQXZEcTU/iP/AFH6wsFza6I4c1a96jMaVJTUqAsbNbREOv3mI8AZGpOMIOT4F2Hoyr1Y048X/fkj1HC4Y1kpN/looBJUKNSG3ZRpYBePOY4bddQk3ZcfM7VTqMFKpTUW3lZ8lbnzu+BYx2y6FamVemDT4IAB6XNCRdTvGhHPjNKVs1py/s50viahNXlxbvku23zu+GVjgf8AEPA0KFKlSpIiXbMQCpZrKRmY3LNa9hewF+J1BFfEQruKpWXF92nZZX834ZI4CosuMBGyjlAiadHGr1dJRSS9Mvdtbvds9mF9OI7jAkicbUstJRSpjqxVGazXfrFAJb0rXF7i1tQN8kA+H2oy1EqBKd1UoBlup3jMwJ1ax39ggJlvY+1CgrP1dJtFBpkWVkBrFyQN9g3ZuEaYjpsHt3rMOHUBTTIW1w3CyrZxYMSBY6248ZJPIChiNqNUL+mGAQ5nucpqJbMFXQD1gT36GIaMrZrAu+U3BpOfNdJRb/sv2HS6y2D2U9ZGZjl3yxo5zZJVxPV4Whpe7Vj5Pb5SM43Vi7D13RnGdr2OgqYcrhAG3mqT/ZI0qewrGjHYx4qak1aysZexl1qG9rZPiZkx0mrJcb/IlgEvifK3zNjb6FKFQ2ZSKY1IysTlADWubG1v+ZleeIhFrlwOhX2Y05uD56O6XYnkcLWKlwahYgqlyLFr9Wvtb51qdksu33ODUd3n2eyIXRMxsTlvpcDNl7eF7SZAAgcOekQx7btfjAAlY6+kfMwEIVGt6x8zAYYqt7Tf1H6wA6npYuEsjUKnWOWYOcxayb0Ftygbt2trnmWxouf4eYAda2Kf1KOi33Gq+g8gb/mEhUmoRcmX4ehKvVVOPH2R3uAohKyv11M3ubm4JzC54WB158ZyqNNQrKe2s/memxVZ1cLKl1UlbLK1sn52y5GzWzXyqQR6IBuNByCjTgd/Mds6UtpZL88Dg09hrbkmteefe/p9BypUWQEk6l2137zYak7vd2RJOKtHzY24zd6jVlwXZ7L7t8TM2jVFNGCItSrlZgvoAsQLn7pA3btZW1C+wrNvu+hovVcXWldQXbLwSz487Hi+Mxb1nao5uzG9/gABuAGk0RjZWOXUqOctpkCbz4SRBDkQAVoAd3/h/wDuagpgGp165wdboUOQH8OYP5zNies2VsK+Z0ujOo6yXXO3w5PlmvU7zZYJpBXFNcxJVCMjNa9xl0vzvrw75DD3dNKaSvotPQvx0oqu50nKVkryvtJcs8/LL5BVsQ2ZgqXZAL5mAVcwvpz0+GstnN3ais1zeRVSpR2IynK0ZX0Tbdnbw/LHlPT2rmxQuxZ+qTrBckBiWYAA7vQKG3bLKSlsJy1epkxjh10ow3VkvDX1OdbC1CNKbnuVj8BLLMyXG/Z1Y7qNU/kb6Q2WK6Jk2ZXtbqanH7pO8SLaWpOMZPRN+DJ6exMS26g4/mGXeBz7pB1qa/cvNF0cJXlpTl5P5k3/AE1izupjj99Bxvzh11P+SG8Fif8A834K/sFhujmNVs3UXuCpAZDdWuGsQTbQycZxejT8UUyoVY70Wu9NE9PYWJVjeliFW+YZbkZrEZraC9iRv3E85ZYpYFPY+IA9GmVFjozOCATrdflCww9m7Or0qjs1KoymkygrTci7Fba25X1kdpLVjzKmOw9U3tQqeIt85HbjzCzIMdXCUsIuhen1pdDYlS1W4DA8xrHqg0OirbTSphEdnUE1KhsSqkAAKNOGgkloDZV2OArEHUNlN7aWBM52OV3FnRwErKSOl2zWpIXdFFSmq57E2zBVzEXKm27lMzlGeKWd19jZtuFFyUbW4f0eb7ba9Z2yBLm+W4IW4FgDppa061NJRsjkV3J1G5KzKeuvojjJFQBGm7j2wALiNOUAGW2sAJuu9BRbRS3LXNvvp2QCwmF9d1+EQWJBGO513QDHjPUwjkWrDNT7KyC48wP7RK6tNVYOHM0YXEvD141Vw17uJ3mHwNBXS9ZLWuyPxNz22EwU8FTVSOfemjvYjpas6M7RazykmstPH0Xmi/hdp0WZqeQIqXyuOJDaFbDxmyk1KThsWS0f0OTiIulCNXrdqUtY68OOfgRVsSpqkZqhpZLgDMvpWAy3Ava1vISt0Zyq2d9i3O2fLmWxxdKGHurdZtZ5Xy1vbS/1Zm4wWV2oU2Wp1ZFPORo7C2ZmuTYAnz7rOnQhCpttWy4slicbVrUOqT2rvOyaVl2W45eXa78JT6HV/vVKI/MWP+kfGXOvSWs15mCOCxMt2nLyYY6HG/8A7hdfwE298reLw6/ei5dFY1q/VvzX1NHC9BAd9cn+VQPiTNMJU5q8Wn3GKrTq0napFrvRbHQOmN5qv3FB8pGpJx0i35FlCnTqb1RR70/ki9svYi4YsaaVELABiXOoBuOFt/KYKmOlHJ0mu9/Y69DomnPONdPuV/mXX6wEEJUYrfKetYkX32u15GnidqztFNaXuy2rgdhSV5NPW2zFPw+xCz1CT/kE3tvub23XuDNSk3ntx8vqzFsxg7KnPLnL6IJaGIJuKQHkD5kRSk7f5reC+g4U43/+NfvlL5s08Nhq33k+B+FpDra63Z7X+v0LHhsJLfg4f7p+5a/Zl96X7iRIuM6m/T9WiSqU6P8Ajr271GXyENiU+KkeMccFSTu4uPivmKXStdqymp/6tewLbAocfifkZcrQ3anomZnKVXfoN+Ml7h09gYf2QfMfOTU3L/7F5L5lUqahmqL838iwux6Q3J75CeGUtU35F1LHzhkmo+EmMcEBup+8/KU9WoaU35v5GpV5Vd6uvJfMgru66Cnfy+ZjVeosso+DIywdKWfxT7nFfQzKlesDcULHnYfISyLctaq8l8yidOEFlh3/AOz+RE2NqbjQH67LSbpN6Si/BfJlG1S0dKS7pP5ob7Mr+thAe9V+ZlMpOPGPg5fcvjhqVTSNRd6j87DP0cwrethKY7gAf7ZX+rtw9fqi/wD4hPSfmvoyJuiGEb/4z+DNbXvaWxrSlpGXkvsZamBjT1qQ82n7MjrdB6BBANZAQRYPpr2WMujRbzsvFfcxTns5J37m7eqRhY3/AA6pbxXde/IfkI5ycN5rxdhU6MqmUIt9yuZ1T/D5rnLiFN+aj5PIRrxejT7pIslhKsdYSX+rK1X/AA+xQ9VqZ78w+AMs2nyfuUONsmyrU6HY1T6gPcT8wIba4p+QJdpVfo1jFBvQY9oKn5xdbDmS2WVquycSo1oVPBc3wvGqkeYrPkAuFqfw3/ob6R7S5gerbJ2PhXQMtCmCCVYZVOVgbEbpamrFbRYqYBkOiIBwIUCcrF1sVSlla3Ox6Lo7DdH4iOae0tU36q1svYNaL8/cJieKxT/d7HVXR+CjpD1f1IsVQxG9GHcb3872ltKo5O1WUu9P6GfE4dQV8PCHc45+DKn2bFnebf0/OaX+lWrb8WzBF9Iftio+EUSJsfEHe/kT8hCLwy3YX8Byjjnv1Uv9reyJk6NVDqXb+75mXKataNL0SMzptO88T6t/M1MHsN19Zs3eB8pnngtt3VNR8TZS6TjSVpVXLw+ZoU9lAchFHAbObaQ5dMRllGLfgWqeHA+/85rh8GtT5mCrarpQt6Et1l36qmlqZl0fWfC3j9AclM8B8JXtYepql7F2xjaOjbXY7+j+gYorwA+MuVClbJIyyxde9pSfnYWU8LeVpBwqrdt5FsKmHl/k2vF39hiWlE511rc206eDe7b87yGvn+6R43+RlSnfeb8zQ6KS/wCuMfFGZiPtPDL4W+ctisO9b+P2M1R41aW8PuZtapX4lx5j4TVGFDhYw1KmK/c5e3sTYd8Twz+I/wD1ITWH42/O4spyxnC/j9zSw7YjiE8d/wDbM0uoW7c2w/VvfUfH7F5Gbidez/eV9bNP4Wy94ek18cUGM8ujPEPReZkqUsFHjbuf9hCmeIWXxpzlvxiZZVqcP8c5/nkP1I5STw1LkVxx2IvZSv4IVkEq2cPHVmjrMbU0TXhb3CBXhaXRnSW60ZalPEPfUvVgujcLRTdZ7tiVNYaP+Ta9P7KlbDuefgRMVSniXr7nUoVsBHRLxT+Zm4rAvwXXtvb3TG8PJP4k/I6axsGv+uUb95i4nAYk8UH8un+qXU44SO8n4/Yy1p9Iz3JRt2fcq/ZcUvP+0/CXqngnpZeaMvWdKR1u/wD1YjisUvA+Ib5GWxoUnu1H4SKJYrEL/JRi++A67YrcVB8fqDJfp6v7aj8UmVfrKDylQj4Nou4fFVX30gBza3w0MxVas6f74yf/AI/Q6WHwdGvm6UoLntfJ5+hZ9L2U8j9Zn/VVP4x8n9TV/wAPhv5T819DM6OK1JXrgEAYistZeSmqWVvy5rE8u6dy/E8m1wO2RVIvvBkmlJWYQlKElKLs0N1CjhMk6FGCu0zqUsbiqz2YtJjEL7Mq6ygtIGjqMZLeq27vxDdZyURfqkt2CQ/+Oct+pJ/newKuIIFzu7ATEsTVk7Ky/O0JdH4emtqV3+dhUbao/Ee4AS7q8Q9ZfngZnXwUd2F/ztZGdqHgp8Wh+lk96b/PEj/yNOO5TS8voAdpPwCj3yawcONyuXSdV6JIhqbQqe15Wliw1NcCmWOrv93sCm1Ki9vf9Yp4WEuwnS6QrQ1z7y5h9qq2hBB/qHu190yVMJKOafyOlR6Rpzyaafn+eRfRuI+kzJyi8nY3ShCoviV+8mWs00RxdRa5mKp0dRlpl3Eq1uc0xxkXqrGGp0ZNbrT9Arg8pcuqqcmZZKvQ1uvYE0hISwtN6ZF0Oka0dbP87CM0O2UvAu+8al0qrZwz7/sGtEczLI4OC1bKZ9KVHupL1DyqOUs6ujDW3iU9fiqu634fYLrBE8RSjoSWBxE971f9jGtKpYzkjRDoxful5EbVTKZYmo+JqhgKMeF+8p18ai+s47r3PkJBQqVODZY6tCjldLu+xSq7aUeqCe/QS2ODm9XYzT6TprdTfoVzth77lA5ay9YOFs2zLLpKrfJInpbZPFR4G0X6RLRkl0k3vRTLKbaTjmHvi6mstJD/AFOFlvQ9ETLtRD98eItFtYiPAexgp8befzJBilO4qe4yLxM1vxLI4CnLOnU9n7WI2KcV9wlfXUZb0Pb7FqwmLjuVfO/3IzTp93nFbCvs8x7XSMOT8vsCcKh+98I1h6L3Z+wfr8VHfpej+4/2QcxD9C+DGumV+6DX54C+yjskP0Uuws/5el2+Ry3RjHsKldX1Q1cljrYtSRteYJLCbqTVkjkYuE3OVSSs72ffbPzZo7C2sBVq4c6CnUKL3aMov3MP1eTi7OzMjzzOkzSTs8iKbTuiKohHdObXw7h8UdPY7+Cxyq/BPe9/uMBMp0QwskiLZXxGzlbUeifd4iaaVeUMtUYcRgqdXNZMrLstvw/rwmn9VDtOcujqt9USrsocW8hIPF8kXR6M/lL0DGzafG58fpKni58DRHo6itbv87CRMCg3IPK/xkdqvPS5Z1eFpa7K7yZaB4ACCwtWWvqJ9IYeGmfcv6JBh+2XRwT4szy6VX7Y+bJBQEtjg6a1zM0+kqz0svD6hhAOEuVKnDgjM8RWqO203+dgi4idenHiTjg6089nzyAaqOUpli48EaYdGTe9JL1+gPW9krWMd80XvouNspO4QqiXRxVN65GSfR1aOln+doQYGXpxmuDMrjUpPO69BZBK5Yem+BdDHVo8b94Jpdsplg1wZqh0m/3R8gTSMplhai7TVDpCjLW67/sVq2FU+sg8vnKr1Ic0XJUK3J+RUqbJpncCO4/WTWKqLtK5dH0JaJrx+pUq7G9l/MfMS6ON/kjNPov+MvMrPsyqOAPcfrLo4um+wzS6Orx0V+5/0QPRZd6keBliqRlozLOjUhvRfkS0MI7bhpzOgkJ14Q1ZbRwdarmllzeRfo7KUasb9m4fWZJ4uT3cjqUei6cc6jv6IuhLCwExttu7OpFKKsgSsjYncEJfdHCnKbtEhUrQpR2puyJEpW3zo0cIo5yeZw8V0m6nw01Zc3r9iWbDlHFUgExNfDsLXyENzuCEb+YZPdMMVaOWq9jt06yrzcZ7skk3ylbJ+Ngdi4N3xOMVvRJ6h1blUVGUkcwbDwM1Re2rnJqQdOThLgdRsbHlwUcWqKcpHaN47eYPEESSzKmrGqI7ARslt0wV8Nb4oHaweP2vgqa8/qEoPKURo1HojXPF0Y6yXv7EgQy9YWb1M0+kqS0TYQTtlqwi4szS6Tl+2K/PIfKJYsPTXAzyx1eXG3cPpLVGMdEZ5VJz3m2Cag5yLrQjqyyGFrT3Yv29wTXEqljILTM1Q6MqveaQ3Wyl4yT0Rpj0XBb0m/T6jZzK3iKj4mmGCoR0j55ivKnK+poUUskRVcSi72A8dfKSjCUtEVzrU4b0kilW2ug3At7h75fHCTeuRkn0lSju3YFHbKH1gV94hPCTWmYU+kqct9W9S7SxCt6pB7jMsoSjvI306kKivFph5pC5Za4a1Tzl8cRUjxMtTBUZ6x8siRa80Rxv8kYqnRa/ZLzDFUc5ojiab4mKeArx4X7vy495cmnoZZRcXZqwLASuVKEtUWwxNWG7JkbUxKJYSD0yNcOk6q3kn6fnkA1MyiWDktGa4dKU3vJr1AKnlKZUKkdUbIYyhPSS8cvcC8qeRpWeaFeAD3jiruyFKSirvQIJzm2nhL5zOTiOk0sqWfaGAJsjFRVkcepUlUe1J3YxkiAMAOP2zQLOuMBAV0p0mFvVdWcq5bgM7BbdswuVkmuB1MHaUnRk8pq3c9Yvz9yphtqumN/C1BWI5FXKN5XF+Wpl1P4dNCvFylVldr4kvi707P5HQbYoHTFUrkqPTUb3QcR+Jde/US2XMwrka2zsYtVAwI3A6btdxHYZJO4i2DGIe8Bi6wTPLEwWmZuh0dWlrZfnYCasoljHwRrh0VH90vIA1DKZYmo+Jqh0fQj+2/eATKnJy1ZrjTjDdSQpEmRVcSi+swHZfXyk405S0RTUrU6e9JIq1NsINwJ9w98vjhJvXIx1OkqS3bsrVNsOdwA95miOEitXcxT6TqPdSXqVqmMdt7H4DyEvjShHRGOeJqz3pMhLS1FJGxgIiLQAYVSDcfSDSeo02ndFyjtaovHN36+/fM88LTlwt3G2l0hWhxv3l+httT6wI7tRMs8FJbrudCn0pTlvq3qaFHFo3qsD8fKZZwnDeRvp1qdTcaZMGkbllhZ41JrQTgpKzQ4rGXRxNSPEyT6OoT4W7hxX5iXxxq/cjHU6Jf7Jef58ghVHOaI4inLiYamBrw1jfuzHzS4ytWyYJMTipaolCcobra7iMgSiWFpvhY1w6Rrx437x10llOlGCyKK2IqVneb+g+aWFA2aADFoADmgBkjCK3X4ZvVcF07A41t3HWYlyNF2szksAp+0oz2zCnVp1FPEqyh7AjUcfHtkYuWy48s/A7VR0pVadZ6VIuMv/ACVl9Pc63YuJyMaDHdYoTxU+rr4EHtW/Ga6ctpHFxFF0ajg+BSrYlcJiVpg2WqC6DgrXAZf5SSO4mG6yrVHUUaoYAj9dksIkl4CAYTLXobXxR19zp4PHdX8FTd9vsR5pzmd5Wauhs0Q7DXgOwrwCxWxWDV94seY3/wC8tp1pQ00M1fCU628s+fEyMVgWTU6jmPnynQpYiM8tGcPEYGpRz1XP6lWXmMbNHYQi0YgGMAAgAJgAwgBJTUk2AJPIaxOSirsnCEpu0VdmjhtludWOX3mZKmMgso5+x0qPRdWWc3s+5sUKeUWuT3m85057TvY7dKl1cdm7fe7kt5EssMWiHYbNALDXgMdAeE0UadWW5kjFjK2HgrVUm+Wr+xMJ1IJpWbueaqyjKV4xsuQJMkVjXgAxaADFoAQ18QEGZjYfM7gAN57IDMyptJrm70k/AwLMO8g2v3bu2VOoTUR6eLBSlWB9KmctQX1sdDeZ+0sMHpjgmpYvD16ZsKr5ezOUNvBgqj8km8ryRbRi6so0W8m35tfZF9yXRaiA509JRxK/fp9+nmqyMXsStwehtrxeJw/WPfhlL89fMw+nFdarYGre4NQoxGl1c09fFQZq1OPodHsbHvRqGhVNyNQ38SnuVx+IbjEnbJgzpw0mRHzQACovEb/jM9egqma1Ohg8a6D2ZZx9u4hzTlyTTsz0kJRktqOaFmkR2HzR3Cw4MYrDwAo4rZitqvon3eXDwmmliZRyeaOfiOj6dXOOT9PIycThmQ2YePDznRp1Y1F8LOHXw9Si7TXjwIDLDOCRAACIATUME77hpzOglVSvCGrNNHCVqu6sufA0sPsdR65v2DQee+YqmNk8oKx1qPRMFnUd+xafnkaNKkqiygAdkxylKTvJnUp04U1aCsHIkxQAUAFABCThCU3aKK6tanSW1N2JFp850KWEjHOWfscPE9KTn8NPJc+P2DJms5QJMBEbPADIxPSLDo4p58zEhfRGYAk2AJHbE2kOxqZoxEOJxAQXPcANSxO4AcTBuwzNRKlWpYaMN53rRB0sPaqHnw3DiZRKdyxKxtUdmUlULkU24kAk9pJ3mV5jOZ2BWJethybqwzLYAD0v95GOhJ6h4rZ5xWE6ttK1F/ROoAqKCEYi/h5yad0OMnCSktVmu9GdsXHXsd2a5t7LjSqh7ePfeUpNxcOK0O9UqRhWjiVuVVaXY/t9TL6bYdlSnkUleuFVLcNGzr2C9mHeeU0Up7SOPjsN1FVrhw/Ow7Ta+zuupqyECqnpU27baqfwkaS6SuYUyDo9tnMMj+iblSDvRxvQ/KEWDR0OaSELNAAai33b/wBb5RWoKou024PGSw75x4r5ohvOVOLg7SPT0qkKsdqDuhwZEnYIGMQQMZEeADOoIsRcRptO6IyipKzMvF7L4p/SfkZtpYxrKfmcrEdFp50suzgQUNlOfW9EeZlk8ZFbuZmo9FVZZzdvVl+jgKa8LnmdZjqYmpPjY61HAUaWiu+bzLMzmwV4ANeA7CvABrwAV40m3ZClKMVeTsiRafObqWC4z8jjYnpVL4aK8X8kSCwnQjFRVkjizqSnLak7sRMdiABaRAx9sdIKNC4Zrt7C2v48F8YDOWOLxuPNkHV0eLahbd++oe6w5yN76DtbUp4/ZK0MXgqKsxJfNUJ0zZWUjTgNG0kXEdzvsRiQgubknRVGrMeQH6A3nSWPIiUaVN6r2BGf7zDVKCneqc27d5tw4Z5yuWJWOhweGWmoRBYDzJ4kniZDUZPGBxOd0ehXZgAfQIAA0O6VrImzS6zqsVqDkrrpyzD9f3SS1I8DB23hzRxTKNFrHrqR4LWX117mvf8AO0jU+Fqa8Tq4BrEUpYSXHOPevz3K/SfFK2CJtpmRrcRdsrDvBJ8o0tmploxVKnXYN7W9BpPzsvo+46DoxtMVKarfh6PhvX5jsM1p3OK0Vek+zypOJpi+lqyj7yjc4/EPhE8sxrPIv7A2uKoCMbsBcH215944ySZE2Q0YBXgAzreVVaMaiszThsVPDyvHTiuZDu0M5VSnKm7M9TQxEK8NqH9BAystHzRhYQeFxWHzQuKws0LhYV4XGMTAAbxDGvFcY14XHYWaFwsEqE9k2UsJOecsl6nKxPSlOnlT+J+n38PMlUATpU6UaatFHCrYipWd5v6DlpMoBLwAp43adOn6za78o1PjyHfBsDlMX0irYljSwqk8yuiqObP9LeMg5ciVi1sroggIqYg9a+/L/wBtT3fe8fKLZ5hfkdMFA0EkROJ225O1sOACxWlmAG8k9Zbu4ayEnazJRVzoKdN6jlVINS1qlT7tJfYTy7ye70apSbJpJG/hMItNQqbuJ4k8Se2RsMkzQsAQjuBynV9Zg7AXIAI8DeVMmSbQPXYNKy+vTIbusbN5b/CS4ESXb2D+14QOn7wAVKZ5VF4eOq+Mlk1mSpzlTkpR1Tucbjq4qYOqeDoXtxWoljUU8rgXt2NIUf4PVHR6RV7Yinu1Fmu1ar09CbZgKYfD4hTYFERz7LoMqP3aZT4SyM/jaZmxGH/6YVY8lf2O6wOKFVA3gw5HiP1zmk55x218G2FqgppTZr0z/Dqb8v8AKf1xkN12HqdTsbaYrJcizjR15HmOwyZE0gYAFeACYXkKlOM1Zl1CvOjPah/ZAbg2985NWlKm7M9VhcVTxEbx14rkOJUaB7wCw94BYa8AFmgFhrxNhYYmIdhi0B2EgJ+s0UsNOpnojDiekKVDLV8l83w9ydEA750qVCFPTXmefxOOq18pOy5L8zCJmi5jBLQAobQ2pSoi7tY8FGrHuHzgByWP6X1KjdXRU3OgVdXPew3dy+ci5chpEuB6LVa1mxb2W9+pQ2H524nxJ7ZGzeo720OuwmESmoSmoVRuAFhJrJCJrxCMLa/SFKfop6T3sLai/IAesfdE2lqNK5zWynrVdoFGJDhCSSb9WGUDcONmGgtwGnCmUrk0rHo2AoLSXIoNuJ4k8STzkCRaJkgIiZEButiuBzPRNr0yveJFEybo7ZWrYc7rkjua8SfATD6N1crVcMx9RiV7j+gfGThyEzl+kGDWlXq0j+7xCPVW33aigip4G9/zmQnk1Ndx0sHNVKVTDy4pyXY0r+q9u0vdEwjYYUWUZTnUqLkWLtz+MVZWltLiaOj5qtQdKS3fZg7IxbYas1FzcAhWPNT+7fv5+M1U5bSONiKLpVHA6baOESrTam4urC3dyI7RLGrlCOGw9aphaxQm70+PCpTNrX5Hd7oovgxtcTvMBi1qotRb2YXF945iSIlq8AFeACOu+RlBSVmWU6s6clKDsyE6Tk16DpPsPU4LGRxMdLNaoWaZzbYWaO4WFmhcLDFoh2EWgFhhcyylSlUdomfE4mnh47UyVaY46/CdOlhYQzebPPYrpOrWyj8K7NfMkvNJzRrwAixOIVFLMbAePwgByW2+l2UWQFQdxtdz3cFhew7NmVs3YVbF2q1XyU2135nfx+Z8pG7kPJFXoWn/AKhUUXyp1oXuDZR42iSsxt5HpayZBDV64RSzGwAuTvgByW09u1Kz9RRGrbgTa45seVvuiRlKxJRuS7M2SFfIrZq1jnqkaIotcUxw3201N+GtqJPmWpFfoxQH7UxlrkKqrc7/ALg/+pg3kiK4noSRpDDCRiIqqyLGViYrAf/Z"  // Placeholder image for facility
                alt="Training facility"
                className="img-fluid rounded shadow"
                style={{ minHeight: "300px", backgroundColor: "#ddd" }}
              />
            </Col>

            {/* Text Content */}
            <Col md={6}>
              <h2 className="fw-bold">Our Training Facility</h2>
              <p>
                Our gym is designed to provide a safe, clean, and professional
                training environment for all students. The mat space is spacious and
                well-maintained, allowing for both technique drills and live sparring.
              </p>
              <p>
                We prioritize hygiene and comfort, with regular cleaning and
                high-quality equipment to support your training. Whether you are a
                beginner or an experienced practitioner, our facility is built to help
                you perform at your best.
              </p>
            </Col>

          </Row>
        </Container>
      </div>

      {/* Belt System Section */}
      <div className="bg-dark text-light py-5">
        <Container>
          <Row className="mb-4 text-center">
            <Col>
              <h2 className="fw-bold">Belt System</h2>
              <p className="text-muted">
                Hover over each belt to learn more.
              </p>
            </Col>
          </Row>

          <Row className="g-4 text-center">
            
            {/* White Belt */}
            <Col md>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Beginner level. Focus on survival and basic techniques.
                  </Tooltip>
                }
              >
                <div
                  style={{
                    height: "80px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "10px",
                    cursor: "pointer"
                  }}
                ></div>
              </OverlayTrigger>
              <h6 className="mt-2">White</h6>
            </Col>

            {/* Blue Belt */}
            <Col md>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Build strong fundamentals and apply techniques effectively.
                  </Tooltip>
                }
              >
                <div
                  style={{
                    height: "80px",
                    backgroundColor: "#0d6efd",
                    borderRadius: "10px",
                    cursor: "pointer"
                  }}
                ></div>
              </OverlayTrigger>
              <h6 className="mt-2">Blue</h6>
            </Col>

            {/* Purple Belt */}
            <Col md>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Advanced techniques and creative strategies.
                  </Tooltip>
                }
              >
                <div
                  style={{
                    height: "80px",
                    backgroundColor: "#6f42c1",
                    borderRadius: "10px",
                    cursor: "pointer"
                  }}
                ></div>
              </OverlayTrigger>
              <h6 className="mt-2">Purple</h6>
            </Col>

            {/* Brown Belt */}
            <Col md>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    High-level control and preparation for black belt.
                  </Tooltip>
                }
              >
                <div
                  style={{
                    height: "80px",
                    backgroundColor: "#8B4513",
                    borderRadius: "10px",
                    cursor: "pointer"
                  }}
                ></div>
              </OverlayTrigger>
              <h6 className="mt-2">Brown</h6>
            </Col>

            {/* Black Belt */}
            <Col md>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
                    Mastery, leadership, and deep understanding of BJJ.
                  </Tooltip>
                }
              >
                <div
                  style={{
                    height: "80px",
                    backgroundColor: "#000",
                    borderRadius: "10px",
                    cursor: "pointer"
                  }}
                ></div>
              </OverlayTrigger>
              <h6 className="mt-2">Black</h6>
            </Col>

          </Row>
        </Container>
      </div>

      {/* Contact Section */}
      <Container className="py-5">
        <Row className="text-center">
          <Col>
            <h2 className="fw-bold">Visit Us</h2>
            <p className="mb-1">Chill & Roll BJJ Club</p>
            <p className="mb-1">123 Training Ave, Madison, WI</p>
            <p className="mb-1">Email: info@madisonbjj.com</p>
            <p className="mb-3">Phone: (123) 456-7890</p>
          </Col>
        </Row>
      </Container>

      {/* Trial Form Modal */}
      <Modal show={showTrialModal} onHide={handleCloseTrialModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Free Trial Class Application</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Preferred Contact</Form.Label>
              <Form.Select
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
              >
                <option value="email">Email</option>
                <option value="message">Message</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTrialModal}>
            Close
          </Button>
          <Button variant="warning" onClick={handleConfirmSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={handleCloseSuccessModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Application Submitted</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Your application has been submitted successfully.</p>
          <p>
            {formData.preferredContact === "email"
              ? "Please check your email for confirmation."
              : "Please check your messages for confirmation."}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseSuccessModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Error Modal */}
      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Incomplete Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Please fill in all required fields before submitting.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowErrorModal(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}