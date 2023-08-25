import React, { useState } from "react"
import NavBar from "./components/NavBar"
import ReadyToWork from "/public/noProfilReadyToWork.png"
import cover from "/public/cover.png"
import "./index.css"
import { IconButton, Divider } from "@mui/material"
import { BsBookmarkFill } from "react-icons/bs"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';





function App() {
	const [darker, setDarker] = useState(false)
	return (
		<div className={ `bg-gray-100 w-full h-screen z-10` }>
			{/* NavBar */ }
			<NavBar setDarker={ setDarker } />
			<main className="h-full pt-24 ml-20 mr-20 grid grid-cols-12 gap-4">
				<div className="row-span-full col-span-3 flex flex-col">
					{/* About the self profile */ }
					<div className="bg-white rounded-2xl shadow-xl w-full ring-1 ring-gray-300">
						{/* Cover and Prifile */ }
						<div
							className={ `w-[266px] h-28 relative rounded-t-md` }
						>
							<img src={ cover } alt="" className="object-contain rounded-t-md" />
							<img src={ ReadyToWork } alt="ReadyToWork" className="w-24 h-24 rounded-full absolute translate-x-20 top-5 ring-4 ring-white" />
						</div>
						{/* Name and job */ }
						<div className="w-full flex flex-col items-center my-4">
							<span className="text-xl font-bold capitalize">oussama ouardi</span> {/* When i must click here he must send me to self profil */ }
							<span className="text-blue-500">Frontend Developer</span>
						</div>
						<Divider />
						{/* Relations */ }
						<div className="w-full flex flex-row items-start justify-between my-2 py-5 px-3 cursor-pointer hover:bg-gray-200">
							<div className=" flex flex-col ">
								<span className="text-sm text-gray-400 font-semibold">Relation</span>
								<span className="text-sm text-gray-900 font-semibold">Devlopper votre relations</span>
							</div>
							<span className="text-sm text-blue-500">19</span> {/* This label show how much contact that i have  */ }
						</div>
						<Divider />
						{/* Mes Elements */ }
						<div className="w-full flex flex-row items-start justify-between my-2 py-5 px-3  cursor-pointer hover:bg-gray-200">
							<div className=" flex items-center gap-4">
								<BsBookmarkFill className="text-gray-400" />
								<span className="text-sm text-gray-400 font-semibold">Mes elements</span>
							</div>
						</div>
					</div>
					{/* Others */ }
					<div className="bg-white rounded-2xl shadow-xl w-full ring-1 ring-gray-300 mt-4">
						{/* Event Groups Hastags */ }
						<div className="w-full flex flex-col items-start gap-3 my-4 px-3 ">
							<span className="font-semibold text-sm text-blue-500 hover:underline transition-all cursor-pointer ease-in-out ">Groups</span>

							<div className="w-full flex flex-row items-center justify-between gap-3  ">
								<span className="font-semibold text-sm text-blue-500 hover:underline transition-all cursor-pointer ease-in-out ">Event</span>
								<IconButton aria-label="delete" size="small">
									<AddOutlinedIcon size="small" />
								</IconButton>
							</div>

							<span className="font-semibold text-sm text-blue-500 hover:underline transition-all cursor-pointer ease-in-out ">Hashtags suivis</span>
						</div>

					</div>
				</div>
				<div className="col-span-6 bg-white rounded-2xl shadow-xl">
				</div>
				<div className="col-span-3 bg-white rounded-2xl shadow-xl">


				</div>
			</main>
			{/* End NavBar */ }
		</div>

	)
}


export default App
