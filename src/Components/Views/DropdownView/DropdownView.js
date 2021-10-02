import React from "react";
import { useState,useEffect } from "react";
import DropdownButton from "../../Buttons/DropdownButton/DropdownButton";
import Downput from "../../Downput/Downput";

const DropdownView = () => {
    //States
    const [downput, setDownput] = useState([]);
    const [arrayCars,setArrayCars] = useState([]);
    //Info
    const carHardCode = [
        { id: 1, value: "Mercedes", text: "Mercedes" },
        { id: 2, value: "Audi", text: "Audi" },
        { id: 3, value: "BMW", text: "BMW" },
        { id: 4, value: "Ferrari", text: "Ferrari" },
        { id: 5, value: "Aston Martin", text: "Aston Martin" }
    ]
    //Function
    useEffect(() => {
        setArrayCars(downput)
    },[downput]);

    const handleAddItem = (e) => {
        let temparray =[...downput];
        let selectedCar = { key: false, text: e };
        temparray.push(selectedCar);
        setDownput(temparray);
    }

    const handleRemoveItem = (e) => {
        let temparray =[...downput];
        let index = temparray.indexOf(e)
        temparray.splice(index, 1)
        setDownput(temparray);
    }
    return (
        <>
            <div>
                <div>
                    <DropdownButton carHardCode={carHardCode} handleAddItem={handleAddItem}></DropdownButton>
                </div>
                <div>
                    <Downput Array={downput} handleRemoveItem={handleRemoveItem} handleAddItem={handleAddItem}/>
                </div>
            </div>
        </>
    );
};
export default DropdownView;