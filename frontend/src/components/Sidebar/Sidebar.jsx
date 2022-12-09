import React from "react";
import { useState } from "react";

import "./Sidebar.scss";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'

import Spinner from "../Spinner";
import SidebarBody from "./SidebarBody";
import SidebarItem from "./SidebarBodyItem";
import SidebarFooter from "./SidebarFooter";


import image from "./lpg-gas-illustration.png";

function Sidebar() {
    const [open, setopen] = useState(true)
    const toggleOpen = () => {
        setopen(!open)
    }

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

    // const onClickHandler = () => {
    //     const navBarItem =  document.querySelectorAll(".nav-bar__item-title");
    //     navBarItem.forEach((item) => {
    //         item.classList.toggle("hide-element");
    //     });

    //     const navBar = document.querySelector("#root > .container .nav-bar");
    //     navBar.style("width", "60px");

    //     const illustration = document.querySelector(".sidebar-body .content");
    //     illustration.style.display = "none";
    // }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="nav-bar">
            {/* <div className="menu-button active" onClick={onClickHandler}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" color="#000"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg><span class="nav-bar__item-title">Menu</span>
            </div> */}
            <SidebarItem faIcon={faBars}
                         title='Menu'
                         className='menu-button'
            />
            <SidebarBody />
            <SidebarFooter onLogoutHandler={onLogout}/>
        </div>
    );
}

export default Sidebar;