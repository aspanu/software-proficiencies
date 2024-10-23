import React, { useState } from 'react';
import './ProficiencyForm.css'; // We'll add a CSS file for styling.
import { VERSION, proficiencyLevels, ProficiencyLevel } from '../skills';
import { useNavigate } from 'react-router-dom';

const ProficiencyForm: React.FC = () => {
    const [levels, setLevels] = useState<ProficiencyLevel[]>(proficiencyLevels);
    const navigate = useNavigate()

    const handleSkillClick = (levelIndex: number, skillIndex: number) => {
        const updatedLevels = [...levels];
        updatedLevels[levelIndex].skills[skillIndex].selected = !updatedLevels[levelIndex].skills[skillIndex].selected;
        setLevels(updatedLevels);
    };

    const generateDisplayLink = () => {
        // Collect the selected skill indices
        const selectedIndices = levels
            .flatMap(level => level.skills.filter(skill => skill.selected).map(skill => skill.index))
            .join(",");

        // Create a versioned string representation of selected skills
        const versionedData = `v=${VERSION}&skills=${selectedIndices}`;
        const displayUrl = `/display?${versionedData}`;
        return displayUrl;
    };

    const handleViewSummary = () => {
        const displayLink = generateDisplayLink();
        navigate(displayLink);
    };

    return (
        <div className="proficiency-form">
            <h2>Backend Proficiency Calculator</h2>
            <div className="levels-container">
                {levels.map((level, levelIndex) => (
                    <div key={level.level} className="level-column">
                        <h3>{level.level}</h3>
                        {level.skills.map((skill, skillIndex) => (
                            <div
                                key={skill.name}
                                className={`skill-item ${skill.selected ? 'selected' : ''}`}
                                onClick={() => handleSkillClick(levelIndex, skillIndex)}
                            >
                                {skill.name}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <button onClick={handleViewSummary}>
                View Summary
            </button>
        </div>
    );
};

export default ProficiencyForm;