import React, { useState } from "react";
import { useDispatch } from "react-redux";
import lupa from "../../assets/lupa.jpg";
import { getCountriesByName } from "../../redux/countryActions";
import "./index.css";

export default function Searchbar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(event) {
    event.preventDefault();
    setName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getCountriesByName(name));
    setName("");
  }

  return (
    <div className="container-searchbar">
      <input
        type="text"
        placeholder="Nombre del país"
        className="input"
        onChange={(event) => handleInputChange(event)}
      />
      <button
        className="btnSearch"
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        <img src={lupa} alt="buscar" className="img-lupa" />
      </button>
    </div>
  );
}
