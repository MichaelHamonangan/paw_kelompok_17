import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'; 

import InputDataForm from "./InputDataForm";

function AddData(){

    return (
        
        <main id="site-main">
            <div class="container">
                <div class="box-nav d-flex justify-between">
                    <div class="filter">
                        <a href="/penjualan-lpg">
                            <FontAwesomeIcon icon={ faAngleDoubleLeft } color="#000"/>
                            Display Data
                            <hr />
                        </a>
                    </div>
                </div>
                <div class="form-title text-center">
                    <h2 class="text-dark">Input Data LPG</h2>
                    <span class="text-light">Isi form dibawah untuk memasukkan data baru</span>
                </div>
                <InputDataForm/>
            </div>
        </main>
    );
}

export default AddData;