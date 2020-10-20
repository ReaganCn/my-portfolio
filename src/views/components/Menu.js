import React from "react";

const MenuComponent = () => {
  return (
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
  );
};

export default MenuComponent;
