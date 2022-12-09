import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import smartNotifs from "../../assets/image/features/smartdir.png";

const Content1 = () => (
  <>
    {/* <!-- Content section 1 --> */}

    <Container>
      <Row className="align-items-center">
        <Col md="10" lg="6" className="order-lg-1">
          <div className="text-center text-lg-left position-relative">
            <div
              data-aos="fade-down"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <img
                src={smartNotifs}
                alt="Smart Notifications"
                className="img-fluid"
              />
            </div>
          </div>
        </Col>
        <Col lg="6" className="order-lg-2 mt-5 mt-lg-0 ">
          <div
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            <Box>
              <Title>#4 Smart Notifications</Title>
              <Text mb={4}>
                In Multi-Laned Roads, notifications are sent only to those
                vehicles fall within the Dynamic Radius <i>and</i> are moving in
                the same direction.
              </Text>
            </Box>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default Content1;
