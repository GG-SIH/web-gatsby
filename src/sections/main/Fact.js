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
    <SectionStyled className="mt-4">
      <Container>
        <Row
          className="d-flex text-center"
          css={`
            justify-content: space-between;
          `}
        >
          <Col md="6">
            <Box>
              <Title>
                30%{" "}
                <b
                  css={`
                    color: green;
                  `}
                >
                  decrease
                </b>
              </Title>
              <Text>
                in # of deaths ever since travellers have allowed way for
                ambulances to travel.
              </Text>
            </Box>
          </Col>

          <Col md="6">
            <Box>
              <Title>
                3%{" "}
                <b
                  css={`
                    color: green;
                  `}
                >
                  decrease
                </b>
              </Title>
              <Text> in Road Accidents caused by Drivers</Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  </>
);

export default Fact;
