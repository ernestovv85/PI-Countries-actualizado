import React from "react";
import "./index.css"

export default function Card({name, flag, continents}) {
  return(
    <div className="cardContainer">
      <img src={flag} alt={name} className="flag"/>
      <h3>{name}</h3>
      <h4>Continente: {continents}</h4>
    </div>
  )
}