import React from "react";
import { useState } from "react";

import "./Sidebar.scss";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SidebarBody from "./SidebarBody";
import SidebarItem from "./SidebarBodyItem";
import SidebarIllustration from "./SidebarIllustration";

import image from "./lpg-gas-illustration.png";

function Sidebar() {
    const [open, setopen] = useState(true)
    const toggleOpen = () => {
        setopen(!open)
    }

    return (
        <div className={open?"nav-bar":"nav-bar-closed"}>
            <span className="menu-button" onClick={toggleOpen}>
                <FontAwesomeIcon icon={faBars} color="#000"/>
            </span>
            <SidebarIllustration image={image}/>
            <SidebarBody opene={open}/>
        </div>
    );
}

export default Sidebar;