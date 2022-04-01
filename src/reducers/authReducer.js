import { types } from "../types/types"

const initialValues = {
    email: '',
    password: '',
}

export const authReducer = (state = initialValues, action) => {
    switch (action.type) {
        case types.authStartRegister:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            }
        default:
            return state
    }
}