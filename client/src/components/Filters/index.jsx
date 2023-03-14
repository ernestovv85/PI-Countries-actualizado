import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesAlphabetically,
  getCountriesContinent,
  getCountriesPopulation,
  getCountriesActivity,
} from "../../redux/countryActions";
import { getActivities } from "../../redux/activityActions";
import "./index.css";

export default function Filters() {
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state.activities);
  const [, setOrder] = useState("");

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handlerAlphabetical(event) {
    event.preventDefault();
    dispatch(getCountriesAlphabetically(event.target.value));
    setOrder(`${event.target.value}`);
  }
  function handlerPupulation(event) {
    event.preventDefault();
    dispatch(getCountriesPopulation(event.target.value));
    setOrder(`${event.target.value}`);
  }
  function handlerContinent(event) {
    event.preventDefault();
    dispatch(getCountriesContinent(event.target.value));
    setOrder(`${event.target.value}`);
  }
  function handlerActivity(event) {
    event.preventDefault();
    dispatch(getCountriesActivity(event.target.value));
    setOrder(`${event.target.value}`);
  }

  return (
    <div className="filtersContainer">
      <select
        className="alphabetical"
        onChange={(event) => handlerAlphabetical(event)}
      >
        <option hidden>Órden alfabético</option>
        <option value="ascending">A-Z</option>
        <option value="descending">Z-A</option>
      </select>
      <select
        className="population"
        onChange={(event) => handlerPupulation(event)}
      >
        <option hidden>Población</option>
        <option value="minimum">Menor a mayor</option>
        <option value="maxium">Mayor a menor</option>
      </select>
      <select
        className="continent"
        onChange={(event) => handlerContinent(event)}
      >
        <option value="default" hidden>
          Continente
        </option>
        <option value="Africa">África</option>
        <option value="Antarctica">Antártica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="North America">Norteamérica</option>
        <option value="Oceania">Oceanía</option>
        <option value="South America">Sudamérica</option>
      </select>
      <select className="activity" onChange={event => handlerActivity(event)}>
        <option hidden>Actividad</option>
        {activities.map((activity) => (
          <option value={activity.id}>{activity.name}</option>
        ))}
      </select>
    </div>
  );
}
