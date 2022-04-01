import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthScreen } from '../components/auth/AuthScreen';

export const DashboardRoutesLogin = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AuthScreen />} />
            </Routes>
        </>
    )
}
