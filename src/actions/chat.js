import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";
import { uiStartLoading } from "./ui";
import axios from 'axios';

export const chatStartSetContacts = () => {

    return async (dispatch, getState) => {
        dispatch(uiStartLoading());
        const path = getState().auth.userType == 3 ? 'professional/' : 'patient/';
        try {
            const res = await fetchConToken(path);
            // const body = await res.json();
            if (res.statusText == 'OK') {
                console.log(res.data)
                dispatch(chatSetContacts(res.data));
            } else {
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    } 

}


export const chatSetCurrentContact = (contact) => ({
    type: types.chatSetCurrentContact,
    payload: contact
});

export const chatAddMessage = (message) => ({
    type: types.chatAddMessage,
    payload: message
});

export const chatSetCurrentMessages = (messages) => ({
    type: types.chatSetCurrentMessages,
    payload: messages
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

export const chatSetOnline = (online) => ({
    type: types.chatSetOnline,
    payload: online
})

export const chatSetContacts = (contacts) => ({
    type: types.chatSetContacts,
    payload: contacts
})