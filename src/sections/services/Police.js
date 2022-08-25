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
import Officer from "./Officer";

const FormStyled = styled.form``;

const Police = () => {
  const [officerCount, setOfficerCount] = useState();

  const fields = [];
  for (let i = 0; i < officerCount; i++) {
    fields.push(<Officer counter={i} key={i} />);
  }

  const officerCountHandler = (event) => {
    setOfficerCount(event.target.value);
  };
  return (
    <>
      <PageWrapper footerDark>
        <Container>
          <Row>
            <Col lg={7} className="order-lg-1 pt-5 mt-4">
              <div>
                <FormStyled
                  name="contact2"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <Box mb={4}>
                    <Title
                      variant="card"
                      fontSize="18px"
                      as="label"
                      htmlFor="nameput"
                    >
                      Police Station Name
                    </Title>
                    <Input
                      type="text"
                      placeholder=""
                      id="nameput"
                      name="name"
                      required
                    />
                  </Box>
                  <Box mb={4}>
                    <Title
                      variant="card"
                      fontSize="18px"
                      as="label"
                      htmlFor="emailput"
                    >
                      Location
                    </Title>
                    <Input
                      type="text"
                      placeholder=""
                      id="emailput"
                      name="email"
                      required
                    />
                  </Box>

                  <Box mb={4}>
                    <Title
                      variant="card"
                      fontSize="18px"
                      as="label"
                      htmlFor="messageput"
                    >
                      Station ID
                    </Title>
                    <Input
                      type="text"
                      placeholder=""
                      id="emailput"
                      name="email"
                      required
                    />
                  </Box>
                </FormStyled>
              </div>
            </Col>
            <Col lg={5} className="order-lg-1 pt-5 mt-4">
              <div>
                <FormStyled
                  name="contact2"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <Box mb={4}>
                    <Title
                      variant="card"
                      fontSize="18px"
                      as="label"
                      htmlFor="nameput"
                    >
                      Officer Count
                    </Title>
                    <Input
                      type="number"
                      placeholder=""
                      id="nameput"
                      name="name"
                      onChange={officerCountHandler}
                      required
                    />
                  </Box>
                </FormStyled>
              </div>
            </Col>
          </Row>
          {fields}
          {/* <Button width="100%" type="submit" borderRadius={10}>
            Submit
          </Button> */}
        </Container>
      </PageWrapper>
    </>
  );
};
export default Police;
