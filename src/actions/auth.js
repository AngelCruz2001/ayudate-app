import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";


export const authStartRegister = (data) => {
    return async (dispatch) => {
        // dispatch(authCheckingStart());
        try {
            const res = await fetchSinToken('registration/professional', data, 'POST')
            const body = await res.json()
            console.log(body)
            // dispatch(authCheckingFinish())
            console.log(body)
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