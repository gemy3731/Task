"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuGift } from "react-icons/lu";
import avatar_img from "@/app/assets/avatar.png";
import Image from "next/image";
import { FaMoon } from "react-icons/fa";
type Props = {
  params?: {
    locale?: string;
  };
};
export default function SecNavbar({ params: { locale } = {} }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMedium, setIsMedium] = useState<boolean>(window.innerWidth <= 768);
  const { t,i18n  } = useTranslation();
  const [dropDown, setDropDown] = useState(t("common:secNavbar_btn"));
  const changeDropDown = (value: any) => {
    setDropDown(value);
  };
  
    useEffect(() => {
      const handleResize = () => {
        setIsMedium(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    const toggleLanguage = () => {
      const newLang = i18n.language === "en" ? "ar" : "en";
      i18n.changeLanguage(newLang);
    };
  return (
    <>
      <nav className=" container mx-auto mt-[72px] md:mt-[0]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {!isMedium&&<div className="w-fit flex mr-auto gap-3  items-center">
            <h3>متجر الهدايا</h3>
            <div className="rounded-full overflow-hidden">
              <Image
                src={avatar_img}
                alt="user avatar"
                width={30}
                height={30}
                className="rounded-full"
              ></Image>
            </div>
            
            <h3>تحديثات المنصة</h3>
            <div className="rounded-full border border-[#cbf5eb] overflow-hidden p-2">
                <FaMoon  className="rounded-full w-[20px] h-[20px]"/>
            </div>
            <div className="rounded-full border border-[#cbf5eb] overflow-hidden p-2">
            <LuGift className="rounded-full w-[20px] h-[20px]" />
            </div>
          </div>}
          
          <div className="md:w-fit w-full block ml-auto" id="navbar-multi-level">
            <ul className="md:w-fit w-full ml-auto flex  font-medium p-4 md:p-0 mt-4 flex-row md:mt-0 bg-white ">
              <li>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-[6px] px-3 text-gray-900  md:w-auto border border-gray-300"
                >
                  {dropDown}
                  {/* {t('common:secNavbar_btn')} */}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div
                    id="dropdownNavbar"
                    className="z-10  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 border border-gray-300 "
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li
                        onClick={(e) => {
                          changeDropDown((e.target as HTMLElement).innerText);
                        }}
                      >
                        <h4 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          {t("common:secNavbar_btn")}
                        </h4>
                      </li>
                      <li
                        onClick={(e) => {
                          changeDropDown((e.target as HTMLElement).innerText);
                        }}
                      >
                        <h4 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          {t("common:secNavbar_btn_product")}
                        </h4>
                      </li>
                      <li
                        onClick={(e) => {
                          changeDropDown((e.target as HTMLElement).innerText);
                        }}
                      >
                        <h4 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          {t("common:secNavbar_btn_customer")}
                        </h4>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="w-full md:w-fit">
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full rounded-r-md p-2 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 "
                  placeholder="Search..."
                />
              </li>
              <button onClick={toggleLanguage} className="border border-gray-300 mx-3 py-1 px-2 rounded-md">{i18n.language === "en" ? "ar" : "en"}</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
