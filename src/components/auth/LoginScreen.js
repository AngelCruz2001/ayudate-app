import React, { Fragment } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

export const LoginScreen = ({ handleClick }) => {
    const dispatch = useDispatch();

    const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        // validationSchema: Yup.object({
        //     email: Yup.string().email('Correo electronico invalido').required('Requerido'),
        //     password: Yup.string().required('Requerido'),
        // }),

        onSubmit: (values) => {
            // dispatch(authStartLogin(values.username, values.password))
            console.log(values)
            // dispatch(authStartRegister(values))
            // resetForm()
        },
    });

    return (
        <form onSubmit={handleSubmit} >
            <div className={`inputContainer animate__animated animate__pulse ${errors.email && touched.email && 'error'}`}>
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
            <div className={`inputContainer animate__animated animate__pulse ${errors.password && touched.password && 'error'}`}>
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
                <button className='create animate__animated animate__pulse' onClick={handleClick}>
                    Todavía no tengo una cuenta
                </button>
                <button className='animate__animated animate__pulse' type='submit'>
                    Iniciar sesión
                </button>
            </div>
        </form>
    )
}
