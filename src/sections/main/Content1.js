import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
// import imgContentMobile from "../../assets/image/um/6.png";
import dyanamicRadius from "../../assets/image/features/notifrange.png";

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
                  src={dyanamicRadius}
                  alt="Dynamic Radius Figure"
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
                <Title>#1 Dynamic Radius</Title>
                <Text mb={4}>
                  Keeping in mind factors such as Driver Experience and Response
                  Time, SAL Maps maintains a pair of radii for every emergency
                  service en route. <br />1 - Wider Radius : Informs Vehicles at
                  a variable distance in front of the incoming emergency service
                  in advance and asks them to be ready to move. <br />2 -
                  Shorter Radius : Informs Vehicles within immediate distance to
                  move to the left. <br />
                  Vehicles beyond this range will not receive information.
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
