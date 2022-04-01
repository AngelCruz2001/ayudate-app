import React, { useEffect, useState } from 'react'
import { LoginScreen } from './LoginScreen';
import { RegisterScreen } from './RegisterScreen';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { authStartRegister } from '../../actions/auth';


export const AuthScreen = () => {

    const dispatch = useDispatch();

    const [isLogin, setIsLogin] = useState(true);
    const handleClick = () => setIsLogin(prev => !prev);


    return (

        <section className='login'>

            <div className='login__card'>
                <div className='login__card__svg'>
                    <img src="./svg/personalData.svg" alt="" />
                </div>
                <div className='login__card__log '>
                    <h2 className='animate__animated animate__pulse'>¡Bienvenido!</h2>
                    {
                        isLogin
                            ? <RegisterScreen
                                handleClick={handleClick}
                            />
                            : <LoginScreen
                                handleClick={handleClick}
                            />
                    }
                </div>

            </div>
        </section>

    )
}
