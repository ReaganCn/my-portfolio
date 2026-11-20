import React from "react";
import useInView from "../../../hooks/useInView";

/**
 * Each line rises out of its own mask, staggered. Screen readers get `label`
 * as one sentence; the visual pieces are hidden from them.
 */
const SplitLines = ({ as: Tag = "h2", lines, label, delay = 0, stagger = 90, className = "" }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <Tag ref={ref} className={`split ${inView ? "is-in" : ""} ${className}`} aria-label={label}>
      {lines.map((line, i) => (
        <span className="split__mask" key={i} aria-hidden="true">
          <span className="split__line" style={{ "--d": `${delay + i * stagger}ms` }}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
};

export default SplitLines;
