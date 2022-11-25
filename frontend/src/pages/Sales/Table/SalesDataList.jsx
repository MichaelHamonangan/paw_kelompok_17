import React from "react";

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector} from 'react-redux'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'; 

import axios from 'axios'

import "./Sales.scss";

function SalesDataList({sales, count, updateLink}){

    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const localUser = JSON.parse(localStorage.getItem('user'));
        const config = {
            headers: {
                'Authorization': `Bearer ${localUser.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        };

    useEffect(() => {   
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate]);

    const onSubmit = () => {
        if (window.confirm("Delete?")) {
            axios
                .delete(`http://localhost:5000/api/lpg/${sales._id}`, config)
                .then(function (response) {
                    if (response.status === 200) {
                        toast.success("Berhasil delete data pangkalan")
                        refreshPage()
                        navigate('/penjualan-lpg')
                    } else {
                        toast.error("Error")
                    }
                })
                .catch(function (error) {
                    toast.error(error);
                });
        }
    }
    const refreshPage = () => {
        window.location.reload();
    }

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
                <a href={updateLink} className="btnx border-shadow update">
                    <span className="text-gradient">
                        <FontAwesomeIcon icon={faPencilAlt} color="#000"/>
                    </span>
                </a>
            </td>
            <td>
                <div className="btnx border-shadow delete" data-id={sales._id} onClick={()=>{ onSubmit(); }}>
                    <span className="text-gradient">
                        <FontAwesomeIcon icon={faTimes} color="#000"/>
                    </span>
                </div>
            </td>
        </tr>
    );
}

export default SalesDataList;