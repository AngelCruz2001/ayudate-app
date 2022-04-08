import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { DashboardRoutesLogin } from './DashboardRoutesLogin';
import { LandingPage } from '../components/landing/LandingPage';





export const AppRouter = () => {

  

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/login*" element={
                    <PublicRoute>
                        <DashboardRoutesLogin />
                    </PublicRoute>
                }
                />

                <Route path="main/*" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                }
                />

            </Routes>
        </BrowserRouter>

    );
}
