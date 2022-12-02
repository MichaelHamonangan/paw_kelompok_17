import React from "react";

import "./Sidebar.scss";

import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'

import Spinner from "../Spinner";
import SidebarBody from "./SidebarBody";
import SidebarItem from "./SidebarBodyItem";
import SidebarFooter from "./SidebarFooter";

import image from "./lpg-gas-illustration.png";

function Sidebar() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading } = useSelector(
        (state) => state.auth
    )
    // const { user, isLoading, isError, isSuccess, message } = useSelector(
    //     (state) => state.auth
    // )

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="nav-bar">
            <SidebarItem faIcon={faBars}
                         linkTo='/'
                         title='Menu'
                         className='menu-button'
            />
            <SidebarBody />
            <SidebarFooter onLogoutHandler={onLogout}/>
        </div>
    );
}

export default Sidebar;