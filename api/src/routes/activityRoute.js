const express = require("express");
const { Router, request } = require("express");
const {
  createActivity,
  getActivities,
  getActivitiesById,
  updateActivity,
} = require("../Controllers/activityC.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const activities = await getActivities();
    res.status(200).json(activities);
  } catch (error) {
    res.status(404).send({ error });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const activity = await getActivitiesById(id);
    res.status(200).json(activity);
  } catch (error) {
    request.send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newActivity = await createActivity(req.body);
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(507).send("No se pudo almacenar la información");
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const activity = await updateActivity(id, body);
    res.status(201).json(activity);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
