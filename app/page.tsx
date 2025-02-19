/* This is the Home page, it contains the Quote component and an responsive image of Chuck Norris */

import React from "react";
import Quote from "@/components/Quote";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-[1fr_1fr] gap-4  justify-center items-center grid-cols-1 ">
      <div className="relative md:h-96 h-64 w-full">
        <Image
          src="/chuck.png"
          alt="A cool Chuck Norris"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
        />
      </div>
      <Quote />
    </div>
  );
};

export default Home;
