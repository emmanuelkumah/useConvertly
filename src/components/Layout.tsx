import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { Container } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container maxWidth="lg">
        <Navigation />
        {children}
      </Container>
    </>
  );
};

export default Layout;
