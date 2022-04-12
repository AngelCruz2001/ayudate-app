import React, { useState } from 'react'

export const Searchbar = ({ searchValue, setSearchValue, isOpen, setIsOpen }) => {


    const handleSearch = (e) => {
        setSearchValue(prev => ({ ...prev, word: e.target.value }))
    }

    const handleFilter = (e) => {
        setSearchValue(prev => ({ ...prev, filter: e.target.value }))
    }

    const handleClickIsOpen = () => setIsOpen(prev => !prev)

    return (
        <div className="searchbar">
            <label >
                <input
                    type="text"
                    placeholder="Buscar..."
                    onChange={handleSearch}
                />
                <i className='fa-solid fa-search'></i>
            </label>

            <div className='filters'>
                <i className="fa-solid fa-chevron-down"></i>

                <select onChange={handleFilter}>
                    <option defaultValue value=''>Todos</option>
                    <option value={false}>Pendientes</option>
                    <option value={true}>Aceptados</option>
                </select>
            </div>
{/* 
            <div className="addUser" onClick={handleClickIsOpen}>
                <i className="fa-solid fa-plus"></i>
                <span>Agregar usuario</span>
            </div> */}

        </div>
    )
}

// email
// fname
// lname
// password
// phone