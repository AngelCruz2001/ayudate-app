import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { chatDeleteCurrentChat, chatSetCurrentContact, chatStartSetContacts } from '../../../actions/chat';
import { ContactItem } from './ContactItem';

export const Contacts = () => {
    const { currentContact, contacts, socket } = useSelector(state => state.chat);

    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');
    const handleClickContact = (contact) => {
        // console.log(contact);
        socket?.close();
        dispatch(chatDeleteCurrentChat());
        dispatch(chatSetCurrentContact(contact));

    }
    // console.log(contacts.filter(({ name }) => name.match(RegExp(searchValue, 'gi'))));

    useEffect(() => {
        dispatch(chatStartSetContacts());
    }, [])


    const handleSearchChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    }
    return (
        <div className="contacts">
            <div className="contacts__searchbar">
                <label htmlFor="">
                    <input
                        type="text"
                        placeholder="Search or start a new chat"
                        onChange={handleSearchChange}
                    />
                    <i className='fa-solid fa-search'></i>
                </label>
            </div>
            <div className="contacts__list">
                {
                    contacts.filter((contact) => (contact.fname + ' ' + contact.lname)
                        .match(RegExp(searchValue, 'gi')))
                        .map(contact => (
                            <ContactItem
                                key={contact.id}
                                contact={contact}
                                handleClickContact={handleClickContact}
                                currentContact={currentContact}
                            />
                        ))
                }

            </div>
        </div>
    )
}
