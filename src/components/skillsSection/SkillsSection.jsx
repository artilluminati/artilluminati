import { skills } from "/data";
import React, { useState, useRef } from "react";
import "./SkillsSection.css";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
    const [isDragging, setIsDragging] = useState(false);
    const [scrollX, setScrollX] = useState(0);
    const [startX, setStartX] = useState(0);
    const containerRef = useRef();

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseUp = () => {
        setIsDragging((prevIsDragging) => false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        let newScrollX = scrollX + deltaX;
        // Ограничиваем прокрутку влево
        const minScrollX = 0;
        // Ограничиваем прокрутку вправо (зависит от ширины контейнера)
        const maxScrollX =
            containerRef.current.scrollWidth - containerRef.current.clientWidth;

        // console.log(minScrollX, maxScrollX, newScrollX);

        // Применяем ограничения
        setScrollX(Math.min(minScrollX, Math.max(-maxScrollX, newScrollX)));
        setStartX(e.clientX);
    };

    return (
        <section className="skills container" id="skills">
            <div
                className="skills__list"
                onMouseDown={handleMouseDown}
                onMouseMove={isDragging ? handleMouseMove : () => {}}
                onMouseUp={handleMouseUp}
                ref={containerRef}
            >
                {skills.map((skill) => (
                    <SkillCard
                        key={skill.title}
                        title={skill.title}
                        image={skill.image}
                        // style={{ marginRight: "20px" }}

                        style={{ transform: `translateX(${scrollX}px)` }}
                    />
                ))}
            </div>
        </section>
    );
}
