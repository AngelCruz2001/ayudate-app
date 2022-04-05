import React from 'react'
import { useSelector } from 'react-redux'
import { ListItemActions } from './ListItemActions'

export const ListItem = ({ profe }) => {

    const { loading } = useSelector(state => state.ui)
    const handleDownload = (document) => {
        // Download a document.
    }


    return (
        <div className={`mod__list__item ${loading ? 'skeleton' : ''}`} key={profe.id}>

            <div className="mod__list__item__image">
                {/* <img src={profe.image} alt={profe.name} /> */}
            </div>

            <div className="mod__list__item__info">
                <div className='personal'>
                    <p className='name'>{profe.name}</p>
                    <p className="curp">{profe.curp}</p>
                </div >

                <div className='contact'>
                    <p className='number'>
                        <i className='fa-solid fa-phone'></i>
                        <span>
                            {profe.number}
                        </span>
                    </p>

                    <p className='email'>
                        <i className='fa-solid fa-envelope'></i>
                        <span>
                            {profe.email}
                        </span>
                    </p>
                    <p className='schedule'>
                        <i className="fa-solid fa-clock"></i>
                        <span>
                            {profe.schedule}
                        </span>
                    </p>

                </div>

                <button
                    className="btn btn-download document"
                    onClick={() => handleDownload(profe.document)}
                >
                    <span>Cedula</span>
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
            </div>

            <ListItemActions profe={profe} />

            <span className={`mod__list__item__status ${profe.status ? 'accepted' : 'pending'}`} />

        </div>
    )
}
