import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SidebarItem({ faIcon, linkTo, title, className }) {
    return (
            <NavLink 
                exact='true' 
                activeclassname="active" 
                className={className?className:""}
                to={linkTo}
                // onClick={onClickHandler}
            >
                <FontAwesomeIcon icon={faIcon} color="#000"/>
                <span className="nav-bar__item-title">{title}</span>
            </NavLink>
    );
}

export default SidebarItem;