import express from "express";
import db from "../../db/models/index.js";
import sequelize from "sequelize";

const { Op } = sequelize;
const { Category, Product } = db;

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      res.send("ok");
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      res.send("ok");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      res.send("ok");
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      res.send("ok");
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      res.send("ok");
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
