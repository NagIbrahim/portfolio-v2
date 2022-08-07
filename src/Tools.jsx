import React from "react";
import htmlImg from "./images/html.png";
import gitImg from "./images/git.png";
import githubImg from "./images/github.png";
import cssImg from "./images/css.png";
import sassImg from "./images/sass.png";
import jsImg from "./images/javascript.png";
import reactImg from "./images/react.png";

let images = [gitImg, cssImg, sassImg, jsImg, reactImg, githubImg, htmlImg];

function Tools() {
  return (
    <div className="tools">
      {images.map((item, index) => (
        <img key={index} src={item} alt="" />
      ))}
    </div>
  );
}

export default Tools;
