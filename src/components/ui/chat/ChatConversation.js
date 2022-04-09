import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSocket } from '../../../hooks/useSocket'
import { chatAddMessage } from '../../../actions/chat';
import { SkeletonMessage } from './SkeletonMessage';

export const ChatConversation = ({ currentContact }) => {

    const dispatch = useDispatch();

    const { auth: { email, userType }, chat } = useSelector(state => state)

    const { socket, closeConnection, emitAMessage } = useSocket(userType == 0 ? currentContact.email : email, userType == 0 ? email : currentContact.email);
    const { loading, currentMessages } = chat;

    // useEffect(() => {

    //     return () => {
    //         closeConnection();
    //     }
    // }, [closeConnection])


    const lastMessage = useRef(undefined);
    const divInput = useRef(undefined);

    const [message, setMessage] = useState('');

    const scrollIntoLastMessage = () => lastMessage.current.scrollIntoView({ behavior: 'smooth' });

    useLayoutEffect(() => {
        lastMessage && lastMessage.current && scrollIntoLastMessage();
    }, [lastMessage, message]);


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

    return (
        <>
            <div className="chat__header">
                <div className="chat__header__avatar">
                    <img src={currentContact.avatar} alt="" />
                </div>
                <div className="chat__header__receptor">
                    {currentContact.name}
                </div>
            </div>

            <div className="chat__body">
                <div className="chat__body__messages">
                    {
                        loading ?
                            <SkeletonMessage />
                            :
                            <>
                                {
                                    currentMessages.map((e, i) => (
                                        <div key={i} ref={lastMessage} className={`chat__body__messages__message animate__animated animate__fadeInUp ${e.sender == 0 ? 'sender' : 'receptor'}`}>
                                            <div className='chat__body__messages__message__text'>
                                                {e.content}
                                            </div>
                                            <span className='chat__body__messages__message__time'>{e.time}</span>
                                        </div>
                                    ))
                                }
                            </>
                    }

                </div>

                <div className="chat__body__send">
                    <div className='chat__body__send__containerInput'>
                        <div
                            ref={divInput}
                            className="chat__body__send__containerInput__input"
                            type="text"
                            contentEditable="true"
                            onInput={handleInputChange}
                            onKeyDown={handleEnter}
                        />
                    </div>
                    <i className='fa-solid fa-paper-plane'></i>
                </div>
            </div>
        </>

    )
}
