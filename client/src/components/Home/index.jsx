import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/countryActions";
import "./index.css"

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
  },[])

  return (
    <div className="container">
      <header className="bar"></header>
      <section>
      <h1>Home</h1>
      </section>
    </div>
  );
}