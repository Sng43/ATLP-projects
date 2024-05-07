import { Link } from "react-router-dom";

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
                  <Link to ="/about">About me</Link>
                </li>
                <li className="nav-item">
                  <Link to ="/work">Work</Link>
                </li>
                <li className="nav-item">
                  <Link to ="/blogs">Blogs</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacts" className="contact">
                    Contact me &gt;
                  </Link>
                </li>
              </ul>
              <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </nav>
          </header>
        </div>
      </>
    );
}
 
export default Navbar;