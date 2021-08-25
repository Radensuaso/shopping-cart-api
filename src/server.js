import express from "express";
import db from "./db/models/index.js";
import cors from "cors";

const app = express();

const { PORT } = process.env;

app.use(cors());

app.use(express.json());
// routes

db.sequelize
  .sync()
  .then(() => {
    app.listen(port, () => console.log("🛩️ Server is running on port ", PORT));

    app.on("error", (error) =>
      console.log("🙄 Server is crashed due to ", error)
    );
  })
  .catch(console.log);
