import React from "react";

const ProjectsComponent = () => {
    return (
     <div id="project1" className="flex mb-32">
        <div id="img-section" className="w-2/4 self-center ml-20">
            <img src="public/imgs/projects/website-3.png" className="w-3/4"/>
        </div>
        <div id="info" className="flex w-2/4 flex-col">
            <div id="title" className=" text-center text-xl font-semibold my-2">
                <i className="fas fa-address-card"></i>
                <h2>My portfolio</h2>
            </div>
            <div id="description" className="w-2/3 text-center mx-auto">
                <p className="text-left">
                    This website is a redesign of my previous portfolio for speed and efficiency.
                </p>
                <h3 className=" my-2 font-space-mono ml-1 text-left">Technologies:</h3>
                <ul className="list-disc font-space-mono list-inside text-left ml-2">
                    <li>HTML5</li>
                    <li>ReactJs</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default ProjectsComponent;