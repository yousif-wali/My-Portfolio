import React from 'react';

function ProjectCard({ src, link, h3, p, usedTechnology }) {
  return (
    <fieldset>
      <legend>{usedTechnology}</legend>
      <a href={link} target="_blank">
        <img className="hover" src={src} alt={`${h3} logo`} style={{maxWidth: "200px", borderRadius:"35px"}}/>
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    </fieldset>
  );
}

export default ProjectCard;
