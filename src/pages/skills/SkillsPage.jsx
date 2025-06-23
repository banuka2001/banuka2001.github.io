import React from 'react';
import SkillCard from '../../components/SkillCard';
import '../../styles/SkillsPage.css';

// Importing all skill icons
import AwsIcon from '../../assets/images/skills-icons/Aws-Icon.svg';
import CIcon from '../../assets/images/skills-icons/C-Icon.svg';
import CssIcon from '../../assets/images/skills-icons/Css-Icon.svg';
import DockerIcon from '../../assets/images/skills-icons/Docker-Icon.svg';
import FirebaseIcon from '../../assets/images/skills-icons/Firebase-Icon.svg';
import GitHubIcon from '../../assets/images/skills-icons/GitHub-Icon.svg';
import HtmlIcon from '../../assets/images/skills-icons/Html-Icon.svg';
import JavaIcon from '../../assets/images/skills-icons/Java-Icon.svg';
import JsIcon from '../../assets/images/skills-icons/Js-Icon.svg';
import MysqlIcon from '../../assets/images/skills-icons/Mysql-Icon.svg';
import NodeIcon from '../../assets/images/skills-icons/Node-Icon.svg';
import PhpIcon from '../../assets/images/skills-icons/Php-Icon.svg';
import PostgresIcon from '../../assets/images/skills-icons/Postgres-Icon.svg';
import ReactIcon from '../../assets/images/skills-icons/React-Icon.svg';
import SpringIcon from '../../assets/images/skills-icons/Spring-Icon.svg';

const skillsData = [
    { name: 'HTML', icon: HtmlIcon, level: 'Solid' },
    { name: 'CSS', icon: CssIcon, level: 'Solid' },
    { name: 'JavaScript', icon: JsIcon, level: 'Intermediate' },
    { name: 'React', icon: ReactIcon, level: 'Intermediate' },
    { name: 'Node.js', icon: NodeIcon, level: 'Beginner' },
    { name: 'Java', icon: JavaIcon, level: 'Solid' },
    { name: 'Spring Boot', icon: SpringIcon, level: 'Intermediate' },
    { name: 'MySQL', icon: MysqlIcon, level: 'Solid' },
    { name: 'PostgreSQL', icon: PostgresIcon, level: 'Intermediate' },
    { name: 'Docker', icon: DockerIcon, level: 'Beginner' },
    { name: 'AWS', icon: AwsIcon, level: 'Beginner' },
    { name: 'Firebase', icon: FirebaseIcon, level: 'Beginner' },
    { name: 'GitHub', icon: GitHubIcon, level: 'Intermediate' },
    { name: 'C', icon: CIcon, level: 'Intermediate' },
    { name: 'PHP', icon: PhpIcon, level: 'Beginner' },
];

const SkillsPage = () => {
    return (
        <>
        <h1 className="skills-title text-center mb-0 mt-4">My Skills</h1>
        <div className="skills-page">
            <div className="skills-container-card">
                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <SkillCard
                            key={index}
                            name={skill.name}
                            icon={skill.icon}
                            level={skill.level}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default SkillsPage; 