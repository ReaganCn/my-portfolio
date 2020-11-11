import React from "react";

const MenuComponent = () => {
  return (
    <div id="menu-bar" className="flex w-full justify-end my-6 z-10 relative">
      <div
        id="left-menu"
        className="absolute left-0 md:mx-10 mx-3 flex self-center"
      >
        <span className="flex h-full">
          <i className="fas fa-moon md:text-xl hidden md:visible self-center"></i>
          <p className="ml-1 md:ml-5 self-center font-space-mono tracking-wide font-semibold my-auto">
            &nbsp; Dark Mode
          </p>
        </span>
        {/* <i className="far fa-moon hidden"></i> */}
      </div>
      <div
          className="flex lg:hidden ml-20 md:mr-0 flex-col self-center"
          id="right-menu-sm"
        >
          <button className="flex items-center px-3 py-2 text-black border-black float-right">
            <svg
              className="h-4 w-6 fill-black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <i className="fas fa-times text-black invisible"></i>
          </button>
          <div className=" -mb-24 mx-auto hidden">
          <nav className={`md:mx-10 my-3`}>
          <a href="#projects">Projects</a>
        </nav>
        <nav className="md:mx-10 my-6">
          <a href="#contact">Contact</a>
        </nav>
          </div>
        </div>

      <div
        className="absolute lg:flex lg:flex-row flex-col text-lg right-0 md:mr-12 lg:-mr-8 self-center invisible lg:visible"
        id="right-menu"
      >
        <nav className={`md:mx-10`}>
          <a href="#projects">Projects</a>
        </nav>
        <nav className="md:mx-10">
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </div>
  );
};

export default MenuComponent;
