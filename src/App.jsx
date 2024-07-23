import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import SkillsSection from "./components/skillsSection/SkillsSection";

function App() {
    const [isLoadAnimating, setIsLoadAnimating] = useState(false);

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
            <main>
                <SkillsSection />
            </main>
        </>
    );
}

export default App;
