import React from "react";
import { styled } from "css";
import { GetServerSideProps } from "next";
import fetch from "node-fetch";

// Types
interface PageIndexProps {
  stringArray: Array<string>;
}

// Styles
const PageDiv = styled.div((css) => css.compose(css.w("full"), css.m(3)));

const SectionDiv = styled.div((css) =>
  css.compose(css.flex(), css.justify("center"))
);

const SectionTitle = styled.h2((css) =>
  css.compose(
    css.text("left"),
    css.text("xl"),
    css.font("bold"),
    css.self("center")
  )
);

const ActionContainer = styled.div((css) =>
  css.compose(
    css.inlineFlex(),
    css.w("full"),
    css.justify("center"),
    css.rounded("md")
  )
);

const ActionButton = styled.button((css) =>
  css.compose(
    css.bg("black"),
    css.text("gray-300"),
    css.m("px"),
    css.p(1),
    css.rounded("md"),
    css.w("1/3"),
    css.maxW("xs"),
    css.border(2),
    css.border("orange-600", ":hover"),
    css.bg("orange-600", ":active")
  )
);

// Main
const PageIndex: React.FC<PageIndexProps> = ({ stringArray }) => {
  // -- RENDER --
  return (
    <PageDiv>
      <SectionDiv>
        <SectionTitle>The section titile</SectionTitle>
      </SectionDiv>
    </PageDiv>
  );
};

export const getServerSideProps: GetServerSideProps<PageIndexProps> = async () => {
  let stringArray = [];

  // Fetch all words
  try {
    const res = await fetch("http://myapiul/getStringArray");
    stringArray = await res.json();
  } catch (error) {
    console.error("fetch error in pages/index.tsx:", error);
  }

  // return data
  return {
    props: { stringArray }, // will be passed to the page component as props
  };
};

export default PageIndex;
