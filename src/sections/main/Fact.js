import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Request from "../../assets/image/jpeg/req.jpeg";
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
              <Title>30%📉</Title>
              <Text>
                Reduction in # of deaths ever since travellers have allowed way
                for ambulances to travel.
              </Text>
            </Box>
          </Col>
          <Col md="4">
            <Box>
              <img
                src={Request}
                alt="Feature 2"
                css={`
                  width: 50%;
                `}
              />
              <Title variant="secSm">
                Incredibly Committed to Saving Lives
              </Title>
            </Box>
          </Col>
          <Col md="4">
            <Box>
              <Title>3%📉</Title>
              <Text>Reduction of Road Accidents caused by Drivers</Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Fact;
