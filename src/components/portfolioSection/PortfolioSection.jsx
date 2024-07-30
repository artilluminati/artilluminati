import { projects } from "/data";
import "./PortfolioSection.css";
import ProjectCard from "./ProjectCard";
import { useAppContext } from "../../contexts/AppContext/AppContextProvider";
import { skills } from "../../../data";
import ProjectCardSkill from "./ProjectCardSkill";

export default function PortfolioSection() {
    const { filterList, setFilterList } = useAppContext().filterControl;

    const filteredProjects =
        filterList.length === 0
            ? projects
            : projects.filter((project) =>
                  filterList.every((skill) => project.skills.includes(skill))
              );

    filteredProjects.sort((a, b) => a.id - b.id);

    const filteredSkills = skills.filter((skill) =>
        projects.some((project) => project.skills.includes(skill.id))
    );

    return (
        <div className="portfolio container" id={"projects"}>
            <h1>Проекты</h1>
            <div className="portfolio__filter">
                {filteredSkills.map((badge) => (
                    <ProjectCardSkill
                        key={"filter " + badge.title}
                        {...badge}
                    />
                ))}
            </div>
            <div className="portfolio__card-container">
                {filteredProjects.map((project) => (
                    <ProjectCard key={"project" + project.id} {...project} />
                ))}
            </div>
        </div>
    );
}
