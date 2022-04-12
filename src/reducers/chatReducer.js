import { types } from "../types/types"

const initialValues = {
    currentContact: null,
    socket: null,
    online: false,
    contacts: [
    ],
    currentMessages: [],
    message: '',
    loading: false
}

export const chatReducer = (state = initialValues, action) => {
    switch (action.type) {
        case types.chatSetCurrentContact:
            return {
                ...state,
                currentContact: action.payload
            }
        case types.chatAddMessage:
            return {
                ...state,
                currentMessages: [...state.currentMessages, action.payload]
            }

        case types.chatSetCurrentMessages:
            return {
                ...state,
                currentMessages: action.payload
            }

        case types.chatDeleteCurrentChat:
            return {
                ...state,
                currentContact: null
            }

        case types.chatSetSocket:
            return {
                ...state,
                socket: action.payload
            }
        case types.chatSetOnline:
            return {
                ...state,
                online: action.payload
            }

        case types.chatSetContacts:
            return {
                ...state,
                contacts: action.payload
            }

        case types.chatStartLoading:
            return {
                ...state,
                loading: action.payload
            }

        case types.chatFinishLoading:
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state
    }
}