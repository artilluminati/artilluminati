import { projects, skills } from "/data";
import "./ProjectFullscreen.css";
import { useAppContext } from "../../contexts/AppContext/AppContextProvider";
import CloseIcon from "../icons/CloseIcon";
import OpenNewTabIcon from "../icons/OpenNewTabIcon";
import ProjectCardSkill from "../portfolioSection/ProjectCardSkill";
import React, { useRef, useEffect, useState } from "react";
import useScrollBlock from "./UseScrollBlock";

export default function ProjectFullscreen() {
    const { isPageOpened, togglePageOpened } = useAppContext().pageControl;
    const { currentProject, setCurrentProject } =
        useAppContext().projectControl;

    const projectData = projects[currentProject];

    const filteredSkills = projectData.skills.map((projectSkill) => {
        return skills.find((skill) => skill.id === projectSkill);
    });

    const [blockScroll, allowScroll] = useScrollBlock();

    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current.scrollTo(0, 0);
        if (isPageOpened) {
            blockScroll();
        } else {
            allowScroll();
        }
    }, [isPageOpened]);

    return (
        <div
            // ref={ref}
            // style={{ ...viewport }}
            className={
                isPageOpened ? "project-page project-page-show" : "project-page"
            }
        >
            <div className="project-page__container container" ref={scrollRef}>
                <div className="project-page__image">
                    {Array.isArray(projectData.screenshots) ? (
                        projectData.screenshots.map((screenshot) => (
                            <img
                                key={"projectFullscreen_" + screenshot}
                                src={screenshot}
                                alt=""
                            />
                        ))
                    ) : (
                        <img src={projectData.screenshots} alt="" />
                    )}
                </div>
                <div className="project-page__description">
                    <div className="project-page__close-button-container">
                        <button
                            className="project-page__close-button"
                            onClick={togglePageOpened}
                        >
                            <CloseIcon />
                        </button>
                    </div>
                    <h1>{projectData.title}</h1>
                    <div className="project-page__skills">
                        {filteredSkills.map((badge) => (
                            <ProjectCardSkill
                                key={projectData.id + badge.title}
                                {...badge}
                            />
                        ))}
                    </div>
                    {projectData.redirect ? (
                        <div className="project-page__redirect">
                            <a
                                target="_blank"
                                href={projectData.redirect}
                                className="project-page__redirect-button"
                            >
                                <OpenNewTabIcon />
                                Перейти
                            </a>
                        </div>
                    ) : (
                        ""
                    )}

                    {projectData.description ? (
                        <div className="project-page__description-text">
                            {projectData.description}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}
