import React from "react";

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector} from 'react-redux'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'; 

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
                .delete(`http://3.113.26.186:5000/api/lpg/${sales._id}`, config)
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
                <form action="/penjualan-lpg" method="POST" >
                    <a href={updateLink} className="btnx border-shadow">
                        <span className="text-gradient">
                            <FontAwesomeIcon icon={faPencilAlt} color="blue"/>
                        </span>
                    </a>
                </form>
            </td>
            <td>
                <form action="/penjualan-lpg" method="POST" >
                    <div className="btnx border-shadow" data-id={sales._id} onClick={()=>{ onSubmit(); }}>
                        <span className="text-gradient">
                            <FontAwesomeIcon icon={faTrash} color="maroon"/>
                        </span>

                    </div>
                </form>
            </td>
        </tr>
    );
}

export default SalesDataList;
