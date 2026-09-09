import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router';

function SearchBar (){

    const [slug,setSlug] = useState();

    const handleChange = (e) =>{
        setSlug(e.target.value)
    }

    return(
        <>
          <input
            type="text"
            placeholder="Cerca"
            className="input w-24 md:w-auto"
            onChange={handleChange}
            />
           
           <Link className="btn btn-square" to={`search/${slug}`}>
              <FaSearch />
           </Link>
         
        </>
    )
}

export default SearchBar;