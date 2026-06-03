"use client";

import { useEffect, useSyncExternalStore, useState } from "react";

type Props = {
  words: readonly string[];
  className?: string;
};

const WORD_STAGGER_MS = 90;
const WORD_ANIM_MS = 550;
const HOLD_MS = 1800;
const EXIT_MS = 450;

function subscribe(callback: () => void): () => void {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot(): boolean {
  return false;
}

function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function Typewriter({ words: phrases, className }: Props) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const reducedMotion = useReducedMotion();

  const current = phrases[reducedMotion ? 0 : index] ?? "";
  const tokens = current.split(" ");

  useEffect(() => {
    if (reducedMotion) return;
    if (phrases.length <= 1) return;
    const enterTotal = tokens.length * WORD_STAGGER_MS + WORD_ANIM_MS;
    const holdId = setTimeout(() => setPhase("out"), enterTotal + HOLD_MS);
    const nextId = setTimeout(() => {
      setPhase("in");
      setIndex((i) => (i + 1) % phrases.length);
    }, enterTotal + HOLD_MS + EXIT_MS);
    return () => {
      clearTimeout(holdId);
      clearTimeout(nextId);
    };
  }, [index, phrases.length, tokens.length, reducedMotion]);

  const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a), "");

  if (reducedMotion) {
    return (
      <span className={`inline-block align-bottom ${className ?? ""}`}>
        {current}
      </span>
    );
  }

  return (
    <span className={`inline-block align-bottom ${className ?? ""}`} aria-live="polite">
      {/* Invisible widest phrase keeps the container stable — hidden from AT */}
      <span className="invisible block h-0 overflow-hidden" aria-hidden="true">
        {longest}
      </span>
      <span
        className="block whitespace-nowrap"
        style={{ height: "1.15em", lineHeight: "1.15em" }}
        key={index}
      >
        {tokens.map((word, i) => {
          const isOut = phase === "out";
          const delay = isOut
            ? (tokens.length - 1 - i) * (WORD_STAGGER_MS / 2)
            : i * WORD_STAGGER_MS;
          return (
            <span
              key={i}
              className="inline-block"
              style={{
                transition: `opacity ${isOut ? EXIT_MS : WORD_ANIM_MS}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${isOut ? EXIT_MS : WORD_ANIM_MS}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${isOut ? EXIT_MS : WORD_ANIM_MS}ms ease-out ${delay}ms`,
                opacity: isOut ? 0 : 1,
                transform: isOut ? "translateY(-30%)" : "translateY(0)",
                filter: isOut ? "blur(10px)" : "blur(0px)",
                animation:
                  phase === "in"
                    ? `tw-word-in ${WORD_ANIM_MS}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`
                    : undefined,
                marginRight: i < tokens.length - 1 ? "0.28em" : 0,
              }}
            >
              {word}
            </span>
          );
        })}
      </span>
    </span>
  );
}
