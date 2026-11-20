import React, { useRef, useState } from "react";
import { Skills } from "../../data";
import SkillsContainer from "../containers/SkillsContainer";
import SplitLines from "./fx/SplitLines";
import Reveal from "./fx/Reveal";
import Clock from "./fx/Clock";
import useTypewriter from "../../hooks/useTypewriter";
import useLerpFollow from "../../hooks/useLerpFollow";
import useReducedMotion from "../../hooks/useReducedMotion";

const finePointer = () =>
  typeof window !== "undefined" &&
  !!window.matchMedia &&
  window.matchMedia("(pointer: fine)").matches;

const Typed = ({ text, delay, className, caret = false }) => {
  const [shown, done] = useTypewriter(text, { delay });
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {shown}
        {caret && <span className={`caret ${done ? "is-blinking" : ""}`} />}
      </span>
    </span>
  );
};

const HeaderComponent = () => {
  const heroRef = useRef(null);
  const blobRef = useRef(null);
  const reduced = useReducedMotion();
  const [fine] = useState(finePointer);
  const follow = fine && !reduced;

  useLerpFollow(blobRef, { ease: 0.06, enabled: follow, relativeTo: heroRef });

  return (
    <section id="top" className="hero" ref={heroRef}>
      <div
        ref={blobRef}
        className={`hero__blob-anchor ${follow ? "" : "is-static"}`}
        aria-hidden="true"
      >
        <span className="hero__blob" />
      </div>

      <div className="hero__inner container">
        <p className="hero__prompt mono">
          <span className="accent-ink" aria-hidden="true">
            &gt;{" "}
          </span>
          <Typed text="hello, world" delay={150} caret />
        </p>

        <Typed text="<React.Fragment>" delay={900} className="hero__tag mono" />

        <SplitLines
          as="h1"
          className="hero__title"
          label="Hello! I'm Charana Reagan"
          delay={250}
          stagger={110}
          lines={[
            "Hello!",
            <>
              I'm Charana <em className="serif hl">Reagan</em>
            </>,
          ]}
        />

        <Reveal as="p" className="hero__tagline" delay={650}>
          A Senior Software Engineer based in Nairobi, Kenya.
        </Reveal>

        <Typed
          text="</React.Fragment>"
          delay={1500}
          className="hero__tag hero__tag--close mono"
        />

        <Reveal className="hero__meta mono" delay={900}>
          <span className="hero__pulse" aria-hidden="true" />
          <span>Nairobi, KE</span>
          <span className="muted" aria-hidden="true">
            /
          </span>
          <Clock />
        </Reveal>
      </div>

      <a href="#skills" className="scroll-cue mono" aria-label="Scroll to skills">
        scroll <span className="scroll-cue__arrow">↓</span>
      </a>

      <SkillsContainer data={Skills} />
    </section>
  );
};

export default HeaderComponent;
