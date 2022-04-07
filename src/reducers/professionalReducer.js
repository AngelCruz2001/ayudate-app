import { types } from "../types/types"

const initialValues = {
    data: [],
}

export const professionalReducer = (state = initialValues, action) => {
    switch (action.type) {
        case types.profGetProfessionals:

            console.log(action.payload)
            console.log(state.data)
            return {
                ...state,
                data: action.payload,
            }
        case types.profDeleteProfessional:
            return {
                ...state,
                data: state.data.filter(p => p.id !== action.payload),
            }

        case types.profAcceptProfessional:
            return {
                ...state,
                data: state.data.map(p => p.id === action.payload ? { ...p, status: true } : p),
            }

        case types.profRejectProfessional:
            return {
                ...state,
                data: state.data.filter(p => p.id !== action.payload),
                // data: state.data.map(p => p.id === action.payload.id ? { ...p, status: false } : p),
            }

        case types.profUpdateProfessional:
            return {
                ...state,
                data: state.data.map(p => p.id === action.payload.id ? action.payload : p),
            }

        default:
            return state
    }
}