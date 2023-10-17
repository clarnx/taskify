import React from "react";
import ThemeTogglerIcon from "./ThemeTogglerIcon";
import useThemeStore from "../../hooks/themeStore";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const currentTheme = useThemeStore((state: any) => state.currentTheme);

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
            className="navbar-brand d-flex align-items-center my-0 py-0 fw-bolder"
            href="/"
          >
            TASKIFY
          </a>
          <NavMenu />
          <span className="d-flex align-items-center justify-content-center">
            <ThemeTogglerIcon />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
