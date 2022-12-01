import React from "react";

function DashboardItem(props) {
    return (
        <div exact="true" className="dashboard-item" >
            <span className="nav-bar__item-title">{props.text}</span>
        </div>
    );
}

export default DashboardItem;