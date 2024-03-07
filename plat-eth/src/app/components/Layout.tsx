import React from "react";
import NavBar from "./NavBar";
interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    {/* <div>
      <NavBar />
    </div> */}
    <div className="flex h-screen overflow-auto">
      <div className="w-1/5 bg-teal-800"></div>{" "}
      {/* Left Sidebar */}
      <div className="flex-1 flex justify-center items-center bg-teal-700">
        {children}
      </div>
      <div className="w-1/5 bg-teal-800"></div>{" "}
      {/* Right Sidebar */}
    </div>
  </>
);

export default Layout;
