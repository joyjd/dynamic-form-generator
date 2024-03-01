import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
      <div className="container mx-auto flex w-full flex-wrap items-center justify-between px-3">
        <div>
          <NavLink
            to="/"
            className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
          >
            <span className="font-medium dark:text-neutral-200">NayaOne</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
