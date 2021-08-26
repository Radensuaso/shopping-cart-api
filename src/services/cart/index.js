import express from "express";
import db from "../../db/models/index.js";

const { Cart, Product, Review } = db;

const router = express.Router();

router.route("/:userId").get(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const data = await Cart.findAll({
      where: { userId },
      include: { model: Product, include: Review },
    });
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router
  .route("/:userId/:productId")
  .post(async (req, res, next) => {
    try {
      const { userId, productId } = req.params;
      const data = await Cart.create({ userId, productId });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const { userId, productId } = req.params;
      const rows = await Cart.destroy({
        where: { userId, productId },
      });
      if (rows > 0) {
        res.send(`Deleted.`);
      } else {
        res.status(404).send("Not found.");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
