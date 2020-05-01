import React from "react";

const person = (props) => {
  return (
  <div>
    <p>I'm {props.name} Steiner! no. {Math.floor(Math.random() * 100)} standing by! --> age = {props.age}</p>
    <p>{props.children}</p>
  </div>
  ) 
};

export default person;