import React from "react";

import Illustration from "../Logo/Illustration";

function SidebarIllustration({image}){
    return (
        <Illustration 
            image={image}
            imgAlt="Logo"
            illustrationClass="sidebar-illustration"
            title="Apad CSM."
        />
    );
}

export default SidebarIllustration;