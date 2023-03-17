import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountriesById, clear } from "../../redux/countryActions";
import "./index.css";

export default function Detail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { country } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountriesById(id));
    return () => {
      dispatch(clear());
    };
  }, [dispatch, id]);

  return (
    <div className="detailContainer">
      <header></header>
      <main className="containerInfo">
        <h1 className="detailTitle">{country.name}</h1>
        <section className="containerImg">
          <img src={country.flag} alt={country.name} className="flagDetail" />
        </section>
        <section className="complementInfo">
          <h3>Capital: {country.capital}</h3>
          <h3>Subregión: {country.subregion}</h3>
          <h3>Superficie: {country.area} km2</h3>
          <h3>Población: {country.population} habitantes</h3>
        </section>
        {country.activities?.length ? (
          country?.activities?.map((activity) => {
            return (
              <section className="activitiesContainer">
                <h2>Actividades</h2>
                <section className="activitiesInfo">
                  <h3>Actividad: {activity.name}</h3>
                  <h3>Dificultad: {activity.difficulty}</h3>
                  <h3>Duración: {activity.duration} hrs</h3>
                  <section className="seasonContainer">
                  <h3>Temporada:</h3>
                    {activity.season.map((season) => {
                      return <h3>{season}</h3>;
                    })}
                  </section>
                </section>
              </section>
            );
          })
        ) : (
          <section className="noInfoContainer">
            <h3 className="noInfo">
              El país no contiene actividades registradas
            </h3>
          </section>
        )}
      </main>
    </div>
  );
}
