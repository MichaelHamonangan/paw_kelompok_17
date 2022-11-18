import React from "react";

import "./Sales.scss";

function SalesTableHead(){

    return (
        <thead>
            <tr>
                <th rowSpan="2">ID</th>
                <th rowSpan="2">Tanggal</th>
                <th rowSpan="2">Kode</th>
                <th rowSpan="2">Nama Pangkalan</th>
                <th rowSpan="2">Keterangan</th>
                <th colSpan="2">Jumlah Tabung</th>
                <th colSpan="2">Pembayaran</th>
                <th rowSpan="2">Update</th>
                <th rowSpan="2">Delete</th>

            </tr>
            <tr>
                    <th>Cash-less</th>
                    <th>Tunai</th>
                    <th>Cash-less</th>
                    <th>Tunai</th>
                </tr>
        </thead>
    );
}

export default SalesTableHead;