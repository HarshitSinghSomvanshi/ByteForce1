import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import analyzeRoute from "./routes/analyze.js";
import marketRoute from "./routes/market.js";
import roadmapRoute from "./routes/roadmap.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (_, res) =>
  res.json({ status: "Lumen Path API Active" })
);

app.use("/api/analyze", analyzeRoute);
app.use("/api/market", marketRoute);
app.use("/api/roadmap", roadmapRoute);

export default app;
