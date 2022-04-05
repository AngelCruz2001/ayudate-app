import { types } from "../types/types"





const initialValues = {
    data: Array(5).fill({ id: 0, name: '', number: '', curp: '', email: '', schedule: '', document: '', image: '', status: false }),
}

export const professionalReducer = (state = initialValues, action) => {
    switch (action.type) {
        case types.profGetProfessionals:
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
                data: state.data.map(p => p.id === action.payload.id ? { ...p, status: true } : p),
            }

        case types.profRejectProfessional:
            return {
                ...state,
                data: state.data.map(p => p.id === action.payload.id ? { ...p, status: false } : p),
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