import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Button, Section, Box, Text } from "../../../components/Core";
import { rgba } from "polished";
import { Link } from "gatsby";
import GoogleMap from "../../../components/GoogleMap/GoogleMap";

const Card = styled.div`
  background: ${({ theme }) => rgba(theme.colors.glassShadow, 0.175)};
  padding: 1%;
  border-radius: 15px;
  box-shadow: 0 32px 74px rgba(68, 77, 136, 0.2);
  transition: 0.4s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceSelector = (props) => {
  return (
    <>
      <Card className="text-center justify-content-center align-items-center">
        <Col lg="12" className="position-static">
          <GoogleMap />
        </Col>
        <Col lg="12">
          <Box>
            <Title
              variant="secSm"
              css={`
                font-size: 21px;
                font-space: 1px;
              `}
            >
              {props.userType}
            </Title>
            <Text
              css={`
                margin-top: 1em;
                line-height: 1;
                font-size: 18px;
              `}
            >
              {props.userDesc}
            </Text>
          </Box>
        </Col>
      </Card>
    </>
  );
};

export default ServiceSelector;
