import React from "react";
import { styled } from "../styles";
import { GetServerSideProps } from "next";
import fetch from "node-fetch";

// Types
interface PageIndexProps {
  dataFetched: Array<string>;
}

// Styles
const PageDiv = styled.div({ w: "full", m: 3 });

const SectionDiv = styled.div({ flex: "auto", justify: "center" });

const SectionTitle = styled.h2({
  p: 3,
  m: 3,
  bg: "green-500",
  text: "left",
  font: "bold",
  self: "center",
  border: "dashed",
  rounded: "lg",
});

const SectionText = styled.p({ text: "green-600" });

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
    //console.error("fetch error in pages/index.tsx:", error);
  }

  // return data
  return {
    props: { dataFetched }, // will be passed to the page component as props
  };
};

export default PageIndex;
