export function generateRoadmap({ missingSkills }) {
  return missingSkills.map((skill, index) => ({
    week: `${index * 2 + 1}-${index * 2 + 2}`,
    focus: skill,
    reason: `High demand in current job postings`
  }));
}
