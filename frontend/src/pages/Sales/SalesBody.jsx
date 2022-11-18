import React from "react";

import SalesTable from "./Table/SalesTable";

function SalesBody(salesData){

    return (
        <div className="container">
            <div className="box-nav d-flex justify-between">
                <div className="filter">
                    <a href="/"><i className="fas fa-angle-double-left"></i> Back to Dashboard</a>
                </div>
            </div>
            <div className="align_right box-nav d-flex justify-between ">
                <a href="/input-data" className="border-plain" >
                    <span className="text-gradient" >Input Data</span>
                </a>
            </div>
            <br />
            <SalesTable salesData={salesData}/>
        </div>
    );
}

export default SalesBody;