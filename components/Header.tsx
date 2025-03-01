/* This is the Header component, it displays the W&S logo */

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-8">
      <Link href="/" className="inline-block">
        <Image
          src="layout-logo-w-s-weis.svg"
          alt="logo"
          width={100}
          height={60}
        />
      </Link>
    </header>
  );
};

export default Header;
