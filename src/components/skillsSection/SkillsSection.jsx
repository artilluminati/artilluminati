import { skills } from "/data";
import React, { useState, useRef, useEffect } from "react";
import "./SkillsSection.css";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
    const [isDragging, setIsDragging] = useState(false);
    const [scrollX, setScrollX] = useState(0);
    const [startX, setStartX] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [animateCards, setAnimateCards] = useState(false);
    const containerRef = useRef();

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        let newScrollX = scrollX + deltaX;
        const minScrollX = 0;
        const maxScrollX =
            containerRef.current.scrollWidth - containerRef.current.clientWidth;

        setScrollX(Math.min(minScrollX, Math.max(-maxScrollX, newScrollX)));
        setStartX(e.clientX);
    };

    // Обрабатываем отпускание мыши глобально
    useEffect(() => {
        const handleGlobalMouseUp = () => {
            if (isDragging) {
                setIsDragging(false);
            }
        };

        window.addEventListener("mouseup", handleGlobalMouseUp);
        return () => {
            window.removeEventListener("mouseup", handleGlobalMouseUp);
        };
    }, [isDragging]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    setAnimateCards(true);

                    setTimeout(() => {
                        setAnimateCards(false);
                    }, 1000);
                }
            },
            {
                threshold: 1,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [hasAnimated]);

    return (
        <section className="skills container" id="skills">
            <div
                className="skills__list"
                onMouseDown={handleMouseDown}
                onMouseMove={isDragging ? handleMouseMove : () => {}}
                ref={containerRef}
                style={{ cursor: isDragging ? "grabbing" : "grab" }}
            >
                {skills
                    .filter((skill) => skill.image)
                    .map((skill) => (
                        <SkillCard
                            key={skill.id + "_skill-list"}
                            title={skill.title}
                            image={skill.image}
                            style={{
                                transform: `translateX(${scrollX}px)`,
                            }}
                            className={
                                animateCards ? "scroll-hint-animation" : ""
                            }
                        />
                    ))}
            </div>
        </section>
    );
}
