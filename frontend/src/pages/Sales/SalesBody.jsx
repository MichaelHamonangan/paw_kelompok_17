import React from "react";

import SalesTable from "./Table/SalesTable";

import "./Table/Sales.scss";

function SalesBody(salesData){

    return (
        <div className="container">
            <div className="box-nav d-flex justify-between">
            </div>
            <div className="align_right box-nav d-flex justify-between">
                <a href="/input-data" className="border-plain" >
                    <button className="button is-success ">Input Data</button>
                    {/* <span className="text-gradient" >Input Data</span> */}
                </a>
            </div>
            <br />
            <SalesTable salesData={salesData}/>
        </div>
    );
}

export default SalesBody;