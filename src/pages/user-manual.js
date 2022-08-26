import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Section, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import UserManualPages from "../sections/UserManual/UserManual";

const UserManual = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="10">
                <div className="banner-content">
                  <Title variant="hero">
                    Save a Life Maps {"      "}
                    <br />
                    Process Flow
                  </Title>
                </div>
              </Col>
            </Row>
            <hr />
            <UserManualPages />
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};

export default UserManual;
