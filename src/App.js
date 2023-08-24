import React, { useState } from "react"
import NavBar from "./components/NavBar"
import "./index.css"


function App() {
	const [darker, setDarker] = useState(false)
	return (
		<div className={ `bg-gray-100 w-full h-screen z-10` }>
			{/* NavBar */ }
			<NavBar setDarker={ setDarker } />
			<main className="w-full h-full pt-24 container">
				<h1 className="text-yellow-500 text-3xl align-center">Hello main</h1>
			</main>
			{/* End NavBar */ }
		</div>

	)
}


export default App
