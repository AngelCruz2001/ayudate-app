import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/home/Home';
import { ModScreen } from '../components/mod/ModScreen';
import { ProfessionalScreen } from '../components/professional/ProfessionalScreen';

export const DashboardRoutes = () => {
    return (
        <section className='main'>
            <div className='main__card'>
                <Routes>
                    <Route path="/professional" element={<ProfessionalScreen />} />
                    <Route path="/mod" element={<ModScreen />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </section>
    )
}