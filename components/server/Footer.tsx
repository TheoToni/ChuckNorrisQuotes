import React from "react";
import VisitorCountDisplay from "../client/VisitorCountDisplay";

const Footer: React.FC = () => {
  return (
    <footer className=" text-white text-xl font-bold p-4 mt-8">
      <VisitorCountDisplay />
    </footer>
  );
};

export default Footer;
