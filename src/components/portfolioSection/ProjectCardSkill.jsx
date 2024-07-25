import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/AppContext/AppContextProvider";
import "./PortfolioSection.css";

export default function ProjectCardSkill({ ...props }) {
    const { filterList, setFilterList } = useAppContext().filterControl;
    const [isSelected, setIsSelected] = useState(filterList.includes(props.id));

    const handleSkillClick = () => {
        if (filterList.includes(props.id)) {
            // Удалить props.id из массива filterList
            setFilterList(filterList.filter((id) => id !== props.id));
        } else {
            // Добавить props.id в массив filterList
            setFilterList([...filterList, props.id]);
        }
    };

    useEffect(() => {
        if (filterList.includes(props.id)) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }

        return () => {
            // second;
        };
    }, [filterList]);

    return (
        <button
            className={
                isSelected ? "skill-badge skill-selected" : "skill-badge"
            }
            style={{
                backgroundColor: isSelected ? props.color : "#ffffff00",
                border: props.color + " 1px solid",
                transition: "background-color 0.1s",
            }}
            onClick={handleSkillClick}
        >
            <div
                className="skill-badge__icon"
                style={{ backgroundImage: `url(${props.image})` }}
                alt=""
            />
            {props.title}
        </button>
    );
}
