import React, { useState } from 'react'
import Linkdine from '/public/linkdin-logo.svg'
import Search from './Search'
import IconButton from './utils/IconButton'



function NavBar({ setDarker }) {
    const [iconsButtonState, setIconsButtonState] = useState([true, false, false, false])

    const PermuteState = (state) => {
        setIconsButtonState([false, false, false, false])
        switch (state) {
            case 0:
                setIconsButtonState([true, false, false, false])
                break;
            case 1:
                setIconsButtonState([false, true, false, false])
                break;
            case 2:
                setIconsButtonState([false, false, true, false])
                break;
            case 3:
                setIconsButtonState([false, false, false, true])
                break;
            default:
                setIconsButtonState([true, false, false, false])
                break;
        }

    }
    return (
        <nav className='w-full h-16 bg-white flex items-center px-24 shadow-xl  border-b-[#8c8c8c33] fixed top-0 left-0 right-0 z-20'>
            {/* START Logo  */ }
            <div className='w-1/2 h-full flex items-center p-5 gap-5'>
                <Linkdine className="text-[#0a66c2] flex-shrink-0" />
                <Search setDarker={ setDarker } />
            </div>
            {/* END Logo */ }
            {/* START Menu */ }
            <div className='w-1/2 h-full flex items-center justify-start gap-0'>
                <IconButton id={ 0 } name='Home' icon='home' state={ iconsButtonState[0] } Onclick={ PermuteState } />
                <IconButton id={ 1 } name='Work' icon='bag' state={ iconsButtonState[1] } Onclick={ PermuteState } />
                <IconButton id={ 2 } name='Reseau' icon='group' state={ iconsButtonState[2] } Onclick={ PermuteState} />
                <IconButton id={ 3 } name='Message' icon='message' state={ iconsButtonState[3] } Onclick={ PermuteState } />
            </div>
        </nav>
    )
}

export default NavBar