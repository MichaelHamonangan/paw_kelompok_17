import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import AddData from '../pages/AddData/AddData'

import SalesBody from "./SalesBody";


function Sales(){
    const [salesData, setSalesData] = useState([]);
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    // const { sales, isLoading, isError, message } = useSelector(
    //     (state) => state.sales
    // )
    
    useEffect(() => {

        // if (isError) {
        //     console.log(message)
        // }
        if (!user) {
            navigate('/login')
        } else if (salesData.length <= 0){
            // const token = thunkAPI.getState().auth.user.token
            let localUser = JSON.parse(localStorage.getItem('user'));

            fetch("http://localhost:5000/api/lpg", {
                
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localUser.token}`,
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    setSalesData(data);
                    console.log(data);
                    }
            );

            
        }
    }, [user, salesData, navigate]);
    

    return (
        <main id="site-main">
            <SalesBody salesData={salesData}/>
            {/* <p>Tesssssssssssss</p> */}
        </main>
    );
}

export default Sales;