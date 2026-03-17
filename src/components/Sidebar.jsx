import React from "react";
import { motion } from "framer-motion";
import { Menu, Home, User, Settings } from "lucide-react";

export default function Sidebar({sidebarOpen,setSidebarOpen}) {
  const menuItems = [
    { name: "Home", icon: <Home className="w-5 h-5" /> },
    { name: "Profile", icon: <User className="w-5 h-5" /> },
    { name: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div
      className={`    fixed  z-50 top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 shadow-lg    transform md:translate-x-0 transition-transform duration-300    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}  `} >
 
      <div  onClick={() => setSidebarOpen(false)} className="p-6 text-2xl font-bold border-b border-gray-200 text-blue-600">
        TaskBoard
      </div>
      
      <div className="flex flex-col mt-6 gap-2">
        {menuItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.05,  }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors mx-3">
            <div className="text-blue-600">{item.icon}</div>
            <span className="font-medium">{item.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto p-6 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-semibold"> U</div>
          <div>
            <p className="text-sm font-semibold">User</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}