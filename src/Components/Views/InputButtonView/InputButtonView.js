import React from "react";
import { useState } from "react";
import InputButton from "../../Buttons/InputButton/InputButton";
import Downput
 from "../../Downput/Downput";
const InputBottunView = () =>{
    const [textArray,setTextArray] = useState([]);

    const handleAddItem = (e) => {
        let temparray =[...textArray];
        let text = { key: true, text: e };
        temparray.push(text);
        setTextArray(temparray);
    }
    const handleRemoveItem = (e) => {
        let temparray =[...textArray];
        let index = temparray.indexOf(e)
        temparray.splice(index, 1)
        setTextArray(temparray);
    }
    return(
        <div>
            <div>
                <InputButton handleAddItem={handleAddItem}/>
            </div>
            <div>
                <Downput Array={textArray} handleRemoveItem={handleRemoveItem} handleAddItem={handleAddItem}/>
            </div>
        </div>
    );
};
export default InputBottunView;