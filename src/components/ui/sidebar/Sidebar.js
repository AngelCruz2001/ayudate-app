import React from 'react'
import { authLogOut } from '../../../actions/auth';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const { userType } = useSelector(state => state.auth);

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

            {
                [2, 3].includes(userType) &&
                <div className="sidebar__chat" onClick={() => handleNavigate('/main/chat')}>
                    <i className="fa-solid fa-comment"></i>
                </div>
            }

            {
                userType == 1 &&
                <div className="sidebar__seeUsers" onClick={() => handleNavigate('/main/mod')}>
                    <i className="fa-solid fa-users"></i>
                </div>
            }

            <div className="sidebar__logout" onClick={handleLogOut}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
        </div>
    )
}
