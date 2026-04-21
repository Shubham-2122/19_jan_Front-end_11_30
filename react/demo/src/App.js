import React from "react";
import Home from "./Layout/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
// import BootComponent from "./Design/BootComponent";
// import ReactCard from "./Design/ReactCard";
// import Footer from "./Design/Footer";
// import MainContext from "./Context/MainContext";
// import Css from "./CSS/Css";
// import MainProps from "./Props/MainProps";
// import MainState from "./state/MainState";
// import DataEffect from "./Effect/DataEffect";
// import UserTable from "./Effect/UserTable";
// import UserTableAx from "./Effect/UserTableAx";
// import CardProduct from "./Effect/CardProduct";
// import ClassCompo from "./Component/ClassCompo";
// import FuncCompo from "./Component/FuncCompo";
// import Hello from "./JSX/Hello";

function App() {
    return (
        <BrowserRouter>

            <div>

                {/* componet */}
                {/* <ClassCompo /> */}
                {/* <FuncCompo /> */}

                {/* jsx */}
                {/* <Hello /> */}

                {/* css */}
                {/* <Css /> */}

                {/* Props  */}
                {/* <MainProps /> */}

                {/* state */}
                {/* <MainState /> */}


                {/* Effect */}
                {/* <DataEffect /> */}
                {/* <UserTable /> */}
                {/* <UserTableAx /> */}

                {/* <CardProduct /> */}


                {/* context */}
                {/* <MainContext /> */}

                {/* Design install */}
                {/* <BootComponent /> */}
                {/* <ReactCard /> */}
                {/* <Footer /> */}


                {/* layout  rounter*/}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default App