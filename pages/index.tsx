import React from "react";
import { styled } from "css";
import { GetServerSideProps } from "next";
import fetch from "node-fetch";

// Types
interface PageIndexProps {
  dataFetched: Array<string>;
}

// Styles
const PageDiv = styled.div((css) => css.compose(css.w("full"), css.m(3)));

const SectionDiv = styled.div((css) =>
  css.compose(css.flex(), css.justify("center"))
);

const SectionTitle = styled.h2((css) =>
  css.compose(
    css.p(3),
    css.m(3),
    css.bg("green-500"),
    css.text("left"),
    css.text("6xl"),
    css.font("bold"),
    css.self("center"),
    css.border("dashed"),
    css.border(4),
    css.border("gray-900"),
    css.rounded("lg")
  )
);

const SectionText = styled.p((css) =>
  css.compose(css.text("green-600"), css.text("lg"))
);

// Main
const PageIndex: React.FC<PageIndexProps> = ({ dataFetched }) => {
  // -- RENDER --
  return (
    <PageDiv>
      <SectionDiv style={{ flexDirection: "column" }} /** Bug with Stitches */>
        <SectionTitle>Hello World!</SectionTitle>
        <SectionText>Thank's for using this template, enjoy ! :-)</SectionText>
      </SectionDiv>
    </PageDiv>
  );
};

export const getServerSideProps: GetServerSideProps<PageIndexProps> = async () => {
  let dataFetched = [];

  // Fetch some api
  try {
    const res = await fetch("http://myapiul/getdataFetched");
    dataFetched = await res.json();
  } catch (error) {
    console.error("fetch error in pages/index.tsx:", error);
  }

  // return data
  return {
    props: { dataFetched }, // will be passed to the page component as props
  };
};

export default PageIndex;
