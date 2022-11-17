import React from 'react';

import Illustration from '../../components/Logo/Illustration.jsx';
import image from "./lpg-illustration.png";
import DashboardItemList from './DashboardItemList';

import "./Dashboard.scss";

function Dashboard() {
  return (
    <div id="site-main">
        <div className="container">
            <Illustration 
                image={image}
                imgAlt="Dashboard"
                illustrationClass="page-illustration"
                title="Dashboard"
            />
            <p>Selamat datang di Dashboard Aplikasi Cahyo Sumber Migas!</p>
            <DashboardItemList />
        </div>
    </div>
  );
}

export default Dashboard;