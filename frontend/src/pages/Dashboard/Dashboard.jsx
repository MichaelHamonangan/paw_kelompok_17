import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import Illustration from '../../components/Logo/Illustration.jsx';
import image from "./lpg-illustration.png";
import DashboardItem from './DashboardItem';

import "./Dashboard.scss";
import axios from 'axios'

const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const [sumTabungTunai, setSumTabungTunai] = useState(0)
  const [sumTabungTransfer, setSumTabungTransfer] = useState(0)
  const [sumBayarTunai, setSumBayarTunai] = useState(0)
  const [sumBayarTransfer, setSumBayarTransfer] = useState(0)
  const [sumTotalTabung, setSumTotalTabung] = useState(0)
  const [sumTotalBayar, setSumTotalBayar] = useState(0)

  const localUser = JSON.parse(localStorage.getItem('user'));
  const config = {
    headers: {
      'Authorization': `Bearer ${localUser.token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  };

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    axios
      .get(`${process.env.REACT_APP_API_KEY}/dashboard`, config)
      .then(function (response) {
        if (response.status === 200) {
          // console.log(response.data)
          setSumTabungTunai(response.data.sumTabungTunai)
          setSumTabungTransfer(response.data.sumTabungTransfer)
          setSumBayarTunai(response.data.sumBayarTunai)
          setSumBayarTransfer(response.data.sumBayarTransfer)
          setSumTotalTabung(response.data.sumTabungTunai + response.data.sumTabungTransfer)
          setSumTotalBayar(response.data.sumBayarTunai + response.data.sumBayarTransfer)
          toast.success(response.message)
        } else {
          toast.error("Error")
        }
      })
      .catch(function (error) {
        toast.error(error);
      });
  }, [user, navigate]);

  return (
    <div id="site-main">
      <div className="container">
        <Illustration
          image={image}
          imgAlt="Dashboard"
          illustrationClass="page-illustration"
        />
        <div className="dashboard-summary">
          <p>Summary data penjualan PT CAHYO SUMBER MIGAS</p>
          <div className="dashboard-item-list">
            <div className="dashboard-summary__gas">
              <DashboardItem text={"Penjualan Tabung via Tunai: " + sumTabungTunai} />
              <DashboardItem text={"Penjualan Tabung via Transfer: " + sumTabungTransfer} />
              <DashboardItem text={"Total Penjualan Tabung: " + sumTotalTabung} />
            </div>
            <vr />
             <div className="dashboard-summary__cash">
                <DashboardItem text={"Sum Bayar Tunai: Rp" + sumBayarTunai} />
                <DashboardItem text={"Sum Bayar Transfer: Rp" + sumBayarTransfer} />
                <DashboardItem text={"Total Bayar: Rp" + sumTotalBayar} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;