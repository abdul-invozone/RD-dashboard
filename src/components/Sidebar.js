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
} from "./Icons";

const Sidebar = () => {
  const navigation = [
    { name: "Dashboard", icon: dashboard, href: "#", current: true },
    { name: "Manage RD's", icon: accountsIco, href: "#", current: false },
    { name: "Manage Brands", icon: directoryIco, href: "#", current: false },
    { name: "Payments", icon: paymentsIco, href: "#", current: false },
    { name: "Chat Conversations", icon: messagesIco, href: "#", count: 9, current: false },
    { name: "Customer Support", icon: tasksIco, href: "#", current: false },
    { name: "Reports", icon: libraryIco, href: "#", current: false },
    {
      name: "Calendar",
      icon: calenderIco,
      href: "#",
      current: false,
      children: [
        { name: "Overview", icon: helpIco, href: "#" },
        { name: "Members", icon: layoutsIco, href: "#" },
        { name: "Calendar", href: "#" },
        { name: "Settings", href: "#" },
      ],
    },
  ];

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const [isOn, setIsOn] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
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
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <h1 className="text-2xl">Link Rd</h1>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a
                  href="#"
                  className="bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                >
                  {/*
        Heroicon name: outline/home

        Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300"
      */}
                  <svg
                    className="text-gray-300 mr-4 h-6 w-6"
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                >
                  {/* Heroicon name: outline/users */}
                  <svg
                    className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Team
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                >
                  {/* Heroicon name: outline/folder */}
                  <svg
                    className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
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
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  Projects
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                >
                  {/* Heroicon name: outline/calendar */}
                  <svg
                    className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Calendar
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                >
                  {/* Heroicon name: outline/inbox */}
                  <svg
                    className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
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
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  Documents
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                >
                  {/* Heroicon name: outline/chart-bar */}
                  <svg
                    className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Reports
                </a>
              </nav>
            </div>
            <div className="flex-shrink-0 flex bg-gray-700 p-4">
              <a href="#" className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=O10Xsxk8fc&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-white">Tom Cook</p>
                    <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
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
                <div className="flex items-center flex-shrink-0 pt-6 pb-3 border-b border-gray-700 px-6">
                  <a href="#" className="text-2xl text-white uppercase">
                    Link Rd
                  </a>
                </div>
                <div className="flex-shrink-0 flex py-9 px-6 border-b border-gray-700">
                  <div href="#" className="flex-shrink-0 w-full group block">
                    <div className="flex items-center">
                      <a href="#">
                        <img
                          className="inline-block h-24 w-24 rounded-full"
                          src={userThumbnail}
                          alt
                        />
                      </a>
                      <div className="ml-5">
                        <a
                          href="#"
                          className="block text-md font-medium text-white mb-1"
                        >
                          Jenna Gorham
                        </a>
                        <button className="mr-4">
                          <img className="inline-block" src={userIco} alt />
                        </button>
                        <button className="mr-4">
                          <img className="inline-block" src={editIco} alt />
                        </button>
                        <button className="mr-4">
                          <img className="inline-block" src={logoutIco} alt />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <nav className="flex-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-secondary border-primary-light text-white"
                          : "border-transparent text-white hover:bg-gray-600 hover:text-white",
                        "group flex items-center px-6 py-5 border-l-5"
                      )}
                    >
                      <img
                        src={item.icon}
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-4"
                        )}
                        aria-hidden="true"
                      />

                      {item.name}
                      {item.count ? (
                        <span
                          className={classNames(
                            item.current
                              ? "bg-red"
                              : "bg-red group-hover:bg-red",
                            "ml-auto inline-block py-0.5 px-1.5 w-5 h-5 text-xs font-medium rounded-full"
                          )}
                        >
                          {item.count}
                        </span>
                      ) : null}
                    </a>
                  ))}
                </nav>
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
