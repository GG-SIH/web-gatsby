import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import imgContentMobile from "../../assets/image/um/6.png";

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
                <Title>How we stand out</Title>
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
          <Col md="10" lg="4" className="order-lg-2">
            <div className="text-center text-lg-left position-relative">
              <div
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={imgContentMobile} alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col lg="8" className="order-lg-1 mt-5 mt-lg-0">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box>
                <Title>#1: Offered Services</Title>
                <Text mb={4}>
                  You can connect to our service providers in order to report a
                  situation to avail the necessary emergency services like
                  Ambulances and Fire Brigades.
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
