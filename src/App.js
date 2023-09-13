import React from "react";
import "./index.css";

// Import Compement
import NavBar from "./components/NavBar";
import OffreEmploye from "./components/OffreEmploye";
import Reseau from "./components/Reseau";
import Login from "./components/Login";
import { SignUp } from "./components/SignUp";
import { ForgetPass } from "./components/ForgetPass";
import Load from "./components/utils/Load";
// Default Export Componenet
const LazyHome = React.lazy(() => import("./components/Home"));

// Redux import
import { useSelector } from "react-redux";

// Router
import { Routes, Route } from "react-router-dom";

function App() {
  const isOnline = useSelector((state) => state.login.isOnline);
  return (
    <div className={`bg-gray-100 w-full h-full z-10 flex flex-col`}>
      {isOnline == false ? "" : <NavBar />}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
        <Route index path="Forget" element={<ForgetPass />} />

        <Route
          path="home"
          element={
            <React.Suspense fallback={<Load />}>
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route path="offreEmploye" element={<OffreEmploye />} />
        <Route path="Reseau" element={<Reseau />} />
      </Routes>
    </div>
  );
}

export default App;
