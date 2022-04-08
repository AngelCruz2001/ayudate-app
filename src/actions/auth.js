import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";

import { types } from "../types/types";
import { uiStartLoading } from "./ui";

export const authStartLogin = (email, password) => {
    return async (dispatch) => {
        try {
            Swal.fire({
                title: 'Uploading...',
                html: 'Please wait...',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            });
            const res = await fetchSinToken("auth/login/", { email, password }, 'POST');
            const body = await res.json();
            if (res.ok) {

                Swal.fire({
                    icon: "success",
                    title: "Bienvenido",
                    text: "Iniciando sesión...",
                    timer: 1000,
                    showConfirmButton: false,
                });

                localStorage.setItem('token', body.data.ccess);
                localStorage.setItem('token-init-date', new Date().getTime());
                localStorage.setItem('token-refresh', body.data.refresh);
                console.log(body)
                dispatch(authLogIn({
                    email,
                    userType: body.userType,
                    token: body.data.access,
                }));

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Password o email incorrecto',
                })
            }

            Swal.close();

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error, intente nuevamente'
            })
        }
        dispatch(uiStartLoading(false));
    }
}


export const authStartRegisterProfessional = (data, setIsLogin) => {
    return async (dispatch) => {
        // dispatch(authCheckingStart());
        const formData = new FormData();
        const url = 'https://ayudat-backend.herokuapp.com/api/professional/create/';
        for (const name in data) {
            formData.append(name, data[name]);
        }
        try {

            Swal.fire({
                title: 'Uploading...',
                html: 'Please wait...',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            });

            const res = await fetch(url, { method: 'POST', body: formData });
            const body = await res.json()
            console.log(body)
            console.log(res)
            Swal.close();

            if (res.ok) {
                console.log(body)
                setIsLogin(true);

                // dispatch(authLogIn(body))
            } else {

                const err = Object.keys(body).map(key => body[key]).join(', ');
                Swal.fire({
                    title: '¡Oops!',
                    text: err,
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


export const authStartRegisterPatient = (data, setIsLogin) => {
    return async (dispatch) => {
        dispatch(uiStartLoading());
        try {
            Swal.fire({
                title: 'Uploading...',
                html: 'Please wait...',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            });
            const resp = await fetchSinToken('patient/create/', data, 'POST');
            const body = await resp.json();

            Swal.close();

            if (resp.ok) {
                console.log(body)
                setIsLogin(true);
            } else {
                const err = Object.keys(body).map(key => body[key]).join(', ');
                Swal.fire({
                    title: '¡Oops!',
                    text: err,
                    icon: 'question',
                    confirmButtonText: 'Tratar de nuevo'
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const authStartRefresh = () => {
    return async (dispatch) => {
        // try {
        //     const res = await fetchConToken('auth/login/refresh/', {
        //         refresh: localStorage.getItem('token-refresh')
        //     }, 'POST');

        //     const body = await res.json();
        //     if (res.ok) {
        //         localStorage.setItem('token', body.access);
        //         dispatch(authLogIn({
        //             email: body.email,
        //             userType: body.userType,
        //             token: body.access,
        //         }));
        //     } else {
        //         dispatch(authLogOut());
        //     }
        // } catch (error) {
        //     console.log(error);
        //     dispatch(authLogOut());
        // }
    }
}


export const authLogOut = () => ({
    type: types.authLogOut
})

const authLogIn = (data) => ({
    type: types.authLogIn,
    payload: data
})