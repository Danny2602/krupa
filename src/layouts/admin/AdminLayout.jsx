import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "@/layouts/admin/AdminSidebar";
import useScrollAndMobile from "@/hooks/useScrollAndMovile";

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { isMobile } = useScrollAndMobile();
    const sidebarWidth = sidebarOpen ? 200 : 70;

    return (
        <div className="flex w-full h-screen overflow-hidden">
            {/* Sidebar */}
            <AdminSidebar
                isOpen={sidebarOpen}
                setIsOpen={setSidebarOpen}
            />

            {/* Main Content */}
            <div
                className="transition-all duration-300 ease-in-out bg-gray-100 overflow-y-auto"
                style={{
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

export default AdminLayout;
