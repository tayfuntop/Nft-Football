import React, { useState } from "react";
import "./index.css";
import "../../configs/fonts/Text.css";
import wallet from "../../assets/icons/vole_wallet.svg";
import { Spin } from 'antd';

const Budget = props => {

    const { budget } = props;

    setTimeout(() => {
        setLoading(true);
    }, 1000);
    
    const [loading, setLoading] = useState(false);

    return (
        <div className="budget">
            <span className="wallet">
                <img src={wallet} alt="" />
            </span>
            <span className="title3 price-case">{loading === false ? <Spin className="ml-8" /> : "€ " + budget.budget + ".00"}</span>
        </div>
    );
};

export { Budget };