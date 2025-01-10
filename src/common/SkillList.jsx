function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Checkmark icon" style={{width: "20px"}}/>
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
