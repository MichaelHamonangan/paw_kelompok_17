import React from "react";

import SalesSearch from "./SalesSearch";

function SalesHeader({searchHandler}){
    return (
        <>
            <div className="sales-header">
                <SalesSearch searchHandler={searchHandler}/>
            </div>
        </>
    );
}


export default SalesHeader;