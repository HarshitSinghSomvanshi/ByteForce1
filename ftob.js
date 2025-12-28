fetch("http://localhost:4000/api/analyze", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    currentSkills: ["React", "JavaScript"],
    targetRole: "Frontend Dev"
  })
});
