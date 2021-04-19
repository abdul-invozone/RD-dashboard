const MainSidebarLinks = (props) => {
  const { mainNavigation, classNames } = props;
  return (
    <nav className="flex-1">
      {mainNavigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? "bg-secondary border-primary-light text-white"
              : "border-transparent text-white hover:text-white",
            "group flex items-center px-6 py-5 border-l-5 hover:bg-secondary "
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
      ))}
    </nav>
  );
};

export default MainSidebarLinks;
