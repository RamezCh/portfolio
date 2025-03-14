import { FC, useState, useEffect } from "react";
import {CardProps} from "../types.ts";



export const Card: FC<CardProps> = ({ title, titleSize, subtitleWords, subtitleSize, text, children }) => {
    const [currentSubtitle, setCurrentSubtitle] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        if (!subtitleWords || subtitleWords.length === 0) return;

        const word = subtitleWords[currentWordIndex];
        const typingSpeed = 200;
        const pauseBetweenWords = 3000;

        if (currentIndex < word.length) {
            // Typing animation
            const timeout = setTimeout(() => {
                setCurrentSubtitle((prev) => prev + word[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(timeout);
        } else if (currentWordIndex < subtitleWords.length - 1) {
            // Move to the next word
            const timeout = setTimeout(() => {
                setCurrentSubtitle("");
                setCurrentIndex(0);
                setCurrentWordIndex((prev) => prev + 1);
            }, pauseBetweenWords);

            return () => clearTimeout(timeout);
        } else {
            // Reset to the first word
            const timeout = setTimeout(() => {
                setCurrentSubtitle("");
                setCurrentIndex(0);
                setCurrentWordIndex(0);
            }, pauseBetweenWords);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, currentWordIndex, subtitleWords]);

    return (
        <div className="flex flex-col justify-evenly">
            <h2 className={"font-bold " + titleSize}>{title}</h2>
            {subtitleWords && (
                <h3 className={"strong-gradient-text " + subtitleSize} style={{ minHeight: "1em" }}>
                    {currentSubtitle}
                </h3>
            )}
            {text && <p className="text-[#6E6D8F] content-evenly text-2xl">{text}</p>}
            {children}
        </div>
    );
};