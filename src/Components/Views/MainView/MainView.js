import React from "react";
import InputButton from "../../Buttons/InputButton/InputButton";
import DropdownView from "../DropdownView/DropdownView";
import InputBottunView from "../InputButtonView/InputButtonView";
import InputView from "../InputView/InputView";

const MainView = () => {
    return(
        <div>
            <DropdownView />
            <InputView />
            <InputBottunView />
        </div>
    );
}
export default MainView;