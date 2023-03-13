import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesAlphabetically, getCountriesContinent, getCountriesPopulation } from "../../redux/countryActions";
import "./index.css"

export default function Filters() {
  const dispatch = useDispatch()
  const [, setOrder] = useState("")

  function handlerAlphabetical(event) {
    event.preventDefault();
    dispatch(getCountriesAlphabetically(event.target.value))
    setOrder(`${event.target.value}`)
  }
  function handlerPupulation(event) {
    event.preventDefault();
    dispatch(getCountriesPopulation(event.target.value))
    setOrder(`${event.target.value}`)
  }
  function handlerContinent(event) {
    event.preventDefault();
    dispatch(getCountriesContinent(event.target.value))
    setOrder(`${event.target.value}`)
  }

  return (
    <div className="filtersContainer">
      <select className="alphabetical" onChange={event => handlerAlphabetical(event)}>
          <option hidden>Órden alfabético</option>
          <option value="ascending">A-Z</option>
          <option value="descending">Z-A</option>
        </select>
        <select className="population" onChange={event => handlerPupulation(event)}>
          <option hidden>Población</option>
          <option value="minimum">Menor a mayor</option>
          <option value="maxium">Mayor a menor</option>
        </select>
        <select className="continent" onChange={event => handlerContinent(event)}>
          <option value="default" hidden>Continente</option>
          <option value="Africa">África</option>
          <option value="Antarctica">Antártica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="North America">Norteamérica</option>
          <option value="Oceania">Oceanía</option>
          <option value="South America">Sudamérica</option>
        </select>
        <select className="activity">
          <option hidden>Actividad</option>
          <option></option>
        </select>
    </div>
  )
}