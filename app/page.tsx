import React from "react";
import Header from "../components/Header";
import Quote from "../components/Quote";
import Footer from "../components/Footer";

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
