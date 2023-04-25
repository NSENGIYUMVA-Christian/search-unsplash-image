import React from 'react'
import { useGlobalContext } from './Context'


const SearchForm = () => {

 const {setSearchTerm} = useGlobalContext()
 const handleSubmit = (e)=>{
  e.preventDefault()
  const searchValue =e.target.elements.search.value
  if(!searchValue) return;
   setSearchTerm(searchValue)

 }
  return (
    <section>
      <h1 className="title"> Chris images generator </h1>
      <form className="search-form" onSubmit={handleSubmit} >
        <input type="text" className="form-input search-input" name="search" placeholder="search anything"/>
      <button className="btn" type="submit">
        Search
      </button>

      </form>
      </section>
  )
}

export default SearchForm