import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Section, Box, Text } from "../../components/Core";

import imgU1 from "../../assets/image/jpeg/team.jpg";
import t1 from "../../assets/image/abhi.jpg";
import t2 from "../../assets/image/daya.webp";
import t3 from "../../assets/image/fred.jpg";
import t4 from "../../assets/image/acp.jpg";
import t5 from "../../assets/image/vivk.jpg";
import t6 from "../../assets/image/salu.jpg";

const CardImage = styled.div`
  max-width: 160px;
  min-width: 160px;
  min-height: 160px;
  max-height: 160px;
  overflow: hidden;
  border-radius: 500px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 29px;
`;

const TeamCard = ({ userImg, title, children, ...rest }) => (
  <Box
    className="text-center"
    pt="15px"
    px="30px"
    borderRadius={10}
    mb={4}
    {...rest}
  >
    <CardImage>
      <img src={userImg} className="img-fluid" alt="" />
    </CardImage>
    <div className="text-center">
      <Title variant="card" fontSize="24px" letterSpacing={-0.75} my={1}>
        {title}
      </Title>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
);

const Team = () => (
  <>
    {/* <!-- Team section --> */}
    <Section className="position-relative pt-5">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={t3} title="Anusha Chaturvedi">
              Team Leader, Full Stack Engineer
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={t5} title="Benny Nandha Dharshan G">
              Full Stack Engineer
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={t2} title="Ankita M Thakur">
              Backend Engineer
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={t6} title="Himanshu Behl">
              Mobile App Engineer
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={t4} title="Brihadeesh R K">
              Full Stack Engineer
            </TeamCard>
          </Col>
          <Col sm="6" md="5" lg="4" className="mt-3 mt-lg-4">
            <TeamCard userImg={t1} title="Rishit Chaturvedi">
              Team Mentor
            </TeamCard>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Team;
