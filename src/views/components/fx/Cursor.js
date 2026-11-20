import React, { useEffect, useRef, useState } from "react";
import useLerpFollow from "../../../hooks/useLerpFollow";
import useReducedMotion from "../../../hooks/useReducedMotion";

const INTERACTIVE = "a, button, input, textarea, label, [data-cursor]";

const finePointer = () =>
  typeof window !== "undefined" &&
  !!window.matchMedia &&
  window.matchMedia("(pointer: fine)").matches;

/**
 * A soft ring that trails the (still visible) native cursor and lights up
 * over anything clickable. Mouse/trackpad only; off for reduced motion.
 */
const Cursor = () => {
  const reduced = useReducedMotion();
  const [enabled] = useState(finePointer);
  const ref = useRef(null);
  const [hot, setHot] = useState(false);
  const [visible, setVisible] = useState(false);
  const active = enabled && !reduced;

  useLerpFollow(ref, { ease: 0.2, enabled: active });

  useEffect(() => {
    if (!active) return undefined;
    const over = (e) => {
      setVisible(true);
      setHot(!!(e.target.closest && e.target.closest(INTERACTIVE)));
    };
    const leave = () => setVisible(false);
    document.addEventListener("pointerover", over);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div ref={ref} className={`cursor ${visible ? "is-visible" : ""}`} aria-hidden="true">
      <span className={`cursor__ring ${hot ? "is-hot" : ""}`} />
    </div>
  );
};

export default Cursor;
