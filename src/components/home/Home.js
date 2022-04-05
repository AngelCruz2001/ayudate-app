import React from 'react'
import { Chat } from '../ui/chat/Chat'
import { Contacts } from '../ui/contacts/Contacts'
import { Sidebar } from '../ui/sidebar/Sidebar'

export const Home = () => {
    return (
        <>
            <Sidebar />
            <Contacts />
            <Chat />
        </>
    )
}
