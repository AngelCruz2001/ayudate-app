import { types } from "../types/types";



export const chatSetCurrentContact = (contact) => ({
    type: types.chatSetCurrentContact,
    payload: contact
});

export const chatAddMessage = (message) => ({
    type: types.chatAddMessage,
    payload: message
});

export const chatDeleteCurrentChat = () => ({
    type: types.chatDeleteCurrentChat,
})

export const chatStartLoading = () => ({
    type: types.chatStartLoading,
})

export const chatFinishLoading = () => ({
    type: types.chatFinishLoading,
})

export const chatSetSocket = (socket) => ({
    type: types.chatSetSocket,
    payload: socket
})
