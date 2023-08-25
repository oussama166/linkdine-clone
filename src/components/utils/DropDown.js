import React, { useState } from 'react'
import ReadyToWork from '/public/noProfilReadyToWork.png'
import { Button, Divider, Menu, ThemeProvider, createTheme } from '@mui/material'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'



// Theme
let theme = createTheme({
    palette: {
        ButtonPalate: {
            main: '#fff',
            light: 'rgb(156 163 175)'
        },
    },
});
// Theme


function DropDown() {
    // Menu user

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Menu user
    return (
        <ThemeProvider theme={ theme }>
            <div>
                <Button
                    id="basic-button"
                    aria-controls={ open ? 'basic-menu' : undefined }
                    aria-haspopup="true"
                    aria-expanded={ open ? 'true' : undefined }
                    onClick={ (e) => handleClick(e) }
                    color="ButtonPalate"
                    sx={ {
                        textTransform: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                        alignItems: 'center',
                        justifyContent: 'center'
                    } }

                >
                    <img className='w-8 h-8 rounded-full' src={ ReadyToWork } alt="user" />
                    <span className='text-black flex items-center transition-all ease-in-out'>
                        Vous { open ? <AiFillCaretUp color='black' /> : <AiFillCaretDown color='black' /> }
                    </span>

                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={ anchorEl }
                    open={ open }
                    onClose={ handleClose }
                    MenuListProps={ {
                        'aria-labelledby': 'basic-button',
                    } }
                    sx={ {
                        "& .MuiMenu-list": {
                            width: '260px',
                        }
                    } }
                >
                    {/* Header */ }
                    <div className='flex flex-col gap-2 p-2 border-b-gray-950'>
                        <div className='flex flex-row gap-2 p-2'>
                            <img src={ ReadyToWork } alt="ready To Work profile" className='rounded-full w-20 h-20' /> {/* THIS FIELD MUST TAKE DINYAMIC DATA  */ }
                            <div className='flex flex-col items-start gap-1'>
                                <span className='text-black font-bold'>ouardi Oussama</span> {/* THIS FIELD MUST TAKE DINYAMIC DATA  */ }
                                <span className='text-[#0a66c2]'>@ouardiOussama</span> {/* THIS FIELD MUST TAKE DINYAMIC DATA  */ }
                            </div>
                        </div>
                        <Button
                            variant='outlined'
                            color="primary"
                            sx={ {
                                borderRadius: '20px',
                                textTransform: 'Capitalize',
                            } }
                        >Voire le profile</Button>
                    </div>
                    <Divider />

                    <div className='flex flex-col gap-2 p-2 text-gray-400'>
                        <Button
                            variant='text'
                            sx={ {
                                textTransform: 'Capitalize',
                                color: 'rgb(156 ,163, 175)',
                                fontSize: '14px',
                                fontWeight: '500',
                                '&:hover': {
                                    color: 'rgb(29, 161, 242)',
                                    backgroundColor: 'rgb(29, 161, 242,0.1)',
                                }
                            } }
                        >
                            Deconnexion
                        </Button>
                    </div>

                </Menu>
            </div>
        </ThemeProvider>
    )
}

export default DropDown