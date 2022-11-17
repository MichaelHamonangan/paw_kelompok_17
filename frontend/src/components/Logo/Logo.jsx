import React from "react";

function Logo({imgSource, imgAlt}) {
    return (
        <img src={imgSource} alt={imgAlt} />
    );
} 

export default Logo;