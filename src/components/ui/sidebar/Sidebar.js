import React from 'react'
import { useDispatch } from 'react-redux'
import { authLogOut } from '../../../actions/auth';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(authLogOut());
        console.log("chava")
    }
    return (
        <div className="sidebar">
            <div className="sidebar__profile">
                <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" alt="" />
            </div>
            <div className="sidebar__logout" onClick={handleLogOut}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
        </div>
    )
}
