import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Input,
} from "../../components/Core";

const CTA = () => (
  <>
    {/* <!-- CTA section --> */}
    <Section bg="dark" className="position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col lg="7" xl="6">
            <Box mb={5} className="text-center">
              <Title color="light">
                insert some statement here because it feels weird to end the
                page with some fact.
              </Title>
              <Text color="light" opacity={0.7}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae vitae mollitia ad iure qui, fugiat iusto neque quia
                quas alias voluptatum dicta non doloribus velit incidunt rerum
                voluptatibus repellendus? Dolorem?
              </Text>
            </Box>
            <Button width="100%" type="submit" borderRadius={10}>
              Learn more
            </Button>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default CTA;
