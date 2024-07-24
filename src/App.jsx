import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import PortfolioSection from "./components/portfolioSection/PortfolioSection";
import ProjectFullscreen from "./components/projectFullscreen/ProjectFullscreen";
import SkillsSection from "./components/skillsSection/SkillsSection";

const ValueContext = createContext();

function App() {
    const [isLoadAnimating, setIsLoadAnimating] = useState(false);
    const [showProjectPage, setShowProjectPage] = useState(false);
    const [value, setValue] = useState("");

    useEffect(() => {
        // Проверяем, есть ли значение в localStorage
        const storedValue = localStorage.getItem("isLoadAnimating");
        if (storedValue !== null) {
            setIsLoadAnimating(false);
        } else {
            setIsLoadAnimating(true);
            // Сохраняем значение в localStorage
        }
    }, []);

    return (
        <>
            <Header isLoadAnimating={isLoadAnimating} />
            <Banner isLoadAnimating={isLoadAnimating} />
            <ValueContext.Provider value={(value, setValue)}>
                <main>
                    <SkillsSection />
                    <PortfolioSection />
                </main>
                <ProjectFullscreen
                // projectControl={[showProjectPage, setShowProjectPage]}
                />
            </ValueContext.Provider>
        </>
    );
}

export default App;
