import { NewSkillsData } from "./NewSkillsData";
import { NewSkillsImage } from "./NewSkillsImage";
import Marquee from "react-fast-marquee";
import React from "react";
import "./NewSkills.css"; // Import the new CSS file

function NewSkills() {
  return (
    <div className="new-skills-container" id="skills">
      <div>
        <h2 className="new-skills-title">Skills</h2>
      </div>

      <div className="new-skills-grid">
        <Marquee gradient={false} speed={80} pauseOnHover pauseOnClick>
          {NewSkillsData.map((skill, id) => {
            const skillImage = NewSkillsImage(skill);
            const imageSrc = skillImage;
            return (
              <div key={id} className="new-skills-item">
                <img src={imageSrc} alt={skill} />
                <p>{skill}</p>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default NewSkills;
