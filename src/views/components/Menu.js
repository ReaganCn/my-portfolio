import React from "react";
import useScramble from "../../hooks/useScramble";
import ScrambleText from "./fx/ScrambleText";

const LINKS = [
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

const NavLink = ({ href, label, onClick }) => {
  const [frame, run] = useScramble(label);
  return (
    <a href={href} className="nav__link mono" onMouseEnter={run} onFocus={run} onClick={onClick}>
      <span className="nav__hash" aria-hidden="true">
        #
      </span>
      <ScrambleText text={label} frame={frame} />
    </a>
  );
};

const ThemeToggle = ({ theme, toggleTheme }) => {
  const next = theme === "dark" ? "light" : "dark";
  const [frame] = useScramble(`[ ${next} ]`);
  return (
    <button
      type="button"
      className="nav__toggle mono"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} mode`}
    >
      <span aria-hidden="true">{frame}</span>
    </button>
  );
};

const MenuComponent = ({ theme, toggleTheme, open, toggleOpen, close, scrolled, progressRef }) => (
  <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
    <span className="nav__progress" ref={progressRef} aria-hidden="true" />
    <div className="nav__inner container">
      <a href="#top" className="nav__brand mono" onClick={close}>
        charana<span className="accent-ink">.</span>reagan
      </a>

      <nav className="nav__links" aria-label="Primary">
        {LINKS.map((l) => (
          <NavLink key={l.href} {...l} />
        ))}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>

      <div className="nav__mobile-actions">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <button
          type="button"
          className="nav__menu-btn mono"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={toggleOpen}
        >
          {open ? "close" : "menu"}
        </button>
      </div>
    </div>

    <div id="mobile-menu" className="overlay" aria-hidden={!open}>
      <nav className="overlay__links container" aria-label="Mobile">
        {LINKS.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            className="overlay__link"
            style={{ "--d": `${80 + i * 70}ms` }}
            onClick={close}
            tabIndex={open ? 0 : -1}
          >
            <span className="overlay__idx mono">0{i + 1}</span>
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default MenuComponent;
