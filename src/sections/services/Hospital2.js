import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

import { Title, Button, Section, Box, Text, Input } from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import { device } from "../utils";
import Ambulance from "./Ambulance";

const FormStyled = styled.form``;

const Hospital2 = () => {
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

  const ambulanceComponents = "";

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
                    Hospital Ndddddame
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
          <Col lg={5} className="order-lg-1 pt-5 mt-4">
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

                <Box mb={4}>
                  <Title
                    variant="card"
                    fontSize="18px"
                    as="label"
                    htmlFor="ambulanceCount"
                  >
                    No: of Ambulances Available
                  </Title>
                  <Input
                    type="number"
                    placeholder=""
                    onChange={ambCount}
                    required
                  />
                </Box>
              </FormStyled>
            </div>
          </Col>
        </Row>
        <Link href="/">
          <Button width="100%" onClick={submitHandler} borderRadius={10}>
            Submit
          </Button>
        </Link>
      </PageWrapper>
    </>
  );
};
export default Hospital2;
