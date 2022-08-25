import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { Title, Button, Section, Box, Text } from "../../../components/Core";
import { device } from "../../../utils";

import Ambulance from "../../../assets/image/png/amb.png";
import FireTruck from "../../../assets/image/png/ft.png";

import ServiceSelector from "./ServiceSelector";

const UC1 = (props) => {
  const [service, setService] = useState("");

  const getServiceName = (serviceName) => {
    setService(serviceName);
  };
  let text = "-";
  if (service === "Ambulance") text = "You chose to call an Ambulance";
  else if (service === "Fire Brigade")
    text = "You chose to call a Fire Brigade";
  return (
    <>
      <Section>
        <Container
          css={`
            margin-top: -5%;
          `}
        >
          <Row className="align-items-center">
            <Col lg="12" className="mb-5 text-center">
              <Title variant="secSm">Use Case #1</Title>
              <Text>choose either an ambulance or a fire truck</Text>
            </Col>

            <Col sm="2" md="2" lg="2" className="order-lg-1"></Col>
            <Col sm="4" md="4" lg="4" className="order-lg-2 mr-4">
              <ServiceSelector
                img={Ambulance}
                serviceName="Ambulance"
                getService={getServiceName}
              />
            </Col>
            <Col sm="4" md="4" lg="4" className="order-lg-2 ml-4">
              <Box>
                <ServiceSelector
                  img={FireTruck}
                  serviceName="Fire Brigade"
                  getService={getServiceName}
                />
              </Box>
            </Col>
            <Col sm="2" md="2" lg="2" className="order-lg-2"></Col>
          </Row>
          <Row>
            <Col lg="12" className="mt-4 text-center">
              <Text>{text}</Text>
              {text === "-" ? (
                ""
              ) : (
                <Button
                  className="mt-3"
                  onClick={() => {
                    props.passService(service);
                  }}
                >
                  Confirm Selection
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default UC1;
