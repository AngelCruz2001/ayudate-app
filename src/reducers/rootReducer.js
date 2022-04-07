import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { chatReducer } from "./chatReducer"
import { professionalReducer } from "./professionalReducer"
import { uiReducer } from "./uiReducer"

export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    prof: professionalReducer,
    chat: chatReducer,
})