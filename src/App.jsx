import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Cards2 from "./components/Cards2";
import FAQ from "./components/FAQ";
import Fanta from "./components/Fanta";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Fanta />
      <Cards2 />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
