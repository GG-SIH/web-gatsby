import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Button, Section, Box, Text } from "../../../components/Core";
import { rgba } from "polished";
import { Link } from "gatsby";

const Card = styled.div`
  background: ${({ theme }) => rgba(theme.colors.glassShadow, 0.175)};
  padding: 4%;
  border-radius: 15px;
  box-shadow: 0 32px 74px rgba(68, 77, 136, 0.2);
  transition: 0.4s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceSelector = (props) => {
  const sendServiceName = () => {
    let service = props.serviceName;

    props.getService(service);
  };
  return (
    <>
      <Card
        className="text-center justify-content-center align-items-center"
        onClick={sendServiceName}
      >
        <Col lg="12">
          <img src={props.img} alt="" />
        </Col>
        <Col lg="12">
          <Box>
            <Text
              css={`
                margin-top: 1em;
                font-size: 21px;
              `}
            >
              {props.serviceName}
            </Text>
          </Box>
        </Col>
      </Card>
    </>
  );
};

export default ServiceSelector;
