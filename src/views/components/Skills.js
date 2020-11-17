import React, {Fragment} from "react";

const SkillsComponent = (props) => {

  return (
    <Fragment>

      
        <div id="skill" className={`${props.id== 55 && "flex"} flex my-6 w-4/12 md:w-3/12 lg:w-auto md:my-4 lg:my-0 justify-center`}>
          <img className={`md:h-10 md:w-auto w-auto h-8 justify-self-start ${props.id== 55 && "animate-spin-slow"}`} src={`public/imgs/skills_logos/${props.id}.png`} alt={`${props.name}`}/>
          {props.id== 55 && <span className="self-center text-lg font-medium ml-3 text-react-blue tracking-wider"> React</span>}
        </div>
    
    </Fragment>
  );
};

export default SkillsComponent;
