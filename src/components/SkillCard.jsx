import React from 'react';
import './../styles/SkillCard.css';

const SkillCard = ({ icon, name, level }) => {
    const getProgressBarWidth = () => {
        switch (level.toLowerCase()) {
            case 'beginner':
                return '33.3%';
            case 'intermediate':
                return '66.6%';
            case 'solid':
                return '100%';
            default:
                return '0%';
        }
    };

    const getLevelText = () => {
        switch (level.toLowerCase()) {
            case 'beginner':
                return 'Beginner Level';
            case 'intermediate':
                return 'Intermediate Level';
            case 'solid':
                return 'Solid Understanding';
            default:
                return '';
        }
    };

    return (
        <div className="skill-card">
            <div className="skill-header">
                <img src={icon} alt={`${name} icon`} className="skill-icon" />
                <h3 className="skill-name">{name}</h3>
            </div>
            <div className="skill-progress-container">
                <div className="skill-progress-bar" style={{ width: getProgressBarWidth() }}></div>
            </div>
            <p className="skill-level-text">{getLevelText()}</p>
        </div>
    );
};

export default SkillCard; 