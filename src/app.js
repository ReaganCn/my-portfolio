import React, { Fragment, useEffect, useState } from "react";

import ProjectsContainer from "./views/containers/ProjectsContainer";

import { Projects } from "./data";

const App = (props) => {
  return (
    <Fragment>
      <div id="body-wrapper" className="flex w-full h-full flex-col">
        {/* MENU */}
        <div id="menu-bar" className="flex w-full justify-end my-6 z-10">
          <div id="left-menu" className="absolute left-0 mx-10">
            <span className="flex h-full">
              <i className="fas fa-moon text-xl"></i>
              <p className="ml-5 self-center font-space-mono tracking-wide font-semibold my-auto">
                Dark Mode
              </p>
            </span>
            <i className="far fa-moon hidden"></i>
          </div>
          <div
            className="absolute flex flex-row text-lg right-0 mr-12"
            id="right-menu"
          >
            <nav className="md:mx-10">
              <a href="#projects">Projects</a>
            </nav>
            <nav className="md:mx-10">
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
        <div id="header" className="relative flex flex-col w-full mx-auto h-auto">
          <div>
            <img
              src="/public/imgs/background-1.jpg"
              className="absolute z-0 -mt-32"
            />
            <img
              src="/public/imgs/background-2.jpg"
              className="absolute z-0 -mt-56 w-full hidden"
            />
          </div>
          <div
            id="header-title"
            className="flex items-center justify-center flex-col md:mt-48 z-10 -ml-48"
          >
            <div>
              <span className="text-gray-500 font-thin absolute -mt-20 -ml-32 font-space-mono">
                &lt;Fragment&gt;
              </span>
              <h1 className="text-6xl">
                Hello ! <br /> I'm Charana Reagan
              </h1>
              <h3 className="text-2xl text-gray-700">
                A web developer based in Nairobi, Kenya.
              </h3>
              <span className="text-gray-500 font-thin absolute mt-12 right-0 mr-64">
                &lt;/<span className="font-space-mono">Fragment</span>&gt;
                <span className="mr-32"></span>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex z-10" id="tail-section">
          <div id="main" className="flex flex-col w-full">

                    <div id="skills-section" className="flex mt-48 mx-12">
                        <span className="-ml-12 self-center flex flex-col relative">
                            <p className="font-space-mono text-xs tracking-wider font-semibold" id="skills-header">Skills</p>

                        </span>
                        <div id="skills-images" className="flex justify-between w-full ml-4">
                        <div id="skill" >
                            <img className="h-10" src="public/imgs/skills_logos/javascript.png" />
                        </div>
                        <div id="skill" >
                            <img className="h-10" src="public/imgs/skills_logos/tailwindcss.png" />
                        </div>
                        <div id="skill" >
                            <img className="h-10" src="public/imgs/skills_logos/bootstrap.png" />
                        </div>
                        <div id="skill" >
                            <img className="h-10" src="public/imgs/skills_logos/git1.png" />
                        </div>
                        <div id="skill" className="flex">
                            <img className="h-10 animate-spin-slow" src="public/imgs/skills_logos/reactjs.png" />
                            <span className="self-center text-lg font-medium ml-3 text-react-blue tracking-wider"> React</span>
                        </div>
                        <div id="skill" >
                            <img className="h-10" src="public/imgs/skills_logos/redux.png" />
                        </div>
                        <div id="skill" >
                            <img className="h-10" src="public/imgs/skills_logos/nodejs.png" />
                        </div>
                        <div id="skill" >
                            <img className="h-10" src="public/imgs/skills_logos/mongodb.png" />
                        </div>
                        <div id="skill" >
                            <img className="h-10" src="public/imgs/skills_logos/sql.png" />
                        </div>
    
                    </div>
    
                </div>


                <ProjectsContainer data = {Projects}/>
                <div id="contact" className="flex w-full mx-auto mb-20 flex-col mt-40 h-full justify-center">
                    <span className="absolute">
                        <p className="font-space-mono text-xs tracking-wider font-semibold" id="skills-header">Contact</p>
                    </span>
                    <div className="m-3 text-center mt-0"><h1 className=" text-3xl font-bold">Get in touch.</h1></div>
                    <form className="flex w-6/12 mx-auto flex-col">
                        <div className="flex justify-between w-11/12 m-3">
                            <span className="flex flex-col w-11/12 m-3 ml-0">
                                <label for="name" className="m-2">Your name</label>
                                <input type="text" name="name"  className=" border border-black p-1 w-full h-8 outline-none"/>
                            </span>
                                <span className="flex flex-col w-11/12 m-3 mr-0"> 
                                    <label for="email" className="m-2">Your email</label>
                                    <input type="text" name="email" className=" border border-black p-1 w-full h-8 outline-none"/></span>
                        </div>
                        <span className="flex flex-col w-11/12 m-3"> 
                            <label for="email" className="m-2">Subject</label>
                            <input type="text" name="email" className=" border border-black p-1 w-full h-8 outline-none"/>
                        </span>
                        <span className="flex flex-col w-11/12 m-3"> 
                                <label for="email" className="m-2">Message</label>
                                <textarea type="text" name="email" className=" border border-black p-1 w-full h-32 outline-none"></textarea>
                        </span>
    
                        <button type="submit" className="border border-black  w-2/12 h-10 mx-auto bg-black text-white hover:text-black hover:bg-white m-3"> Submit </button>
                    </form>
                </div>




          </div>
        </div>

        </div>
    </Fragment>
  );
};

export default App;
