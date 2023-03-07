import React from "react";
import lupa from "../../assets/lupa.jpg"
import "./index.css"

export default function Searchbar() {
  return (
    <div className="container-searchbar">
      <input type="text" placeholder="Nombre del país" className="input"/>
      <button className="btnSearch" ><img src={lupa} alt="buscar" className="img-lupa"/></button>
    </div>
  )
}