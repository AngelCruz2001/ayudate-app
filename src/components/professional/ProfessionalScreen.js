import React from 'react'
import { Chat } from '../ui/chat/Chat';
import { Contacts } from '../ui/contacts/Contacts';
import { Sidebar } from '../ui/sidebar/Sidebar';

const user = {
    name: 'Juan',
    lastName: 'Perez',
    id: '123456789',
}


export const ProfessionalScreen = () => {
    
    return (
        <>
            <Sidebar />
            <Contacts />
            <Chat />
        </>
    )
}
