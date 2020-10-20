import React, {Fragment} from "react";

const SkillsComponent = (props) => {

  return (
    <Fragment>

      
        <div id="skill">
          <img className="h-10" src={`public/imgs/skills_logos/${props.id}.png`} alt={`${props.name}`}/>
        </div>
    
    </Fragment>
  );
};

export default SkillsComponent;
