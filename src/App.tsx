import React from "react";
import logo from "./assets/images/logo.png";
import backgroundImage from "./assets/images/background.png";
import impactImage from "./assets/images/ourImpact.jpeg";
import "./App.css";
import ContactUsForm from "./components/ContactUs";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FaInstagram, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <main className="bg-background text-foreground min-vh-100 d-flex flex-column justify-content-start responsive-padding">
      <Container
        fluid
        className="responsive-padding shadow-all-sides rounded-2"
      >
        <Row className="gx-5">
          <Col
            xs={12}
            lg={8}
            className="d-flex flex-column align-items-center gap-4 order-2 order-lg-1"
          >
            <div className="mb-4 logo-responsive">
              <Image
                src={logo}
                alt="Avinya Logo"
                className="rounded-2"
                width={100}
                height={100}
              />
            </div>

            <h1 className="text-center w-100">
              <span className="fw-bold heading-text">AVINYA</span> is coming
              soon
            </h1>

            <h3 className="description-text">
              We’re working hard behind the scenes to bring you <br /> a new
              standard in innovative plant-based vegan leather.
            </h3>
            <h3 className="description-text text-center w-100">
              Thank you for your patience as we finalize our digital home.
            </h3>

            <ContactUsForm />

            <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
              <Button
                href="https://www.instagram.com/avinya_leather/"
                target="_blank"
                variant="link"
                className="text-black hover:text-primary"
                style={{ textDecoration: "none" }}
              >
                <FaInstagram /> Instagram
              </Button>
              <Button
                href="https://www.linkedin.com/company/avinya-leather/"
                target="_blank"
                variant="link"
                className="text-black hover:text-primary"
                style={{ textDecoration: "none" }}
              >
                <FaLinkedin /> LinkedIn
              </Button>
              <Button
                href="mailto:connect@avinyaleather.com"
                target="_blank"
                variant="link"
                className="text-black hover:text-primary"
                style={{ textDecoration: "none" }}
              >
                <MdEmail /> Email
              </Button>
              <Button
                href="tel:+9426166486"
                variant="link"
                className="text-black hover:text-primary"
                style={{ textDecoration: "none" }}
              >
                <FaPhoneAlt /> (+91) 9426166486
              </Button>
              <Button
                href="tel:+6351169077"
                variant="link"
                className="text-black hover:text-primary"
                style={{ textDecoration: "none" }}
              >
                <FaPhoneAlt /> (+91) 6351169077
              </Button>
            </div>
          </Col>

          <Col
            xs={12}
            lg={4}
            className="d-flex justify-content-center align-items-center order-1 order-lg-2"
          >
            <div className="d-flex h-100 flex-column align-items-center justify-content-center">
              <div className="mb-4 h-100 upper-logo">
                <Image
                  src={logo}
                  alt="Avinya Logo"
                  className="rounded-2"
                  width={100}
                  height={100}
                />
              </div>

              <div className="w-100 h-100 mb-4 d-lg-none">
                <Image
                  src={backgroundImage}
                  alt="Background"
                  className="w-100 h-100 object-cover rounded-2"
                  width={100}
                  height={100}
                />
              </div>

              <div className="w-100 h-100 mb-4 logo-responsive">
                <Image
                  src={impactImage}
                  alt="Impact Image"
                  className="w-100 h-100 object-cover rounded-2"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
