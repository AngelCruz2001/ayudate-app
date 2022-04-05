import React from 'react'
import { useDispatch } from 'react-redux'
import { profStartAcceptProfessional, profStartRejectProfessional } from '../../../actions/professional'

export const ListItemActions = ({ profe }) => {
    const dispatch = useDispatch()
    const handleAcceptProffesional = () => {
        // Accept a proffesional.
        dispatch(profStartAcceptProfessional(profe.id))
        console.log(profe.id)
    }

    const handleRejectProffesional = () => {
        // Reject a proffesional.
        dispatch(profStartRejectProfessional(profe.id))

        console.log(profe.id)
    }

    return (
        <div className="mod__list__item__actions">

            <button className='btn btn-decline' onClick={handleAcceptProffesional}>
                <i className="fas fa-times"></i>
            </button>

            <button className='btn btn-accept' onClick={handleRejectProffesional}>
                <i className="fa-solid fa-check"></i>
            </button>

        </div>
    )
}
