import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

    const { logged } = useSelector(state => state.auth);
    // const logged = true;
    return logged
        ? <Navigate to="/main/professional" />
        : children
}
