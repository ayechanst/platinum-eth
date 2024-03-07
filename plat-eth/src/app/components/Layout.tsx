import React from "react";
interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex h-screen overflow-auto">
    <div className="w-1/4 bg-gray-200"></div>{" "}
    {/* Left Sidebar */}
    <div className="flex-1 flex justify-center items-center">
      {children}
    </div>{" "}
    {/* Main Content */}
    <div className="w-1/4 bg-gray-200"></div>{" "}
    {/* Right Sidebar */}
  </div>
);

export default Layout;
