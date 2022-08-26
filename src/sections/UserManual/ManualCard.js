import React from "react";
import styled from "styled-components";
import { Box, Title, Text } from "../../components/Core";

const Card = styled(Box).attrs({ className: "card-testimonial" })`
  border: 0;
  border-radius: 15px;
  transition: 0.4s;

  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  @media (min-width: 575px) {
    padding-top: 45px;
    padding-left: 45px;
    padding-right: 45px;
    padding-bottom: 40px;
  }
  &:hover {
    background-color: ${(props) => props.hoverbackground};
    color: #fff;
    .card-icon {
      color: inherit;
    }
  }
`;
Card.Image = styled(Box)`
  border-radius: 500px;
  width: 100%;
  margin-right: 10px;
  margin-bottom: 10px;
  @media (min-width: 480px) {
    margin-bottom: 0;
  }
  img {
    width: 100%;
  }
`;
Card.Title = styled(Title)`
  color: inherit;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.73333;
  margin-bottom: 0;
`;
Card.Text = styled(Text)`
  color: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
`;

Card.UserPosition = styled(Text)`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 22px;
  opacity: 0.7;
`;
Card.Top = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
Card.UserBlock = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
Card.Box = styled(Box)``;

const ManualCard = (props) => {
  return (
    <Card hoverbackground="#f04037" elemColor="#f04037" backgroundColor="#fff">
      <Card.Top mb="20px">
        <Card.UserBlock>
          <Card.Image mr="10px">
            <img
              src={props.image}
              alt="Manual"
              className="img-fluid h-100 w-100"
            />
          </Card.Image>
          <Card.Box>
            <Card.Title as="h3">{props.pageName}</Card.Title>
          </Card.Box>
        </Card.UserBlock>
      </Card.Top>
      <Card.Text>{props.text}</Card.Text>
    </Card>
  );
};

export default ManualCard;
