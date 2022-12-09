import "../assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf";
import "../assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf";
import "../assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf";
import "../assets/fonts/typography-font/Circular-Std-Book.ttf";
import "../assets/fonts/typography-font/CircularStd-Black.ttf";
import "../assets/fonts/typography-font/CircularStd-BlackItalic.ttf";
import "../assets/fonts/typography-font/CircularStd-Bold.ttf";
import "../assets/fonts/typography-font/CircularStd-BoldItalic.ttf";
import "../assets/fonts/typography-font/CircularStd-Book.ttf";
import "../assets/fonts/typography-font/CircularStd-BookItalic.ttf";
import "../assets/fonts/typography-font/CircularStd-Medium.ttf";
import "../assets/fonts/typography-font/CircularStd-MediumItalic.ttf";

import "../assets/fonts/icon-font/fonts/avasta.ttf";
import "../assets/fonts/icon-font/css/style.css";

import "../components/Layout/bootstrap-custom.scss";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/aos/dist/aos.css";

import "../assets/fonts/icon-font/css/style.css";
import "../assets/fonts/typography-font/typo.css";
import "../assets/fonts/fontawesome-5/css/all.css";

import React from "react";
import Hero from "../sections/main/Hero";
import Prizes from "../sections/main/Prizes";
import Content1 from "../sections/main/Content1";
import Content2 from "../sections/main/Content2";
import Content3 from "../sections/main/Content3";
import Content4 from "../sections/main/Content4";
import Fact from "../sections/main/Fact";

import PageWrapper from "../components/PageWrapper";

const IndexPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero />
        {/* <Prizes /> */}
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        <Fact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
