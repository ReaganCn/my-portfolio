import { useEffect, useRef, useState } from "react";

/**
 * Flips to true the first time the element scrolls into view, then stops observing.
 * Falls back to "visible" when IntersectionObserver is unavailable.
 */
const useInView = ({ rootMargin = "0px 0px -10% 0px", threshold = 0.15 } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, threshold]);

  return [ref, inView];
};

export default useInView;
