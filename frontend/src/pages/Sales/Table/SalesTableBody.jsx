import React from "react";

import SalesDataList from "./SalesDataList";

import "./Sales.scss";

function SalesTableBody({ salesData, searchValue }){
    // console.log(salesData);

    const filteredSalesData = salesData.filter((data) => {
        return (data.nama.toLowerCase().includes(searchValue.toLowerCase()) ||
            data.kode.toLowerCase().includes(searchValue.toLowerCase()) ||
            data.tanggal.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
            data.keterangan.toLowerCase().includes(searchValue.toLowerCase())
        );
    });

    return (
        
        <tbody >
            {filteredSalesData.map((sales, index) => {
                return (
                    <SalesDataList key={sales._id} sales={sales} count={index} updateLink={`/update-data/update/${sales._id}`}/>
                );
            })}
        </tbody>
    );
}

export default SalesTableBody;