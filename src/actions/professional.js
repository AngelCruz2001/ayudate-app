import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types"
import { uiFinishLoading, uiStartLoading } from "./ui"

export const profStartGetProfessionals = () => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        try {
            // const resp = await fetchSinToken('professional/', {}, 'GET')
            // const body = await resp.json()
            // console.log(resp)
            // console.log(body)
            // dispatch(profGetProfessionals(body))
            setTimeout(() => {
                dispatch(profGetProfessionals(
                    [
                        {
                            id: 1,
                            fname: 'José Angel',
                            lname: 'Badillo Sanchez',
                            phone: '6183259226',
                            curp: 'ABCD1234567890123',
                            email: 'juan.perez@ayudate.com',
                            schedule: '8:00 am a 9:00 pm',
                            document: new File([], 'document.pdf'),
                            document2: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
                            status: false
                        },
                        {
                            id: 2,
                            fname: 'Angel',
                            lname: 'Cruz García',
                            phone: '6183259226',
                            curp: 'ABCD1234567890123',
                            email: 'angel.cruz@ayudateasdf.com',
                            schedule: '7:00 am a 8:00 pm',
                            document: 'asdf',
                            document2: 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=170667a&w=0&h=FXkT-N6vISLOCUefa9MyQg0pH-6loMX9zBZjgLK458c=',
                            status: true
                        }
                    ]
                ))
                dispatch(uiFinishLoading())

            }, 1000)

            // dispatch(uiFinishLoading())
        } catch (error) {
            console.log(error)
        }
    }

}

export const profStartAcceptProfessional = (idProfessional) => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        try {
            // All the stuff that needs to be done with the backend
            dispatch(profAcceptProfessional(idProfessional))
            dispatch(uiFinishLoading())
        } catch (error) {
            console.log(error)
        }
    }
}
export const profStartRejectProfessional = (idProfessional) => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        try {
            // All the stuff that needs to be done with the backend
            dispatch(profRejectProfessional(idProfessional))
            dispatch(uiFinishLoading())

        } catch (error) {
            console.log(error)
        }
    }
}

export const profStartDeleteProfessional = (idProfessional) => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        try {
            // All the stuff that needs to be done with the backend
            dispatch(profDeleteProfessional(idProfessional))
            dispatch(uiFinishLoading())

        } catch (error) {
            console.log(error)
        }
    }
}



const profGetProfessionals = (professionals) => ({
    type: types.profGetProfessionals,
    payload: professionals
})

const profAcceptProfessional = (idÞrofessional) => ({
    type: types.profAcceptProfessional,
    payload: idÞrofessional
})

const profRejectProfessional = (idÞrofessional) => ({
    type: types.profRejectProfessional,
    payload: idÞrofessional
})

const profDeleteProfessional = (idÞrofessional) => ({
    type: types.profDeleteProfessional,
    payload: idÞrofessional
})