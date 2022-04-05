import React from 'react'
import { ListItem } from './ListItem'

export const List = ({ professionals = [] }) => {



    return (
        <div className="mod__list">
            {professionals.map(profe => (
                <ListItem key={profe.id} profe={profe} />
            ))}
        </div>
    )
}
