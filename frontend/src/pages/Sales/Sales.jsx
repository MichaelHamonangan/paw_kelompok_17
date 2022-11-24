import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
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

            fetch("http://localhost:5000/api/lpg", {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',

                    'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzM5OTJlNjZlMmVmNjQ3MDkwNjVlMiIsImlhdCI6MTY2ODczMzgwMSwiZXhwIjoxNjcxMzI1ODAxfQ.a9FQQWAVvWRa8ZPGQx6XVaTmZJWcGDYAhCyPqdQshVc`,
                    // 'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzM5OTJlNjZlMmVmNjQ3MDkwNjVlMiIsImlhdCI6MTY2ODczMzgwMSwiZXhwIjoxNjcxMzI1ODAxfQ.a9FQQWAVvWRa8ZPGQx6XVaTmZJWcGDYAhCyPqdQshVc`,

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