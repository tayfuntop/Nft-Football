import React from "react";

import { Link } from "react-scroll";

import logoIcon from "../../assets/logo/white-logo.png";
import "./index.css";

const Logo = props => {
    
    return (
        <div className="logo">
            <Link className="large-none-medium" to="home-page" spy={true} smooth={true} offset={-150} duration={500}>
                <img src={logoIcon} alt="" />
            </Link>
        </div>
    );
};

export { Logo };