import React from "react";
import Header from "./Header";
import MainImage from "./MainImage";
import About from "./About";
import Bicycle from "./Bicycle";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <MainImage />
      <About />
      <Bicycle />
      <Footer />
    </div>
  );
}

export default App;