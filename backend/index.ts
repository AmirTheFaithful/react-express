import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";

// Enable access to environment variables
const env = dotenv.config();

if (env.error) {
  throw env.error;
}

// Intialize locally env variables
const port: number = Number(process.env.PORT);

const app = express();
const server = createServer(app);

server.listen((): void => {
  console.log(`Server is running on 'http://localhost:${port}/api/'.`);
});
