import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { Title, Button, Section, Box, Text } from "../../../components/Core";
import { rgba } from "polished";

import Ambulance from "../../../assets/image/png/amb.png";
import FireTruck from "../../../assets/image/png/ft.png";

import ServiceSelector from "./ServiceSelector";

const Card = styled.div`
  background: ${({ theme }) => rgba(theme.colors.glassShadow, 0.175)};
  padding: 4%;
  border-radius: 15px;
  box-shadow: 0 32px 74px rgba(68, 77, 136, 0.2);
  transition: 0.4s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const UC1 = (props) => {
  const [service, setService] = useState("");

  const getServiceName = (serviceName) => {
    setService(serviceName);
  };
  let text = "-";
  if (service === "Ambulance") text = "You chose to call an Ambulance";
  else if (service === "Fire Brigade")
    text = "You chose to call a Fire Brigade";
  else if (service === "Ambulance and Fire Brigade")
    text = "You chose to call both the Services";
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

            <Col sm="4" md="4" lg="4" className="order-lg-2">
              <ServiceSelector
                img={Ambulance}
                serviceName="Ambulance"
                getService={getServiceName}
              />
            </Col>
            <Col sm="4" md="4" lg="4" className="order-lg-2">
              <Box>
                <ServiceSelector
                  img={FireTruck}
                  serviceName="Fire Brigade"
                  getService={getServiceName}
                />
              </Box>
            </Col>
            <Col sm="4" md="4" lg="4" className="order-lg-2">
              <Box>
                <ServiceSelector
                  both={true}
                  img1={FireTruck}
                  img2={Ambulance}
                  serviceName="Ambulance and Fire Brigade"
                  getService={getServiceName}
                />
              </Box>
            </Col>
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
