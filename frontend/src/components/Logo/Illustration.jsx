import React from "react";

import {Link} from "react-router-dom";
import Logo from "./Logo";

function Illustration({image, imgAlt, illustrationClass, title}){
    return (
        <>
            <div className={illustrationClass}>
                <Link className="logo" to='/'>
                    <Logo 
                        imgSource={image} 
                        imgAlt={imgAlt}
                />
                </Link>
                {title && <span className="app-title">{title}</span>}
            </div>
            <hr />
        </>
    );
}

export default Illustration;