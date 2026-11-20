import { useCallback, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "./useReducedMotion";

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";

/**
 * Resolves a short string left-to-right out of random glyphs.
 * Meant for short mono labels only — never body copy.
 * Returns [displayedText, run]. Changing `text` re-runs the effect automatically.
 */
const useScramble = (text, { duration = 450, onMount = false } = {}) => {
  const [out, setOut] = useState(text);
  const frame = useRef(0);
  const first = useRef(true);

  const run = useCallback(() => {
    cancelAnimationFrame(frame.current);
    if (prefersReducedMotion()) {
      setOut(text);
      return;
    }
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const settled = Math.floor(p * text.length);
      let next = "";
      for (let i = 0; i < text.length; i++) {
        const c = text[i];
        next +=
          i < settled || c === " "
            ? c
            : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      setOut(next);
      if (p < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  }, [text, duration]);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      if (onMount) run();
      return;
    }
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return [out, run];
};

export default useScramble;
