import React from "react";
import './AddButton.css';
const AddButton = ({handleWithAdd=undefined,Text=""}) =>{
    return (<button className="addButton" onClick={()=>handleWithAdd(Text)}></button>);
};
export default AddButton;