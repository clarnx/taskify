const NavMenu = () => {
  const { pathname } = window.location;

  return (
    <div className="">
      <ul className="navbar-nav flex-row justify-content-center align-items-center flex-grow-1 fs-md-6 gap-3">
        <li className={`nav-item ${pathname === "/" ? "active fw-bold" : ""}`}>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li
          className={`nav-item ${
            pathname === "/task-category" ? "active fw-bold" : ""
          }`}
        >
          <a href="/task-category" className="nav-link">
            Category
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
