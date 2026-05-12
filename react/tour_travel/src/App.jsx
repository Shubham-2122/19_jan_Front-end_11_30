import React from "react";
import Home from "./website/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./website/pages/About";
import Blogs from "./website/pages/Blogs";
import BlogsDati from "./website/pages/BlogsDati";
import Contact from "./website/pages/Contact";
import Price from "./website/pages/Price";
import Package from "./website/pages/Package";
import PackageDtai from "./website/pages/PackageDtai";
import Services from "./website/pages/Services";
import NotFound from "./website/pages/NotFound";
import Dashboard from "./Admin/Apages/Dashboard";
import PackManage from "./Admin/Apages/PackManage";
import ServiceManage from "./Admin/Apages/ServiceManage";
import PackAdd from "./Admin/Apages/PackAdd";
import { Slide, ToastContainer } from "react-toastify";
import Alogin from "./Admin/Apages/Alogin";
import Ulogin from "./website/pages/Ulogin";
import Register from "./website/pages/Register";


function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogsd" element={<BlogsDati />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/price" element={<Price />} />
          <Route path="/package" element={<Package />} />
          <Route path="/packaged" element={<PackageDtai />} />
          <Route path="/service" element={<Services />} />
          <Route path="/ulogin" element={<Ulogin />} />
          <Route path="/newdata" element={<Register />} />

          <Route path="*" element={<NotFound />} />

          {/* Admin */}
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/packmange" element={<PackManage />} />
          <Route path="/sermange" element={<ServiceManage />} />

          <Route path="/packadd" element={<PackAdd />} />

          <Route path="/alogin" element={<Alogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
