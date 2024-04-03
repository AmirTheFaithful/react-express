import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compresstion from "compression";
import cors from "cors";
import mongoose from "mongoose";

import router from "./router";

// Enable access to environment variables
const env = dotenv.config();

if (env.error) {
  throw env.error;
}

// Intialize locally env variables
const port: number = Number(process.env.PORT);
const mongo_url: string = process.env.MONGO_URL!;

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compresstion());
app.use(cookieParser());
app.use(bodyParser.json());

const server = createServer(app);

server.listen(port, (): void => {
  console.log(`Server is running on 'http://localhost:${port}/'.`);
});

mongoose.Promise = Promise;
mongoose.connect(mongo_url);
mongoose.connection.on("error", (error: Error): void => {
  console.log(
    `Some error occured when connecting to MongoDB: ${error.name} with message: ${error.message}.`
  );
});

app.use("/", router());
