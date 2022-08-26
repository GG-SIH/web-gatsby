import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Section, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import UC1 from "../sections/demo/UC1/UC1";
import UC2 from "../sections/demo/UC2/UC2";
import UC3 from "../sections/demo/UC3/UC3";
import PostConf from "../sections/demo/UC1/PostConf";
import { rgba } from "polished";
import { Link } from "gatsby";

const Demo = () => {
  const [service, selectedService] = useState("");

  const serviceSelected = (serviceName) => {
    selectedService(serviceName);
    getLocation();
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Error in Finding your Location");
    }
    console.log(navigator.geolocation.getCurrentPosition(showPosition));
  }

  function showPosition(position) {
    console.log(position);
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
              </Col>
            </Row>
            <hr />
            <Text className="text-center">
              Not Familiar with how Save a Life Maps Works? Check out the User
              Manual{" "}
              <Link to="../user-manual">
                <span
                  css={`
                    color: ${({ theme }) => rgba(theme.colors.primary, 0.5)};
                    cursor: pointer;
                    &:hover {
                      transform: translateY(-10px);
                    }
                  `}
                >
                  here
                </span>
              </Link>
            </Text>
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
              <UC3 />
            </>
          )}
        </Section>
      </PageWrapper>
    </>
  );
};
export default Demo;
