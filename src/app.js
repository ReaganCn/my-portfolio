import React, { Fragment, useEffect, useState } from "react";

import ProjectsContainer from "./views/containers/ProjectsContainer";

import {Projects} from "./data";

const App = (props) => {
return (
    <ProjectsContainer data = {Projects}/>
)
};

export default App;
