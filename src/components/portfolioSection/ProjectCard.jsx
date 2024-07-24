import { skills } from "/data";
import { useState, useContext, createContext } from "react";
import "./PortfolioSection.css";
import ProjectCardSkill from "./ProjectCardSkill";
import { ValueContext } from "../../context";

export default function ProjectCard({ ...props }) {
    const [selectedProjectId, setSelectedProjectId] = useState(null);

    const setValue = useContext(ValueContext);

    const handleCardClick = () => {
        console.log(setValue);
        setValue(true);
        setSelectedProjectId(props.id); // Update state with the project ID
    };

    const filteredSkills = props.skills.map((projectSkill) => {
        return skills.find((skill) => skill.id === projectSkill);
    });

    return (
        <a className="portfolio__card" onClick={handleCardClick}>
            <div className="portfolio__card-image">
                <img src={props.thumbnail} alt="" />
            </div>
            <div className="portfolio__card-info">
                <div className="portfolio__card-title">{props.title}</div>
                <div className="portdolio__card-skills">
                    {filteredSkills.map((badge) => (
                        <ProjectCardSkill
                            key={props.id + badge.title}
                            {...badge}
                        />
                    ))}
                </div>
            </div>
        </a>
    );
}
