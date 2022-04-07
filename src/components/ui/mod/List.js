import React from 'react'
import { ListItem } from './ListItem'
import { SkeletonItem } from './SkeletonItem'

export const List = ({ professionals = [], loading }) => {

    // console.log('list', professionals)


    return (
        <div className="mod__list">
            {
                loading
                    ?
                    <>
                        <SkeletonItem />
                        <SkeletonItem />
                        <SkeletonItem />
                        <SkeletonItem />
                        <SkeletonItem />
                    </>
                    :
                    professionals.map(profe => (
                        <ListItem key={profe.id} profe={profe} />
                    ))
            }
        </div>
    )
}
