import React from "react";
import {Link} from "react-router-dom"
import "./index.css"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"

export default function LandingPage() {
  return (
    <div className="background">
      <header className="title">
        <h1>Bienvenid@ a mi app</h1>
      </header>
      <section className="card-left">
        <Link to="/home">
        <button className="btnIngresar">Ingresar</button>
        </Link>
      </section>
      <section className="card-right">
      <Link to="https://github.com/ernestovv85">
        <img src={github} alt="github" className="logo-github"/>
      </Link>
      <Link to="https://www.linkedin.com/in/ernesto-vel%C3%A1zquez-vel%C3%A1zquez-7aaa2460/">
        <img src={linkedin} alt="linkedin" className="logo-linkedIn"/>
      </Link>
      </section>
      
    </div>
  )
}