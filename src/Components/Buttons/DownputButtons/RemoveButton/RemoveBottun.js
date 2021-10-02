import React from "react";
import './RemoveButton.css';
const RemoveButton = ({handelWithRemove=undefined , Id=0}) =>{
    return (<button className="removeButton" onClick={()=>handelWithRemove(Id)}></button>);
};
export default RemoveButton;