import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Input,
  Select,
} from "../../components/Core";
import styled from "styled-components";
import { device } from "../../utils";
import PageWrapper from "../../components/PageWrapper";

const FormStyled = styled.form``;

const TitleContainer = styled(Box)`
  position: relative;
  &:after {
    content: "";
    height: 1px;
    position: absolute;
    right: 0;
    top: 50%;
    width: 32%;
    background: ${({ theme }) => theme.colors.border};
    margin-top: 0.5px;
    display: none;

    @media ${device.md} {
      width: 40%;
      display: block;
    }
    @media ${device.lg} {
      width: 52%;
    }
    @media ${device.xl} {
      width: 60%;
    }
  }
`;

const Officer = (props) => {
  return (
    <>
      <PageWrapper footerDark>
        <Container>
          <TitleContainer mb={"40px"}>
            <Text fontSize="18px" as="h4" className="">
              Enter Details for Officer # {props.counter + 1}
            </Text>
          </TitleContainer>
        </Container>
        <Row>
          <Col lg={6} className="order-lg-1">
            <div>
              <FormStyled
                name="AmbulanceO"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalName"
                  >
                    Officer ID
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Station ID
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>

          <Col lg={6} className="order-lg-1">
            <div>
              <FormStyled
                name="AmbulanceO"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Officer Name
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Is Officer on Duty?
                  </Title>
                  <Input type="text" placeholder="Y or N" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
        </Row>
      </PageWrapper>
    </>
  );
};
export default Officer;
