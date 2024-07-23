import { skills } from "/data";
import "./PortfolioSection.css";
import ProjectCardSkill from "./ProjectCardSkill";

export default function ProjectCard({ ...props }) {
    const filteredSkills = props.skills.map((projectSkill) => {
        return skills.find((skill) => skill.id === projectSkill);
    });

    return (
        <a className="portfolio__card" onClick={() => {}}>
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
