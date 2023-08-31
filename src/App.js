import React, {useState} from "react"
import "./index.css"
//
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import OffreEmploye from "./components/OffreEmploye"
import Reseau from "./components/Reseau"
import {Routes, Route} from 'react-router-dom';


function App() {
    const [darker, setDarker] = useState(false)
    return (
        <div className={`bg-gray-100 w-full h-screen z-10 flex flex-col`}>
            <NavBar setDarker={setDarker}/>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="offreEmploye" element={<OffreEmploye/>}/>
                <Route path="/Reseau" element={<Reseau/>}/>
            </Routes>

        </div>

    )
}


export default App
