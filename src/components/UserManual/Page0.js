import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { Title, Button, Section, Box, Text } from "../Core";
import { device } from "../../utils";

const UM = (props) => {
  return (
    <>
      <Section>
        <Container>
          <Row className="align-items-center"></Row>
          <Row></Row>
        </Container>
      </Section>
    </>
  );
};

export default UM;
