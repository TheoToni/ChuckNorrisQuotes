/* This is the Footer component, it displays the visitor count. */

import React from "react";
import VisitorCountDisplay from "./VisitorCountDisplay";

const Footer = () => {
  return (
    <footer className=" text-white text-xl py-8 mt-auto">
      <VisitorCountDisplay />
    </footer>
  );
};

export default Footer;
