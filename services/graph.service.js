import skills from "../data/skills.json" assert { type: "json" };

export function getRelatedSkills(skill) {
  return skills[skill] || [];
}

export function calculateProximity(userSkills, targetSkills) {
  const overlap = userSkills.filter(s => targetSkills.includes(s));
  return Math.round((overlap.length / targetSkills.length) * 100);
}
