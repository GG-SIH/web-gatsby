import styled from "styled-components";
import { Box, Title, Button, Text } from "../../components/Core";

const UManual = styled(Box)`
  padding-top: 50px;
  padding-bottom: 40px;

  @media (min-width: 575px) {
    padding-top: 55px;
    padding-bottom: 60px;
  }
  @media (min-width: 768px) {
    padding-top: 75px;
    padding-bottom: 80px;
  }

  @media (min-width: 992px) {
    padding-top: 130px;
    padding-bottom: 130px;
  }
  .UManual-slider {
    @media (min-width: 768px) {
      width: 140%;
    }
    .slick-slide {
      margin-right: 30px;
    }
    .slick-track {
      display: flex;
    }
  }
`;
UManual.Title = styled(Title)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.3;
  position: relative;
  @media (min-width: 768px) {
    font-size: 38px;
  }

  @media (min-width: 992px) {
    font-size: 48px;
  }
`;
UManual.Subtitle = styled(Title)`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1.75;
`;
UManual.Text = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.77777;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
UManual.Button = styled(Button)`
  color: #fff;
  border-color: #f04037;
  background-color: #f04037;
  box-shadow: 0 20px 20px rgb(253 52 110 / 30%);
  border-radius: 500px;
  &:hover {
    box-shadow: 0 20px 20px rgb(253 52 110 / 0%);
    color: #fff;
  }
`;

UManual.ContentTextBlock = styled(Box)`
  position: relative;
`;
UManual.Image = styled(Box)`
  position: relative;
  .video-btn {
    min-width: 96px;
    max-width: 96px;
    min-height: 96px;
    max-height: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    color: #f04037;
    border: 0;
    box-shadow: none;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      content: "";
      background-color: #fff;
      z-index: -1;
      pointer-events: none;
      opacity: 0;
      animation: sonarWave 2s linear infinite;
    }
  }
`;
UManual.SliderButton = styled(Box)`
  /* margin-top:40px; */
  display: inline-flex;
  justify-content: flex-start;
  margin-bottom: 40px;
  @media (min-width: 992px) {
    margin-top: 40px !important;
    justify-content: flex-end;
  }
  button {
    background-color: transparent;
    border: none;
    min-width: 50px;
    max-width: 50px;
    min-height: 50px;
    max-height: 50px;
    color: #f04037;
    border-radius: 500px;
    background-color: #fff;
    margin: 0 10px;
    transition: 0.4s;
    &:hover {
      box-shadow: 0 4px 4px #067775;
      background-color: #f04037;
      color: #fff;
    }

    &:focus {
      box-shadow: none;
    }
  }
`;

UManual.Button = styled(Button)``;
UManual.Box = styled(Box)``;

export default UManual;
