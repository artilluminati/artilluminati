import { projects } from "/data";
import "./ProjectFullscreen.css";

export default function ProjectFullscreen({ ...projectControl }) {
    // console.log(projectControl);

    return (
        <div
            className={
                projectControl[0]
                    ? "project-page project-page-show container"
                    : "project-page container"
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
