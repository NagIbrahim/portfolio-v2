import React from "react";
import BanerImg from "./images/baner1.png";

function Baner() {
  return (
    <div className="baner" id="baner">
      <div className="image">
        <img src={BanerImg} alt="" />
      </div>
      <div id="txt">
        <h1>Hey, I am Naglaa Hamed</h1>
        <h2>A frontend Web Developer based in Germany</h2>
      </div>
    </div>
  );
}

export default Baner;
