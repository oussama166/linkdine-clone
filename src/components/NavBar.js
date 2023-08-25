import React, { useState } from 'react'
import Linkdine from '/public/linkdin-logo.svg'
import Search from './Search'
import IconButton from './utils/IconButton'
import DropDown from './utils/DropDown'







function NavBar({ setDarker }) {
    const [iconsButtonState, setIconsButtonState] = useState([true, false, false, false, false])


    // Permute the state of the icons button and return the new state
    const PermuteState = (state) => {
        const newState = Array(5).fill(false);
        newState[state] = true;
        setIconsButtonState(newState);
        return state;

    }
    // get the active state of the icons button index
    const setActiveState = () => {
        for (let i = 0; i < iconsButtonState.length; i++) {
            if (iconsButtonState[i] === true) {
                return i
            }
        }
    }
    return (

        <nav className='w-full h-16 bg-white flex items-center px-16 shadow-xl  border-b-[#8c8c8c33] fixed top-0 left-0 right-0 z-20'>
            {/* START Logo  */ }
            <div className='w-1/2 h-full flex items-center p-5 gap-5'>
                <Linkdine className="text-[#0a66c2] flex-shrink-0" />
                <Search setDarker={ setDarker } />
            </div>
            {/* END Logo */ }
            {/* START Menu */ }
            <div className='w-1/2 h-full flex items-center justify-start gap-0'>
                {/* navigations buttons */ }
                <IconButton
                    id={ 0 }
                    name='Home'
                    icon='home'
                    state={ iconsButtonState[0] }
                    Onclick={ PermuteState }
                    isActiveButton={ setActiveState() } />
                <IconButton
                    id={ 1 }
                    name='Work'
                    icon='bag'
                    state={ iconsButtonState[1] }
                    Onclick={ PermuteState }
                    isActiveButton={ setActiveState() } />
                <IconButton
                    id={ 2 }
                    name='Reseau'
                    icon='group'
                    state={ iconsButtonState[2] }
                    Onclick={ PermuteState }
                    isActiveButton={ setActiveState() } />
                <IconButton
                    id={ 3 }
                    name='Message'
                    icon='message'
                    state={ iconsButtonState[3] }
                    Onclick={ PermuteState }
                    isActiveButton={ setActiveState() } />
                <IconButton
                    id={ 4 }
                    name='Notification'
                    icon='notification'
                    state={ iconsButtonState[4] }
                    Onclick={ PermuteState }
                    isActiveButton={ setActiveState() } />
                {/* User menue */ }
                <DropDown />
            </div>
        </nav>
    )
}

export default NavBar