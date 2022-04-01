import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { authStartLogin } from '../../actions/auth';

export const LoginScreen = ({ handleClick }) => {
    const dispatch = useDispatch();

    const { handleSubmit, errors, touched, getFieldProps, resetForm, isValid } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        isInitialValid: false,

        validationSchema: Yup.object({
            email: Yup.string().email('Correo electronico invalido').required('Requerido'),
            password: Yup.string().required('Requerido'),
        }),

        onSubmit: (values) => {
            dispatch(authStartLogin(values.email, values.password))
        },
    });

    return (
        <>
            <h2 className='animate__animated animate__fadeInDown'>¡Bienvenido de nuevo!</h2>

            <form onSubmit={handleSubmit}>
                <div className={`
                inputContainer animate__animated
                animate__fadeInDown
                 ${errors.email && touched.email && 'error'}`}>
                    <i className="fa-solid fa-user"></i>
                    <input
                        id='email'
                        name='email'
                        placeholder='Usuario'
                        type='email'
                        {...getFieldProps('email')}
                    />
                </div>
                {/* {errors.username && touched.username && <span className='error'>{errors.username}</span>} */}
                <div className={`inputContainer animate__animated animate__fadeInDown ${errors.password && touched.password && 'error'}`}>
                    <i className="fa-solid fa-lock"></i>
                    <input
                        id='password'
                        name='password'
                        placeholder='Contraseña'
                        type='password'
                        {...getFieldProps('password')}
                    />
                </div>
                {/* {errors.password && touched.password && <span className='error'>{errors.password}</span>} */}
                <div className='buttonsContainer'>
                    <button
                        className={`create ${isValid ? 'formikValid' : ''} animate__animated animate__fadeInDown`}
                        type='submit'
                    >
                        Iniciar sesión
                    </button>
                    <button
                        className='animate__animated animate__fadeInDown'
                        onClick={handleClick}
                    >
                        Todavía no tengo una cuenta
                    </button>

                </div>
            </form>
        </>
    )
}
