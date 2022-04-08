import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { chatAddMessage } from '../../../actions/chat';
import { ChatConversation } from './ChatConversation';
import { SkeletonMessage } from './SkeletonMessage';

export const Chat = () => {
    const dispatch = useDispatch();
    const { currentContact, loading } = useSelector(state => state.chat);

    return (
        <div className="chat" >
            {
                currentContact ?
                    <ChatConversation currentContact={currentContact} />
                    :
                    <div className="chat__selectChat">
                        <div className="chat__selectChat-svg">
                            <img src="./svg/selectUser.svg" alt="Pick an user" />
                        </div>
                        <div className="chat__selectChat-text">
                            <h2>Hay muchas personas esperando tu ayuda</h2>
                            <p>Selecciona un usuario para iniciar una conversación.</p>
                        </div>
                    </div>


            }

        </div>
    )
}
