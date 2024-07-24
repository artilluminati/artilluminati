import { projects } from "/data";
import { useState, useContext, createContext } from "react";
import "./ProjectFullscreen.css";
import { ValueContext } from "../../context";

export default function ProjectFullscreen() {
    const value = useContext(ValueContext);

    return (
        <div
            className={
                value ? "project-page project-page-show" : "project-page"
            }
        >
            <div className="project-page__container container">
                <div className="project-page__image"></div>
                <div className="project-page__description">
                    <h1>Cloost SMP</h1>
                </div>
            </div>
        </div>
    );
}
