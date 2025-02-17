import React from "react";
import Header from "../components/server/Header";
import Quote from "../components/client/Quote";
import Footer from "../components/server/Footer";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col min-h-screen">
      <Header />
      <div className="grid md:grid-cols-[.5fr_1fr] gap-4 flex-grow justify-center items-center grid-cols-1">
        <Image
          src="/chuck.png"
          alt="A cool Chuck Norris"
          width={150}
          height={225}
          layout="responsive"
        />
        <Quote />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
