import React, { Fragment, useLayoutEffect, useRef, useState } from 'react'

export const Chat = () => {

    const messages = Array(100).fill({
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: '10:00',
        sender: 'John Doe',
        senderId: 1,
        receiver: 'Jane Doe',
        receiverId: '123456789',
    })
    const lastMessage = useRef(undefined);
    const [currentMessages, setCurrentMessages] = useState(messages);
    const scrollIntoLastMessage = () => {
        lastMessage.current.scrollIntoView({ behavior: 'smooth' });
    }
    useLayoutEffect(() => {
        scrollIntoLastMessage();
    }, [lastMessage])

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header__avatar">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" alt="" />
                </div>
                <div className="chat__header__receptor">
                    Damiany Rosales Rosales
                </div>
            </div>

            <div className="chat__body">
                <div className="chat__body__messages">
                    {
                        currentMessages.map((e, i) => (
                            <Fragment key={i}>

                                <div className="chat__body__messages__message sender animate__animated animate__fadeInUp">
                                    <p>
                                        {e.content}
                                    </p>
                                    <span className='chat__body__messages__message__time'>12:35 AM</span>

                                </div>
                                <div ref={lastMessage} className="chat__body__messages__message receptor animate__animated animate__fadeInUp">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                                    </p>
                                    <span className='chat__body__messages__message__time'>12:35 PM</span>
                                </div>
                            </Fragment>
                        ))
                    }
                </div>

                <div className="chat__body__send">
                    <div className='chat__body__send__containerInput'>
                        <div
                            className="chat__body__send__containerInput__input"
                            type="text"
                            placeholder="Type a message"
                            contentEditable="true"
                            // onInput={(e) => console.log(e.target.textContent)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    console.log(e.target.textContent)
                                    console.log("chava")
                                    setCurrentMessages([...currentMessages, {
                                        id: 1,
                                        content: e.target.textContent,
                                        time: '10:00',
                                        sender: 'John Doe',
                                        senderId: 1,
                                        receiver: 'Jane Doe',
                                        receiverId: '123456789',
                                    }])
                                    scrollIntoLastMessage();
                                }
                            }
                            }
                        />
                    </div>

                    <i className='fa-solid fa-paper-plane'></i>
                </div>
            </div>


        </div>
    )
}
