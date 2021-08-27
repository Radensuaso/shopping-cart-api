import express from "express";
import db from "../../db/models/index.js";
import sequelize from "sequelize";

const { Op } = sequelize;
const { Product, Category, Review, User } = db;

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const { name } = req.query;
      const data = await Product.findAll({
        where: name
          ? {
              name: {
                [Op.iLike]: `${name}%`,
              },
            }
          : {},
        include: {
          model: Category,
          attributes: { exclude: ["id"] },
          where: req.query.category ? { name: req.query.category } : {},
        },
        include: {
          model: Review,
          include: User,
        },
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Product.create(req.body);
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
      const data = await Product.findByPk(req.params.id);
      res.send(data);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Product.update(req.body, {
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
      const rows = await Product.destroy({
        where: { id: req.params.id },
      });
      if (rows > 0) {
        res.send(`Product with id: ${req.params.id} was deleted.`);
      } else {
        res.status(404).send("Not found.");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
