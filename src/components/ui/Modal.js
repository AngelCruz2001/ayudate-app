import React from 'react'

export const Modal = ({ isOpen, setIsOpen }) => {
    if (!isOpen) return null;

    return (
        <div className='modal'>
            <div className="modal__content">
                <div className="modal__content__header">
                    <h1>Añadir nuevo moderador</h1>
                </div>
                <div className="modal__content__body">
                    <form>
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                    </form>
                </div>
            </div>
        </div>
    )
}
