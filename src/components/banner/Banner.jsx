import { useEffect, useState } from "react";
import TypewriterEffect from "../TypewriterEffect";
import "./Banner.css";

export default function Banner({ isLoadAnimating }) {
    // isLoadAnimating = true;

    const [showTypewriter, setShowTypewriter] = useState(false);

    useEffect(() => {
        const storedValue = localStorage.getItem("isLoadAnimating");
        if (storedValue !== null) {
            setShowTypewriter(true);
        } else {
            const timer = setTimeout(() => {
                setShowTypewriter(true);
            }, 2500);
            return () => clearTimeout(timer);
        }
    });
    return (
        <div className="banner">
            <div className="banner__text container">
                <div
                    className={
                        isLoadAnimating
                            ? "banner__text-hello"
                            : "banner__text-hello banner__text-no-delay"
                    }
                >
                    Привет! Я
                </div>
                <div
                    className={
                        isLoadAnimating
                            ? "banner__text-name"
                            : "banner__text-name banner__text-no-delay"
                    }
                >
                    <span>
                        {showTypewriter && (
                            <TypewriterEffect targetText={"arrtilluminati"} />
                        )}
                    </span>
                </div>
            </div>
            <a className="banner__arrow container">
                <svg
                    width="124"
                    height="100%"
                    viewBox="0 0 124 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M122 19L65 45.5C65 45.5 63.5 46.25 62 46.25C60.5 46.25 59 45.5 59 45.5L2 19L0 23L59 50.5968C59 50.5968 60.5 51.5 62 51.5C63.5 51.5 65.0526 50.5968 65.0526 50.5968L124 23.5L122 19Z"
                        fill="#00FF8B"
                    />
                    <path
                        d="M122 2L65 28.5C65 28.5 63.5 29.25 62 29.25C60.5 29.25 59 28.5 59 28.5L2 2L0 6L59 33.5968C59 33.5968 60.5 34.5 62 34.5C63.5 34.5 65.0526 33.5968 65.0526 33.5968L124 6.5L122 2Z"
                        fill="#00FF8B"
                    />
                </svg>
            </a>
        </div>
    );
}
