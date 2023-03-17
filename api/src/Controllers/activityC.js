const { Activity, Country } = require("../db");

const getActivities = async () => {
  const allActivities = await Activity.findAll({
    atributes: ["id", "name", "difficulty", "duration", "season"],
    include: [
      {
        model: Country,
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
      },
    ],
  });
  return allActivities;
};

const getActivitiesById = async (id) => {
  const activity = await Activity.findByPk(id, {
    atributes: ["id", "name", "difficulty", "duration", "season"],
    include: [
      {
        model: Country,
        atributes: [
          "id",
          "name",
          "flag",
          "continents",
          "capital",
          "subregion",
          "area",
          "population",
        ],
      },
    ],
  });
  return activity;
};

const createActivity = async (body) => {
  const { name, difficulty, duration, season, countries } = body;
  const newActivity = await Activity.create({
    name,
    difficulty: Number(difficulty),
    duration,
    season,
  });
  const country = await Country.findAll({
    where: {
      name: countries,
    },
  });
  newActivity.addCountry(country);
  return newActivity;
};

const updateActivity = async (id, body) => {
  const { name, difficulty, duration, season, countries } = body;
  let activity = await Activity.findByPk(id);
  activity.name = name;
  activity.difficulty = difficulty;
  activity.duration = duration;
  activity.season = season;
  const country = await Country.findAll({
    where: {
      name: countries,
    },
  });
  activity.addCountry(country);
  activity.save();
  return activity;
};

module.exports = {
  createActivity,
  getActivities,
  getActivitiesById,
  updateActivity,
};
