import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../redux/countryActions";
import Card from "../Card";
import Filters from "../Filters";
import Pagination from "../Pagination";
import Searchbar from "../Searchbar";
import "./index.css";

export default function Home() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);
  const [currentPage, setcurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  const currentCountries = countries.slice(firstCountry, lastCountry);

  const paginado = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="container">
      <header className="bar">
        <Searchbar />
        <Link to={"/create"} className="link-crear">
          Crear Actividad
        </Link>
      </header>
      <section className="filters">
        <Filters />
      </section>
      <section className="numbers">
        <Pagination
          countriesPerPage={countriesPerPage}
          countries={countries.length}
          paginado={paginado}
        />
      </section>
      <section className="cards">
        {currentCountries.map((country) => {
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
