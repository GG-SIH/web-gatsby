import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hospital from "../sections/services/Hospital";
import {
  Title,
  Button,
  Section,
  Box,
  Text,
  EndSelect,
  StartSelect,
} from "../components/Core";
import { rgba } from "polished";

import PageWrapper from "../components/PageWrapper";
import UC1 from "../sections/demo/UC1/UC1";
import UC2 from "../sections/demo/UC2/UC2";
import UC3 from "../sections/demo/UC3/UC3";

const Demo = () => {
  const [service, selectedService] = useState("");
  const [ConfServ, SelConfServ] = useState("");

  const serviceSelected = (serviceName) => {
    selectedService(serviceName);
  };

  const confirmedServiceName = (confServ) => {
    SelConfServ(confServ);
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
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero facilis soluta ut, dolor eveniet aperiam temporibus
                  excepturi cupiditate asperiores tempore eos ullam ab quas
                  facere minima totam doloremque incidunt nam.
                </Text>
              </Col>
            </Row>
            <hr />
            <UC1
              passService={serviceSelected}
              confirmedService={confirmedServiceName}
            />
            {service === "" ? (
              ""
            ) : (
              <>
                <UC2 service={ConfServ} />
                <UC3 />
              </>
            )}
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default Demo;
