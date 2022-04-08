import { types } from "../types/types"

const initialValues = {
    currentContact: null,
    socket: null,
    online: false,
    contacts: [
        {
            id: 1,
            name: 'Damiany Rosales Rosales',
            lastMessage: 'CACOTA',
            lastMessageTime: '10:00 am',
            avatar: 'https://scontent.fdgo1-1.fna.fbcdn.net/v/t1.6435-9/60843581_2581491985227950_6125868951856480256_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XM-MNrKzo5IAX-Gn7wY&_nc_ht=scontent.fdgo1-1.fna&oh=00_AT-yq3wDG3putw7dA-3TzAeJiBoPHKZtLBVTdVOMxh8xvQ&oe=6271EE26',
            email: 'angi_ed01@hotmail.com'
        },
        {
            id: 2,
            name: 'José Badillo Sanchez',
            lastMessage: 'Que facil',
            lastMessageTime: '11:00 pm',
            avatar: 'https://scontent.fdgo1-1.fna.fbcdn.net/v/t1.6435-9/100105079_3415615448499825_2404321090277998592_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tb_jkxm7reUAX9urwZJ&_nc_ht=scontent.fdgo1-1.fna&oh=00_AT_xOCNKBoDaVgpArZWucA86XQwswYDPVBImotRIzCZPkQ&oe=62731234',
            email: 'angi_ed01@hotmail.com'
        }
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
                currentContact: { ...state.currentContact, messages: [...state.currentContact.messages, action.payload] },
            }

        case types.chatSetCurrentMessages:
            return {
                ...state,
                currentMessages: [state.currentMessages, action.payload]
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


        default:
            return state
    }
}