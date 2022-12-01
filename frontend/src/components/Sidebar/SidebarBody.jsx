import React from "react";
import SidebarBodyItem from "./SidebarBodyItem";
import { faHome, faHandHoldingDollar, faDashboard } from "@fortawesome/free-solid-svg-icons";

function SidebarBody({openStatus}){
    return (
        <nav>
            <SidebarBodyItem 
                faIcon={faHome}
                linkTo='/'
                title='Home'
                open={openStatus}
            />
            <SidebarBodyItem 
                faIcon={faDashboard}
                linkTo='/dashboard'
                title='Dashboard'
                open={openStatus}
            />
            <SidebarBodyItem 
                faIcon={faHandHoldingDollar}
                linkTo='/penjualan-lpg'
                title='Penjualan'
                open={openStatus}
            />

            {openStatus}
        </nav>
    );
}

export default SidebarBody;