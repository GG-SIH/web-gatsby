import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Box, Text } from "../../components/Core";

import dynamicRadius from "../../assets/image/features/notifrange.png";
const FeatureCard = ({
  color = "light",
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box pt="15px" px="30px" borderRadius={10} mb={4} {...rest}>
    <Box
      size={69}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center mx-auto"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
    >
      {/* <i className={`icon ${iconName}`}></i> */}
      <span>{iconName}</span>
    </Box>
    <div className="text-center">
      <Text
        color="dark"
        as="h3"
        fontSize={4}
        fontWeight={500}
        letterSpacing={-0.75}
        my={3}
      >
        {title}
      </Text>
      <Text fontSize={2} lineHeight={1.75} color="dark">
        {children}
      </Text>
    </div>
  </Box>
);

const Feature = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section className="position-relative pt-5">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="primary"
              iconName="🚑"
              title="Multiple Services at Once"
            ></FeatureCard>
          </Col>

          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="primary"
              iconName="⏩"
              title="Fastest Route for ESP's to Reach you"
            ></FeatureCard>
          </Col>

          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="primary"
              iconName="☝️"
              title="One tap is all you need."
            ></FeatureCard>
          </Col>

          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="primary"
              iconName="🆘"
              title="Helping out those in need"
            ></FeatureCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="primary"
              iconName="🏦"
              title="Uplifting Society"
            ></FeatureCard>
          </Col>

          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-5">
            <FeatureCard
              color="primary"
              iconName="💗"
              title="Literally Saving Lives!"
            ></FeatureCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature;
