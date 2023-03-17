const axios = require("axios");
const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const getApiInfo = async () => {
  const apiUrl = await axios.get("https://restcountries.com/v3/all");
  const apiInfo = await apiUrl.data.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      flag: country.flags[0],
      continents: country.continents[0],
      capital:
        country.capital != null ? country.capital[0] : "No tiene capital",
      subregion:
        country.subregion != null ? country.subregion : "No tiene subregión",
      area: country.area,
      population: country.population,
    };
  });
  await Country.bulkCreate(apiInfo, {
    include: [
      {
        model: Activity,
        attributes: ["id", "name", "difficulty", "duration", "season"],
      },
    ],
  });
  return apiInfo;
};

const getCountries = async () => {
  const countries = await Country.findAll({
    attributes: [
      "id",
      "name",
      "flag",
      "continents",
      "capital",
      "subregion",
      "area",
      "population",
    ],
    include: [
      {
        model: Activity,
        attributes: ["id", "name", "difficulty", "duration", "season"],
      },
    ],
  });
  if (!countries.length) {
    let apiInfo = await getApiInfo();
    return apiInfo;
  }
  return countries;
};

const getCountriesByName = async (name) => {
  const countries = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    attributes: [
      "id",
      "name",
      "flag",
      "continents",
      "capital",
      "subregion",
      "area",
      "population",
    ],
    include: [
      {
        model: Activity,
        attributes: ["id", "name", "difficulty", "duration", "season"],
      },
    ],
  });
  return countries;
};

const getCountryById = async (id) => {
  const country = await Country.findByPk(id.toUpperCase(), {
    attributes: [
      "id",
      "name",
      "flag",
      "continents",
      "capital",
      "subregion",
      "area",
      "population",
    ],
    include: [
      {
        model: Activity,
        attributes: ["id", "name", "difficulty", "duration", "season"],
      },
    ],
  });
  return country;
};

const updateCountry = async (id, body) => {
  const {
    name,
    flag,
    continents,
    capital,
    subregion,
    area,
    population,
    activities,
  } = body;
  let country = await Country.findByPk(id.toUpperCase());
  country.name = name;
  country.flag = flag;
  country.continents = continents;
  country.capital = capital;
  country.subregion = subregion;
  country.area = area;
  country.population = population;
  const activity = await Activity.findAll({
    where: {
      name: activities,
    },
  });
  country.addActivity(activity);
  country.save()
  return country;
};

module.exports = {
  getApiInfo,
  getCountries,
  getCountriesByName,
  getCountryById,
  updateCountry,
};
