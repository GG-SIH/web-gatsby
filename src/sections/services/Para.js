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

const Para = (props) => {
  const [service, setService] = useState("");
  const serviceSelector = (event) => {
    setService(event.value);
    if (service == "selectService") setService("");
  };

  return (
    <>
      <PageWrapper footerDark>
        <Container>
          <TitleContainer mb={"40px"}>
            <Text fontSize="18px" as="h4" className="">
              Enter Details for Ambulance # {props.counter + 1}
            </Text>
          </TitleContainer>
        </Container>
        <Row>
          <Col lg={4} className="order-lg-1">
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
                    Ambulance Type
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
                    Ambulance Availability
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
          <Col lg={4} className="order-lg-1">
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
                    Hospital ID
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
                    Ambulance Number Plate
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>

          <Col lg={4} className="order-lg-1">
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
                    Paramedics Count
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
                    Ambulance Contact
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
        </Row>
      </PageWrapper>
    </>
  );
};
export default Para;
