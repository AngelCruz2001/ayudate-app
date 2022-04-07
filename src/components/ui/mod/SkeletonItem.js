import React from 'react'
import { ListItemActions } from './ListItemActions'

export const SkeletonItem = () => {
    return (
        <div className={'mod__list__item skeleton'} >

            <div className="mod__list__item__image">
            </div>

            <div className="mod__list__item__info">
                <div className='personal'>
                    <p className='name'>{'name'}</p>
                    <p className="curp">{'curp'}</p>
                </div >

                <div className='contact'>
                    <span className='number'>
                        <i className='fa-solid fa-phone'></i>
                    </span>

                    <span className='email'>
                        <i className='fa-solid fa-envelope'></i>
                    </span>
                    <span className='schedule'>
                        <i className="fa-solid fa-clock"></i>
                    </span>

                </div>

                <button
                    className="btn btn-download document"
                >
                    <span>Cedula</span>
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
            </div>

            <div className='mod__list__item__actions'>
                <button>L</button>
                <button>L</button>
            </div>

            {/* <span className='mod__list__item__status' /> */}

        </div>
    )
}
