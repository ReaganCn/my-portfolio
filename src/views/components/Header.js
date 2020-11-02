import React from "react";

const HeaderComponent = () => {
  return (
    <div id="header" className="relative flex flex-col w-full mx-auto h-auto">
      <div>
        <img
          src="/public/imgs/background-1.jpg"
          className="absolute z-0 -mt-32 md:block hidden"
        />
        <img
          src="/public/imgs/background-2.jpg"
          className="absolute z-0 -mt-56 w-full hidden"
        />
      </div>
      <div
        id="header-title"
        className="flex items-center justify-center flex-col mt-12 ml-8 md:mt-48 z-10 md:-ml-48"
      >
        <div>
          <span className="text-gray-500 font-thin absolute -mt-20 -ml-32 font-space-mono">
            &lt;Fragment&gt;
          </span>
          <h1 className="md:text-6xl text-5xl">
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
  );
};

export default HeaderComponent;
