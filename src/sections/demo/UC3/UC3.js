import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../../components/Core";
import { device } from "../../../utils";

import U1 from "../../../assets/image/png/1.png";
import U2 from "../../../assets/image/png/2.png";
import U3 from "../../../assets/image/png/3.png";

import FireTruck from "../../../assets/image/png/ft.png";

import ServiceSelector from "./userType";

const UC3 = (props) => {
  const [service, setService] = useState("");
  const getUserName = (serviceName) => {
    setService(serviceName);
    props.passService(serviceName);
  };
  let text = "-";
  if (service === "Ambulance") text = "You chose to call an Ambulance";
  else if (service === "Firetruck") text = "You chose to call a Firetruck";
  return (
    <>
      <Section
        css={`
          margin-top: -5%;
          margin: 0 1%;
        `}
      >
        <Row className="align-items-center">
          <Col lg="12" className="mb-5 text-center">
            <Title variant="secSm">Use Case #3</Title>
            <Text>Types of Users</Text>
          </Col>

          <Col sm="4" md="4" lg="4" className="order-lg-2">
            <ServiceSelector
              img={U1}
              userType="Type #1"
              userDesc="User ahead of the requested service on the same route"
            />
          </Col>
          <Col sm="4" md="4" lg="4" className="order-lg-2">
            <Box>
              <ServiceSelector
                img={U2}
                userType="Type #2"
                userDesc="User behind the requested service on the same route"
              />
            </Box>
          </Col>
          <Col sm="4" md="4" lg="4" className="order-lg-2">
            <Box>
              <ServiceSelector
                img={U3}
                userType="Type #3"
                userDesc="User along a different route than that of the requested service"
              />
            </Box>
          </Col>
        </Row>
        <Row>
          <Col lg="12" className="mt-4 text-center">
            <Text>{text}</Text>
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default UC3;
