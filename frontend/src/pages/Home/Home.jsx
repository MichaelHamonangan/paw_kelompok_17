import React from "react";

// import Illustration from "./../Logo/Illustration";
// import Illustration from "../../Logo/Illustration";
import Illustration from "../../components/Logo/Illustration.jsx";

import image from "./ilustrasi-home.png";

import "./Home.scss";

function Home(){
    return (
        <main id="site-main">
            <div className="container">
                <Illustration 
                    image={image}
                    imgAlt="Say hello illustration"
                    illustrationClass="page-illustration"
                    title="Beranda"
                />
                <p>Selamat datang di Apad CSM!</p>
            </div>
        </main>
    );
}

export default Home;