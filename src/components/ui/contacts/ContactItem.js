import React from 'react'

export const ContactItem = ({ key, contact, handleClickContact, currentContact, }) => {
    return (
        <div
            className={`contacts__list__contact animate__animated animate__slideInLeft ${currentContact && currentContact.id === contact.id ? 'current' : ''}`}
            key={contact.id}
            onClick={() => handleClickContact(contact)}
        >
            <div className='contacts__list__contact__header'>
                <div className="contacts__list__contact__header__avatar">
                    <img src={contact.userType === 2 ? contact.document2 : 'https://www.nicepng.com/png/full/933-9332131_profile-picture-default-png.png'} alt="" />
                </div>
                <div className="contacts__list__contact__header__name">
                    <p>
                        {contact.fname + ' ' + contact.lname}
                    </p>
                </div>
                {/* <span> {contact.lastMessageTime}</span> */}
            </div>

            <div className="contacts__list__contact__preview">
                <p>
                    {/* {contact.lastMessage} */}
                </p>
            </div>

        </div>
    )
}
