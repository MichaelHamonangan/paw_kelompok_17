import React from "react";

function SalesSearch({searchHandler}){
    return (
        <>
            <input type="search" placeholder="Cari" className="sales-search" onChange={searchHandler}/>
        </>
    );
}

export default SalesSearch;