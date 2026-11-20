import React, { useEffect } from "react";
import useInView from "../../../hooks/useInView";
import useScramble from "../../../hooks/useScramble";
import ScrambleText from "./ScrambleText";

/** Mono "### 01 — projects" label that decodes itself when scrolled into view. */
const SectionLabel = ({ index, label }) => {
  const [ref, inView] = useInView();
  const text = `${index} — ${label}`;
  const [frame, run] = useScramble(text, { duration: 600 });

  useEffect(() => {
    if (inView) run();
  }, [inView, run]);

  return (
    <p ref={ref} className="section-label mono">
      <span className="section-label__hash" aria-hidden="true">
        ###
      </span>
      <ScrambleText text={text} frame={frame} />
    </p>
  );
};

export default SectionLabel;
