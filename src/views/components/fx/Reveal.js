import React from "react";
import useInView from "../../../hooks/useInView";

/** Fades + lifts its children in the first time they scroll into view. */
const Reveal = ({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) => {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
