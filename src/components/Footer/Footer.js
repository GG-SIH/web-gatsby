import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Box } from "../Core";
import Logo from "../Logo";
import { Link } from "gatsby";

const TitleStyled = styled(Title)`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 22px;
`;

const UlStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    line-height: 2.25;
    a {
      color: ${({ theme, color }) => theme.colors[color]} !important;
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.secondary} !important;
      }
    }
  }
`;

const CopyRightArea = styled.div`
  border-top: ${({ dark, theme }) =>
    dark ? `1px solid #2f2f31 ` : `1px solid ${theme.colors.border}`};

  padding: 15px 0;
  p {
    color: ${({ dark, theme }) =>
      dark ? theme.colors.lightShade : theme.colors.darkShade};
    font-size: 13px;
    font-weight: 300;
    letter-spacing: -0.41px;
    line-height: 38px;
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-flex;
    a {
      color: ${({ dark, theme }) =>
        dark ? theme.colors.light : theme.colors.dark} !important;
      font-size: 16px;
      transition: 0.4s;
      padding: 0 3px;
      margin: 0 2.5px;
      &:visited {
        text-decoration: none;
      }
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.secondary} !important;
      }
    }
  }
`;

const Footer = ({ isDark = true }) => {
  return (
    <>
      {/* <!-- Footer section --> */}
      <Box bg={isDark ? "dark" : "light"}>
        <Container>
          <Box
            css={`
              padding: 80px 0 60px;
            `}
          >
            <Row className="justify-content-center">
              <Col lg="2" md="4">
                <Logo white={isDark} />
              </Col>
              <Col lg="10" md="8" className="mt-5 mt-lg-0">
                <Row>
                  <Col xs="6" lg="3">
                    <div className="mb-5 mb-lg-4">
                      <TitleStyled
                        variant="card"
                        color={isDark ? "light" : "dark"}
                      >
                        About
                      </TitleStyled>
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <Link href={`../features`}>
                            <a
                              className="nav-link"
                              role="button"
                              aria-expanded="false"
                            >
                              Features
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`../team`}>
                            <a
                              className="nav-link"
                              role="button"
                              aria-expanded="false"
                            >
                              Team
                            </a>
                          </Link>
                        </li>
                      </UlStyled>
                    </div>
                  </Col>
                  <Col xs="6" lg="3">
                    <div className="mb-5 mb-lg-4">
                      <TitleStyled
                        variant="card"
                        color={isDark ? "light" : "dark"}
                      >
                        Services
                      </TitleStyled>
                      <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                        <li>
                          <Link href={`../obd`}>
                            <a
                              className="nav-link"
                              role="button"
                              aria-expanded="false"
                            >
                              Onboarding
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`../demo`}>
                            <a
                              className="nav-link"
                              role="button"
                              aria-expanded="false"
                            >
                              Access Demo
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`../user-manual`}>
                            <a
                              className="nav-link"
                              role="button"
                              aria-expanded="false"
                            >
                              User Manual
                            </a>
                          </Link>
                        </li>
                      </UlStyled>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
