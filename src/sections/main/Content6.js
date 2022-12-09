import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import PlayGround from "../../assets/image/features/playground.png";

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
              <img src={PlayGround} alt="Playground" className="img-fluid" />
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
              <Title>#6 Playground</Title>
              <Text mb={4}>
                Familiarise yourself with the platform with our interactive
                playground.
              </Text>
              <Link href="../demo">
                <HeroButton className="btn-outline-shark ml-2">
                  Access Demo
                </HeroButton>
              </Link>
            </Box>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default Content1;
