import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
// import imgContentMobile from "../../assets/image/um/6.png";
import ServiceSelector from "../../assets/image/features/selectservice.png";

const Content1 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col lg="12" className="mb-5">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box>
                <Title>Why We're Better</Title>
                <Text mb={4}>
                  Save A Life (SAL) Maps is aimed at solving a pressing problem
                  faced in metropolitan cities, focusing on dealing with heavy
                  traffic congestion for emergency service providers (ESP) to
                  commute faster in the hour of need by assisting users in three
                  different cases.
                </Text>
              </Box>
            </div>
          </Col>
          <Col md="10" lg="6" className="order-lg-2">
            {/* testing something */}
            <div className="text-center text-lg-left position-relative">
              <div
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img
                  src={ServiceSelector}
                  alt="Service Selection"
                  className="img-fluid"
                />
              </div>
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box>
                <Title>#1 Service Selection</Title>
                <Text mb={4}>
                  Have the Option to call an Ambulance, Fire Truck or, Both.
                </Text>
              </Box>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Content1;
