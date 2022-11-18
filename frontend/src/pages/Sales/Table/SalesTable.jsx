import React from "react";
import SalesTableHead from "./SalesTableHead";
import SalesTableBody from "./SalesTableBody";

import "./Sales.scss";

function SalesTable({salesData}){

    return (
        <form action="/penjualan-lpg" method="POST">
            <table className="table">
                <SalesTableHead />
                <SalesTableBody salesData={salesData.salesData}/>
            </table>
        </form>
    );
}

export default SalesTable;