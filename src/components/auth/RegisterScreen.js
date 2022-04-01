import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useFilePicker } from 'use-file-picker';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authStartRegister } from '../../actions/auth';

const inputs = [
    {
        id: 'email',
        name: 'email',
        placeholder: 'Correo electronico',
        type: 'email',
        icon: 'envelope',
    },
    {
        id: 'curp',
        name: 'curp',
        placeholder: 'CURP',
        type: 'text',
        icon: 'id-badge',
        maxLength: 18,
    },
    {
        id: 'fname',
        name: 'fname',
        placeholder: 'Nombre(s)',
        type: 'text',
        icon: 'user',
        maxLength: 12,
    },
    {
        id: 'lname',
        name: 'lname',
        placeholder: 'Apellido(s)',
        type: 'text',
        icon: 'user',
        maxLength: 12,
    },
    {
        id: 'phone',
        name: 'phone',
        placeholder: 'Teléfono',
        type: 'text',
        icon: 'phone',
        maxLength: 10,
    },
    {
        id: 'schedule',
        name: 'schedule',
        placeholder: 'Horario ',
        type: 'text',
        icon: 'clock',
    },
    {
        id: 'document1',
        name: 'document1',
        placeholder: 'Cédula',
        type: 'file',
        icon: 'file',
    },
    {
        id: 'document2',
        name: 'document2',
        placeholder: 'Foto',
        type: 'file',
        icon: 'image',
    },

]


export const RegisterScreen = ({ handleClick }) => {
    const dispatch = useDispatch();

    const { handleSubmit, errors, touched, getFieldProps, resetForm, setFieldValue, values, isValid } = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: 'angi_ed01@hotmail.com',
            curp: 'CUGA010714HDGRRNA1',
            fname: 'Ángel',
            lname: 'Cruz García',
            phone: '6183259226',
            schedule: '8:00 am - 12:00 pm',
            document1: { name: 'Añadir documento...' },
            document2: { name: 'Cargar imagen...' },
        },
        isInitialValid: false,
        validationSchema: Yup.object({
            email: Yup.string().email('Correo electronico invalido').required('Required'),
            curp: Yup.string().min(18).required('Requerido'),
            fname: Yup.string().required('Requerido'),
            lname: Yup.string().required('Requerido'),
            schedule: Yup.string().required('Requerido'),
            // phone: Yup.string().required('Requerido'),
            // cedula: Yup.string().required('Requerido'),
            document1: Yup.object().shape({ name: Yup.string().required('Requerido'), content: Yup.string().required('Requerido') }),
            document2: Yup.object().shape({ name: Yup.string().required('Requerido'), content: Yup.string().required('Requerido') }),
        }),


        onSubmit: (values) => {
            // dispatch(authStartLogin(values.username, values.password))
            console.log(values)
            dispatch(authStartRegister(values))
            // resetForm()
        },


    });

    const [activeDocument, setActiveDocument] = useState('');
    const [openFileSelector, { filesContent, loading }] = useFilePicker({
        multiple: false,
        // accept: '.ics,.pdf',
        maxFileSize: 1,
        accept: ['.pdf', '.jpg', '.png', '.jpeg'],
    });

    const handleClickAddFile = (e) => {
        const { id } = e.target;
        if (['cedula', 'photo', 'document1', 'document2'].includes(id)) {
            setActiveDocument(id);
            openFileSelector();
        }
    }

    useEffect(() => {
        if (activeDocument !== '' && loading === false && filesContent.length > 0) {
            setFieldValue(activeDocument, filesContent[0]);
            console.log(activeDocument, filesContent[0])
            setActiveDocument('');
        }
    }, [filesContent, loading])

    console.log(isValid)
    return (
        <>
            <h2 className='animate__animated animate__fadeInUp'>¡Bienvenido!</h2>
            <form onSubmit={handleSubmit} >
                {
                    inputs.map(input => (
                        <div
                            className={`${input.type} inputContainer animate__animated animate__fadeInUp ${errors[input.name] && touched[input.name] && 'error'}`}
                            key={input.id}
                            type={input.type}
                            onClick={(e) => handleClickAddFile(e)}
                        >
                            {
                                input.type === 'file'
                                    ?
                                    <>
                                        <i className={`fa-solid fa-${input.icon}`} />
                                        <p
                                            id={input.id}
                                            name={input.name}
                                            type={input.type}
                                        >
                                            {
                                                getFieldProps(input.name).value.name
                                            }
                                        </p>
                                    </>
                                    :
                                    <>
                                        <i className={`fa-solid fa-${input.icon}`}></i>
                                        <input
                                            id={input.id}
                                            name={input.name}
                                            placeholder={input.placeholder}
                                            type={input.type}
                                            {...getFieldProps(input.name)}
                                        />
                                    </>
                            }
                        </div>
                    ))
                }
                <div className='buttonsContainer'>
                    <button
                        className='animate__animated animate__fadeInUp'
                        onClick={handleClick}
                    >
                        Ya tengo una cuenta
                    </button>
                    <button
                        className={`create ${isValid ? 'formikValid' : ''} animate__animated animate__fadeInUp`}
                        type='submit'
                    >
                        Crear cuenta
                    </button>
                </div>
            </form>
        </>
    )
}
