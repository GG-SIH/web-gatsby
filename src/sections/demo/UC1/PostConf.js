import React, { useState } from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../../components/Core";
import DetailsCard from "./DetailsCard";
import GoogleMap from "../../../components/GoogleMap/GoogleMap";

const PostConf = (props) => {
  return (
    <>
      <Section>
        <Container
          css={`
            margin-top: -5%;
          `}
        >
          <Row className="justify-content-center align-items-center text-center">
            <Col lg="12" className="mb-5 text-center">
              <Title variant="secSm">Hang Tight</Title>
              <Text>
                The{" "}
                <span
                  css={`
                    color: ${({ theme }) => rgba(theme.colors.primary, 1)};
                    font-size: 21px;
                    font-weight: 600;
                  `}
                >
                  {props.service}
                </span>{" "}
                is on it's way
              </Text>
            </Col>

            <Col sm="12" md="12" lg="12" className="position-static">
              <GoogleMap />
            </Col>
            <DetailsCard service={props.service} />
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default PostConf;