import React from 'react';
import '../../styles/SkillsBanner.css';

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


const Skills = () => {

    const skills = [
        AwsIcon, CIcon, CssIcon, DockerIcon, FirebaseIcon, GitHubIcon,
        HtmlIcon, JavaIcon, JsIcon, MysqlIcon, NodeIcon, PhpIcon,
        PostgresIcon, ReactIcon, SpringIcon
    ];

    return (
        <>
        <div className="skills-section">
        <h2 className="skills-title">Skills</h2>
            <div className="skills-container">
                <div className="skills-track">
                    {skills.map((skill, index) => (
                        <img key={index} src={skill} alt="skill" className="skills-logos" />
                    ))}
                    {skills.map((skill, index) => (
                        <img key={index + skills.length} src={skill} alt="skill" className="skills-logos" />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default Skills;
