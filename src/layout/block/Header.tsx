const Header = () => {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid navbar-width">
          <div className="mx-4">
            <a className="navbar-brand navbar-button" href="/">
              Home
            </a>
          </div>
          <div className="mx-4"></div>
          <button
            className="navbar-toggler navbar-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
