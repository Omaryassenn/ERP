import React, { useState } from 'react';
import './skill.css'
const SkillInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [skills, setSkills] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      addSkill(inputValue);
    }
  };

  const addSkill = (skill) => {
    if (skill.trim() !== '' && !skills.includes(skill)) {
      setSkills([...skills, skill.trim()]);
      setInputValue('');
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div>
      <div>
        {skills.map((skill, index) => (
          <div key={index} style={{ display: 'inline-block', marginRight: '5px' }}>
            {skill}
            <button onClick={() => removeSkill(skill)}>x</button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        placeholder="Type and press enter to add a skill"
      />
    </div>
  );
};

export default SkillInput;
