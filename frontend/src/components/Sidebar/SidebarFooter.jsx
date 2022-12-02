import React from "react";
import { FaSignOutAlt } from "react-icons/fa"; 


function SidebarFooter({onLogoutHandler}) {

    return (
        <div className="sidebar-footer">
            <button type='submit' className='btn btn-block' onClick={onLogoutHandler}>
                <FaSignOutAlt /> Logout
            </button>
        </div>
    );
}

export default SidebarFooter;