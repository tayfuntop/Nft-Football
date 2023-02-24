import React from "react";
import { Link } from "react-scroll";

import "../../configs/fonts/Text.css";
import "./index.css";

const TabButton = props => {

    return (
        <div>
            <nav className="navbar">
                <ul className="nav-menu ">
                    <li className="nav-item">
                        <Link
                            className="large-none-medium tab-bar flex flex-col" to="mycards"
                            spy={true} smooth={true} offset={-10} duration={500} style={{ color: "white" }}>
                            MY CARDS<span style={{ width: "48px", left: "15px" }}></span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="large-none-medium tab-bar flex flex-col" to="market"
                            spy={true} smooth={true} offset={-152} duration={500} style={{ color: "white" }}>
                            MARKET<span style={{ width: "48px", left: "7px" }}></span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export { TabButton };