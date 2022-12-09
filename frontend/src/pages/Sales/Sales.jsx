import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import AddData from '../pages/AddData/AddData'

import SalesHead from "./SalesHead";
import SalesBody from "./SalesBody";


function Sales(){
    const [salesData, setSalesData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
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

            fetch(`${process.env.REACT_APP_API_KEY}lpg`, {
                
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
                    }
            );

            
        }
    }, [user, salesData, navigate]);
    
    const searchHandler = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <main id="site-main">
            <SalesHead searchHandler={searchHandler}/>
            <SalesBody salesData={salesData} searchValue={searchValue}/>
        </main>
    );
}

export default Sales;