import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import GlobalContext from "../../context/GlobalContext";

import { device } from "../../utils";
import imgL1HeroPhone from "../../assets/image/jpeg/iphoness.jpeg";

const TopCard = styled(Box)`
  width: 85%;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.shadow}`};
  position: absolute;
  top: 25%;
  @media ${device.sm} {
    left: 10%;
  }
  @media ${device.md} {
    left: 10%;
  }
  @media ${device.lg} {
    left: 7.5%;
  }
`;

const ImgRight = styled.img`
  max-width: 50%;
  justify-content: center;
  @media ${device.sm} {
    max-width: 60%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);

  const openVideoModal = (e) => {
    e.preventDefault();
    gContext.toggleVideoModal();
  };
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section className="position-relative">
        <div className="pt-5"></div>

        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="12">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <Box className="text-center">
                  <Title variant="hero">Save a Life Maps</Title>
                  <Text mb={4} mt={3}>
                    Right Path, Saves lives.
                  </Text>
                </Box>
              </div>
            </Col>
            <Col lg="5" md="8" sm="9">
              <div className="text-center text-lg-right position-relative">
                <div
                  className="img-main"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-delay="1500"
                >
                  <ImgRight
                    src={imgL1HeroPhone}
                    alt="Save a Life Maps Demo"
                    className="w-100 img-fluid justify-content-center align-items-center"
                    css={`
                      -webkit-mask-image: -webkit-gradient(
                        linear,
                        top,
                        bottom,
                        from(rgba(0, 0, 0, 1)),
                        to(rgba(0, 0, 0, 0.15))
                      );
                      mask-image: linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 1),
                        rgba(0, 0, 0, 0.85) 60%,
                        rgba(0, 0, 0, 0.65) 70%,
                        rgba(0, 0, 0, 0.45) 80%,
                        rgba(0, 0, 0, 0.25) 90%,
                        rgba(0, 0, 0, 0) 100%
                      );
                    `}
                  />
                </div>

                <TopCard
                  bg="white"
                  p="18px"
                  borderRadius={8}
                  className="d-flex align-items-center text-left"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  data-aos-delay="1500"
                >
                  <Box
                    width="30px"
                    minWidth="30px"
                    height="30px"
                    minHeight="30px"
                    borderRadius="50%"
                    className="d-flex align-items-center justify-content-center"
                    mr={3}
                  >
                    <span>➡️</span>
                  </Box>
                  <Text fontSize={2} lineHeight="1.25">
                    Incoming Ambulance: Please Move to the Right
                  </Text>
                </TopCard>
              </div>
            </Col>
            <Col lg="12">
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="true"
                data-aos-delay="2500"
                css={`
                  margin-top: 5%;
                `}
              >
                <Box className="text-center">
                  <div>
                    <Button mb={3}>Learn More</Button>
                  </div>
                </Box>
              </div>
              <div className="d-flex flex-column align-items-center">
                <a
                  href="/"
                  className="text-decoration-none"
                  onClick={openVideoModal}
                >
                  <Box color="primary">
                    <i className="icon icon-triangle-right-17-2"></i> Watch the
                    intro video
                  </Box>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
