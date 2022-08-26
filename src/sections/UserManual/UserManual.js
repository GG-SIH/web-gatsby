import React, { useRef } from "react";
import Slider from "react-slick";
import UManual from "./style";
import ManualData from "./data";
import { Container, Row, Col } from "react-bootstrap";
import ManualCard from "./manualCard";
export default function UserManual() {
  const elSlider = useRef();

  const sliderConfig1 = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    centerPadding: false,
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <UManual>
      <Container>
        <Row>
          <Col
            xs="12"
            className="col-xxl-5 col-xl-3 col-lg-2 text-center text-lg-end"
          >
            <UManual.SliderButton>
              <UManual.Button
                className="slick-arrow"
                onClick={() => {
                  elSlider.current.slickPrev();
                }}
              >
                <i className="fas fa-arrow-left"></i>
              </UManual.Button>
              <UManual.Button
                className="slick-arrow"
                onClick={() => {
                  elSlider.current.slickNext();
                }}
              >
                <i className="fas fa-arrow-right"></i>
              </UManual.Button>
            </UManual.SliderButton>
          </Col>
        </Row>
        <Slider
          ref={elSlider}
          className="UManual-slider row justify-content-center"
          {...sliderConfig1}
        >
          {ManualData.manual.map(({ image, pageName, text }, index) => {
            return (
              <ManualCard
                image={image}
                pageName={pageName}
                text={text}
                key={"key" + index}
              />
            );
          })}
        </Slider>
      </Container>
    </UManual>
  );
}
