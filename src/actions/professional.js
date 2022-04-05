import { types } from "../types/types"
import { uiFinishLoading, uiStartLoading } from "./ui"

export const profStartGetProfessionals = () => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        try {
            // const res = await axios.get('/api/professionals')
            setTimeout(() => {
                dispatch(profGetProfessionals(Array(10).fill(0).map((_, i) => ({
                    id: i,
                    name: 'Juan Perez',
                    number: '6183259226',
                    curp: 'ABCD1234567890123',
                    email: 'juan.perez@ayudate.com',
                    schedule: '8:00 a 18:00 hrs',
                    document: new File([], 'document.pdf'),
                    image: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
                    status: false
                }))))
            }, 1000)

            dispatch(uiFinishLoading())
        } catch (error) {
            console.log(error)
        }
    }

}

export const profStartAcceptProfessional = (id) => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        try {
            // All the stuff that needs to be done with the backend
            dispatch(profAcceptProfessional(id))

        } catch (error) {
            console.log(error)
        }
    }
}
export const profStartRejectProfessional = (id) => {
    return async (dispatch) => {
        dispatch(uiStartLoading())
        try {
            // All the stuff that needs to be done with the backend
            dispatch(profRejectProfessional(id))

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