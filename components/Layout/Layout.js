import React from "react";
import { Navbar } from "../index";
import { Footer } from '@bit/tsukhu.ultra.footer';
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
