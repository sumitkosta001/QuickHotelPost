"use client";

import { UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();
  const [showHeader, setShowHeader] = useState(true); // state to toggle visibility
  const [lastScrollY, setLastScrollY] = useState(0); // track last scroll position

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`p-4 sticky top-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* App Title */}
        <h1
          className="text-3xl sm:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient drop-shadow-sm cursor-pointer"
          onClick={() => router.push("/")}
        >
          QuickHotelPost
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Home Button */}
          <motion.button
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/")}
            className="hidden sm:block bg-white/20 text-black text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-white/40 backdrop-blur-lg transition-all ease-out duration-300 hover:text-blue-400"
          >
            🏠 Home
          </motion.button>

          {/* Subscription CTA */}
          <motion.button
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 hover:opacity-95 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-lg transition-all ease-out duration-300 border border-white/40"
          >
            🔥 Upgrade ₹99
          </motion.button>

          {/* Clerk User Profile Button */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox:
                    "w-10 h-10 border-2 border-purple-400/50 rounded-full shadow-lg backdrop-blur-lg",
                },
              }}
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
