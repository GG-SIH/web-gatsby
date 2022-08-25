import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hospital from "../sections/services/Hospital";
import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Input,
  Select,
} from "../components/Core";

import PageWrapper from "../components/PageWrapper";
import Fire from "../sections/services/Fire";
import Police from "../sections/services/Police";
import Mobile from "../sections/services/Mobile";

const Index = () => {
  const [service, setService] = useState("");
  const serviceSelector = (event) => {
    setService(event.value);
    if (service == "selectService") setService("");
  };

  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="10">
                <div className="banner-content">
                  <Title variant="hero">Save a Life Maps Onboarding</Title>
                  <Text>Register with us!</Text>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="order-lg-1 pt-5 mt-4">
                <Select
                  required
                  onChange={serviceSelector}
                  className="order-lg-1 pt-5 mt-4 mb-4"
                />
              </Col>
            </Row>

            {service === "ambulance" ? <Hospital /> : ""}
            {service === "fire" ? <Fire /> : ""}
            {service === "police" ? <Police /> : ""}
            {service === "individual" ? <Mobile /> : ""}
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Index;
