import React from "react";
import Logo from "../Logo/Logo";

function SidebarHeader({imgSource, imgAlt}){
    return (
        <>
            <Logo imgSource={imgSource} imgAlt={imgAlt} />
        </>
    );
}

export default SidebarHeader;