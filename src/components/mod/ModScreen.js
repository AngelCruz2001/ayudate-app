import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isACoincidenceSearch } from '../../helpers/isACoincidence'
import { List } from '../ui/mod/List'
import { Searchbar } from '../ui/Searchbar'
import { Sidebar } from '../ui/sidebar/Sidebar'
import { profStartGetProfessionals } from '../../actions/professional'


export const ModScreen = () => {
  const dispatch = useDispatch();
  const { prof: { data }, ui: { loading } } = useSelector(state => state)
  const [searchValue, setSearchValue] = useState({ word: '', filter: '' })
  const [professionals, setProfessionals] = useState([])

  useEffect(() => {
    dispatch(profStartGetProfessionals())
  }, [])

  useEffect(() => {
    setProfessionals(data)
  }, [data])

  useEffect(() => {
    let professionalsFiltered = data.filter(p => isACoincidenceSearch([p.fname, p.curp], searchValue.word))
    professionalsFiltered = professionalsFiltered.filter(p => (p.status).toString() === searchValue.filter || searchValue.filter === '')
    setProfessionals(professionalsFiltered)

  }, [searchValue.word, searchValue.filter])

  return (
    <>
      <Sidebar />
      <div className='mod'>

        <header>
          <h1>Profesionales</h1>
        </header>

        <div className='mod__main'>

          <Searchbar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <List professionals={professionals} loading={loading} />
        </div>

      </div>
    </>
  )
}
