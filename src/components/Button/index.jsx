import React from "react";
import "./index.css";
import "../../configs/fonts/Text.css";
import closeIcon from "../../assets/icons/close.svg";

const Button = props => {

    const { buttonName, onClick, buttonType } = props;
    
    const onClickFunction = () => {
        onClick();
    };

    return (
            <div
                onClick={onClickFunction} className={`${buttonType} regular-none-medium`}>
                {buttonType === "exit-button" ? <img src={closeIcon} alt="" /> : buttonName}
            </div>
    );
};

export { Button };