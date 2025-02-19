/* This is the Footer component, it displays the visitor count. */

import React from "react";
import VisitorCountDisplay from "./VisitorCountDisplay";

const Footer: React.FC = () => {
  return (
    <footer className=" text-white text-xl p-4 mt-8">
      <VisitorCountDisplay />
    </footer>
  );
};

export default Footer;
