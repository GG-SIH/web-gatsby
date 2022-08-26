import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Text } from "../../../components/Core";

import { Link } from "gatsby";

const UC2 = (props) => {
  return (
    <>
      <Section>
        <Container
          css={`
            margin-top: -5%;
          `}
        >
          <Col lg="12" className="mb-5 text-center">
            <Title variant="secSm">Use Case #2</Title>
            <Text>path generation and waypoint generation example</Text>
          </Col>

          <Row className="pt-4 pb-4">
            <Col lg={12} className="order-lg-1">
              <Link to="http://127.0.0.1:5501/html/path.html">
                <Button className="w-100">Visit Demo</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default UC2;
