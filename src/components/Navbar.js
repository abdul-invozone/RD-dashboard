import React, { useState } from 'react'
import {
  Calendar,
  message,
  mail,
  todo,
  star,
  englishFlag,
  Search,
  bell
} from "./Icons";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap ">
        <div className="w-full ">
          <nav className="relative flex flex-wrap items-center justify-between px-4 py-3 bg-white rounded-b-2xl">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto md:max-w-32 pt-2 lg:static lg:block lg:justify-start">
                <a
                  className=" text-lg leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase hover:opacity-75"
                  href="#"
                >
                   <img className="max h-5 max-w-5" src={Calendar} alt=""/>
                   {/* <i className="fal fa-calendar font-medium"></i> */}
                </a>
                <a
                  className="text-lg leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-900 hover:opacity-75"
                  href="#"
                >
                   <img className="max h-5 max-w-5" src={message} alt=""/>
                   {/* <i class="fal fa-comment-alt font-medium"></i> */}
                </a>
                <a
                  className="text-lg leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-900 hover:opacity-75"
                  href="#"
                >
                   <img className="max h-5 max-w-5" src={mail} alt=""/>
                   {/* <i class="fal fa-envelope font-medium"></i> */}
                </a>
                <a
                  className="text-lg leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase hover:opacity-75"
                  href="#"
                >
                   <img className="max h-5 max-w-5" src={todo} alt=""/>
                   {/* <i class="far fa-star font-medium text-orange-200"></i> */}
                </a>
                <a
                  className="text-lg leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase hover:opacity-75"
                  href="#"
                >
                   <img className="max h-5 max-w-5" src={star} alt=""/>
                   {/* <i class="far fa-star font-medium "></i> */}
                </a>
               
                <button
                  className="text-gray-700 cursor-pointer text-base leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
                  <li>
                    <a
                      className="px-3 py-2 flex items-center text-xs Capitalized leading-snug text-gray-700 hover:opacity-75"
                      href="#"
                    >
                      <img className="max h-4 max-w-4 mr-1" src={englishFlag} alt=""/>
                        <span className="font-normal text-sm">English</span>
                    </a>
                  </li>
                  <li>
                   <a className="px-3 py-2 flex items-center leading-snug text-gray-700 hover:opacity-25"
                      href="#">
                   <img className="max h-5 max-w-5" src={Search} alt=""/>
                      {/* <i className="fas fa-search text-lg font-light"></i> */}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center font-medium leading-snug relative text-gray-700 hover:opacity-25"
                      href="#"
                    >
                   <img className="max h-5 max-w-5" src={bell} alt=""/>
                   <span className="absolute bottom-6 right-2 text-white bg-red text-xs rounded-full h-4 w-4 pl-1">6</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
           
    </>
  
  );
};

export default Navbar;
