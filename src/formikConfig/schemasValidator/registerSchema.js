import * as Yup from 'yup';


export const registerSchema = {
    professional: Yup.object({
        email: Yup.string().email('Correo electronico invalido').required('Required'),
        curp: Yup.string().min(18).required('Requerido'),
        fname: Yup.string().required('Requerido'),
        lname: Yup.string().required('Requerido'),
        schedule: Yup.string().required('Requerido'),
        phone: Yup.string().min(10).required('Requerido'),
        password: Yup.string().required('Requerido'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
        // phone: Yup.string().required('Requerido'),
        // cedula: Yup.string().required('Requerido'),
        // document1: Yup.object().shape({ name: Yup.string().required('Requerido'), content: Yup.string().required('Requerido') }),
        // document2: Yup.object().shape({ name: Yup.string().required('Requerido'), content: Yup.string().required('Requerido') }),
    }),
    patient: Yup.object({
        fname: Yup.string().required('Requerido'),
        lname: Yup.string().required('Requerido'),
        phone: Yup.string().required('Requerido'),
        description: Yup.string().required('Requerido'),
        email: Yup.string().email('Correo electronico invalido').required('Required'),
        password: Yup.string().required('Requerido'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),

    })
}
