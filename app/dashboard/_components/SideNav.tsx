"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import { usePathname } from 'next/navigation';


const SideNav = () => {

  const MenuList=[
    {
      name : 'Home',
      icon : Home,
      path : '/dashboard'
    },
    {
      name : 'History',
      icon : FileClock,
      path : '/dashboard/history'
    },
    {
      name : 'Billing',
      icon : WalletCards,
      path : '/dashboard/billing'
    },
    {
      name : 'Setting',
      icon : Settings,
      path : '/dashboard/setting'
    }
  ]

  const path = usePathname();
  useEffect(()=>{
    console.log(path)
  },[])
  
  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image src="/logo.jpg" alt="logo" width={100} height={100} />
      </div>

      <hr className='my-6 border'/>
      <div className='mt-10'>
      {MenuList.map((menu, index) => (
        <div
          key={index}
          className={`flex gap-2 mb-2 p-3 hover:bg-purple-500 hover:text-white 
          rounded-lg cursor-pointer items-center ${path==menu.path && 'bg-purple-500 text-white'}`}>
          <menu.icon className='h-6 w-6'/>
          <h2 className='text-lg '>{menu.name}</h2>
        </div>
      ))}
      </div>
    </div>
  );
};

export default SideNav;
