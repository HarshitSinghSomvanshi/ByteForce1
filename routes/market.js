import express from "express";
const router = express.Router();

router.get("/ticker", (_, res) => {
  res.json([
    { skill: "Rust", change: "+14%" },
    { skill: "GenAI", change: "+18%" },
    { skill: "Cloud Security", change: "+9%" },
    { skill: "Kafka", change: "+6%" },
    { skill: "PHP", change: "-2%" }
  ]);
});

export default router;
