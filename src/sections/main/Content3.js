import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import ETATracker from "../../assets/image/features/eta.png";

const Content1 = () => (
  <>
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col md="10" lg="6" className="order-lg-2">
            <div className="text-center text-lg-left position-relative">
              <div
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={ETATracker} alt="ETA" className="img-fluid" />
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
                <Title>#3 Service Tracking</Title>
                <Text mb={4}>
                  Provides the User with Updates on the Service's{" "}
                  <b
                    css={`
                      color: red;
                    `}
                  >
                    LIVE
                  </b>{" "}
                  Location, Contact and Registration Information
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
