export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { currentSkills, targetRole } = req.body;

  res.json({
    targetRole,
    proximity: 72,
    missingSkills: ["TypeScript", "GraphQL"]
  });
}
