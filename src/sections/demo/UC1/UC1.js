import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../../components/Core";
import { device } from "../../../utils";

import Ambulance from "../../../assets/image/png/amb.png";
import FireTruck from "../../../assets/image/png/ft.png";

import ServiceSelector from "./ServiceSelector";

const UC1 = (props) => {
  const [service, setService] = useState("");
  const getServiceName = (serviceName) => {
    setService(serviceName);
    props.passService(serviceName);
  };
  let text = "-";
  if (service === "Ambulance") text = "You chose to call an Ambulance";
  else if (service === "Firetruck") text = "You chose to call a Firetruck";
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

            <Col sm="3" md="3" lg="3" className="order-lg-1"></Col>
            <Col sm="3" md="3" lg="3" className="order-lg-2">
              <ServiceSelector
                img={Ambulance}
                serviceName="Ambulance"
                getService={getServiceName}
              />
            </Col>
            <Col sm="3" md="3" lg="3" className="order-lg-2">
              <Box>
                <ServiceSelector
                  img={FireTruck}
                  serviceName="Firetruck"
                  getService={getServiceName}
                />
              </Box>
            </Col>
            <Col sm="3" md="3" lg="3" className="order-lg-2"></Col>
          </Row>
          <Row>
            <Col lg="12" className="mt-4 text-center">
              <Text>{text}</Text>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default UC1;
