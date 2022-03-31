import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';

export const DashboardRoutesLogin = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
            </Routes>
        </>
    )
}
