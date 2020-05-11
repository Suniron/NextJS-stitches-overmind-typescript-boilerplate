import React from "react";
import { styled } from "css";

const HeaderTitle = styled.h1((css) =>
  css.compose(
    css.text("orange-600"),
    css.font("bold"),
    css.text("2xl"),
    css.m(3)
  )
);

const Header: React.FC = () => {
  return <HeaderTitle>Boilerplate Title</HeaderTitle>;
};

export default Header;
