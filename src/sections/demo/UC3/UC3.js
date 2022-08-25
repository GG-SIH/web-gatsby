import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../../components/Core";
import { device } from "../../../utils";

import ServiceSelector from "./userType";

const UC3 = (props) => {
  const [service, setService] = useState("");

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

          <Col sm="4" md="4" lg="4" className="order-lg-1">
            <ServiceSelector
              userType="User ahead of the requested service on the same route"
              userDesc=""
            />
          </Col>
          <Col sm="4" md="4" lg="4" className="order-lg-2">
            <Box>
              <ServiceSelector
                userType="User behind the requested service on the same route"
                userDesc=""
              />
            </Box>
          </Col>
          <Col sm="4" md="4" lg="4" className="order-lg-3">
            <Box>
              <ServiceSelector
                userType="User along a different route than that of the requested service"
                userDesc=""
              />
            </Box>
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default UC3;
