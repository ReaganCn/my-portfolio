import { useEffect, useState } from "react";

/**
 * Writes page scroll progress (0–1) to `barRef` as a scaleX transform without re-rendering,
 * and returns whether the page has been scrolled past `threshold` px.
 */
const useScrollProgress = (barRef, threshold = 40) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY || doc.scrollTop;
      if (barRef.current) {
        const p = max > 0 ? Math.min(1, y / max) : 0;
        barRef.current.style.transform = `scaleX(${p})`;
      }
      setScrolled(y > threshold);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [barRef, threshold]);

  return scrolled;
};

export default useScrollProgress;
