// "use client";
// import React from "react";
// import Image from "next/image";
// import {
//   FileClock,
//   LayoutDashboard,
//   Settings,
//   WalletCards,
// } from "lucide-react";
// import { usePathname, useRouter } from "next/navigation";

// const SideNav = () => {
//   const MenuList = [
//     {
//       name: "Dashboard",
//       icon: LayoutDashboard,
//       path: "/dashboard",
//     },
//     {
//       name: "History",
//       icon: FileClock,
//       path: "/dashboard/history",
//     },
    
//     {
//       name: "Setting",
//       icon: Settings,
//       path: "/dashboard/settings",
//     },
//   ];

//   const path = usePathname();
//   const router = useRouter();

//   const handleNavigation = (menuPath: string) => {
//     router.push(menuPath);
//   };

//   return (
//     <div className="h-screen p-6 flex flex-col border-r bg-gradient-to-b from-white via-purple-50 to-white shadow-lg">
//       {/* Logo Section */}
//       <div className="flex justify-center mb-8">
//         <Image
//           src="/logo.jpg"
//           alt="logo"
//           width={90}
//           height={90}
//           className="rounded-full shadow-md hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       {/* Navigation Items */}
//       <div className="space-y-2">
//         {MenuList.map((menu, index) => {
//           const isActive = path === menu.path;
//           return (
//             <div
//               key={index}
//               onClick={() => handleNavigation(menu.path)}
//               className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 
//                 ${
//                   isActive
//                     ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
//                     : "text-gray-700 hover:bg-purple-100 hover:text-purple-700"
//                 }
//               `}
//             >
//               <menu.icon
//                 className={`h-6 w-6 ${
//                   isActive ? "text-white" : "text-purple-500"
//                 } transition-colors duration-300`}
//               />
//               <span className="font-medium text-lg tracking-wide">
//                 {menu.name}
//               </span>
//             </div>
//           );
//         })}
//       </div>

//       {/* Footer Divider */}
//       <div className="mt-auto pt-8 text-sm text-center text-gray-400">
//         <p>© 2025 QuickHotelPost</p>
//       </div>
//     </div>
//   );
// };

// export default SideNav;
