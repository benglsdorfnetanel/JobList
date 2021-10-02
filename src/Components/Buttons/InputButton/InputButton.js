import React from "react";
import {useState} from "react";
const InputButton = ({handleAddItem=undefined}) => {
    const [textState,setText] = useState("");

    const handleWithAddText = (e) => {
        setText(e.target.value);
    }
    return(
        <div>
            <input type="text" id="sometext" name="sometext" placeholder="Enter String" onChange={handleWithAddText}/>
            <button onClick={()=>handleAddItem(textState)}>+</button>
        </div>
    );
};
export default InputButton;