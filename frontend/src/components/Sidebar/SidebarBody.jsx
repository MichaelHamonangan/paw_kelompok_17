import React from "react";
import SidebarBodyItem from "./SidebarBodyItem";
import { faHome, faHandHoldingDollar, faDashboard } from "@fortawesome/free-solid-svg-icons";

function SidebarBody(){
    return (
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
            {/* <SidebarBodyItem 
                faIcon={faUser}
                linkTo='/user'
                title='Pengguna'
            /> */}
        </nav>
    );
}

export default SidebarBody;