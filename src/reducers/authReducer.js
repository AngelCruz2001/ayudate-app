import { types } from "../types/types"

const initialValues = {
    logged: false,
    email: '',
}

export const authReducer = (state = initialValues, action) => {
    switch (action.type) {
        case types.authLogIn:
            return {
                ...state,
                logged: true,
                email: action.payload.email,
                userType: action.payload.userType,
                token: action.payload.token,
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