import { useCallback, useEffect, useState } from "react";

// The initial theme is set by an inline script in public/index.html (before first paint).
const readTheme = () =>
  document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";

const useTheme = () => {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* storage unavailable — theme just won't persist */
      }
      return next;
    });
  }, []);

  return [theme, toggle];
};

export default useTheme;
