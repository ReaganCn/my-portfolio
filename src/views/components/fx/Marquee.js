import React from "react";

/** Seamless infinite ticker: the group is rendered twice and the track slides by -50%. */
const Marquee = ({ children, duration = 40, className = "", label }) => (
  <div className={`marquee ${className}`} role="region" aria-label={label}>
    <div className="marquee__track" style={{ "--dur": `${duration}s` }}>
      <ul className="marquee__group">{children}</ul>
      <ul className="marquee__group marquee__group--clone" aria-hidden="true">
        {children}
      </ul>
    </div>
  </div>
);

export default Marquee;
