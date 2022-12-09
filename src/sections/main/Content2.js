import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import ServiceSelector from "../../assets/image/features/selectservice.png";

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
              <img src={ServiceSelector} alt="" className="img-fluid" />
            </div>
          </div>
        </Col>
        <Col lg="6" className="order-lg-2 mt-5 mt-lg-0 text-right">
          <div
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            <Box>
              <Title>#2 Service Selection</Title>
              <Text mb={4}>
                Have the Option to call an Ambulance, Fire Truck or, Both.
              </Text>
            </Box>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default Content1;
