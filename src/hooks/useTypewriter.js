import { useEffect, useState } from "react";
import { prefersReducedMotion } from "./useReducedMotion";

/** Types `text` out one character at a time after `delay` ms. */
const useTypewriter = (text, { delay = 0, speed = 45 } = {}) => {
  const [count, setCount] = useState(() =>
    prefersReducedMotion() ? text.length : 0
  );

  useEffect(() => {
    if (prefersReducedMotion()) {
      setCount(text.length);
      return undefined;
    }
    setCount(0);
    let interval;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, delay, speed]);

  return [text.slice(0, count), count >= text.length];
};

export default useTypewriter;
