import React from "react";

import "./Sidebar.scss";

import { faBars } from "@fortawesome/free-solid-svg-icons";

import SidebarBody from "./SidebarBody";
import SidebarItem from "./SidebarBodyItem";
import SidebarIllustration from "./SidebarIllustration";

import image from "./lpg-gas-illustration.png";

function Sidebar() {

    return (
        <div className="nav-bar">
            <SidebarItem faIcon={faBars}
                         linkTo='/'
                         title='Menu'
                         className='menu-button'
            />
            <SidebarIllustration image={image}/>
            <SidebarBody />
        </div>
    );
}

export default Sidebar;