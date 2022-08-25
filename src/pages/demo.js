import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Section, Text, Box } from "../components/Core";
import GlobalContext from "../context/GlobalContext";
import PageWrapper from "../components/PageWrapper";
import UC1 from "../sections/demo/UC1/UC1";
import UC2 from "../sections/demo/UC2/UC2";
import UC3 from "../sections/demo/UC3/UC3";
import PostConf from "../sections/demo/UC1/PostConf";

const Demo = () => {
  const [service, selectedService] = useState("");

  const serviceSelected = (serviceName) => {
    selectedService(serviceName);
  };

  const gContext = useContext(GlobalContext);

  const openUserManual = (e) => {
    e.preventDefault();
    gContext.toggleUserManual();
    console.log("opening modal");
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
                  <Title variant="hero">Save a Life Maps Demo</Title>
                </div>
                <a
                  href="/"
                  className="text-decoration-none"
                  onClick={openUserManual}
                >
                  <Box color="primary">
                    <i className="icon icon-triangle-right-17-2"></i> Watch the
                    intro video
                  </Box>
                </a>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero facilis soluta ut, dolor eveniet aperiam temporibus
                  excepturi cupiditate asperiores tempore eos ullam ab quas
                  facere minima totam doloremque incidunt nam.
                </Text>
              </Col>
            </Row>
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
