import React from 'react'

export const ProfessionalScreen = () => {
    return (

        <section className='chat'>
            <div className='chat__card'>
                <div className="chat__sidebar">
                    <div className="chat__sidebar__profile">
                        <img src="https://cdn-icons-png.flaticon.com/512/194/194938.png" alt="" />
                    </div>
                    <div className="chat__sidebar__logout">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </div>
                </div>
                <div className="chat__contacts">
                    <div className="chat__contacts__searchbar">
                        <label htmlFor="">
                            <input type="text" placeholder="Search or start a new chat" />
                            <i className='fa-solid fa-search'></i>
                        </label>
                    </div>
                    <div className="chat__contacts__contact">
                        <div className='chat__contacts__contact__header'>
                            <div className="chat__contacts__contact__header__avatar">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" alt="" />
                            </div>
                            <div className="chat__contacts__contact__header__name">
                                <p>
                                    Damiany Rosales Rosales
                                </p>
                            </div>
                            <span> 12:35 am</span>
                        </div>

                        <div className="chat__contacts__contact__preview">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="chat__conversation">
                    <div className="chat__conversation__header">
                        <div className="chat__conversation__header__avatar">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" alt="" />
                        </div>
                        <div className="chat__conversation__header__receptor">
                            Damiany Rosales Rosales
                        </div>
                    </div>

                    <div className="chat__conversation__body">
                        <div className="chat__conversation__body__message">
                            <div className="chat__conversation__body__message__sender">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>

                        <div className="chat__conversation__body__message">
                            <div className="chat__conversation__body__message__receptor">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="chat__conversation__footer">
                        <div className="chat__conversation__footer__input">
                            <label htmlFor="">
                                <input type="text" placeholder="Type a message" />
                                <i className='fa-solid fa-paper-plane'></i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
