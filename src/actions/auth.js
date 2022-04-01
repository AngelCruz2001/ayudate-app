import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const authStartLogin = (email, password) => {
    return async (dispatch) => {
        // const res = await fetchSinToken("/registration/login", { email, password }, 'POST');
        // const body = await res.json();
        // if (res.ok) {
        // localStorage.setItem('token', token);
        dispatch(authLogin({
            email,
            password
        }));
        Swal.fire({
            icon: "success",
            title: "Bienvenido",
            text: "Iniciando sesión...",
            timer: 1000,
            showConfirmButton: false,
        });
        // } else {
        // Swal.fire({
        //     icon: 'error',
        //     title: 'Error',
        //     text: body.msg
        // })
    }

}


export const authStartRegister = (data) => {
    return async (dispatch) => {
        // dispatch(authCheckingStart());
        const formData = new FormData();
        const url = 'https://ayudat-backend.herokuapp.com/api/registration/professional/';
        for (const name in data) {
            formData.append(name, data[name]);
        }
        try {
            const res = await fetch(url, { method: 'POST', body: formData });
            const body = await res.json()
            console.log(body)
            console.log(res)
            // dispatch(authCheckingFinish())
            if (body.ok) {
                // localStorage.setItem('token', body.token);
                // localStorage.setItem('token-init-date', new Date().getTime());
                console.log(body)
                // dispatch(authLogin(body))
            } else {
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                    confirmButtonText: 'Tratar de nuevo'
                })
            }
        } catch (error) {
            console.log(error)
            // dispatch(authCheckingFinish())
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}

const authLogin = (data) => ({
    type: types.authLogin,
    payload: data
})