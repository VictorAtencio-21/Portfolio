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
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 2000,
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
