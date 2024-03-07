import React from "react";
interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex h-screen overflow-auto">
    <div className="w-1/4 bg-teal-800"></div>{" "}
    {/* Left Sidebar */}
    <div className="flex-1 flex justify-center items-center grid grid-rows-20 grid-cols-20 bg-teal-700">
      {children}
    </div>
    <div className="w-1/4 bg-teal-800"></div>{" "}
    {/* Right Sidebar */}
  </div>
);

export default Layout;
