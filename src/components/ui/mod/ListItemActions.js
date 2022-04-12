import React from 'react'
import { useDispatch } from 'react-redux'
import { profStartAcceptProfessional, profStartDeleteProfessional, profStartRejectProfessional } from '../../../actions/professional'

export const ListItemActions = ({ profe = {} }) => {
    const dispatch = useDispatch()

    const handleAcceptProfessional = () => {
        dispatch(profStartAcceptProfessional(profe.email))
    }

    const handleDeleteProfessional = () => {
        dispatch(profStartDeleteProfessional(profe.email))
    }

    return (
        <div className="mod__list__item__actions">
            {
                profe.is_accepted ?
                    <button className='btn btn-delete' onClick={handleDeleteProfessional} >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    :
                    <>
                        <button className='btn btn-decline' onClick={handleDeleteProfessional}>
                            <i className="fas fa-times"></i>
                        </button>
                        <button className='btn btn-accept' onClick={handleAcceptProfessional}>
                            <i className="fa-solid fa-check"></i>
                        </button>
                    </>

            }


        </div>
    )
}
