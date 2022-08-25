import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Input,
} from "../../components/Core";

import PageWrapper from "../../components/PageWrapper";
import { device } from "../../utils";

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

const Hospital = () => {
  const [hospitalName, setHospitalName] = useState();
  const [hospitalID, setHospitalID] = useState();
  const [hospitalAddr, setHospitalAddr] = useState();
  const [ambulanceCount, setAmbulanceCount] = useState();

  const nameHandler = (event) => {
    setHospitalName(event.target.value);
  };

  const idHandler = (event) => {
    setHospitalID(event.target.value);
  };

  const addrHandler = (event) => {
    setHospitalAddr(event.target.value);
  };

  const ambCount = (event) => {
    setAmbulanceCount(event.target.value);
  };

  const submitHandler = () => {
    const data = {
      hospitalID: hospitalID,
      hospitalName: hospitalName,
      hospitalAddress: hospitalAddr,
      noOfAmbulances: ambulanceCount,
    };
  };

  return (
    <>
      <PageWrapper footerDark>
        <Row>
          <Col lg={7} className="order-lg-1">
            <div>
              <FormStyled
                name="HospitalO"
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
                    Hospital Name
                  </Title>
                  <Input
                    type="text"
                    placeholder=""
                    onChange={nameHandler}
                    required
                  />
                </Box>
                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Hospital Address
                  </Title>
                  <Input
                    type="text"
                    as="textarea"
                    placeholder=""
                    rows={4}
                    onChange={idHandler}
                    required
                  />
                </Box>
              </FormStyled>
            </div>
          </Col>
          <Col lg={5} className="order-lg-2">
            <div>
              <FormStyled
                name="HospitalO"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <Box>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalID"
                  >
                    Hospital ID
                  </Title>
                  <Input
                    type="text"
                    placeholder=""
                    onChange={addrHandler}
                    required
                  />
                </Box>
              </FormStyled>
            </div>
          </Col>
        </Row>

        <hr />

        <Row className="justify-content-center text-center">
          <Col lg="8">
            <div className="banner-content">
              <Title variant="secSm" mt={3} mb={3}>
                Enter Ambulance Details
              </Title>
            </div>
          </Col>
        </Row>

        <TitleContainer mb={"40px"}>
          <Text fontSize="18px" as="h4" className="">
            Enter Details for Ambulance #1
          </Text>
        </TitleContainer>
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Driver ID
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
                    Paramedics Name
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
          <Col lg={6} className="order-lg-2">
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Driver Name
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
          <Col lg={12} className="order-lg-3">
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Paramedics ID
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
        </Row>

        <TitleContainer mb={"40px"}>
          <Text fontSize="18px" as="h4" className="">
            Enter Details for Ambulance #2
          </Text>
        </TitleContainer>
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Driver ID
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
                    Paramedics Name
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
          <Col lg={6} className="order-lg-2">
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Driver Name
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
          <Col lg={12} className="order-lg-3">
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Paramedics ID
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
        </Row>

        <TitleContainer mb={"40px"}>
          <Text fontSize="18px" as="h4" className="">
            Enter Details for Ambulance #3
          </Text>
        </TitleContainer>
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Driver ID
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
                    Paramedics Name
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
          <Col lg={6} className="order-lg-2">
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Driver Name
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
          <Col lg={12} className="order-lg-3">
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Paramedics ID
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
        </Row>

        <TitleContainer mb={"40px"}>
          <Text fontSize="18px" as="h4" className="">
            Enter Details for Ambulance #4
          </Text>
        </TitleContainer>
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Driver ID
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
                    Paramedics Name
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
          <Col lg={6} className="order-lg-2">
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Driver Name
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
          <Col lg={12} className="order-lg-3">
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Paramedics ID
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
        </Row>

        <TitleContainer mb={"40px"}>
          <Text fontSize="18px" as="h4" className="">
            Enter Details for Ambulance #5
          </Text>
        </TitleContainer>
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Driver ID
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
                    Paramedics Name
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
          <Col lg={6} className="order-lg-2">
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Driver Name
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
          <Col lg={12} className="order-lg-3">
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="hospitalAddress"
                  >
                    Paramedics ID
                  </Title>
                  <Input type="text" placeholder="" required />
                </Box>
              </FormStyled>
            </div>
          </Col>
        </Row>

        <Button width="100%" borderRadius={10}>
          Submit
        </Button>
      </PageWrapper>
    </>
  );
};
export default Hospital;
