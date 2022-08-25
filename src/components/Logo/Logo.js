import React from "react";
import { Link } from "gatsby";
import { Title } from "../Core";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        {white ? (
          <Title variant="cardLg" color="light">
            Save a Life Maps
          </Title>
        ) : (
          <Title variant="cardLg">Save a Life Maps</Title>
        )}
      </a>
    </Link>
  );
};

export default Logo;
