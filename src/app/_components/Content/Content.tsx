"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function Content() {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      id="content"
      className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 p-10 gap-4 relative"
    >
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      {/* ==================Maintenance_mode=================== */}
      <div
        onClick={() => setOpenModal(true)}
        className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3"
      >
        <MdOutlineDoNotDisturbOn className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {t("content:Maintenance_mode")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:Maintenance_mode_desc")}</p>
      </div>
      {/* =================================== */}
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      <div className="border border-[#eeeeee] rounded-md flex flex-col justify-center items-center py-[25px] gap-3">
        <CiSettings className="text-[#76e8cd] text-[42px]" />
        <a href="#" className="text-[#999] font-[500]">
          {" "}
          {t("content:main_settings")}
        </a>
        <p className="text-[#bbbbbbbb]">{t("content:main_settings_desc")}</p>
      </div>
      {openModal && (
        <div
          id="modal"
          className="absolute bg-slate-50 top-1/4 left-1/2 -translate-x-1/3 -translate-y-1/2 z-[100]"
        >
          <IoMdClose
            onClick={() => {
              setOpenModal(false);
            }}
            className="absolute top-2 left-2 cursor-pointer"
          />
          <div className="bg-[#baf3e6] p-3">وضع الصيانة</div>
          <div className="p-4 flex flex-col">
            <h3 className="font-[500] text-[15px]">وضع الصيانة</h3>
            <p className="font-[400] text-[12px]">
              بعد تفعيل وضع الصيانة ستتمكن لوحدك من الدخول للمتجر والعمل على
              تجهيزه، بينما العملاء ستظهر لهم صفحة الصيانة. للاطلاع عليها قم
              بالدخول على متجرك من متصفح آخر أو بتسجيل الخروج من لوحة التحكم
            </p>
            <label className="font-[500] text-[15px]" htmlFor="mainMaint">
              العنوان الرئيسي للصيانة
            </label>
            <input id="mainMaint" type="text" />
            <label className="font-[500] text-[15px]" htmlFor="msgMaint">
              رسالة الصيانة
            </label>
            <input id="msgMaint" type="text" />
          </div>
          <div className="bg-gray-300 p-3">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="bg-[#baf3e6]  py-1 px-4"
            >
              حفظ
            </button>
          </div>
        </div>
      )}
      {openModal && (
        <div
          onClick={() => {
            setOpenModal(false);
          }}
          className="bg-[#587f86] bg-opacity-60 fixed top-0 right-0 left-0 bottom-0 z-[50]"
        ></div>
      )}
    </div>
  );
}
