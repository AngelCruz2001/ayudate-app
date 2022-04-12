
import { useDispatch, useSelector } from 'react-redux'
import { useSocket } from '../../../hooks/useSocket'
import { chatAddMessage } from '../../../actions/chat';
import { SkeletonMessage } from './SkeletonMessage';
import { useChat } from '../../../hooks/useChat';

export const ChatConversation = ({ currentContact }) => {

    const dispatch = useDispatch();

    const { auth: { email, userType }, chat: { loading, currentMessages } }
        = useSelector(state => state)

    const { emitAMessage } = useSocket(
        userType == 2
            ? email
            : currentContact.email,
        userType == 2
            ? currentContact.email
            : email
    );


    const {
        lastMessage,
        divInput,
        handleInputChange,
        handleEnter,
        message
    } = useChat(emitAMessage, email, currentMessages, currentContact);


    return (
        <>
            <div className="chat__header">
                <div className="chat__header__avatar">
                    <img src={currentContact.document2} alt="" />
                </div>
                <div className="chat__header__receptor">
                    {currentContact.fname} {currentContact.lname}
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
                                        <div key={i} ref={lastMessage} className={`chat__body__messages__message animate__animated animate__fadeInUp ${e.from == email ? 'sender' : 'receptor'}`}>
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
                        {
                            !loading && <div
                                ref={divInput}
                                className="chat__body__send__containerInput__input"
                                type="text"
                                contentEditable="true"
                                onInput={handleInputChange}
                                onKeyDown={handleEnter}
                            />
                        }
                    </div>
                    <i className='fa-solid fa-paper-plane'></i>
                </div>
            </div>
        </>

    )
}
