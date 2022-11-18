import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'; 

import "./Sales.scss";

function SalesDataList({sales, count, updateLink}){

    return (
        <tr key={sales._id}>
            <td>{count}</td>
            <td>{sales.tanggal}</td>
            <td>{sales.kode}</td>
            <td>{sales.nama}</td>
            <td>{sales.keterangan}</td>
            <td>{sales.tabung_transfer}</td>
            <td>{sales.tabung_tunai}</td>
            <td>{sales.bayar_transfer}</td>
            <td>{sales.bayar_tunai}</td>
            <td>
                <a href={updateLink} className="btn border-shadow update">
                    <span className="text-gradient">
                        <FontAwesomeIcon icon={faPencilAlt} color="#000"/>
                    </span>
                </a>
            </td>
            <td>
                <div className="btn border-shadow delete" data-id={sales._id} >
                    <span className="text-gradient">
                        <FontAwesomeIcon icon={faTimes} color="#000"/>
                    </span>
                </div>
            </td>
        </tr>
    );
}

export default SalesDataList;