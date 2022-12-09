import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// import Illustration from "./../Logo/Illustration";
// import Illustration from "../../Logo/Illustration";
import Illustration from "../../components/Logo/Illustration.jsx";

import image from "./ilustrasi-home.png";

import "./Home.scss";

function Home(){
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user) navigate('/login')
    });

    return (
        <main id="site-main">
            <div id="home" className="container">
                <Illustration 
                    image={image}
                    imgAlt="Say hello illustration"
                    illustrationClass="page-illustration"
                />
                <p>Selamat datang di Apad CSM!</p>
            </div>
        </main>
    );
}

export default Home;