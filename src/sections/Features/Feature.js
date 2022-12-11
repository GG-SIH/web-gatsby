import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Box, Text } from "../../components/Core";
import styled from "styled-components";

const NumberCol = styled(Col)`
  border-right: 1px solid gray;
`;

const FeatureCard = ({ number, text }) => (
  <Row className="align-items-left">
    <NumberCol sm="1" md="1" lg="1" className="mt-3">
      <Text>{number}</Text>
    </NumberCol>
    <Col sm="11" md="11" lg="11" className="mt-3">
      <Text>{text}</Text>
    </Col>
  </Row>
);

const Feature = () => {
  const features = [
    `Is everything Google Maps is +`,
    `Onboarding Form Available for Hospitals and other Services, where
  they can register themselves with the App.`,
    `Handles the 2-way or Junction Edge Case`,
    `Provision of Selection of Required Emergency Service in Web as well as Mobile App`,
    `ETA Page which keeps the user in need, updated on every detail`,
    `Availability of Contact, GPS and Registration Info of the Service to the User`,
    `Novel Path Clearance Algorithm`,
    `Server-Split Technology`,
    `Dynamic Waypoint and Radius Generation`,
    `Audio Notifications`,
    `Onboarding and Nearest User Location fetched from Scalable MongoDB Servers`,
    `Availability of an 'EMERGENCY' to call any service in seconds`,
    `Autocomplete while entering source and destination`,
    `Notification Service that isn't distracting`,
    `Playground to get familiar with platform`,
    `Microservices Approach`,
    `Color-Coded Polyline to inform user of incoming ambulance in a risk-averse manner`,
    `Walkthrough Manual available for all services`,
  ];
  return (
    <>
      {/* <!-- Feature section --> */}
      <Section className="position-relative">
        <Container>
          {features.map((item, index) => (
            <FeatureCard key={index} number={index + 1} text={item} />
          ))}
        </Container>
      </Section>
    </>
  );
};

export default Feature;
