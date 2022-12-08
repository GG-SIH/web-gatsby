import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../../components/ETAMap/Map1";
import { withScriptjs } from "react-google-maps";
import {
  Title,
  Button,
  Section,
  Box,
  Text,
  Input,
  StartSelect,
  EndSelect,
} from "../../components/Core";

import GlobalContext from "../../context/GlobalContext";
import { Link } from "gatsby";
import { device } from "../../utils";
import imgL1HeroPhone from "../../assets/image/um/5.png";
import arrow from "../../assets/image/arrow.webp";

const HeroButton = styled(Button)`
  min-width: 15%;
  height: 50px;
  font-size: 14px;
  transition: 0.4s;
  border-radius: 500px !important;
  background-color: #000;
  &.btn-1 {
    box-shadow: -12px 12px 50px rgb(96 1 211 / 30%) !important;
    &:hover {
      box-shadow: -12px 12px 50px rgb(96 1 211 / 0%) !important;
    }
  }
  @media (min-width: 576px) {
    min-width: 15%;
    height: 56px;
    font-size: 15px;
  }
`;

const TopCard = styled(Box)`
  width: 85%;
  /* box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.shadow}`}; */
  position: relative;
  left: 0;
`;

const BottomCard = styled(Box)`
  width: 305px;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.shadow}`};
  position: absolute;
  bottom: 12%;
  right: 0;
  @media ${device.md} {
    right: -13%;
  }
  @media ${device.lg} {
    right: -5%;
  }
  @media ${device.xl} {
    right: -33%;
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);
  const MapLoader = withScriptjs(Map);

  const openVideoModal = (e) => {
    e.preventDefault();
    gContext.toggleVideoModal();
  };

  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section className="position-relative">
        <Row className="justify-content-center align-items-center">
          <Col
            sm="12"
            md="12"
            lg="12"
            className="position-static"
            css={`
              height: 100%;
              width: 100%;
            `}
          >
            <MapLoader
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcQSmBY1QhFLMcfDHsIFp5YEgdj6I_Ge8"
              loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
            />
          </Col>
          <Col
            lg="8"
            className="order-lg-1 position-absolute"
            css={`
              background: rgba(17, 17, 17, 0.2);
              border-radius: 16px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(3px);
              -webkit-backdrop-filter: blur(3px);
              border: 1px solid rgba(255, 255, 255, 0.3);
              padding: 5%;
              top: 20%;
            `}
          >
            <div>
              <Box>
                <Title variant="hero" className="text-center">
                  The Right Decision could save Lives.
                </Title>

                <div className="mt-3 d-flex align-items-center justify-content-center">
                  <Link href="../obd">
                    <HeroButton className="btn-outline-shark">
                      Visit Onboarding
                    </HeroButton>
                  </Link>

                  <Link href="../user-manual">
                    <HeroButton className="btn-outline-shark ml-2">
                      User Manual
                    </HeroButton>
                  </Link>
                </div>

                <Row className="justify-content-center align-items-center">
                  <TopCard
                    p="18px"
                    borderRadius={8}
                    className="d-flex align-items-center"
                  >
                    <Box
                      width="30px"
                      color="light"
                      borderRadius="50%"
                      className="d-flex align-items-center justify-content-center"
                      mr={3}
                    >
                      <img
                        src={arrow}
                        css={`
                          max-width: 5%;
                          @media ${device.sm} {
                            max-width: 60%;
                          }
                          @media ${device.lg} {
                            max-width: 90%;
                          }
                        `}
                      />
                    </Box>
                    <StartSelect
                      css={`
                        width: 100%;
                      `}
                    />
                  </TopCard>

                  <TopCard
                    p="18px"
                    borderRadius={8}
                    className="d-flex align-items-center"
                  >
                    <Box
                      width="30px"
                      color="light"
                      borderRadius="50%"
                      className="d-flex align-items-center justify-content-center"
                      mr={3}
                    >
                      <img
                        src={arrow}
                        css={`
                          max-width: 5%;
                          @media ${device.sm} {
                            max-width: 60%;
                          }
                          @media ${device.lg} {
                            max-width: 90%;
                          }
                        `}
                      />
                    </Box>
                    <EndSelect
                      css={`
                        width: 100%;
                      `}
                    />
                  </TopCard>

                  <Link href="../demo">
                    <HeroButton
                      className="btn-outline-shark ml-2"
                      css={`
                        width: 100% !important;
                      `}
                    >
                      Access Demo
                    </HeroButton>
                  </Link>
                </Row>

                {/* <a
                    href="/"
                    className="text-decoration-none mt-5"
                    onClick={openVideoModal}
                  >
                    <Box color="secondary">
                      <i className="icon icon-triangle-right-17-2"></i> Watch
                      the intro video
                    </Box>
                  </a> */}
              </Box>
            </div>
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default Hero;
