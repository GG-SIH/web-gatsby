import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Box, Text } from "../../../components/Core";
import { rgba } from "polished";

const Card = styled.div`
  background: ${({ theme }) => rgba(theme.colors.primary, 0.5)};
  padding: 2%;
  border-radius: 15px;
  box-shadow: 0 32px 74px rgba(68, 77, 136, 0.2);
  transition: 0.5s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const DetailsCard = (props) => {
  return (
    <>
      <Card className="text-center justify-content-center align-items-center">
        <Col lg="12">
          <Box>
            <Text
              css={`
                font-size: 21px;
              `}
            >
              The {props.service} is on it's way
            </Text>
            <p
              css={`
                font-size: 21px;
              `}
            >
              ETA:{" "}
              <span
                css={`
                  font-weight: 800;
                  font-size: 25px;
                `}
              >
                {" "}
                {Math.floor(Math.random() * 20)}
              </span>{" "}
              minutes
            </p>
            <Text
              css={`
                font-size: 21px;
              `}
            >
              Phone Number: +91 1234-567890
            </Text>
            <Text
              css={`
                font-size: 21px;
              `}
            >
              Ambulance Number Plate: KA {Math.floor(Math.random() * 51)} Z{" "}
              {Math.floor(Math.random() * 4000)}
            </Text>
          </Box>
        </Col>
      </Card>
    </>
  );
};

export default DetailsCard;
