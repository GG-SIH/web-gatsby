import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Box, Text, Title, Button } from "../../components/Core";
import styled from "styled-components";
import { Link } from "gatsby";
import Web from "../../assets/image/web.png";
import Mobile from "../../assets/image/mobile.png";

const HeroButton = styled(Button)`
  min-width: 15%;
  height: 50px;
  font-size: 14px;
  transition: 0.4s;
  border-radius: 500px !important;
  background-color: #000;
  &.btn-1 {
    box-shadow: -12px 12px 50px rgb(96 1 211 / 30%) !important;
    &:hover {
      box-shadow: -12px 12px 50px rgb(96 1 211 / 0%) !important;
    }
  }
  @media (min-width: 576px) {
    min-width: 15%;
    height: 56px;
    font-size: 15px;
  }
`;

const Service = () => {
  return (
    <>
      <Container>
        <Row className="align-items-center mt-5">
          <Col sm="4" md="4" lg="4" className="order-lg-1">
            <div className="text-center text-lg-left position-relative">
              <div
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={Web} alt="Web App" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col sm="8" md="8" lg="8" className="order-lg-2 mt-5 mt-lg-0 ">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box>
                <Title>Web App</Title>
                <Text mb={4}>
                  Learn and Use the platform just as you would otherwise. Helps
                  you adjust to the platform through intuitive and informative
                  modals and videos. <br />
                  Understand when and how notifications are triggered, and also
                  why are they dispatched in that particular way
                </Text>
              </Box>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col sm="8" md="8" lg="8" className="order-lg-1 mt-5 mt-lg-0 ">
            <div
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-once="true"
            >
              <Box>
                <Title>Mobile</Title>
                <i>currently on android</i>
                <Text mb={4}>
                  A worthy alternate to Google Maps, but with added
                  functionalities. Use it just as you would any Maps App. With
                  Destination Autocomplete, Directions, Audio Navigation, and
                  much more. <br />
                  Wanna try the closed beta? or just want to explore more?
                </Text>
                <Link href="../mobile">
                  <HeroButton className="btn-outline-shark ml-2">
                    Learn More
                  </HeroButton>
                </Link>
              </Box>
            </div>
          </Col>
          <Col sm="4" md="4" lg="4" className="order-lg-2">
            <div className="text-center text-lg-left position-relative">
              <div
                data-aos="fade-down"
                data-aos-duration="750"
                data-aos-once="true"
              >
                <img src={Mobile} alt="Mobile App" className="img-fluid" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Service;
