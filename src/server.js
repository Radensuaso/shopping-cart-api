import express from "express";
import db from "./db/models/index.js";
import cors from "cors";
import categoriesRouter from "./services/categories/index.js";
import productsRouter from "./services/products/index.js";

const app = express();

const { PORT } = process.env;

app.use(cors());

app.use(express.json());
app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log("🛩️ Server is running on port", PORT));

    app.on("error", (error) =>
      console.log("🙄 Server is crashed due to ", error)
    );
  })
  .catch(console.log);
