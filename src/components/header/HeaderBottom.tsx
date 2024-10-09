import { ChevronDownIcon, BanknotesIcon } from "@heroicons/react/24/outline";

const HeaderBottom = () => {
  return (
    <div>
      <div className="gi-header-cat transition-all duration-[0.3s] ease-in-out bg-[#fff] border-t-[1px] border-b-[1px] border-solid border-[#eee] hidden min-[992px]:block">
        <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
          <div className="gi-nav-bar flex flex-row justify-between relative w-full px-[12px]">
            {/* Main Menu Start */}
            <div
              id="gi-main-menu-desk"
              className="w-full flex items-center min-[992px]:block hidden"
            >
              <div className="nav-desk">
                <div className="w-full flex flex-wrap px-[12px] min-[1400px]:relative">
                  <div className="basis-auto w-full self-center">
                    <div className="gi-main-menu flex">
                      <ul className="w-full flex justify-center flex-wrap pl-[0]">
                        <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                          >
                            Home
                            <ChevronDownIcon className="h-4 w-4 text-[14px] ml-[5px] text-[#777] transition-all duration-[0.3s] ease delay-0 flex" />
                          </a>
                          <ul className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                            <li>
                              <a
                                href="index.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                Grocery
                              </a>
                            </li>
                            <li>
                              <a
                                href="demo-2.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                Fashion
                              </a>
                            </li>
                            <li>
                              <a
                                href="demo-3.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                Fashion 2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown drop-list static ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                          >
                            Categories
                            <ChevronDownIcon className="h-4 w-4 text-[14px] ml-[5px] text-[#777] transition-all duration-[0.3s] ease delay-0 flex" />
                          </a>
                          <ul className="mega-menu block transition-all duration-[0.3s] ease-in-out w-full max-[1399px]:mx-[12px] max-[1399px]:w-[calc(100%-24px)] mt-[15px] absolute bg-[#fff] pl-[30px] opacity-0 invisible left-0 z-[15] rounded-[5px] border-[1px] border-solid border-[#eee] truncate">
                            <li className="flex">
                              <span className="bg"></span>
                              <ul className="mega-block w-[calc(25%-30px)] mr-[30px] py-[15px] block">
                                <li className="menu_title">
                                  <a
                                    href="javascript:void(0)"
                                    className="text-[#5caf90] text-[15px] capitalize leading-[30px] font-medium block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto"
                                  >
                                    Classic
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    Left sidebar 3 column
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-4.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    Left sidebar 4 column
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-right-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    Right sidebar 3 column
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-right-sidebar-col-4.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    Right sidebar 4 column
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-full-width.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    Full width 4 column
                                  </a>
                                </li>
                              </ul>
                              <ul className="mega-block w-[calc(25%-30px)] mr-[30px] py-[15px] block">
                                <li className="menu_title">
                                  <a
                                    href="javascript:void(0)"
                                    className="text-[#5caf90] text-[15px] capitalize leading-[30px] font-medium block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto"
                                  >
                                    Banner
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-banner-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    left sidebar 3 column
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-banner-left-sidebar-col-4.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    left sidebar 4 column
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-banner-right-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    right sidebar column
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-banner-right-sidebar-col-4.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    right sidebar 4 column
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-banner-full-width.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    Full width 4 column
                                  </a>
                                </li>
                              </ul>
                              <ul className="mega-block w-[calc(25%-30px)] mr-[30px] py-[15px] block">
                                <li className="menu_title">
                                  <a
                                    href="javascript:void(0)"
                                    className="text-[#5caf90] text-[15px] capitalize leading-[30px] font-medium block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto"
                                  >
                                    Columns
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-full-width-col-3.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    3 Columns full width
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-full-width-col-4.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    4 Columns full width
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-full-width-col-5.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    5 Columns full width
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-full-width-col-6.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    6 Columns full width
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-banner-full-width-col-3.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    Banner 3 Columns
                                  </a>
                                </li>
                              </ul>
                              <ul className="mega-block w-[calc(25%-30px)] mr-[30px] py-[15px] block">
                                <li className="menu_title">
                                  <a
                                    href="javascript:void(0)"
                                    className="text-[#5caf90] text-[15px] capitalize leading-[30px] font-medium block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto"
                                  >
                                    List
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-list-left-sidebar.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    Shop left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-list-right-sidebar.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    Shop right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-list-banner-left-sidebar.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    Banner left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-list-banner-right-sidebar.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    Banner right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-list-full-col-2.html"
                                    className="text-[#777] capitalize leading-[30px] font-normal text-[13px] block py-[5px] border-0 h-auto hover:text-[#5caf90]"
                                  >
                                    Full width 2 columns
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                          >
                            Products
                            <ChevronDownIcon className="h-4 w-4 text-[14px] ml-[5px] text-[#777] transition-all duration-[0.3s] ease delay-0 flex" />
                          </a>
                          <ul className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                            <li className="dropdown position-static">
                              <a
                                href="javascript:void(0)"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                Product page
                                <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[2px] text-[18px] flex"></i>
                              </a>
                              <ul className="sub-menu sub-menu-child transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                                <li>
                                  <a
                                    href="product-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                                  >
                                    Product left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-right-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                                  >
                                    Product right sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown position-static">
                              <a
                                href="javascript:void(0)"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                Product Accordion
                                <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[2px] text-[18px] flex"></i>
                              </a>
                              <ul className="sub-menu sub-menu-child transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                                <li>
                                  <a
                                    href="product-accordion-left-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                                  >
                                    left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="product-accordion-right-sidebar.html"
                                    className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                                  >
                                    right sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a
                                href="product-full-width.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                Product full width
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-accordion-full-width.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                accordion full width
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                          >
                            Blog
                            <ChevronDownIcon className="h-4 w-4 text-[14px] ml-[5px] text-[#777] transition-all duration-[0.3s] ease delay-0 flex" />
                          </a>
                          <ul className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                            <li>
                              <a
                                href="blog-left-sidebar.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                left sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                href="blog-right-sidebar.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                right sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                href="blog-full-width.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                Full Width
                              </a>
                            </li>
                            <li>
                              <a
                                href="blog-detail-left-sidebar.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                Detail left sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                href="blog-detail-right-sidebar.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                Detail right sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                href="blog-detail-full-width.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                Detail Full Width
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                          >
                            Others
                            <ChevronDownIcon className="h-4 w-4 text-[14px] ml-[5px] text-[#777] transition-all duration-[0.3s] ease delay-0 flex" />
                          </a>
                          <ul className="sub-menu transition-all duration-[0.3s] ease-in-out mt-[15px] absolute z-[16] text-left opacity-0 invisible min-w-[205px] left-0 right-auto bg-[#fff] block rounded-[5px] border-[1px] border-solid border-[#eee] py-[5px]">
                            <li>
                              <a
                                href="about-us.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                About Us
                              </a>
                            </li>
                            <li>
                              <a
                                href="terms-condition.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                Terms Condition
                              </a>
                            </li>
                            <li>
                              <a
                                href="privacy-policy.html"
                                className="transition-all duration-[0.3s] ease-in-out leading-[20px] px-[20px] py-[10px] font-normal text-[13px] text-[#777] capitalize flex justify-between items-center hover:text-[#5caf90]"
                              >
                                Privacy Policy
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="non-drop mx-[20px] transition-all duration-[0.3s] ease-in-out max-[1199px]:mx-[15px]">
                          <a
                            href="shop-banner-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                          >
                            <BanknotesIcon className="h-4 w-4 transition-all duration-[0.3s] ease-in-out mr-[5px] text-[18px] text-[#4b5966] flex" />
                            Offers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Menu End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
