import React from "react";

import { Button } from "../index";

import "./index.css";
import "../../configs/fonts/Text.css";

const PlayerCard = props => {

    const { buttonName, buttonFunction, cardFunction, playerImage, playerPrice } = props;

    return (

        <div>
            <div className="player-card">
                <img onClick={() => cardFunction()} className="card-details-open" src={playerImage} alt="" />
                <div className="player-card-footer">
                    <span className="regular-normal-bold">€ {playerPrice}.00</span>
                    <Button buttonName={buttonName} onClick={() => buttonFunction()} buttonType="thin-button" />
                </div>
            </div>
        </div>
    );
};

export { PlayerCard };