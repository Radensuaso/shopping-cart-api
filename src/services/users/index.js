import express from "express";
import db from "../../db/models/index.js";
import sequelize from "sequelize";

const { Op } = sequelize;
const { User, Review } = db;

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const { name } = req.query;
      const data = await User.findAll({
        where: name
          ? {
              name: {
                [Op.iLike]: `${name}%`,
              },
            }
          : {},
        include: Review,
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await User.create(req.body);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await User.findByPk(req.params.id);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await User.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      res.send(data[1][0]);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const rows = await User.destroy({
        where: { id: req.params.id },
      });
      if (rows > 0) {
        res.send(`User with id: ${req.params.id} was deleted.`);
      } else {
        res.status(404).send("Not found.");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
