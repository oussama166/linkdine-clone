import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Search({ setDarker }) {
    return (
        <div
            id="search"
            aria-focus="false"
            className={ `w-1/2 h-[2rem]  px-3 bg-[#edf3f8] rounded-md flex items-center justify-center gap-2 transition-all ` }
            onFocus={ () => {
                document.getElementById('search').classList.add('w-full', 'border-black', 'border-2')
                setDarker(true)
            }
            }
            onBlur={ () => {
                document.getElementById('search').classList.remove('w-full', 'border-black', 'border-2')
                setDarker(false)
            } }
        >
            <FaSearch className='z-rotate' />
            <input
                type="text"
                className='p-2 w-full h-full border-none outline-none bg-transparent '
                placeholder='Search' />
        </div>
    )
}

export default Search