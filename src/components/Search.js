import React from 'react'
import {FaSearch} from 'react-icons/fa'
import Jack from '/public/Data/jack-finnigan-rriAI0nhcbc-unsplash.jpg'
import {data} from 'autoprefixer'

function Search() {
    const [isFocus, setIsFocus] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('')


    const Data = [
        {
            name: 'Jack Finnigan',
            job: 'Software Engineer at Airbnb',
            img: 'Jack.jpg'
        },
        {
            name: 'Emily Collins',
            job: 'Frontend Developer at Google',
            img: 'Emily.jpg'
        },
        {
            name: 'Michael Johnson',
            job: 'Full Stack Developer at Microsoft',
            img: 'Michael.jpg'
        },
        // Add more objects...
        {
            name: 'Sophia Rodriguez',
            job: 'UI/UX Designer at Amazon',
            img: 'Sophia.jpg'
        },
        {
            name: 'Daniel Lee',
            job: 'Software Engineer at Facebook',
            img: 'Daniel.jpg'
        },
    ];


    const filterData = (data, searchValue) => {
        if (searchValue === '') return data;
        return data.filter((item) => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase()) || item.job.toLowerCase().includes(searchValue.toLowerCase());
        });
    }
    return (
        <div
            id="search"
            className={`w-1/2 h-[2rem]  px-3 bg-[#edf3f8] rounded-md flex items-center justify-center gap-2 transition-all relative`}
            onFocus={() => {
                document.getElementById('search').classList.add('w-full', 'border-black', 'border-2')
                setIsFocus(true)
            }
            }
            onBlur={() => {
                document.getElementById('search').classList.remove('w-full', 'border-black', 'border-2')
                setIsFocus(false)
            }}
        >
            <FaSearch className='z-rotate'/>
            <input
                type="text"
                className='p-2 w-full h-full border-none outline-none bg-transparent '
                placeholder='Search'
                onKeyUp={(e) => {
                    setSearchValue(e.target.value)
                }}
            />
            {/* Serach sugssations */}

            <div
                className={`${(isFocus) ? "flex flex-col gap-5" : "hidden"} absolute top-10 w-full  rounded bg-white  shadow-sm transition-all ease-in-out`}
            >
                <div className='flex items-center justify-between border-b-gray-200 p-4 pb-0'>
                    <p className='text-gray-400'>Recent</p>
                    <p className='text-blue-500'>Clear</p>
                </div>
                <div className='flex items-start flex-col gap-4 transition-all ease-in-out'>
                    {
                        filterData(Data, searchValue).map((item, index) => (
                            <div
                                className='flex flex-row justify-between gap-2 w-full cursor-pointer p-2 hover:bg-gray-200 transition-colors ease-in-out'
                                key={index}>
                                <div className='flex flex-row items-center gap-1 ml-2'>
                                    <FaSearch className='w-4 h-4 mr-1'/> {/* Adjusted the margin */}
                                    <p className='text-black'>{item.name}</p>
                                    <p className='text-gray-400 text-sm'>● {item.job}</p>
                                </div>
                                <img src={Jack} alt={item.name}
                                     className='rounded-full w-8 h-8 object-cover'/> {/* Used item.img instead of Jack */}
                            </div>
                        ))

                    }

                </div>

            </div>
        </div>
    )
}

export default Search