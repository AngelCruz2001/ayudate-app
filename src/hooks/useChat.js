import React, { useLayoutEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

export const useChat = ({ emitAMessage, email ,currentMessages, currentContact }) => {
    const lastMessage = useRef(undefined);
    const divInput = useRef(undefined);
    const [message, setMessage] = useState('');

    const scrollIntoLastMessage = () => lastMessage.current.scrollIntoView({ behavior: 'smooth' });
    console.log(currentContact);
    useLayoutEffect(() => {
        lastMessage && lastMessage.current && scrollIntoLastMessage();
    }, [currentMessages]);

    const handleInputChange = ({ target }) => {
        setMessage(target.textContent);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter' && message !== '') {
            e.preventDefault();
            console.log(currentContact);
            emitAMessage({
                for: currentContact.email,
                from: email,
                content: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            });

            if (divInput && divInput.current) {
                divInput.current.textContent = '';
            }
            setMessage('');
        }
    }

    return {
        lastMessage,
        divInput,
        handleInputChange,
        handleEnter,
        message,
    }
}
