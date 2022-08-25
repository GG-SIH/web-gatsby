import React, { useState } from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";
import { withScriptjs } from "react-google-maps";
import { Title, Button, Section, Box, Text } from "../../../components/Core";
import DetailsCard from "./DetailsCard";
import Map from "../../../components/ETAMap/Map1";

const PostConf = (props) => {
  const MapLoader = withScriptjs(Map);

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
                is (are) on it's way
              </Text>
            </Col>
          </Row>
        </Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col
            sm="12"
            md="12"
            lg="12"
            className="position-static"
            css={`
              height: 10%;
            `}
          >
            <MapLoader
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcQSmBY1QhFLMcfDHsIFp5YEgdj6I_Ge8"
              loadingElement={<div style={{ height: `100%` }} />}
            />
          </Col>
          <DetailsCard
            service={props.service}
            css={`
              margin-top: 5%;
            `}
          />
        </Row>
      </Section>
    </>
  );
};

export default PostConf;
