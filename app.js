import express from "express";
import logger from "morgan";
import cors from "cors";

import contactsRouter from "./routes/api/contacts.js";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
  // не передает message.
  // "message": "ENOENT: no such file or directory,
  // open 'D:\\projects\\NODEJS\\nodejs-homework-rest-api\\models\\contacts2.json'"
});

export default app;

// https://github.com/goitacademy/nodejs-homework-template/pull/3290
// https://github.com/OlgaKryushycheva/nodejs-homework-rest-api/pull/1
