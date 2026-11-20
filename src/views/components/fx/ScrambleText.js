import React from "react";

/**
 * Renders the real text for assistive tech and the scrambled frame visually.
 * Pair with useScramble: <ScrambleText text={label} frame={scrambled} />
 */
const ScrambleText = ({ text, frame, className = "" }) => (
  <span className={className}>
    <span className="sr-only">{text}</span>
    <span aria-hidden="true">{frame}</span>
  </span>
);

export default ScrambleText;
