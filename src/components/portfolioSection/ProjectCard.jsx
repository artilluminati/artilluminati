import { skills } from "/data";
import "./PortfolioSection.css";
import ProjectCardSkill from "./ProjectCardSkill";
import { useAppContext } from "../../contexts/AppContext/AppContextProvider";

export default function ProjectCard({ ...props }) {
    const { isPageOpened, togglePageOpened } = useAppContext().pageControl;
    const { currentProject, setCurrentProject } =
        useAppContext().projectControl;

    const handleCardClick = () => {
        setCurrentProject(props.id); // Update state with the project ID
        togglePageOpened();
    };

    const filteredSkills = props.skills.map((projectSkill) => {
        return skills.find((skill) => skill.id === projectSkill);
    });

    return (
        <a className="portfolio__card">
            <div className="portfolio__card-image" onClick={handleCardClick}>
                <img src={props.thumbnail} alt="" />
            </div>
            <div className="portfolio__card-info">
                <div className="portfolio__card-title">{props.title}</div>
                <div className="portfolio__card-skills">
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
