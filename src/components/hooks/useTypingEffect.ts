import { useState, useEffect } from "react";

interface UseTypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const useTypingEffect = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 2000,
}: UseTypingEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayedText.length < currentWord.length) {
      // Typing the word
      const typingTimeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(typingTimeout);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting the word
      const deletingTimeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      }, deletingSpeed);

      return () => clearTimeout(deletingTimeout);
    } else if (!isDeleting && displayedText === currentWord) {
      // Wait before deleting
      const delayTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);

      return () => clearTimeout(delayTimeout);
    } else if (isDeleting && displayedText === "") {
      // Move to the next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [
    displayedText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Change every 500ms for blinking effect

    return () => clearInterval(cursorInterval);
  }, []);

  return { displayedText, showCursor };
};

export default useTypingEffect;
