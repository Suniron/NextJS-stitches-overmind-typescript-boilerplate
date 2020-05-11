import React from "react";
import { styled } from "styles/css";

const HeaderTitle = styled.h1((css) =>
  css.compose(
    css.text("green-600"),
    css.font("bold"),
    css.text("2xl"),
    css.m(3)
  )
);

const Header: React.FC = () => {
  return <HeaderTitle>Boilerplate Title</HeaderTitle>;
};

export default Header;
