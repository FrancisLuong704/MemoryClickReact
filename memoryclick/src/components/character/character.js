import React from "react";
import "./character.css";

const Character = props => (
  <div className="card" 
  onClick={() => props.setClicked(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div>
        <p>{props.name}</p>
    </div>
  </div>
);

export default Character;
