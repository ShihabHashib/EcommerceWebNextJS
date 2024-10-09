"use client";

import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  UserCircleIcon,
  HeartIcon,
  ShoppingBagIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const HeaderTop = () => {
  const [isCurOpen, setIsCurOpen] = useState(false);
  const [isLanOpen, setIsLanOpen] = useState(false);

  const toggleCurDropdown = () => {
    setIsCurOpen(!isCurOpen);
  };

  const toggleLanDropdown = () => {
    setIsLanOpen(!isLanOpen);
  };

  return (
    <div>
      <div className="header-top py-[10px] text-[#777] bg-[#f8f8fb]">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="w-full flex flex-wrap px-[12px]">
            {/* Header Top social Start */}
            <div className="grow-[1] shrink-[0] basis-[0%] min-[992px]:block max-[767px]:hidden">
              <div className="header-top-social">
                <ul className="mb-[0] p-[0] flex">
                  <li className="list-inline-item transition-all duration-[0.3s] ease-in-out flex text-[13px] mr-[15px]">
                    <a
                      href="#"
                      className="mx-[5px] text-center flex items-center justify-center text-[15px]"
                    >
                      <PhoneIcon className="h-4 w-4 transition-all duration-[0.3s] ease-in-out text-[#777]" />
                    </a>
                    <a href="mailto:+8801685-519389">+8801685-519389</a>
                  </li>
                  <li className="list-inline-item transition-all duration-[0.3s] ease-in-out flex text-[13px]">
                    <a
                      href="#"
                      className="mx-[5px] text-center flex items-center justify-center text-[15px]"
                    >
                      <EnvelopeIcon className="h-4 w-4 transition-all duration-[0.3s] ease-in-out text-[#777]" />
                    </a>
                    <a href="mailto:email@domain.com">email@domain.com</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Header Top social End */}
            {/* Header Top Message Start */}
            <div className="grow-[1] shrink-[0] basis-[0%] text-center max-[1199px]:hidden">
              <div className="header-top-message text-[13px]">
                Best Online Shopping Website for regular staff!
              </div>
            </div>
            {/* Header Top Message End */}
            {/* Header Top Language Currency */}
            <div className="grow-[1] shrink-[0] basis-[0%] hidden min-[992px]:block">
              <div className="header-top-right-inner flex justify-end">
                <a
                  className="gi-help pl-[20px] text-[13px] text-[#777] tracking-[0.7px] font-normal hover:text-[#5caf90]"
                  href="faq.html"
                >
                  Help?
                </a>
                <a
                  className="gi-help pl-[20px] text-[13px] text-[#777] tracking-[0.7px] font-normal hover:text-[#5caf90]"
                  href="track-order.html"
                >
                  Track Order?
                </a>
                {/* Language Start */}
                <div className="header-top-lan-curr header-top-lan dropdown pl-[20px] flex flex-wrap relative">
                  <button
                    type="button"
                    onClick={toggleLanDropdown}
                    className={`dropdown-toggle text-[13px] flex items-center p-[0] transition-all duration-[0.3s] ease delay-0 text-[#777] border-[0] tracking-[0.7px] ${
                      isLanOpen ? "gi-active-toggle" : ""
                    }`}
                  >
                    English
                    <ChevronDownIcon className="h-4 w-4 text-[14px] ml-[5px] text-[#777] transition-all duration-[0.3s] ease delay-0 flex" />
                  </button>

                  <ul
                    className={`dropdown-menu absolute top-[32px] left-[auto] right-[0] min-w-[130px] truncate px-[10px] bg-[#fff] z-[1] rounded-[5px] border-[1px] border-solid border-[#eee] ${
                      isLanOpen ? "block" : "hidden"
                    }`}
                  >
                    <li className="border-b-[1px] border-solid border-[#eee] leading-[1.5] py-[5px]">
                      <a
                        className="dropdown-item p-[7px] text-[14px] bg-transparent"
                        href="#"
                      >
                        English
                      </a>
                    </li>
                    <li className="leading-[1.5] py-[5px]">
                      <a
                        className="dropdown-item p-[7px] text-[14px] bg-transparent"
                        href="#"
                      >
                        Italiano
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Language End */}
                {/* Currency Start */}
                <div className="header-top-lan-curr header-top-curr dropdown pl-[20px] flex flex-wrap relative">
                  <button
                    type="button"
                    onClick={toggleCurDropdown}
                    className={`dropdown-toggle text-[13px] flex items-center p-[0] transition-all duration-[0.3s] ease delay-0 text-[#777] border-[0] tracking-[0.7px] ${
                      isCurOpen ? "gi-active-toggle" : ""
                    }`}
                  >
                    Dollar
                    <ChevronDownIcon className="h-4 w-4 text-[14px] ml-[5px] text-[#777] transition-all duration-[0.3s] ease delay-0 flex" />
                  </button>
                  <ul
                    className={`dropdown-menu absolute top-[32px] left-[auto] right-[0] min-w-[130px] truncate px-[10px] bg-[#fff] z-[1] rounded-[5px] border-[1px] border-solid border-[#eee] ${
                      isCurOpen ? "block" : "hidden"
                    }`}
                  >
                    <li className="active border-b-[1px] border-solid border-[#eee] leading-[1.5] py-[5px]">
                      <a
                        className="dropdown-item p-[7px] text-[14px] bg-transparent"
                        href="#"
                      >
                        USD $
                      </a>
                    </li>
                    <li className="leading-[1.5] py-[5px]">
                      <a
                        className="dropdown-item p-[7px] text-[14px] bg-transparent"
                        href="#"
                      >
                        EUR €
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Currency End */}
              </div>
            </div>
            {/* Header Top Language Currency */}
            {/* Header Top responsive Action */}
            <div className="grow-[1] shrink-[0] basis-[0%] min-[992px]:hidden">
              <div className="gi-header-bottons flex justify-end">
                <div className="right-icons flex flex-row">
                  {/* Header User Start */}
                  <a
                    href="login.html"
                    className="gi-header-btn gi-header-user mr-[30px] relative transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center"
                  >
                    <div className="header-icon relative flex">
                      <UserCircleIcon className="h-7 w-7 text-[24px] leading-[17px]" />
                    </div>
                  </a>
                  {/* Header User End */}
                  {/* Header Wishlist Start */}
                  <a
                    href="wishlist.html"
                    className="gi-header-btn gi-wish-toggle mr-[30px] relative transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center"
                  >
                    <div className="header-icon relative flex">
                      <HeartIcon className="h-7 w-7 text-[24px] leading-[17px]" />
                    </div>
                    <span className="gi-header-count gi-wishlist-count w-[15px] h-[15px] text-[#fff] flex items-center justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">
                      3
                    </span>
                  </a>
                  {/* Header Wishlist End */}
                  {/* Header Cart Start */}
                  <a
                    href="#"
                    className="gi-header-btn gi-cart-toggle mr-[30px] relative transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center"
                  >
                    <div className="header-icon relative flex">
                      <ShoppingBagIcon className="h-7 w-7 text-[24px] leading-[17px]" />
                      <span className="main-label-note-new"></span>
                    </div>
                    <span className="gi-header-count gi-cart-count  w-[15px] h-[15px] text-[#fff] flex items-center justify-center rounded-[50%] text-[11px] absolute top-[-2px] right-[-6px] opacity-[0.8]">
                      3
                    </span>
                  </a>
                  {/* Header Cart End */}
                  {/* Header menu Start */}
                  <a
                    href="#"
                    className="gi-header-btn gi-site-menu-icon relative transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center"
                  >
                    <Bars3Icon className="h-7 w-7 text-[24px] leading-[17px]" />
                  </a>
                  {/* Header menu End */}
                </div>
              </div>
            </div>
            {/* Header Top responsive Action */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
