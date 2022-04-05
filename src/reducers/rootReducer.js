import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { professionalReducer } from "./professionalReducer"
import { uiReducer } from "./uiReducer"

export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    prof: professionalReducer,
})