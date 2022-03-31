import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';


export const LoginScreen = () => {

    const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({

        initialValues: {
            username: '',
            password: '',
        },

        onSubmit: (values) => {
            // dispatch(authStartLogin(values.username, values.password))
            resetForm()
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Requerido'),
            password: Yup.string()
                .required('Requerido'),
        })
    });


    return (
        <div>LoginScreen</div>
    )
}
