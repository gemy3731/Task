'use client'
import { useEffect, useState } from "react";
import SideBar from "@/app/_components/SideBar/SideBar";
import NavBar from "@/app/_components/NavBar/NavBar";


export default function SideAndNavBar() {
  const [isMedium, setIsMedium] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMedium(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    {isMedium?<NavBar isMedium={isMedium} />:<SideBar />}
    
    </>
  )
}
