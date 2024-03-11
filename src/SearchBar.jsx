import React from 'react'

const SearchBar = ({isActive, setIsActive, searchData, setSearchData}) => {
  
  const handleSubmit = () =>{
    
  }

  const onFocus = () =>{
    setIsActive(!isActive);
    console.log('active');
  } 


  return (
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text"
        placeholder='Search...' 
        className='form-control'
        onFocus={onFocus}
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        /> 
      </form>
    </div>
  )
}

export default SearchBar
