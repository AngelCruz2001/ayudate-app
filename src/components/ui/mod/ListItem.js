import React from 'react'
import { useSelector } from 'react-redux'
import { ListItemActions } from './ListItemActions'

export const ListItem = ({ profe }) => {

    const { loading } = useSelector(state => state.ui)
    const handleDownload = (doc) => {
        // Download a doc from a URL
        console.log(doc)
        // const a = document.createElement('a');
        // a.href = document;
        // a.download = document.split('/').pop();
        // a.click();
    }


    return (
        <div className={`mod__list__item ${loading ? 'skeleton' : ''} animate__animated animate__fadeIn`} key={profe.id}>

            <div className="mod__list__item__image">
                {!loading && <img src={profe.document2} alt={profe.name} />}
            </div>

            <div className="mod__list__item__info">
                <div className='personal'>
                    <span className='name'>{profe.fname + ' ' + profe.lname} </span>
                    <span className="curp">{profe.curp}</span>
                </div >

                <div className='contact'>
                    <span className='number'>
                        <i className='fa-solid fa-phone'></i>
                        {profe.phone}
                    </span>

                    <span className='email'>
                        <i className='fa-solid fa-envelope'></i>
                        {profe.email}
                    </span>
                    <span className='schedule'>
                        <i className="fa-solid fa-clock"></i>
                        {profe.schedule}
                    </span>

                </div>

                <a
                    className="btn btn-download document"
                    // onClick={() => handleDownload(profe.document)}
                    href={profe.document1}
                    target="_blank"
                >
                    <span>Cedula</span>
                    <i className="fa-solid fa-arrow-down"></i>
                </a>
            </div>

            <ListItemActions profe={profe} />

            {/* <span className={`mod__list__item__status ${profe.status ? 'accepted' : 'pending'}`} /> */}

        </div>
    )
}
