import React from 'react';
import "../skilss/Skill.css"
import Fronted from './Fronted';
import Backend from './Backend';
const Skill = () => {
  return (
    <section className="skills section" id='skill'>
      <div className="container align">
        <h2 className="section_title">Skill</h2>
        <span className="section_subtitle">My technical</span>
      </div>
      <div className="skills_container container grid">
            <Fronted/>
            <Backend/>
      </div>
    </section>
  );
};

export default Skill;
