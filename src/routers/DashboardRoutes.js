import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from '../components/home/Home';
import { ModScreen } from '../components/mod/ModScreen';
import { ProfessionalScreen } from '../components/professional/ProfessionalScreen';

export const DashboardRoutes = () => {


    // const { userType } = useSelector(state => state.auth);
    // const navigate = useNavigate();
    // navigate(userType == 1 ? '/main/mod' : '/main/chat');
    // console.log("asdfasdf")
    return (
        <section className='main'>
            <div className='main__card'>
                <Routes>
                    <Route path="/chat" element={<ProfessionalScreen />} />
                    <Route path="/mod" element={<ModScreen />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </section>
    )
}