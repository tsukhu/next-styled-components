import React from "react";
import { Navbar, Footer } from "../index";
import ScrollToTop from "../ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
