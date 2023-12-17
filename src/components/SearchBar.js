import React from 'react';
import {HiLocationMarker} from 'react-icons/hi';


function SearchBar({filter,setFilter}) {
  return (
    <div>
        <div className='flexCenter search-bar' placeholder='search' style={{width:'500px',borderColor:'blue'}}>
            <HiLocationMarker color='blue' size={25}/>
            <input type='text' placeholder='search' style={{width:400}} value={filter} onChange={(e)=> setFilter(e.target.value)} / >
            <button className='btn btn-primary button'>search</button>
        </div>
    </div>
  )
}

export default SearchBar