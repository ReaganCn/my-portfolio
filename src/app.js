import React, { Fragment, useEffect, useState } from "react";

import ProjectsContainer from "./views/containers/ProjectsContainer";
import HeaderComponent from "./views/components/Header";

import SkillsContainer from "./views/containers/SkillsContainer";
import ContactComponent from "./views/components/Contact";

import { Projects, Skills } from "./data";
import ContactContainer from "./views/containers/ContactContainer";
import MenuContainer from "./views/containers/MenuContainer";

const App = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };
  
  return (
    <Fragment>
      <div id="body-wrapper" className={`flex w-full h-full flex-col mx-auto ${darkMode ? "text-white bg-black" : "text-black bg-white"}`}>
         <MenuContainer
               toggleDark={() => toggleDark()}
         />
          <HeaderComponent 
          darkMode={darkMode}
          />
        <div className="w-full flex z-10 relative" id="tail-section">
          <div id="main" className="flex flex-col w-full">

            <ProjectsContainer data={Projects} />
            <ContactContainer />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
