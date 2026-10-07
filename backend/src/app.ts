import express from "express";
import cors from "cors";
import { apiRouter } from "./routes";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", apiRouter);

// Basic 404 + error handler (mở rộng dần khi có module thật)
app.use((_req, res) => {
  res.status(404).json({ message: "Not found" });
});
