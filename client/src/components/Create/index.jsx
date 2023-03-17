import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createActivity } from "../../redux/activityActions";
import { getCountries } from "../../redux/countryActions";
import "./index.css";

export default function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { countries } = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});
  const initialInput = {
    name: "",
    difficulty: "",
    duration: "",
    season: [],
    countries: [],
  };
  const [input, setInput] = useState(initialInput);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function validate(input) {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (!input.name.trim()) {
      errors.name = "Se necesita nombre de actividad";
    } else if (!regexName.test(input.name.trim())) {
      errors.name = "El campo actividad, solo acepta letras y espacios";
    }
    if (!input.difficulty) {
      errors.difficulty = "Se requiere grado de dificultad";
    }
    if (!input.duration) {
      errors.duration = "Se requiere disponibilidad";
    } else if (input.duration <= 0) {
      errors.duration = "La duración debe ser mayor a cero";
    } else if (input.duration > 12) {
      errors.duration = "La disponibilidad no puede exceder de 12 meses";
    }
    if (!input.season.length) {
      errors.season = "Se requiere al menos una temporada";
    }
    if (!input.countries.length) {
      errors.countries = "Se requiere al menos un país";
    }
    return errors;
  }

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  function handleDifficulty(event) {
    setInput({
      ...input,
      difficulty: event.target.value,
    });
  }

  function handleSeason(event) {
    if (event.target.checked) {
      setInput({
        ...input,
        season: [...input.season, event.target.value],
      });
    }
  }

  function handleSelect(event) {
    if (input.countries.includes(event.target.value)) return;
    setInput({
      ...input,
      countries: [...input.countries, event.target.value],
    });
  }

  function handleErrors(event) {
    handleChange(event);
    setErrors(validate(input));
  }

  function handleDelete(event) {
    setInput({
      ...input,
      countries: input.countries.filter((country) => country !== event),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(validate(input));
    if (Object.keys(errors).length === 0) {
      dispatch(createActivity(input));
      alert("Actividad registrada exitosamente");
      setInput(initialInput);
    }
    navigate("/home");
  }

  return (
    <main className="createContainer">
      <section className="formContainer">
        <section className="titleCreate">
          <h1>Crear Actividad</h1>
        </section>
        <form onSubmit={(event) => handleSubmit(event)}>
          <section className="form">
            <section className="inputNameContainer">
              <label>Nombre de la actividad</label>
              <input
                className="inputName"
                type="text"
                name="name"
                value={input.name}
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleErrors(event)}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </section>
            <section className="inputDifficultyContainer">
              <label>Dificultad</label>
              <select
                className="inputDifficulty"
                onChange={(event) => handleDifficulty(event)}
                onBlur={(event) => handleErrors(event)}
              >
                <option hidden>Grado</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              {errors.difficulty && (
                <p className="error">{errors.difficulty}</p>
              )}
            </section>
            <section className="inputDurationContainer">
              <label>Duración</label>
              <input
                className="inputDuration"
                type="number"
                placeholder="Horas"
                value={input.duration}
                name="duration"
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleErrors(event)}
              />
              {errors.duration && <p className="error">{errors.duration}</p>}
            </section>
          </section>
          <section className="inputSeasonContainer">
            <label>Temporada</label>
            <section>
              <section className="checkBoxes"></section>
              <label className="check">
                <input
                  type="checkbox"
                  name={input.season}
                  value="Primavera"
                  onChange={(event) => handleSeason(event)}
                  onBlur={(event) => handleErrors(event)}
                />
                Primavera
              </label>
              <label className="check">
                <input
                  type="checkbox"
                  name={input.season}
                  value="Verano"
                  onChange={(event) => handleSeason(event)}
                  onBlur={(event) => handleErrors(event)}
                />
                Verano
              </label>
              <label className="check">
                <input
                  type="checkbox"
                  name={input.season}
                  value="Otoño"
                  onChange={(event) => handleSeason(event)}
                  onBlur={(event) => handleErrors(event)}
                />
                Otoño
              </label>
              <label className="check">
                <input
                  type="checkbox"
                  name={input.season}
                  value="Invierno"
                  onChange={(event) => handleSeason(event)}
                  onBlur={(event) => handleErrors(event)}
                />
                Invierno
              </label>
            </section>
            {errors.season && <p className="error">{errors.season}</p>}
          </section>
          <section className="countriesSelectContainer">
            <label>Países donde se practica la actividad</label>
            <select
              className="countriesSelect"
              onChange={(event) => handleSelect(event)}
              onBlur={(event) => handleErrors(event)}
            >
              <option hidden>Selecciona los países</option>
              {countries.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.countries && <p className="error">{errors.countries}</p>}
          </section>
          <section className="itemsContainer">
            {input.countries.map((country) => {
              return (
                <div>
                  <p key={country.id} className="items">
                    {country}
                    <button
                      className="buttonRemove"
                      onClick={() => handleDelete(country)}
                    >
                      X
                    </button>
                  </p>
                </div>
              );
            })}
          </section>
          <section className="submitContainer">
            <input type="submit" className="submitButton" />
          </section>
        </form>
      </section>
    </main>
  );
}
