'use client'
import Link from "next/link";
import { CiHome } from "react-icons/ci";
import { FaTshirt } from "react-icons/fa";
import avatar_img from "@/app/assets/avatar.png"
import sideBar_img from "@/app/assets/sidebarImg.webp"
import Image from "next/image";
import { GoShareAndroid } from "react-icons/go";
import initTranslations from "@/app/i18n";
import { useTranslation } from "react-i18next";
type Props = {
  params?: {
    locale?: string;
  };
};

export default  function SideBar({ params: { locale } = {} }: Props) {
  const { t } = useTranslation()

  return (
    <aside
      id="default-sidebar"
      className=" w-[300px] fixed start-0 top-[72px] md:top-[0] md:static md:block md:w-[260px] bg-[#00414d] overflow-hidden"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto  text-white ">
      <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse py-[20px] px-[18px]">
        <img src="https://cdn.salla.network/images/logo/logo-light-wide.svg" className="h-8" alt="Flowbite Logo" />
    </a>
    <div className="py-[20px] px-[18px] text-center flex flex-col gap-2">
      <div className='sideBar_img w-fit mx-auto relative '>
        <span className="bg-[#f9c02e] text-black absolute top-[-15] right-0 left-0 z-[10] rounded-xl py-[2px]">{t('sidebar.special')}</span>
      <Image src={sideBar_img} alt="Gifts shop" width={65}  className={`relative rounded-full h-[65px] border-2 border-yellow-300 border-dashed mx-auto  after:content-[${t('sidebar.main')}] after:absolute after:top-0`}></Image>
      </div>
      <h3>{t('sidebar.gift_shop')}</h3>
      <button className="border border-[#baf3e6] relative py-[5px] px-[8px] w-[120px] text-right rounded-full text-[12px] mx-auto"><span className="bg-[#baf3e6] p-2 absolute left-0 top-0 bottom-0 rounded-l-full"><GoShareAndroid  className="text-black "/></span>{t("sidebar.visit_shop")}<span className='ms-[10px]'>{'>'}</span></button>
    </div>
        <ul className="space-y-2 font-medium text-[14px]">
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <CiHome  className="text-[22px]"/> {t("sidebar.main")} 
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.products")} 
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.orders")} 
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.customers")} 
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.reports")} 
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.questions")} 
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.identification")} 
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.marketing")} 
              </span>
            </Link>
          </li>
        </ul>
        <ul className="space-y-2 font-medium text-[14px]">
          <h3 className="text-[#76e8cd] mt-8">{t("sidebar.sells")} </h3>
        <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.local")} 
              </span>
            </Link>
          </li>
        <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.cart")} 
              </span>
            </Link>
          </li>
        </ul>
        <ul className="space-y-2 font-medium text-[14px]">
          <h3 className="text-[#76e8cd] mt-8">{t("sidebar.helping_tools")}</h3>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.trader_services")} 
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.settings_shop")} 
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.wallet")} 
              </span>
            </Link>
          </li>
        </ul>
        <ul className="space-y-2 font-medium text-[14px]">
          <h3 className="text-[#76e8cd] mt-8">{t("sidebar.shop_appearance")}</h3>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.themes")} 
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.design")} 
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.apps_maker")} 
              </span>
            </Link>
          </li>
        </ul>
        <ul className="space-y-2 font-medium text-[14px]">
          <h3 className="text-[#76e8cd] mt-8">{t("sidebar.shop_apps")}</h3>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.installed_apps")} 
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 rounded-lg text-white hover:bg-[#003c47] group"
            >
              <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-3">
              <FaTshirt  className="text-[22px]"/> {t("sidebar.visit_shop_apps")} 
              </span>
            </Link>
          </li>
        </ul>
        <h3 className="text-[#76e8cd] mt-8">{t("sidebar.trader_app")}</h3>
        <div className="flex gap-2  w-full  px-3 max-w-full overflow-hidden items-center justify-center mt-4">
          <img className=" max-w-[50%] object-contain" src='https://cdn.assets.salla.network/prod/admin/cp/assets/images/googleplay.png' alt="" />
          <img className=" max-w-[50%] object-contain" src='https://cdn.assets.salla.network/prod/admin/cp/assets/images/appstore.png' alt="" />
        </div>
      </div>
    </aside>
  );
}