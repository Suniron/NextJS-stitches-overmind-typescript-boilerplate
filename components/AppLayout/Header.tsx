import React from "react";
import { styled } from "../../styles";

const HeaderTitle = styled.h1({
  text: "green-600",
  // text: "2xl",
  font: "bold",
});

const Header: React.FC = () => {
  return <HeaderTitle>Boilerplate Title</HeaderTitle>;
};

export default Header;
