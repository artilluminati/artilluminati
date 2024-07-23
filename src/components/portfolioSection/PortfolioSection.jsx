import { projects } from "/data";
import { useState } from "react";
import "./PortfolioSection.css";
import ProjectCard from "./ProjectCard";

export default function PortfolioSection() {
    // console.log(projectControl);
    return (
        <div className="portfolio container">
            <h1>Проекты</h1>
            <div className="portfolio__card-container">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
}
