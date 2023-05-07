import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { withScriptjs } from "react-google-maps";
import Map from "../components/ETAMap/Map2";
import { Box, Section, Title, Text } from "../components/Core";
import "./style.css";

const Simulation = () => {
  const MapLoader = withScriptjs(Map);

  useEffect(() => {
    setTimeout(() => {
      const alert = document.querySelector(".simulation-alert");
      alert.classList.remove("hidden");
    }, 5000);
    setTimeout(() => {
      const alert = document.querySelector(".simulation-alert");
      alert.classList.add("hidden");
    }, 10000);
  });

  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section className="position-relative">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="12" className="mb-5">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <Box className="text-center">
                  <Title variant="hero">Simulation Demo</Title>
                </Box>
              </div>
            </Col>
            <MapLoader
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8duqmgKujdQzDlmAnJqHA6G_htRlvrgs"
              loadingElement={<div style={{ height: `100%` }} />}
            />
            <Box className="text-center simulation-alert hidden">
              <Text css={`align='center`} color="white">
                🚨 Incoming Ambulance 🚨
              </Text>
              <Text color="white">Please Move to the Left</Text>
            </Box>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Simulation;
