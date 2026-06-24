

import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

import httpError from "./middleware/httpError.js";
import connectDB from "./config/db.js";

import packageRouter from "./Routes/packageroute.js";

const app = express();

app.use(express.json());

app.use("/package", packageRouter);

app.get("/", (req, res) => {
  res.json({ message: "hello from server" });
});

app.use((req, res, next) => {
  return next(new httpError("requested route not found", 404));
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "internal server error " });
});

console.log("URI:", process.env.MONGO_URI);

const port = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

startServer();