import React, { useState } from "react";
import { 
    arrowDown,
 } from "./Icons";

const MoreSidebarLinks = (props) => {
  const { moreNavigation, classNames } = props;
  const [showChild, setShowChild] = useState(false);

  const handleShowChild = () => {
    setShowChild((prevCheck) => !prevCheck);
  };

  return (
    <nav className="flex-1">
      {moreNavigation.map((item) =>
        !item.children ? (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-secondary border-primary-light text-white"
                : "border-transparent text-white hover:text-white",
              "group flex items-center px-6 py-5 border-l-5 hover:bg-secondary"
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
              alt="icon"
            />

            {item.name}
            {item.count ? (
              <span
                className={classNames(
                  item.current ? "bg-red" : "bg-red group-hover:bg-red",
                  "ml-auto inline-block py-0.5 px-1.5 w-5 h-5 text-xs font-medium rounded-full"
                )}
              >
                {item.count}
              </span>
            ) : null}
          </a>
        ) : (
          <a
            key={item.name}
            href={item.href}
            onClick={() => {
                handleShowChild();
              }}
            className={classNames(
              item.current
                ? "bg-secondary border-primary-light text-white group flex hover:bg-secondary"
                : "border-transparent text-white hover:text-white",
                showChild
                ? "block ml-6 pl-10 hover:none"
                : "flex",
                "border-transparent relative px-6 py-5 border-l-5 items-center"
            )}
          >
            <img
              src={item.icon}
              className={classNames(
                item.current
                  ? "text-gray-500"
                  : "text-gray-400 group-hover:text-gray-500",
                  showChild
                ? "absolute left-0"
                : "static",
                "mr-4 mb-px"
              )}
              aria-hidden="true"
              alt="icon"
            />
            <img
              src={arrowDown}
              className={classNames(
                showChild ? "rotate-180 mt-2" : "rotate-0 mt-0",
                "absolute right-0 mr-6 transform transition duration-300 ease-in-out"
              )}
              alt="icon"
            />

            {item.name}
            {item.count ? (
              <span
                className={classNames(
                  item.current ? "bg-red" : "bg-red group-hover:bg-red",
                  "ml-auto inline-block py-0.5 px-1.5 w-5 h-5 text-xs font-medium rounded-full"
                )}
              >
                {item.count}
              </span>
            ) : null}
            {showChild && (
              <ul className="pt-5">
                {" "}
                {item.children.map((subItem) => (
                    
                    <li
                    key={subItem.name}
                    href={subItem.href}
                    className="px-6 py-5 relative pl-10"
                    >
                    <img className="absolute left-0" src={subItem.icon} alt="icon"/>
                    {subItem.name}
                  </li>
                
                ))}{" "}
              </ul>
            )}
          </a>
        )
      )}
    </nav>
  );
};

export default MoreSidebarLinks;
