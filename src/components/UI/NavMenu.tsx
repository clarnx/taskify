const NavMenu = () => {
  return (
    <div className="">
      <ul className="navbar-nav flex-row justify-content-center align-items-center flex-grow-1 fs-md-6 gap-3">
        <li className="nav-item">
          <a
            href="/"
            // className={`nav-link ${pathname === "/" ? "active fw-bold" : ""}`}
            className={`nav-link "active fw-bold"}`}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/task-category" className={`nav-link "active fw-bold"}`}>
            Category
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
