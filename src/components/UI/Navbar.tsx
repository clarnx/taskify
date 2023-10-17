import React from "react";
import ThemeTogglerIcon from "./ThemeTogglerIcon";
import useThemeStore from "../../hooks/themeStore";

const Navbar = () => {
  const currentTheme = useThemeStore((state: any) => state.currentTheme);

  console.log(currentTheme)

  const currentNavbarThemeClass =
    currentTheme === "light" ? "bg-white" : "bg-dark";

  const shadowClassOnThemeToggle =
    currentTheme === "light" ? "shadow-sm" : "shadow";
  return (
    <>
      <nav
        className={`navbar ${currentNavbarThemeClass} navbar-expand-lg ${shadowClassOnThemeToggle}`}
        data-bs-theme={currentTheme}
      >
        <div className="container align-items-center justify-content-between py-2 px-4 px-md-5">
          <a
            className="navbar-brand d-flex align-items-center my-0 py-0"
            href="/"
          >
            TASKIFY
          </a>
          {/* <NavMenu /> */}
          <span className="d-flex align-items-center justify-content-center">
            <ThemeTogglerIcon />
            {/* <NavMenuIcon /> */}
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
