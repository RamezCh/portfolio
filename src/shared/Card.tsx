import { FC, useState, useEffect } from "react";
import {CardProps} from "../types.ts";

// Animation states
enum AnimationState {
    TYPING,
    PAUSING,
    DELETING
}



export const Card: FC<CardProps> = ({ title, titleSize, subtitleWords, subtitleSize, text, children }) => {
    const [currentSubtitle, setCurrentSubtitle] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [animationState, setAnimationState] = useState<AnimationState>(AnimationState.TYPING);

    useEffect(() => {
        if (!subtitleWords || subtitleWords.length === 0) return;

        const word = subtitleWords[currentWordIndex];
        const typingSpeed = 100; // Slightly slower, more deliberate typing for professional feel
        const deletingSpeed = 60; // Slightly slower deleting for more natural feel
        const pauseBetweenWords = 2500; // Longer pause to let the reader absorb the content
        const pauseBeforeDeleting = 800; // Longer pause before deleting for more natural rhythm

        let timeout: NodeJS.Timeout;

        switch (animationState) {
            case AnimationState.TYPING:
                if (currentIndex < word.length) {
                    // Still typing the current word
                    timeout = setTimeout(() => {
                        setCurrentSubtitle((prev) => prev + word[currentIndex]);
                        setCurrentIndex((prev) => prev + 1);
                    }, typingSpeed);
                } else {
                    // Finished typing, move to pausing state
                    timeout = setTimeout(() => {
                        setAnimationState(AnimationState.PAUSING);
                    }, pauseBetweenWords);
                }
                break;

            case AnimationState.PAUSING:
                // After pausing, start deleting
                timeout = setTimeout(() => {
                    setAnimationState(AnimationState.DELETING);
                }, pauseBeforeDeleting);
                break;

            case AnimationState.DELETING:
                if (currentSubtitle.length > 0) {
                    // Still deleting characters
                    timeout = setTimeout(() => {
                        setCurrentSubtitle((prev) => prev.slice(0, -1));
                    }, deletingSpeed);
                } else {
                    // Finished deleting, move to next word or reset to first word
                    if (currentWordIndex < subtitleWords.length - 1) {
                        // Move to next word
                        setCurrentWordIndex((prev) => prev + 1);
                    } else {
                        // Reset to first word
                        setCurrentWordIndex(0);
                    }
                    setCurrentIndex(0);
                    setAnimationState(AnimationState.TYPING);
                }
                break;
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, currentWordIndex, subtitleWords, animationState, currentSubtitle.length]);

    return (
        <div className="flex flex-col justify-evenly">
            <h2 className={"font-bold " + titleSize}>{title}</h2>
            {subtitleWords && (
                <h3 className={"strong-gradient-text " + subtitleSize} style={{ minHeight: "1em" }}>
                    {currentSubtitle}
                    <span className="animate-cursor-blink">|</span>
                </h3>
            )}
            {text && <p className="text-[#6E6D8F] content-evenly text-lg sm:text-xl md:text-2xl transition-all duration-300">{text}</p>}
            {children}
        </div>
    );
};
