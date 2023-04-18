export default function getCharacterSkills(characterObject) {
  const { special: characterSkills } = characterObject;
  const characterSkillsProcessed = [];
  characterSkills.forEach((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    characterSkillsProcessed.push({
      id,
      name,
      icon,
      description,
    });
  });
  return characterSkillsProcessed;
}
