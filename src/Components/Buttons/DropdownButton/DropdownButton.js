import React from "react";
import {useState,useEffect} from "react";
const DropdownButton = ({carHardCode=[],handleAddItem = undefined}) =>{
    //States
    const [carsArray , setCarsArray] = useState([]);
    const [selectedCar , setselectedCar] = useState();

    //Functions
    useEffect(() => {
        setCarsArray(carHardCode);
    },[]);

    return(
        <div>
            <select 
            value={selectedCar}
            onChange={(e) => handleAddItem(e.target.value)}>
                {
                    carsArray.map((index) =>{
                    return <option key={index.value} value={index.value}>{index.text}</option>
                    })
                }
            </select>
        </div>
    );
};
export default DropdownButton;