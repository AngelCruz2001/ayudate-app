import React from 'react'

export const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts__searchbar">
                <label htmlFor="">
                    <input type="text" placeholder="Search or start a new chat" />
                    <i className='fa-solid fa-search'></i>
                </label>
            </div>
            <div className="contacts__contact">
                <div className='contacts__contact__header'>
                    <div className="contacts__contact__header__avatar">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" alt="" />
                    </div>
                    <div className="contacts__contact__header__name">
                        <p>
                            Damiany Rosales Rosales
                        </p>
                    </div>
                    <span> 12:35 am</span>
                </div>

                <div className="contacts__contact__preview">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

            </div>
        </div>
    )
}
