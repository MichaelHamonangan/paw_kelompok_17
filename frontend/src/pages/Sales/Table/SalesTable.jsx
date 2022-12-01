import React from "react";
import SalesTableHead from "./SalesTableHead";
import SalesTableBody from "./SalesTableBody";

import "./Sales.scss";

function SalesTable({salesData, searchValue}){

    return (
        <div className="table_wrapper">
            <div className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth ">
                    <table className="table">
                        <SalesTableHead />
                        <SalesTableBody salesData={salesData} searchValue={searchValue}/>
                    </table>
            </div>
        </div>
    );
}

export default SalesTable;