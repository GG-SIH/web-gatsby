import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import { Box, Text } from "../../components/Core";
import { device } from "../../utils";

import imgL1Brand1 from "../../assets/image/jpeg/hackpost.jpg";
import imgL1Brand2 from "../../assets/image/png/hackman.png";

const TitleContainer = styled(Box)`
  position: relative;

  &:after {
    content: "";
    height: 1px;
    position: absolute;
    right: 0;
    top: 50%;
    width: 32%;
    background: ${({ theme }) => theme.colors.border};
    margin-top: 0.5px;
    display: none;

    @media ${device.md} {
      width: 40%;
      display: block;
    }
    @media ${device.lg} {
      width: 52%;
    }
    @media ${device.xl} {
      width: 60%;
    }
  }
`;

const Brand = styled(Box)`
  opacity: 0.7;

  transition: all 0.3s ease-out;
  &:hover {
    opacity: 1;
  }
`;

const Clients = () => (
  <>
    {/* <!-- Clients Brands Area --> */}
    <Box pb={"30px"}>
      <Container>
        <TitleContainer mb={"40px"}>
          <Text fontSize="18px" as="h4" className="">
            Prizes won at several Hackathons
          </Text>
        </TitleContainer>
      </Container>
      <Container>
        <Box className="d-flex align-items-center flex-start" mx="-32px">
          <Brand className="" py={3} mx={4}>
            <img src={imgL1Brand1} alt="" className="img-fluid" />
            <Text>2nd Place</Text>
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={imgL1Brand2} alt="" className="img-fluid" />
            <Text>2nd Place</Text>
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={imgL1Brand2} alt="" className="img-fluid" />
            <Text>3rd Place</Text>
          </Brand>
        </Box>
      </Container>
    </Box>
  </>
);

export default Clients;
