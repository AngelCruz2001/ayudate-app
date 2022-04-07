import React from 'react'
import { useDispatch } from 'react-redux'
import { authLogOut } from '../../../actions/auth';
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {

    const dispatch = useDispatch();


    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    }
    const handleLogOut = () => {
        dispatch(authLogOut());
    }
    return (
        <div className="sidebar">
            <div className="sidebar__profile">
                <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" alt="" />
            </div>

            <div className="sidebar__chat" onClick={() => handleNavigate('/main/professional')}>
                <i className="fa-solid fa-comment"></i>
            </div>

            <div className="sidebar__seeUsers" onClick={() => handleNavigate('/main/mod')}>
                <i className="fa-solid fa-users"></i>
            </div>

            <div className="sidebar__logout" onClick={handleLogOut}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
        </div>
    )
}
