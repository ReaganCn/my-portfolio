import React, {Fragment} from "react";

const SkillsComponent = (props) => {

  return (
    <Fragment>

      
        <div id="skill" className={`${props.id== 55 && "flex"}`}>
          <img className={`h-10 ${props.id== 55 && "animate-spin-slow"}`} src={`public/imgs/skills_logos/${props.id}.png`} alt={`${props.name}`}/>
          {props.id== 55 && <span className="self-center text-lg font-medium ml-3 text-react-blue tracking-wider"> React</span>}
        </div>
    
    </Fragment>
  );
};

export default SkillsComponent;