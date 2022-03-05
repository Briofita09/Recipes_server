import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/index.js";
import { errorMiddleware } from "./middleware/ErrorMiddleware.js";

// import router from "./routes/user.routes.js";
// import recipeRouter from "./routes/recipes.routes.js";

dotenv.config();
mongoose.connect(process.env.MONGODB_URI);
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorMiddleware);

app.listen(process.env.PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`Server up and running at port ${process.env.PORT}`)
);
