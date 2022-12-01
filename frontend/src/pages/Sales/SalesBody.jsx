import React from "react";

import SalesTable from "./Table/SalesTable";

import "./Table/Sales.scss";

function SalesBody({salesData, searchValue}){

    return (
        <div className="container">
            <SalesTable salesData={salesData} searchValue={searchValue}/>
        </div>
    );
}

export default SalesBody;