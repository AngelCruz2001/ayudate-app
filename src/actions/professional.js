import axios from "axios"
import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"
import { uiFinishLoading, uiStartLoading } from "./ui"

export const profStartGetProfessionals = () => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        try {
            const res = await fetchConToken('professional/', {}, 'GET')
            // const body = await resp.json()
            if (res.statusText == 'OK') {
                dispatch(profGetProfessionals(res.data))
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un error, intente nuevamente'
                })

            }

        } catch (error) {
            console.log(error)
        }
        dispatch(uiFinishLoading())
    }

}

export const profStartAcceptProfessional = (emailProfessional) => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        console.log(emailProfessional)
        try {

            const res = await fetchConToken('professional/accept/', { email: emailProfessional }, 'put')
            console.log(res)
            if (res.statusText == 'OK') {
                dispatch(profAcceptProfessional(emailProfessional))
            } else {
                console.log(res)
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un error, intente nuevamente'
                })
            }

        } catch (error) {
            console.log(error)
        }
        dispatch(uiFinishLoading())

    }
}


export const profStartDeleteProfessional = (emailProfessional) => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        try {
            const res = await fetchConToken('professional/', { email: emailProfessional }, 'delete')
           
            if (res.statusText == 'OK') {
                dispatch(profDeleteProfessional(emailProfessional))
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un error, intente nuevamente'
                })
            }

        } catch (error) {
            console.log(error)
        }
        dispatch(uiFinishLoading())
    }
}



const profGetProfessionals = (professionals) => ({
    type: types.profGetProfessionals,
    payload: professionals
})

const profAcceptProfessional = (emailProfessional) => ({
    type: types.profAcceptProfessional,
    payload: emailProfessional
})

const profRejectProfessional = (emailProfessional) => ({
    type: types.profRejectProfessional,
    payload: emailProfessional
})

const profDeleteProfessional = (emailProfessional) => ({
    type: types.profDeleteProfessional,
    payload: emailProfessional
})