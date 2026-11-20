import React from "react";
import useScramble from "../../hooks/useScramble";
import ScrambleText from "./fx/ScrambleText";

const Footer = () => {
  const [frame, run] = useScramble("back to top");
  return (
    <footer className="footer container mono">
      <span className="footer__eof">
        <span className="accent-ink" aria-hidden="true">
          &gt;
        </span>{" "}
        eof
      </span>
      <span className="muted">© {new Date().getFullYear()} Charana Reagan</span>
      <a href="#top" className="footer__top" onMouseEnter={run} onFocus={run}>
        <ScrambleText text="back to top" frame={frame} /> <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
};

export default Footer;
