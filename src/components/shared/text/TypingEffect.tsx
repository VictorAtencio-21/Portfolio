"use client";
import useTypingEffect from "@/components/hooks/useTypingEffect";

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const TypingEffect = ({
  words,
  typingSpeed = 250, // Default typing speed (ms)
  deletingSpeed = 250, // Default deleting speed (ms)
  delayBetweenWords = 1000, // Default delay between words (ms)
}: TypingEffectProps) => {
  const { displayedText, showCursor } = useTypingEffect({
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  });

  return (
    <span className="inline-block font-mono text-4xl md:text-6xl">
      {displayedText}
      <span
        className={`inline-block w-[1ch] ${showCursor ? "animate-blink" : ""}`}
      >
        |
      </span>
    </span>
  );
};

export default TypingEffect;
