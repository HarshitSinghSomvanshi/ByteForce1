import express from "express";
import { generateRoadmap } from "../services/rag.service.js";
import { generatePDF } from "../utils/pdfGenerator.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const roadmap = generateRoadmap(req.body);
  res.json(roadmap);
});

router.post("/download", async (req, res) => {
  const buffer = await generatePDF(req.body);
  res.setHeader("Content-Type", "application/pdf");
  res.send(buffer);
});

export default router;
