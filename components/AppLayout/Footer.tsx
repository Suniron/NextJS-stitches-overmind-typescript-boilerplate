import React from "react";
import { styled } from "css";

const FooterCopyright = styled.p((css) =>
  css.compose(css.text("sm"), css.text("gray-500"), css.m(3))
);

const MaltLink = styled.a((css) =>
  css.compose(css.text("orange-600"), css.underline())
);

const Footer: React.FC = () => {
  return (
    <FooterCopyright>
      Boilerplate by{" "}
      <MaltLink target="_blank" href="https://www.malt.fr/profile/etienneblanc">
        Etienne BLANC
      </MaltLink>
    </FooterCopyright>
  );
};

export default Footer;
