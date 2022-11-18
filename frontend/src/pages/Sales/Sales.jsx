import React, {useEffect, useState} from "react";

import SalesBody from "./SalesBody";


function Sales(){
    const [salesData, setSalesData] = useState([]);
    
    useEffect(() => {
        // authorize();


        if (salesData.length <= 0){
            fetch("http://localhost:5000/api/lpg", {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    // 'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzM5OTJlNjZlMmVmNjQ3MDkwNjVlMiIsImlhdCI6MTY2ODczMzgwMSwiZXhwIjoxNjcxMzI1ODAxfQ.a9FQQWAVvWRa8ZPGQx6XVaTmZJWcGDYAhCyPqdQshVc`,
                    'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzM5OTJlNjZlMmVmNjQ3MDkwNjVlMiIsImlhdCI6MTY2ODczMzgwMSwiZXhwIjoxNjcxMzI1ODAxfQ.a9FQQWAVvWRa8ZPGQx6XVaTmZJWcGDYAhCyPqdQshVc`,
                    
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    setSalesData(data);
                    console.log(data);
                    }
            );

            
        }
    }, [salesData]);
    

    return (
        <main id="site-main">
             <SalesBody salesData={salesData}/>
            {/* <p>Tesssssssssssss</p> */}
        </main>
    );
}

export default Sales;