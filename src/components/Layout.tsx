import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
