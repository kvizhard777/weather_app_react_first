import React, { useState } from 'react'
import MainInput from '../UI/MainInput/MainInput'
import MainButton from '../UI/MainButton/MainButton'
import './Search.css'

import { FiSearch } from "react-icons/fi"

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('')

  const handleSearchClick = () => {
    if (city) {
      onSearch(city)
    }
  }

  return (
    <div className='search'>
      <MainInput placeholder="Enter city name" type='text' value={city} onChange={(e) => setCity(e.target.value)}  />
      <MainButton text="Search" img={FiSearch} size='20px' onClick={handleSearchClick} />
    </div>
  )
}

export default Search