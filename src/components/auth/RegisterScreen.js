import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useFilePicker } from 'use-file-picker';
import { useFormik } from 'formik';
import { authStartRegisterProfessional, authStartRegisterPatient } from '../../actions/auth';
import { CustomInput } from '../ui/register/Inputs';
import { initialValuesRegister } from '../../formikConfig/intialValues/initialValuesRegister';
import { registerSchema } from '../../formikConfig/schemasValidator/registerSchema';
import { inputsRegister } from '../../formikConfig/inputs/inputsRegister';


export const RegisterScreen = ({ handleClick }) => {
    
    const dispatch = useDispatch();

    const [isPatient, setIsPatient] = useState(true);

    const inputs = isPatient ? inputsRegister.patient : inputsRegister.professional;

    const { handleSubmit, errors, touched, getFieldProps, resetForm, setFieldValue, values, isValid } = useFormik({
        enableReinitialize: true,
        initialValues: isPatient ? initialValuesRegister.patient : initialValuesRegister.professional,
        isInitialValid: false,
        validationSchema: isPatient ? registerSchema.patient : registerSchema.professional,
        onSubmit: (values) => {
            dispatch(isPatient ? authStartRegisterPatient(values, handleClick) : authStartRegisterProfessional(values, handleClick))
        },

    });

    const [activeDocument, setActiveDocument] = useState('');

    const [openFileSelector, { loading, plainFiles }] = useFilePicker({
        multiple: false,
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
        if (activeDocument !== '' && loading === false && plainFiles.length > 0) {
            setFieldValue(activeDocument, plainFiles[0]);
            setActiveDocument('');
        }
    }, [plainFiles, loading])


    const handleTypeUserChange = ({ target }) => setIsPatient(target.id === 'patient');


    return (
        <>
            <div className='title'>
                <h2 className='animate__animated animate__fadeInUp'>¡Bienvenido!</h2>
                <div className='title__radio animate__animated animate__fadeInUp'>
                    <label className={`${!isPatient && 'active'}`}>
                        <input type="radio" name="typeUser" id='professional' className="title__radio__element" onChange={handleTypeUserChange} />
                        Profesional
                    </label>
                    <label className={`${isPatient && 'active'}`}>
                        <input type="radio" name="typeUser" id='patient' className="title__radio__element" onChange={handleTypeUserChange} />
                        Paciente
                    </label>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                {
                    inputs.map(input => (
                        <div
                            className={`${input.type} inputContainer animate__animated animate__fadeInUp ${errors[input.name] && touched[input.name] && 'error'}`}
                            key={input.id}
                            type={input.type}
                            onClick={(e) => handleClickAddFile(e)}
                        >
                            <CustomInput getFieldProps={getFieldProps} input={input} />
                        </div>
                    ))
                }


                <div className='buttonsContainer'>
                    <button
                        className={`create ${isValid ? 'formikValid' : ''} animate__animated animate__fadeInUp`}
                        type='submit'
                    >
                        Crear cuenta
                    </button>
                    <button
                        className='animate__animated animate__fadeInUp'
                        onClick={handleClick}
                    >
                        Ya tengo una cuenta
                    </button>

                </div>
            </form>
        </>
    )
}
