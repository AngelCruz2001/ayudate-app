import { Routes, Route } from 'react-router-dom';
import { ProfessionalScreen } from '../components/professional/ProfessionalScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProfessionalScreen />} />
            </Routes>
        </>
    )
}