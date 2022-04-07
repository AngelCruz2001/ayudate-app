import React from 'react'
import { useDispatch } from 'react-redux'
import { profStartAcceptProfessional, profStartDeleteProfessional, profStartRejectProfessional } from '../../../actions/professional'

export const ListItemActions = ({ profe = {} }) => {
    const dispatch = useDispatch()
    console.log(profe)
    const handleAcceptProfessional = () => {
        // Accept a proffesional.
        dispatch(profStartAcceptProfessional(profe.id))
        console.log(profe.id)
    }

    const handleRejectProfessional = () => {
        // Reject a proffesional.
        dispatch(profStartRejectProfessional(profe.id))

        console.log(profe.id)
    }

    const handleDeleteProfessional = () => {
        // Delete a proffesional.
        dispatch(profStartDeleteProfessional(profe.id))
        console.log(profe.id)
    }

    return (
        <div className="mod__list__item__actions">
            {
                profe.status ?
                    <button className='btn btn-delete' onClick={handleDeleteProfessional} >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    :
                    <>
                        <button className='btn btn-decline' onClick={handleRejectProfessional}>
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
