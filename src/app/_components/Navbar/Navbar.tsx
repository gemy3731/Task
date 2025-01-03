"use client";
import avatar_img from "@/app/assets/avatar.png"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SideBar from "@/app/_components/SideBar/SideBar";

export default function NavBar({isMedium}:{isMedium:boolean}) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement| any >(null);

  useEffect(() => {

    const handleClickOutside = (event:any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)&&!btnRef.current.contains(event.target)) {
        setIsOpen(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
<nav className="bg-[#00414d] border-gray-200 dark:bg-gray-900 fixed top-0 right-0 left-0">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="rounded-full overflow-hidden">
      <Image src={avatar_img} alt="user avatar" width={30} height={30}></Image>
    </div>
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://cdn.salla.network/images/logo/logo-light-wide.svg" className="h-8" alt="Flowbite Logo" />
    </a>
    <button ref={btnRef} onClick={()=>{setIsOpen(!isOpen)}} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
</nav>
    {isOpen&&isMedium&&<div ref={sidebarRef}><SideBar /></div>}
</>
  )
}
