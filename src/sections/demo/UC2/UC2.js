import React, { useState, useEffect } from "react";
import GoogleMap from "../../../components/GoogleMap/GoogleMap";
import { Container, Row, Col } from "react-bootstrap";
import { rgba } from "polished";
import {
  Title,
  Button,
  Section,
  Box,
  Text,
  EndSelect,
  StartSelect,
} from "../../../components/Core";
import Map2 from "../../../components/WPMap/Map2";
import { withScriptjs } from "react-google-maps";

const UC2 = (props) => {
  const MapLoader = withScriptjs(Map2);
  const [service, setService] = useState("");
  const serviceSelector = (event) => {
    setService(event.value);
    if (service == "selectService") setService("");
  };

  return (
    <>
      <Section>
        <Container
          css={`
            margin-top: -5%;
          `}
        >
          <Col lg="12" className="mb-5 text-center">
            <Title variant="secSm">Use Case #2</Title>
            <Text>path generation and waypoint generation example</Text>
          </Col>
          <Row
            className="pt-4 pb-4"
            css={`
              background: ${({ theme }) =>
                rgba(theme.colors.glassShadow, 0.175)};
              box-shadow: 0 32px 74px rgba(65, 62, 101, 0.115);
              transition: 0.5s;
              &: hover {
                margin: 2% 0;
              }
              border-radius: 10px;
            `}
          >
            <Col lg={6} className="order-lg-1">
              <StartSelect
                required
                onChange={serviceSelector}
                className="order-lg-1"
              />
            </Col>

            <Col lg={6} className="order-lg-2">
              <EndSelect
                required
                onChange={serviceSelector}
                className="order-lg-2"
              />
            </Col>
          </Row>

          <Row className="pt-4 pb-4">
            <Col lg={4} className="order-lg-1">
              <Button className="w-100">Move Emergency Service Provider</Button>
            </Col>

            <Col lg={4} className="order-lg-2">
              <Button className="w-100">Generate Waypoints</Button>
            </Col>

            <Col lg={4} className="order-lg-2">
              <Button className="w-100">Generate User</Button>
            </Col>
          </Row>
          <Row
            className="justify-content-center text-center mb-4"
            css={`
              width: 100%;
              height: 100%;
              border: 1px solid rgba(65, 62, 101, 0.115) !important;
              border-radius: 10px;
              padding: 1%;
            `}
          >
            <Col lg={12} className="position-static">
              {/* <GoogleMap /> */}
              <MapLoader
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcQSmBY1QhFLMcfDHsIFp5YEgdj6I_Ge8"
                loadingElement={
                  <div
                    style={{ height: `100%` }}
                    olat={13.0665}
                    olng={77.598}
                    dlat={12.97382}
                    dlng={77.590591}
                  />
                }
              />
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default UC2;
