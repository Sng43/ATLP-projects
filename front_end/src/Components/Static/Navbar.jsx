const Navbar = () => {
    return (
      <>
        <div className="in">
          <header>
            <nav className="NavBar">
              <h2>
                <a href="/" className="logo">
                  Senga Emmy
                </a>
              </h2>
              <ul className="nav-menu">
                <li className="nav-item">
                  <a href="/about">About me</a>
                </li>
                <li className="nav-item">
                  <a href="/work">Work</a>
                </li>
                <li className="nav-item">
                  <a href="/blogs">Blogs</a>
                </li>
                <li className="nav-item">
                  <a href="/contacts" className="contact">
                    Contact me &gt;
                  </a>
                </li>
              </ul>
              <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </nav>
          </header>
          <script src="script.js"></script>
        </div>
      </>
    );
}
 
export default Navbar;