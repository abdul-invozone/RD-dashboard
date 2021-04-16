import { useState } from "react";
import {
  userThumbnail,
  userIco,
  editIco,
  logoutIco,
  dashboard,
  accountsIco,
  calenderIco,
  directoryIco,
  helpIco,
  layoutsIco,
  libraryIco,
  messagesIco,
  paymentsIco,
  tasksIco,
  arrowDown,
} from "./Icons";
import Logo from "./Logo";
import MainSidebarLinks from "./MainSidebarLinks";
import MoreSidebarLinks from "./MoreSidebarLinks";
import Profile from "./Profile";

const Sidebar = () => {
  const mainNavigation = [
    { name: "Dashboard", icon: dashboard, href: "#", current: true },
    { name: "Manage RD's", icon: accountsIco, href: "#", current: false },
    { name: "Manage Brands", icon: directoryIco, href: "#", current: false },
    { name: "Payments", icon: paymentsIco, href: "#", current: false },
    { name: "Chat Conversations", icon: messagesIco, href: "#", count: 9, current: false,},
    { name: "Customer Support", icon: tasksIco, href: "#", current: false },
  ];

  const moreNavigation = [
    { name: "Blog", icon: libraryIco, href: "#", current: false },
    { name: "FAQ's", icon: libraryIco, href: "#", current: false },
    {
      name: "Resources",
      icon: calenderIco,
      href: "#",
      current: false,
      children: [
        { name: "Agreement Templates", icon: helpIco, href: "#" },
        { name: "Members", icon: layoutsIco, href: "#" },
        { name: "Calendar", href: "#" },
        { name: "Settings", href: "#" },
      ],
    },
  ]

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  
  const [showMain, setShowMain] = useState(true);
  const [showMore, setShowMore] = useState(true);
 

  const handleShowMain = () => {
    setShowMain(prevCheck => !prevCheck);
  };

  const handleShowMore = () => {
    setShowMore(prevCheck => !prevCheck);
  };

  

  return (
    <div className="sidebar">
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="h-screen flex overflow-hidden bg-gray-100">
        {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
        <div
          className="fixed inset-0 flex z-40 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/*
Off-canvas menu overlay, show/hide based on off-canvas menu state.

Entering: "transition-opacity ease-linear duration-300"
  From: "opacity-0"
  To: "opacity-100"
Leaving: "transition-opacity ease-linear duration-300"
  From: "opacity-100"
  To: "opacity-0"
    */}
          <div
            className="fixed inset-0 bg-gray-260 bg-opacity-75"
            aria-hidden="true"
          />
          {/*
Off-canvas menu, show/hide based on off-canvas menu state.

Entering: "transition ease-in-out duration-300 transform"
  From: "-translate-x-full"
  To: "translate-x-0"
Leaving: "transition ease-in-out duration-300 transform"
  From: "translate-x-0"
  To: "-translate-x-full"
    */}
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
            {/*
  Close button, show/hide based on off-canvas menu state.

  Entering: "ease-in-out duration-300"
    From: "opacity-0"
    To: "opacity-100"
  Leaving: "ease-in-out duration-300"
    From: "opacity-100"
    To: "opacity-0"
*/}
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Close sidebar</span>
                {/* Heroicon name: outline/x */}
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 bg-primary overflow-y-auto">
              <Logo />
              <Profile />
              <MainSidebarLinks
                mainNavigation={mainNavigation}
                classNames={classNames}
              />
            </div>
          </div>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </div>
        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-96">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-col h-0 flex-1 bg-primary rounded-xl rounded-l-none">
              <div className="flex-1 flex flex-col overflow-y-auto">
                <Logo />
                <Profile />
                <div 
                className = {classNames(
                  showMain
                  ? "pb-5"
                  : "pb-0",
                  "mainLinks border-b border-gray-700"
                )}
                >
                  <a
                  href="#"
                  className="relative group flex items-center px-6 py-5 text-light-gray text-lg"
                  onClick={()=>{handleShowMain()}}
                  >
                  <img className={classNames(
                  showMain 
                  ? "rotate-0"
                  : "rotate-180",
                  "absolute right-0 mr-6 transform transition duration-300 ease-in-out"
                  )}
                  src={arrowDown}
                  alt="arrowDown"/>
                  Main
                  </a>
                {showMain && <MainSidebarLinks
                  mainNavigation={mainNavigation}
                  classNames={classNames}
                />}
                </div>
                <div className="moreLinks">
                  <a
                  href="#"
                  className="relative group flex items-center px-6 py-5 text-light-gray text-lg"
                  onClick={()=>{handleShowMore()}}
                  >
                  <img className={classNames(
                  showMore
                  ? "rotate-0"
                  : "rotate-180",
                  "absolute right-0 mr-6 transform transition duration-300 ease-in-out"
                  )}
                  src={arrowDown}
                  alt="arrowDown"/>
                  More
                  </a>
                {showMore && <MoreSidebarLinks
                  moreNavigation={moreNavigation}
                  classNames={classNames}
                />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            <button className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open sidebar</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
