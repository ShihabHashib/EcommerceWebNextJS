"use client";
import Image from "next/image";

import {
  //   ChevronDownIcon,
  UserCircleIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchList = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bottom-header py-[20px] max-[991px]:py-[15px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div className="inner-bottom-header flex justify-between max-[767px]:flex-col">
              <div className="cols bb-logo-detail">
                {/* Header Logo Start */}
                <div className="header-logo flex items-center max-[575px]:justify-center">
                  <a href="index.html">
                    <Image
                      src="/images/logo.png"
                      width={125}
                      height={43}
                      alt="logo"
                      className="light w-[125px] max-[991px]:w-[115px] block"
                    />
                    <Image
                      src="/images/logo-dark.png"
                      width={125}
                      height={43}
                      alt="logo"
                      className="dark w-[125px] max-[991px]:w-[115px] hidden"
                    />
                  </a>
                </div>
                {/* Header Logo End */}
              </div>
              <div className="cols flex justify-center">
                <div className="header-search w-[600px] max-[1399px]:w-[500px] max-[1199px]:w-[400px] max-[991px]:w-full max-[991px]:min-w-[300px] max-[767px]:py-[15px] max-[480px]:min-w-[auto]">
                  <form
                    className="bb-btn-group-form flex relative max-[991px]:ml-[20px] max-[767px]:m-[0]"
                    action="#"
                  >
                    <div className="inner-select border-r-[1px] border-solid border-[#eee] h-full px-[20px] flex items-center absolute top-[0] left-[0] max-[991px]:hidden">
                      <div className="custom-select w-[100px] capitalize text-[#777] flex items-center justify-between transition-all duration-[0.2s] ease-in text-[14px] relative">
                        <div className="select">
                          <select className="hide-select">
                            <option value="option1">Vegetables</option>
                            <option value="option2">Cold Drinks</option>
                            <option value="option3">Fruits</option>
                            <option value="option4">Bakery</option>
                          </select>
                          <div
                            className={`custom-select ${
                              isOpen ? "active" : ""
                            }`}
                            onClick={toggleSearchList}
                          >
                            Vegetables
                          </div>
                          <ul
                            className={`select-options ${
                              isOpen ? "displayBlockImportant" : "hidden"
                            }`}
                          >
                            <li rel="option1">vegetables</li>
                            <li rel="option2">Cold Drinks</li>
                            <li rel="option3">Fruits</li>
                            <li rel="option4">Bakery</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <input
                      className="form-control bb-search-bar bg-[#fff] block w-full min-h-[45px] h-[48px] py-[10px] pr-[10px] pl-[160px] max-[991px]:min-h-[40px] max-[991px]:h-[40px] max-[991px]:p-[10px] text-[14px] font-normal leading-[1] text-[#777] rounded-[10px] border-[1px] border-solid border-[#eee] tracking-[0.5px]"
                      placeholder="Search products..."
                      type="text"
                    />
                    <button
                      className="submit absolute top-[0] left-[auto] right-[0] flex items-center justify-center w-[45px] h-full bg-transparent text-[#555] text-[16px] rounded-[0] outline-[0] border-[0] padding-[0]"
                      type="submit"
                    >
                      <MagnifyingGlassIcon className="h-7 w-7 text-[18px] leading-[12px] text-[#555]" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="gi-header-action self-center max-[991px]:hidden">
                <div className="gi-header-bottons flex justify-end">
                  {/* Header User Start */}
                  <div className="gi-acc-drop relative">
                    <a
                      href="#"
                      className="gi-header-btn gi-header-user dropdown-toggle gi-user-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                      title="Account"
                    >
                      <div className="header-icon relative flex">
                        <UserCircleIcon className="h-7 w-7 text-[24px] leading-[17px]" />
                      </div>
                      <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
                        <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                          Account
                        </span>
                        <span className="gi-btn-stitle transition-all duration-[0.3s] ease-in-out text-[13px] font-medium text-[#4b5966] leading-[14px] max-[1199px]:text-[11px] max-[1199px]:min-w-[48px]">
                          Login
                        </span>
                      </div>
                    </a>
                    <ul className="gi-dropdown-menu min-w-[150px] py-[5px] transition-all duration-[0.3s] ease-in-out mt-[25px] absolute z-[16] text-left bg-[#fff] block opacity-0 invisible left-[0] right-[auto] border-[1px] border-solid border-[#eee] rounded-[5px]">
                      <li>
                        <a
                          className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-[#5caf90]"
                          href="register.html"
                        >
                          Register
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-[#5caf90]"
                          href="checkout.html"
                        >
                          Checkout
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item py-[10px] px-[20px] block w-full font-normal text-[13px] text-[#777] hover:bg-transparent hover:text-[#5caf90]"
                          href="login.html"
                        >
                          Login
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Header User End */}
                  {/* Header wishlist Start */}
                  <a
                    href="wishlist.html"
                    className="gi-header-btn gi-wish-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                    title="Wishlist"
                  >
                    <div className="header-icon relative flex">
                      <HeartIcon className="h-7 w-7 text-[24px] leading-[17px]" />
                    </div>
                    <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
                      <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                        Wishlist
                      </span>
                      <span className="gi-btn-stitle transition-all duration-[0.3s] ease-in-out text-[13px] font-medium text-[#4b5966] leading-[14px] max-[1199px]:text-[11px] max-[1199px]:min-w-[48px]">
                        <b className="gi-wishlist-count">3</b>-items
                      </span>
                    </div>
                  </a>
                  {/* Header wishlist End */}
                  {/* Header Cart Start */}
                  <a
                    href="#"
                    className="gi-header-btn gi-cart-toggle transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                    title="Cart"
                  >
                    <div className="header-icon relative flex">
                      <ShoppingBagIcon className="h-7 w-7 text-[24px] leading-[17px]" />
                      <span className="main-label-note-new transition-all duration-[0.3s] ease-in-out h-[10px] w-[10px] m-auto bg-[#ec716d] rounded-[50%] cursor-default hidden absolute bottom-[15px] left-[0] right-[0] z-[3]"></span>
                    </div>
                    <div className="gi-btn-desc flex flex-col uppercase ml-[10px]">
                      <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                        Cart
                      </span>
                      <span className="gi-btn-stitle transition-all duration-[0.3s] ease-in-out text-[13px] font-medium text-[#4b5966] leading-[14px] max-[1199px]:text-[11px] max-[1199px]:min-w-[48px]">
                        <b className="gi-cart-count">3</b>-items
                      </span>
                    </div>
                  </a>
                  {/* Header Cart End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
