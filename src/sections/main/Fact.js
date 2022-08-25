import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";
import { device } from "../../utils";

const SectionStyled = styled(Section)`
  background-color: #f7f7fb;
  padding: 30px;

  @media ${device.md} {
    padding: 50px;
  }
`;

const Fact = () => (
  <>
    {/* <!-- Fact section 1 --> */}
    <SectionStyled pt={0}>
      <Container>
        <Row className="text-center">
          <Col md="4">
            <Box>
              <Title>10M+</Title>
              <Text>fact1</Text>
            </Box>
          </Col>
          <Col md="4">
            <Box>
              <Title>20M+</Title>
              <Text>fact2</Text>
            </Box>
          </Col>
          <Col md="4">
            <Box>
              <Title>30M+</Title>
              <Text>fact3</Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Fact;
