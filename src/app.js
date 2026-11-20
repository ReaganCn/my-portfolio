import React from "react";

import MenuContainer from "./views/containers/MenuContainer";
import HeaderComponent from "./views/components/Header";
import ProjectsContainer from "./views/containers/ProjectsContainer";
import ContactContainer from "./views/containers/ContactContainer";
import Footer from "./views/components/Footer";
import Cursor from "./views/components/fx/Cursor";

import { Projects } from "./data";
import useTheme from "./hooks/useTheme";

const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <a href="#projects" className="skip-link mono">
        Skip to content
      </a>
      <MenuContainer theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HeaderComponent />
        <ProjectsContainer data={Projects} />
        <ContactContainer />
      </main>
      <Footer />
      <Cursor />
      <div className="grain" aria-hidden="true" />
    </>
  );
};

export default App;
