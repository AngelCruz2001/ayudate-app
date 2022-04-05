import { types } from "../types/types"

const initialValues = {
    logged: true,
    email: '',
    password: '',
}

export const authReducer = (state = initialValues, action) => {
    switch (action.type) {
        case types.authLogIn:
            return {
                ...state,
                logged: true,
                email: action.payload.email,
                password: action.payload.password,
            }
        case types.authLogOut:
            return {
                ...initialValues,
                logged: false,
            }
        default:
            return state
    }
}