import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import imgContentMobile from "../../assets/image/jpeg/iphoness.jpeg";

const ShapeCard = styled(Box)`
  width: 85%;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.white}`};
  position: absolute;
  top: 25%;
  @media ${device.sm} {
    left: 7%;
  }
  @media ${device.md} {
    left: 7%;
  }
  @media ${device.lg} {
    left: 7%;
  }
`;

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

              <ShapeCard
                bg="white"
                p="18px"
                borderRadius={8}
                className="d-flex align-items-start"
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <Box
                  width="30px"
                  minWidth="30px"
                  height="30px"
                  minHeight="30px"
                  bg="secondary"
                  color="light"
                  borderRadius="50%"
                  className="d-flex align-items-center justify-content-center"
                  mr={3}
                  mt={2}
                >
                  {/* <i className="fas fa-bell"></i> */}
                  <span>🚑</span>
                </Box>

                <Box pr="40px">
                  <Title variant="card" fontWeight={300} mb={0}>
                    The Ambulance you requested is on it's way
                  </Title>
                </Box>
              </ShapeCard>
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
