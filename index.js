import express from "express";
import { sequelize } from "./db.js";
// import * as models from "./models/models.js";

import router from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";
import ErrorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());


app.use("/api", router);

app.use(ErrorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
