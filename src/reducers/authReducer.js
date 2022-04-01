import { types } from "../types/types"

const initialValues = {
    logged: false,
    email: '',
    password: '',
}

export const authReducer = (state = initialValues, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                logged: true,
                email: action.payload.email,
                password: action.payload.password,

            }
        default:
            return state
    }
}