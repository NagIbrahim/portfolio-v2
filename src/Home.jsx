import React from "react";
import About from "./About";
import Baner from "./Baner";
import Tools from "./Tools";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header about="About" />

      <Baner />
      <About />
      <Tools />
    </div>
  );
}

export default Home;
