const NavMenu = () => {
  return (
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav justify-content-center flex-grow-1 fs-md-6">
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
          <a href="/Category" className={`nav-link "active fw-bold"}`}>
            Category
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
