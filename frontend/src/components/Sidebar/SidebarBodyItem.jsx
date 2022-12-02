import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SidebarItem({ faIcon, linkTo, title, className, open=true}) {
    return (
            <NavLink 
                exact='true' 
                activeclassname="active" 
                className={className?className:""}
                to={linkTo}
            >
                <FontAwesomeIcon icon={faIcon} color="#000"/>
                <p className={open?"nav-bar__item-title":"nav-bar__item-title-closed"}>{title}</p>
            </NavLink>
    );
}

export default SidebarItem;