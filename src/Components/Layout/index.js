import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../../styles/global.css";
import "./Layout.module.scss";

const Layout = ({ children }) => (
  <>
    <Header />
    <Navbar darkMode={this.state.isDarkMode} />
    {children}
    <Footer />
  </>
);

export default Layout;
