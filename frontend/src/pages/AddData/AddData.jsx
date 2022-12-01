import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'; 

import InputDataForm from "./InputDataForm";

function AddData(){

    return (
        
        <main id="site-main">
            <div className="container">
                <div className="box-nav d-flex justify-between">
                    <div className="filter">
                        <a href="/penjualan-lpg">
                            <FontAwesomeIcon icon={ faAngleDoubleLeft } color="#000"/>
                            Display Data
                            <hr />
                        </a>
                    </div>
                </div>
                <div className="form-title text-center">
                    <h2 className="text-dark">Input Data LPG</h2>
                    <span className="text-light">Isi form dibawah untuk memasukkan data baru</span>
                </div>
                <InputDataForm/>
            </div>
        </main>
    );
}

export default AddData;