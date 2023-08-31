import React, {useState} from 'react'
import ReadyToWork from "/public/noProfilReadyToWork.png"
import cover from "/public/cover.png"
import {IconButton, Divider, Menu, MenuItem, createTheme, ThemeProvider} from "@mui/material"
import {BsBookmarkFill} from "react-icons/bs"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {HiPhotograph} from 'react-icons/hi'
import {MdCalendarMonth} from 'react-icons/md'
import {AiFillYoutube} from 'react-icons/ai'
import {ImParagraphLeft} from 'react-icons/im'
import {FaCaretDown, FaCaretUp} from 'react-icons/fa6'
import {Post} from "./utils/Post";


const Theme = createTheme({
    palette: {
        primaryButton: {
            main: '#fff',
        }
    }
})

function Home() {
    const [anchor, setAnchor] = useState(null);
    const [filter, setFiltre] = useState("Pertinence");
    const open = Boolean(anchor);
    const handleClick = (event) => {
        setAnchor(event.currentTarget);
    };
    const handleClose = (e) => {
        setAnchor(null);
        setFiltre(e.target.innerText);
    };

    return (
        <ThemeProvider theme={Theme}>
            <main className="h-full pt-24 mx-[20px] grid grid-cols-12 gap-4">
                {/* Left side */}
                <div className="row-span-full col-span-3 flex flex-col">
                    {/* About the self profile */}
                    <div className="bg-white rounded-2xl shadow-xl w-full ring-1 ring-gray-300 overflow-hidden">
                        {/* Cover and Prifile */}
                        <div
                            className={`w-[266px] h-28 relative rounded-t-md`}
                        >
                            <div className="w-[299px] rounded-t-md overflow-hidden">
                                <img src={cover} className=" w-full rounded-t-md"/>
                            </div>

                            <img src={ReadyToWork} alt="ReadyToWork"
                                 className="w-24 h-24 rounded-full absolute translate-x-24 top-5 ring-4 ring-white"/>
                        </div>
                        {/* Name and job */}
                        <div className="w-full flex flex-col items-center my-4">
                            <span
                                className="text-xl font-bold capitalize">oussama ouardi</span> {/* When I must click here he must send me to self profil */}
                            <span className="text-blue-500">Frontend Developer</span>
                        </div>
                        <Divider/>
                        {/* Relations */}
                        <div
                            className="w-full flex flex-row items-start justify-between my-2 py-5 px-3 cursor-pointer hover:bg-gray-200">
                            <div className=" flex flex-col ">
                                <span className="text-sm text-gray-400 font-semibold">Relation</span>
                                <span className="text-sm text-gray-900 font-semibold">Devlopper votre relations</span>
                            </div>
                            <span
                                className="text-sm text-blue-500">19</span> {/* This label show how much contact that i have  */}
                        </div>
                        <Divider/>
                        {/* Mes Elements */}
                        <div
                            className="w-full flex flex-row items-start justify-between my-2 py-5 px-3  cursor-pointer hover:bg-gray-200">
                            <div className=" flex items-center gap-4">
                                <BsBookmarkFill className="text-gray-400"/>
                                <span className="text-sm text-gray-n400 font-semibold">Mes elements</span>
                            </div>
                        </div>
                    </div>
                    {/* Others */}
                    <div className="bg-white rounded-2xl shadow-xl w-full ring-1 ring-gray-300 mt-4">
                        {/* Event Groups Hastags */}
                        <div className="w-full flex flex-col items-start gap-3 my-4 px-3">
                            <span
                                className="font-semibold text-sm text-blue-500 hover:underline transition-all cursor-pointer ease-in-out ">Groups</span>

                            <div className="w-full flex flex-row items-center justify-between gap-3  ">
                                <span
                                    className="font-semibold text-sm text-blue-500 hover:underline transition-all cursor-pointer ease-in-out ">Event</span>
                                <IconButton aria-label="delete" size="small">
                                    <AddOutlinedIcon size="small"/>
                                </IconButton>
                            </div>

                            <span
                                className="font-semibold text-sm text-blue-500 hover:underline transition-all cursor-pointer ease-in-out ">Hashtags suivis</span>
                        </div>

                    </div>
                </div>

                {/* Middle side */}
                <div className="col-span-6 ">
                    {/* Add Post  */}
                    <div className="w-full flex flex-col items-start gap-3  bg-white p-3 rounded-xl">
                        <div className='flex flex-row items-center justify-between gap-4 w-full'>
                            <img src={ReadyToWork} className='w-14 h-14 rounded-full'/>
                            {/* MUST GET THE IMG FROM THE BACKEND */}
                            <input
                                type="text"
                                placeholder="Commencer un post"
                                className="w-full h-14 outline-none border-gray-400 border-[1px] text-lg font-semibold rounded-full px-4 active:border-gray-500 focus:border-gray-500 transition-all ease-in-out"/>
                        </div>
                        {/* Add Post Button Type */}
                        <div
                            className="w-full flex flex-row items-center justify-between"
                        >
                            <div
                                className='utilsButton'
                            >
                                <HiPhotograph
                                    className='text-blue-500'
                                    size={25}
                                />
                                Photo
                            </div>
                            <div
                                className='utilsButton'
                            >
                                <AiFillYoutube color="#5f9c40" size={25}/>
                                Vedio
                            </div>
                            <div className='utilsButton'>
                                <MdCalendarMonth size={25} color="#bf7e1c"/>
                                Evenement
                            </div>
                            <div className='utilsButton'>
                                <ImParagraphLeft size={25} color='#e26745'/>
                                Rediger un article
                            </div>

                        </div>
                    </div>
                    {/* Divider and the filter of pots */}
                    <div className='w-full flex flex-row  flex-shrink flex-grow items-center gap-1'>
                        <div className='w-full h-[2px] bg-gray-200 my-5 rounded flex flex-shrink'></div>
                        <div className='w-2/4 flex flex-row flex-grow gap-2 text-sm'>
                            Classer par :
                            <div
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                className='text-center text-gray-500 font-semibold cursor-pointer flex flex-row items-end gap-1'
                            >
                                {filter}
                                <FaCaretDown className='text-gray-500'/>
                            </div>
                            <Menu
                                id="basic-menu"
                                anchorEl={ anchor }
                                open={open}
                                onClose={handleClose}
                                sx={{
                                    '& .MuiPaper-root': {
                                        left: '757px !important',
                                        width: '20ch',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderBottomLeftRadius: '20px',
                                        borderBottomRightRadius: '20px',
                                    },

                                }}
                            >
                                <MenuItem
                                    onClick={handleClose}
                                >
                                    Pertinence
                                </MenuItem>
                                <MenuItem
                                    onClick={handleClose}
                                >
                                    Recent
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>

                    {/* List of posts */}
                    <div className="w-full flex flex-col gap-3">
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                    </div>
                </div>

                {/* Right side */}
                <div className="col-span-3 bg-white rounded-2xl shadow-xl">
                </div>
            </main>
        </ThemeProvider>
    )
}

export default Home