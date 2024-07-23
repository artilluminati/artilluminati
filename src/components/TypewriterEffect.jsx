import React, { useState, useEffect } from "react";

export default function TypewriterEffect({ targetText }) {
    const [text, setText] = useState("");
    const speed = 100; // Скорость печати (в миллисекундах)

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < targetText.length) {
                setText((prevText) => prevText + targetText.charAt(i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <>{text}</>;
}
