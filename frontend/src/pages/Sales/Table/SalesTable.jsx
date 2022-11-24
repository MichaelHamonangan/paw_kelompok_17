import React from "react";
import SalesTableHead from "./SalesTableHead";
import SalesTableBody from "./SalesTableBody";

import "./Sales.scss";

function SalesTable({salesData}){

    return (
        <div className="table_wrapper">
            <div className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <form action="/penjualan-lpg" method="POST" >
                    <table className="table">
                        <SalesTableHead />
                        <SalesTableBody salesData={salesData.salesData}/>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default SalesTable;