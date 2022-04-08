import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { chatDeleteCurrentChat, chatSetContacts, chatSetCurrentContact } from '../../../actions/chat';
import { isACoincidenceSearch } from '../../../helpers/isACoincidence';

export const Contacts = () => {
    const { currentContact, contacts } = useSelector(state => state.chat);
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');
    const handleClickContact = (contact) => {
        // console.log(contact);
        dispatch(chatDeleteCurrentChat());
        dispatch(chatSetCurrentContact(contact));
    }
    // console.log(contacts.filter(({ name }) => name.match(RegExp(searchValue, 'gi'))));

    useEffect(() => {
        dispatch(chatSetContacts());
    }, [])
    

    const handleSearchChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    }
    return (
        <div className="contacts">
            <div className="contacts__searchbar">
                <label htmlFor="">
                    <input type="text" placeholder="Search or start a new chat" onChange={handleSearchChange} />
                    <i className='fa-solid fa-search'></i>
                </label>
            </div>
            <div className="contacts__list">
                {
                    contacts.filter(({ name }) => name.match(RegExp(searchValue, 'gi'))).map(contact => (
                        <div
                            className={`contacts__list__contact animate__animated animate__slideInLeft ${currentContact && currentContact.id === contact.id ? 'current' : ''}`}
                            key={contact.id}
                            onClick={() => handleClickContact(contact)}
                        >
                            <div className='contacts__list__contact__header'>
                                <div className="contacts__list__contact__header__avatar">
                                    <img src={contact.avatar} alt="" />
                                </div>
                                <div className="contacts__list__contact__header__name">
                                    <p>
                                        {contact.name}
                                    </p>
                                </div>
                                <span> {contact.lastMessageTime}</span>
                            </div>

                            <div className="contacts__list__contact__preview">
                                <p>
                                    {contact.lastMessage}
                                </p>
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}
