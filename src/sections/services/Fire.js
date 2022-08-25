import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Input,
} from "../../components/Core";

import PageWrapper from "../../components/PageWrapper";

const FormStyled = styled.form``;

const Fire = () => {
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
                      Fire Truck ID
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
                      Contact Number
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
                      Capacity
                    </Title>
                    <Input
                      type="number"
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
                      Is the Fire Truck Available?
                    </Title>
                    <Input
                      type="text"
                      placeholder="Y or N"
                      id="emailput"
                      name="email"
                      required
                    />
                  </Box>
                </FormStyled>
              </div>
            </Col>
          </Row>
          <Link href="/onboarding-3">
            <Button width="100%" borderRadius={10}>
              Submit
            </Button>
          </Link>
        </Container>
      </PageWrapper>
    </>
  );
};
export default Fire;
