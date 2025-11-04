"use client";

import { usePathname, useRouter } from "next/navigation";
import { Home, LayoutDashboard, FileClock, Settings } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import React from "react";

const Header = () => {
  const router = useRouter();
  const path = usePathname();
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const { scrollY } = useScroll();

  // Handle scroll to show/hide the header
  useMotionValueEvent(scrollY, "change", (current) => {
    if (current > lastScrollY && current > 100) {
      // Scrolling down, hide header
      setIsVisible(false);
    } else {
      // Scrolling up, show header
      setIsVisible(true);
    }
    setLastScrollY(current);
  });

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/",
    },
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const handleNavigation = (menuPath: string) => {
    router.push(menuPath);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* App Title */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent cursor-pointer"
          onClick={() => router.push("/")}
        >
          QuickHotelPost
        </motion.h1>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {MenuList.map((menu, index) => {
            const isActive = path === menu.path;
            return (
              <motion.div
                key={index}
                onClick={() => handleNavigation(menu.path)}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-purple-100/60 text-purple-700"
                    : "text-gray-700 hover:bg-purple-50/50 hover:text-purple-600"
                }`}
              >
                <menu.icon className="w-5 h-5" />
                <span className="font-medium">{menu.name}</span>
              </motion.div>
            );
          })}
        </nav>

        {/* User Profile Button */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox:
                  "w-10 h-10 border-2 border-purple-400 shadow rounded-full",
              },
            }}
          />
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-around items-center py-2 border-t border-white/30 bg-white/40 backdrop-blur-md">
        {MenuList.map((menu) => {
          const isActive = path === menu.path;
          return (
            <div
              key={menu.name}
              onClick={() => handleNavigation(menu.path)}
              className={`flex items-center gap-1 py-1 px-2 cursor-pointer ${
                isActive
                  ? "text-purple-600 font-semibold"
                  : "text-gray-700 hover:text-purple-600"
              }`}
            >
              <menu.icon className="w-6 h-6" />
              <span className="text-sm">{menu.name}</span>
            </div>
          );
        })}
      </div>
    </motion.header>
  );
};

export default Header;
