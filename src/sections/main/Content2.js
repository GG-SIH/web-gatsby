import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import imgContentMobile from "../../assets/image/um/7.png";

const Content1 = () => (
  <>
    {/* <!-- Content section 1 --> */}
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col md="10" lg="4" className="order-lg-1">
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
          <Col lg="8" className="order-lg-2 mt-5 mt-lg-0 text-right">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box>
                <Title>#2: Divide and Notify</Title>
                <Text mb={4}>
                  Receive Notifications to move out of the way in advance to
                  ensure a clear route is provided for the Emergency Service
                  Providers.
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
