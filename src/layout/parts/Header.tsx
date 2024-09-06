const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="mx-4"></div>
          <a className="navbar-brand" href="/">
            Home
          </a>
          <a className="navbar-brand" href="/">
            GitHub
          </a>
          <a className="navbar-brand" href="/">
            Twitter
          </a>
          <a className="navbar-brand" href="/">
            FaceBook
          </a>
          <div className="mx-4"></div>
          <button
            className="navbar-toggler"
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
