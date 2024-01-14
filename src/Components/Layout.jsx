import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



function Layout() {

    return (
    <div className="mb-0">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
