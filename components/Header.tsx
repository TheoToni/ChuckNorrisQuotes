/* This is the Header component, it displays the W&S logo */

import React from "react";
import Image from "next/image";
const Header: React.FC = () => {
  return (
    <header className="py-8">
      <Image
        src="layout-logo-w-s-weis.svg"
        alt="logo"
        width={100}
        height={60}
      />
    </header>
  );
};

export default Header;
