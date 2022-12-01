import React from "react";
import SidebarItem from "../../components/Sidebar/SidebarBodyItem";
import {faHome, faDashboard, faHandHoldingDollar} from "@fortawesome/free-solid-svg-icons";

function DashboardItemList({ data }) {
  return (
    <div className="dashboard-item-list">
        <SidebarItem 
            faIcon={faHome}
            linkTo="/"
            title="Home"
            className='dashboard-item'
        />
        <SidebarItem 
            faIcon={faDashboard}
            linkTo="/dashboard"
            title="Dashboard"
            className='dashboard-item'
        />
        <SidebarItem 
            faIcon={faHandHoldingDollar}
            linkTo="/penjualan-lpg"
            title="Penjualan"
            className='dashboard-item'
        />
    </div>
  );
}

export default DashboardItemList;