import React from "react";
import "./index.css"

export default function Card({name, flag, continents}) {
  return(
    <div className="cardContainer">
      <img src={flag} alt={name} className="flag"/>
      <h2>{name}</h2>
      <h4>Continente: {continents}</h4>
    </div>
  )
}