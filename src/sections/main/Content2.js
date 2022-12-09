import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";
import dyanamicRadius from "../../assets/image/features/notifrange.png";

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
              <img src={dyanamicRadius} alt="" className="img-fluid" />
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
              <Title>#2 Dynamic Radius</Title>
              <Text mb={4}>
                Keeping in mind factors such as Driver Experience and Response
                Time, SAL Maps maintains a pair of radii for every emergency
                service en route. <br />1 - Wider Radius : Informs Vehicles at a
                variable distance in front of the incoming emergency service in
                advance and asks them to be ready to move. <br />2 - Shorter
                Radius : Informs Vehicles within immediate distance to move to
                the left. <br />
                Vehicles beyond this range will not receive information.
              </Text>
            </Box>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default Content1;
