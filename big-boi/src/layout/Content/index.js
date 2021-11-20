import React from "react";

const Content = (props) => {
  const { children } = props;
  return <main className="l-content container-fluid">{children}</main>;
};

export default Content;
