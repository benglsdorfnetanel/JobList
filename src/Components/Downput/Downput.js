import React from "react";
import { useState, useEffect } from "react";
import AddButton from "../Buttons/DownputButtons/AddButton/AddButton";
import RemoveButton from "../Buttons/DownputButtons/RemoveButton/RemoveBottun";

const Downput = ({Array=[],handleRemoveItem=undefined,handleAddItem=undefined}) =>{

    //States
    const [array,setArray] = useState(Array);

    //Functions
    useEffect(() => {
        setArray(Array);
    },[Array]);
    const handelWithRemove = (id) =>{
        handleRemoveItem(id);
    }
    const handleWithAdd = (text) =>{
        handleAddItem(text);
    }
    return(
        <div>
            {array.map((index,i)=>{
                //false for button
                if(index.key === false){
                        return(
                            <div>
                                <a>{index.text}</a> <AddButton handleWithAdd={handleWithAdd} Text={index.text} /> <RemoveButton handelWithRemove={handelWithRemove} Id={i} />
                            </div>
                        );
                    }
                    //true for button
                if(index.key === true){ 
                        return(
                            <div>
                                <button type="button">{index.text}</button> <AddButton handleWithAdd={handleWithAdd} Text={index.text} /> <RemoveButton handelWithRemove={handelWithRemove} Id={i} />
                            </div>
                        );
                    }
                })
            }
        </div>
    );
};

export default Downput;