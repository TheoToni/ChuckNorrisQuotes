import React from "react";
import Header from "../components/server/Header";
import Quote from "../components/client/Quote";
import Footer from "../components/server/Footer";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <Quote />
      <Footer />
    </div>
  );
};

export default Home;
