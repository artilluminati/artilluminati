import { useState } from "react";
import "./SkillsSection.css";

export default function SkillCard({ image, title }) {
    const [isShowCard, SetIsShowCard] = useState(false);

    return (
        <div
            className="skill-card"
            onMouseEnter={() => SetIsShowCard(true)}
            onMouseLeave={() => SetIsShowCard(false)}
        >
            <div
                className={
                    isShowCard
                        ? "skill-card__button skill-card__visible"
                        : "skill-card__button"
                }
            >
                <div
                    className="skill-card__img"
                    style={{ backgroundImage: `url(${image})` }}
                    alt=""
                ></div>
            </div>

            <div
                className={
                    isShowCard
                        ? "skill-card__tooltip tooltip__visible"
                        : "skill-card__tooltip"
                }
            >
                {title}
            </div>
        </div>
    );
}
