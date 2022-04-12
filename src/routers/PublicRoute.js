import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authStartRefresh } from "../actions/auth";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

export const PublicRoute = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authStartRefresh())
    }, [dispatch])

    const { logged } = useSelector(state => state.auth);
    // const logged = true;
    return logged
        ? <Navigate to="/main/professional" />
        : children
}
