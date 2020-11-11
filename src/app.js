import React, { Fragment, useEffect, useState } from "react";

import ProjectsContainer from "./views/containers/ProjectsContainer";
import HeaderComponent from "./views/components/Header";
import MenuComponent from "./views/components/Menu";
import SkillsContainer from "./views/containers/SkillsContainer";
import ContactComponent from "./views/components/Contact";

import { Projects, Skills } from "./data";
import ContactContainer from "./views/containers/ContactContainer";

const App = (props) => {
  return (
    <Fragment>
      <div id="body-wrapper" className="flex w-full h-full flex-col">
          <MenuComponent />
          <HeaderComponent />
        <div className="w-full flex z-10" id="tail-section">
          <div id="main" className="flex flex-col w-full">
            <SkillsContainer data={Skills} />
            <ProjectsContainer data={Projects} />
            <ContactContainer />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
