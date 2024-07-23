import { skills } from "/data";
import "./SkillsSection.css";
import React, { useState } from "react";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollLeft(e.currentTarget.scrollLeft);
        e.currentTarget.style.cursor = "grabbing";
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.querySelector(".skills__list").style.cursor = "grab";
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - startX;
        e.currentTarget.scrollLeft = scrollLeft - x;
    };

    return (
        <section className="skills container">
            <div
                className="skills__list"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.title}
                        title={skill.title}
                        image={skill.image}
                    />
                ))}
            </div>
        </section>
    );
}
