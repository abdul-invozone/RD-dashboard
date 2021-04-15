import React from "react";
import flag from '../images/flag.png';
export default function Menu({ fixed }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap ">
        <div className="w-full px-5 ">
          <nav className="relative flex flex-wrap items-center justify-between px-4 py-3 bg-blue-100 rounded-b-2xl">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto md:max-w-32 px-0 lg:static lg:block lg:justify-start">
                <a
                  className=" text-lg leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                  href="#pablo"
                >
                   <i className="fal fa-calendar font-medium"></i>
                </a>
                <a
                  className="text-lg leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-900"
                  href="#pablo"
                >
                   <i class="fal fa-comment-alt font-medium"></i>
                </a>
                <a
                  className="text-lg leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-900"
                  href="#pablo"
                >
                   <i class="fal fa-envelope font-medium"></i>
                </a>
                <a
                  className="text-lg leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                  href="#pablo"
                >
                   <i class="far fa-star font-medium text-orange-200"></i>
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
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item mt-2">
                    <a
                      className="px-3 py-2 flex items-center text-xs Capitalized leading-snug text-gray-700 hover:opacity-75"
                      href="#pablo"
                    >
                      <img className="max-h-4 w-6 mr-1" src={flag} alt=""/>
                        <span className="font-normal text-xs">English</span>
                       
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center leading-snug text-gray-700 hover:opacity-25"
                      href="#pablo"
                    >
                      <i className="fas fa-search text-lg font-light"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center font-medium leading-snug relative text-gray-700 hover:opacity-25"
                      href="#pablo"
                    >
                      <i className="fal fa-bell text-xl font-light text-gray-700">
                        <span className="absolute bottom-7 right-2 text-white-100 bg-red-600 text-xs rounded-full h-4 w-4 p-1">6</span>
                        </i>
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
}