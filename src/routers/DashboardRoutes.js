import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../components/landing/LandingPage';

export const DashboardRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </>
    )
}