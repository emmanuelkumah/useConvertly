import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { Container } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <Container maxWidth="lg">{children}</Container>

      <Footer />
    </>
  );
};

export default Layout;
