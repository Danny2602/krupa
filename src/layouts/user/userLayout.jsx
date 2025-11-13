import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/layouts/user/sidebar";
import useScrollAndMobile from "@/hooks/useScrollAndMovile";

const UserLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isMobile } = useScrollAndMobile(); // usa tu hook
  const sidebarWidth = sidebarOpen ? 200 : 70; // ancho según estado

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

     
      <div
        className="transition-all duration-300 ease-in-out bg-gray-100 overflow-y-auto"
        style={{
          // si NO es móvil, el contenido se ajusta
          marginLeft: isMobile ? 0 : `${sidebarWidth}px`,
          width: isMobile ? "100%" : `calc(100% - ${sidebarWidth}px)`,
          padding: "1rem",
        }}
      >
      
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
