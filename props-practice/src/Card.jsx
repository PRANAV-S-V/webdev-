import React from "react";

function Card(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.alt} />
        <p>{props.email}</p>
        <p>{props.number}</p>
      </div>
    );
  }


export default Card;