import React from "react";
import SidebarBodyItem from "./SidebarBodyItem";
import { faHome, faHandHoldingDollar, faDashboard } from "@fortawesome/free-solid-svg-icons";

function SidebarBody({opene}){
    return (
        <nav>
            <SidebarBodyItem 
                faIcon={faHome}
                linkTo='/'
                title='Home'
                open={opene}
            />
            <SidebarBodyItem 
                faIcon={faDashboard}
                linkTo='/dashboard'
                title='Dashboard'
                open={opene}
            />
            <SidebarBodyItem 
                faIcon={faHandHoldingDollar}
                linkTo='/penjualan-lpg'
                title='Penjualan'
                open={opene}
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