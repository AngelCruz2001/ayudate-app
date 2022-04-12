import React, { useLayoutEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';

export const useChat = ({ emitAMessage, currentMessages, email, currentContact }) => {

    const lastMessage = useRef(undefined);
    const divInput = useRef(undefined);
    const [message, setMessage] = useState('');

    const scrollIntoLastMessage = () => lastMessage.current.scrollIntoView({ behavior: 'smooth' });

    useLayoutEffect(() => {
        lastMessage && lastMessage.current && scrollIntoLastMessage();
    }, [currentMessages]);

    const handleInputChange = ({ target }) => {
        setMessage(target.textContent);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter' && message !== '') {
            e.preventDefault();

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
