import React, { useState } from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";
import { withScriptjs } from "react-google-maps";
import { Title, Button, Section, Box, Text } from "../../../components/Core";
import DetailsCard from "./DetailsCard";
import GoogleMap from "../../../components/GoogleMap/GoogleMap";
// import Map1 from "../../../components/Map1/Map1";
import Map2 from "../../../components/Map2/Map2";

const PostConf = (props) => {
  const MapLoader = withScriptjs(Map2);
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
            {/* <GoogleMap /> */}
            {/* <Map1 /> */}
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
