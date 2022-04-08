import React, { useState } from 'react'
import { useLogin } from '../../hooks/useLogin';
import { LoginScreen } from './LoginScreen';
import { RegisterScreen } from './RegisterScreen';

export const AuthScreen = () => {

    const [isLogin, setIsLogin] = useLogin(false);

    return (

        <section className='login'>
            <div className='login__card'>
                <div className='login__card__svg'>
                    <img src="./svg/personalData.svg" alt="" />
                </div>
                <div className='login__card__log '>
                    {
                        isLogin
                            ? <RegisterScreen
                                handleClick={setIsLogin}
                            />
                            : <LoginScreen
                                handleClick={setIsLogin}
                            />
                    }
                </div>
            </div>
        </section>

    )
}
