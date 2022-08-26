import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "gatsby";
import { Title, Button, Section, Text } from "../../../components/Core";

const UC3 = (props) => {
  return (
    <>
      <Section>
        <Container
          css={`
            margin-top: -5%;
          `}
        >
          <Col lg="12" className="mb-5 text-center">
            <Title variant="secSm">Use Case #3</Title>
            <Text>Types of Users</Text>
          </Col>

          <Row className="align-items-center">
            <Col lg="12" className="mb-5 text-center"></Col>
          </Row>
          <Row className="pt-4 pb-4">
            <Col lg={12} className="order-lg-1">
              <Link to="http://127.0.0.1:5501/html/user.html">
                <Button className="w-100">Visit Demo</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default UC3;
