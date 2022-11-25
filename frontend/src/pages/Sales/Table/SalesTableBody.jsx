import React from "react";

import SalesDataList from "./SalesDataList";

import "./Sales.scss";

function SalesTableBody({ salesData }){
    console.log(salesData);

    return (
        <tbody >
            {salesData.map((sales, index) => {
                return (
                    <SalesDataList key={sales._id} sales={sales} count={index} updateLink={`/update-data/update/${sales._id}`}/>
                );
            })}

        </tbody>
    );
}

export default SalesTableBody;