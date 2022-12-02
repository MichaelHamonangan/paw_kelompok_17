import React from "react";
import SidebarBodyItem from "./SidebarBodyItem";
import SidebarIllustration from "./SidebarIllustration";

import { faHome, faHandHoldingDollar, faDashboard } from "@fortawesome/free-solid-svg-icons";
import image from "./lpg-gas-illustration.png";

function SidebarBody({openStatus}){
    return (
        <div className="sidebar-body">
            <SidebarIllustration image={image}/>
            <nav>
                <SidebarBodyItem 
                    faIcon={faHome}
                    linkTo='/'
                    title='Home'
                />
                <SidebarBodyItem 
                    faIcon={faDashboard}
                    linkTo='/dashboard'
                    title='Dashboard'
                />
                <SidebarBodyItem 
                    faIcon={faHandHoldingDollar}
                    linkTo='/penjualan-lpg'
                    title='Penjualan'
                />
            </nav>
        </div>
    );
}

export default SidebarBody;