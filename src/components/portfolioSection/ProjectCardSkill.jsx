import "./PortfolioSection.css";

export default function ProjectCardSkill({ ...props }) {
    return (
        <div className="skill-badge" style={{ backgroundColor: props.color }}>
            {props.title}
        </div>
    );
}
