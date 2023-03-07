import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../redux/countryActions";
import Card from "../Card";
import Searchbar from "../Searchbar";
import "./index.css";

export default function Home() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="container">
      <header className="bar">
        <Searchbar />
        <Link to={"/create"} className="link-crear">Crear Actividad</Link>
      </header>
      <section className="cards">
        {countries.map((country) => {
          return (
            <div key={country.id}>
            <Link type="button" to={`/home/${country.id}`} className="linkId">
              <Card
                flag={country.flag}
                name={country.name}
                continents={country.continents}
              />
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
