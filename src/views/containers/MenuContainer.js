import React, { useEffect, useRef, useState } from "react";
import MenuComponent from "../components/Menu";
import useScrollProgress from "../../hooks/useScrollProgress";

const MenuContainer = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const progressRef = useRef(null);
  const scrolled = useScrollProgress(progressRef);

  // Lock page scroll and allow Escape while the mobile overlay is open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <MenuComponent
      theme={theme}
      toggleTheme={toggleTheme}
      open={open}
      toggleOpen={() => setOpen((o) => !o)}
      close={() => setOpen(false)}
      scrolled={scrolled}
      progressRef={progressRef}
    />
  );
};

export default MenuContainer;
