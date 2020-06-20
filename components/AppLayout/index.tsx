import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { styled } from "styles";
import { initGA } from "utils/analystics";

// Types
interface AppLayoutProps {
  children: JSX.Element;
  type?: "full" | "footer" | "header";
}

// Styles
const AppContainer = styled.div((css) =>
  css.compose(
    css.minH("screen"),
    css.flex(),
    css.text("center"),
    css.bg("gray-200")
  )
);

const HeaderContainer = styled.header((css) =>
  css.compose(
    css.flex(),
    css.h(12),
    css.items("center"),
    css.bg("black"),
    css.justify("center"),
    css.fixed(),
    css.top(0),
    css.left(0),
    css.w("full"),
    css.borderB(2),
    css.border("solid"),
    css.border("green-600")
  )
);

const ContentContainer = styled.div((css) =>
  css.compose(
    css.mt(16),
    css.mb(12),
    css.grow("default"),
    css.flex(),
    css.p(2),
    css.justify("center"),
    css.minH("full")
  )
);

const FooterContainer = styled.footer((css) =>
  css.compose(
    css.items("center"),
    css.bg("black"),
    css.text("white"),
    css.justify("center"),
    css.fixed(),
    css.bottom(0),
    css.left(0),
    css.w("full"),
    css.borderT(2),
    css.border("solid"),
    css.border("green-600")
  )
);

// Comp
const AppLayout = ({ children, type }: AppLayoutProps): JSX.Element => {
  // Init Google Analytics at first mount:
  useEffect(() => {
    initGA();
  }, []);

  return (
    <AppContainer>
      {type === "footer" ? null : (
        <HeaderContainer>
          <Header />
        </HeaderContainer>
      )}
      <ContentContainer>{children}</ContentContainer>
      {type === "header" ? null : (
        <FooterContainer>
          <Footer />
        </FooterContainer>
      )}
    </AppContainer>
  );
};

export default AppLayout;
