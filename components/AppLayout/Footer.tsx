import React from "react";
import { styled } from "styles";

const FooterCopyright = styled.p({ text: "gray-500" });

const MaltLink = styled.a({ text: "green-600" });

const Footer: React.FC = () => {
  return (
    <FooterCopyright>
      Boilerplate made by{" "}
      <MaltLink target="_blank" href="https://www.malt.fr/profile/etienneblanc">
        Etienne BLANC
      </MaltLink>
    </FooterCopyright>
  );
};

export default Footer;
