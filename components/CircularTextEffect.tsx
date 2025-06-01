"use client";

import { useRef, useEffect } from "react";

interface CircularTextProps {
  text: string;
  radius?: number; // Distance from center
  className?: string; // Optional Tailwind or custom class
}

export default function CircularText({ text, radius = 80, className = "" }: CircularTextProps) {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const characters = text.split("");
    const angleStep = 360 / characters.length;

    textRef.current.innerHTML = characters
      .map(
        (char, i) =>
          `<span style="
            position: absolute;
            transform: rotate(${i * angleStep}deg);
            transform-origin: 0 ${radius}px;
            height: ${radius}px;
            display: inline-block;
          ">${char}</span>`
      )
      .join("");
  }, [text, radius]);

  return (
    <div
      ref={textRef}
      className={`relative rounded-full ${className}`}
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    />
  );
}
