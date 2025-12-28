import express from "express";
import { calculateProximity } from "../services/graph.service.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { currentSkills, targetRole } = req.body;

  const roleSkills = {
    "Frontend Dev": ["React", "TypeScript", "GraphQL"],
    "ML Engineer": ["Python", "Kafka", "ML Ops"]
  };

  const targetSkills = roleSkills[targetRole];
  const proximity = calculateProximity(currentSkills, targetSkills);

  res.json({
    targetRole,
    proximity,
    missingSkills: targetSkills.filter(s => !currentSkills.includes(s))
  });
});

export default router;
