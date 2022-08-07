import React from "react";

import Header from "./Header";

import todoImg from "./images/Todolist.png";
import calcImg from "./images/calculator.png";
import w3Img from "./images/w3School.png";

let myProject = [
  {
    name: "To-do List",
    img: todoImg,

    url: "https://todolist-re.vercel.app/",
  },

  {
    name: "Calculator",
    img: calcImg,
    url: "https://calculator-re.vercel.app/",
  },
  {
    name: "w3school",
    img: w3Img,
    url: "https://w3school-project.vercel.app/",
  },
];

function Projects() {
  return (
    <div>
      <Header />
      <div className="container">
        {myProject.map((item, i) => (
          <span key={i}>
            <h1>{item.name}</h1>
            <div className="image">
              <img src={item.img} alt="" />
            </div>
            <a rel="noreferrer" target="_blank" href={item.url}>
              Go to the website
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Projects;
