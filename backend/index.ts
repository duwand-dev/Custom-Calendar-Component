import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ArticleRouter } from "./routers/event.router";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(ArticleRouter);

const mongoURL = process.env.mongoURL || "mongodb://localhost:27017/event";
mongoose.connect(mongoURL).then(
  () => {
    console.log("mongodb connected");
  },
  (error) => {
    console.error("mongodb connection failed", error);
  }
);

app.listen(port, () => {
  console.info(`Server is running on PORT: ${port}`);
});
