import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Button, Section, Box, Text } from "../components/Core";
import { device } from "../utils";

import Features from "../sections/Features/Feature";

const Feature = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section className="position-relative">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="12">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <Box className="text-center">
                  <Title variant="hero">Why choose us? </Title>
                  <Text mb={4} mt={3}>
                    we'll give you 18 reasons why. eighteen
                  </Text>
                </Box>
              </div>
              <Features />
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Feature;
