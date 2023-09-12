import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import peopleRouter from "./routes/peopleRoute.js";

dotenv.config
const app = express();

app.use(cors());

app.use(json());
app.use(urlencoded({ extended: false }));

mongoose
  .connect(dbConnectionString)
  .then(() => console.log("Database connected!"))
  .catch(() => console.log("Database is not connected!"));


app.use("/api/persons", peopleRouter)


app.listen(3000, () => {
  console.log("Server is running...");
});
