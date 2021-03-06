import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                {/* <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" /> */}
                Surg Energy
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">FrontEnd Deverloper</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Domain:</strong> FrontEnd Developer
                    <br />
                    <strong>Role:</strong> Production Support
                    <br />
                    <strong>Description:</strong> Solving real-time problems occuring in production related to UI
                    <br />
                    <strong>Technology:</strong> CSS WordPress
                    <br />
                    <strong>Duration:</strong> June 2020 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
