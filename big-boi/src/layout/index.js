import React, { Fragment } from "react";
import Content from "./Content";
import Footer from "./Footer";
import { Header } from "./Header";

import "./styles.css";

export default ({ children }) => (
  <Fragment>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Fragment>
);
