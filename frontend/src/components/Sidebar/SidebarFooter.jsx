import React from "react";
import { FaSignOutAlt } from "react-icons/fa"; 


function SidebarFooter({onLogoutHandler}) {

    return (
        <div className="sidebar-footer">
            <button type='submit' className='btn btn-block' onClick={onLogoutHandler}>
                <FaSignOutAlt />
                <span className="nav-bar__item-title">
                    Logout
                </span>
            </button>
        </div>
    );
}

export default SidebarFooter;