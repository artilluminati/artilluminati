import "./SkillsSection.css";

export default function SkillsSection() {
    return (
        <section className="skills">
            <div>
                <div className="skills__about-me"></div>
                <div className="skills__list">
                    <SkillCard skillName={"html"} />
                    <SkillCard skillName={"css"} />
                    <SkillCard skillName={"js"} />
                </div>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </section>
    );
}
