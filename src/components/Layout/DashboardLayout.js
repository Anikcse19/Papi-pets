import React from "react";
import Sidebar from "../Sidebar/Sidebar";
// import Navbar from "../Navbar";
import NavBar from "../Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div>
        <div className="row position-relative">
          <div className="col-md-2 col-2 position-absolute">
            <Sidebar />
          </div>
          <div className="col-md-10 col-10 pb-4 w-100">
            <div className="">
              <NavBar />
            </div>
            <div className="mt-3 bg-[#f9fae8]">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
