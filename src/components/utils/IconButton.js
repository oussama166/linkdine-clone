import React, { useState } from 'react'
// Non Active Icons
import Home from "/public/Home.svg"
import Bag from "/public/bagNonActiveState.svg"
import Group from "/public/groupsNonActive.svg"
import Message from "/public/message.svg"
import Notification from "/public/notification.svg"

// Active Icons
import BagActive from "/public/bagActiveState.svg"
import GroupActive from "/public/groups.svg"
import MessageActive from "/public/messageActive.svg"
import NotificationActive from "/public/notificationActive.svg"


// MUI
import { Badge } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';


// create icons depande the parametre
const Icons = (icon, state) => {
    switch (icon) {
        case 'home':
            return <Home className='w-6 h-6 transition-all ease-in-out' />
            break;
        case 'bag':
            if (state !== true) {
                return <Bag className='w-6 h-6 transition-all ease-in-out' />
                break;
            }
            else {
                return <BagActive className='w-6 h-6 transition-all ease-in-out' />
                break;
            }
        case 'group':
            if (state !== true) {
                return <Group className='w-6 h-6 transition-all ease-in-out' />
                break;
            }
            return <GroupActive className='w-6 h-6 transition-all ease-in-out' />
            break;
        case 'message':
            if (state !== true) {
                return <Message className='w-6 h-6 transition-all ease-in-out' />
                break;
            }
            return <MessageActive className='w-6 h-6 transition-all ease-in-out' />
            break;
        case 'notification':
            if (state !== true) {
                return <Notification className='w-6 h-6 transition-all ease-in-out' />
                break;
            }
            return <NotificationActive className='w-6 h-6 transition-all ease-in-out' />
        default:
            return <Home className='w-6 h-6 transition-all ease-in-out' />
            break;
    }
}


// Create Theme for Badge
const theme = createTheme({
    palette: {
        violet: {
            main: "#fff",
        },
    },
});



// Return the component with the icon and the name
function IconButton({ id, name, icon, state, Onclick, isActiveButton }) {

    const [isActive, setIsActive] = useState(state)


    return (
        <ThemeProvider theme={ theme }>
            <div
                key={ id }
                className={ `w-28 h-full flex flex-col items-center justify-center rounded transition-all ease-in-out cursor-pointer  ${(isActiveButton === id) ? "border-b-4 border-b-black text-black" : "text-gray-400"}  hover:text-black` }
                onClick={ () => {
                    Onclick(id)
                    setIsActive(!isActive)
                } }


            >
                <Badge
                    color="error"
                    variant="error"
                    badgeContent={ 0 }
                    max={ 99 }
                    sx={
                        {
                            '& .MuiBadge-badge': {
                                right: -3,
                                top: 4,
                                border: `2px solid #fff`,
                                padding: '0px 3px',
                                borderRadius: '50%',
                            },
                        }
                    }
                    invisible={ false }
                >
                    { Icons(icon, state) }

                </Badge>
                { name }
            </div>
        </ThemeProvider>
    )
}

export default IconButton