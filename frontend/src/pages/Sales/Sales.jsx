import React, {useEffect, useState} from "react";

import SalesBody from "./SalesBody";


function Sales(){
    const [salesData, setSalesData] = useState([]);
    
    useEffect(() => {
        if (salesData.length <= 0){
            fetch("http://localhost:3000/api/lpg")
                .then((response) => response.json())
                .then((data) => {
                    setSalesData(data);
                    console.log(salesData);
                    }
            );
        }
    }, [salesData]);
    

    return (
        <main id="site-main">
             <SalesBody salesData={salesData}/>
        </main>
    );
}

export default Sales;