import React from 'react'

export const SkeletonMessage = () => {
    return (
        <>
            <div className='loading'>
            </div>
            <div className='chat__body__messages__message skeleton animate__animated animate__fadeInUp sender'>
                <div className='chat__body__messages__message__text'>
                    Cargando...
                </div>
            </div>
            <div className='chat__body__messages__message skeleton animate__animated animate__fadeInUp receptor'>
                <div className='chat__body__messages__message__text'>
                    Cargando...
                </div>
            </div>
            <div className='chat__body__messages__message skeleton animate__animated animate__fadeInUp sender'>
                <div className='chat__body__messages__message__text'>
                    Cargando...
                </div>
            </div>
        </>
    )
}
