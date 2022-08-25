import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Section, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import UC1 from "../sections/demo/UC1/UC1";
import UC2 from "../sections/demo/UC2/UC2";
import UC3 from "../sections/demo/UC3/UC3";
import PostConf from "../sections/demo/UC1/PostConf";

const Demo = () => {
  const [service, selectedService] = useState("");
  const [loc, setLoc] = useState("");
  const serviceSelected = (serviceName) => {
    selectedService(serviceName);
    getLocation();
  };

  let yourLocation = "";

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setLoc("Geolocation is not supported by this browser.");
    }
    console.log(navigator.geolocation.getCurrentPosition(showPosition));
  }

  function showPosition(position) {
    console.log(position);
    setLoc(
      "Your location is Latitude: " +
        position.coords.latitude +
        " and Longitude: " +
        position.coords.longitude
    );
  }

  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="10">
                <div className="banner-content">
                  <Title variant="hero">Save a Life Maps Demo</Title>
                </div>

                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero facilis soluta ut, dolor eveniet aperiam temporibus
                  excepturi cupiditate asperiores tempore eos ullam ab quas
                  facere minima totam doloremque incidunt nam.
                </Text>
              </Col>
            </Row>
            <hr />
            <Text className="text-center">{loc}</Text>
            <hr />
          </Container>

          {service === "" ? (
            <UC1 passService={serviceSelected} />
          ) : (
            <PostConf service={service} />
          )}
          {service === "" ? (
            ""
          ) : (
            <>
              <UC2 service={service} />
            </>
          )}

          {service === "" ? (
            ""
          ) : (
            <>
              <UC3 />
            </>
          )}
        </Section>
      </PageWrapper>
    </>
  );
};
export default Demo;
