import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

export const Navbar = () => {
  const [toggler, setToggler] = useState(false);
  const [active, setActive] = useState({
    home: false,
    about: false,
    services: false,
    blog: false,
  });
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView({behavior:"smooth"})    
  
  return (
    <div className={`header_navbar ${sticky && "sticky"}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <Link to="/" className="navbar-brand" onClick={scrollToTop}>
                <img src="" alt="Logo" />
              </Link>
              <button
                className={`navbar-toggler ${toggler && "active"}`}
                type="button"
                onClick={() => setToggler(!toggler)}
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className={`${
                  !toggler && "collapse"
                } navbar-collapse sub-menu-bar`}
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ml-auto">
                  <li className={`nav-item ${active.home && "active"}`}>
                    <a
                      className="page-scroll"
                      href="#home"
                      onClick={() =>
                        setActive({
                          home: true,
                          about: false,
                          services: false,
                          blog: false,
                        })
                      }
                    >
                      Inicio
                    </a>
                  </li>
                  <li className={`nav-item ${active.about && "active"}`}>
                    <a  href="#about" onClick={() =>
                        {setActive({
                          home: false,
                          about: true,
                          services: false,
                          blog: false,
                        });
                      executeScroll}
                      }>
                      Acerca de mi
                    </a>
                  </li>
                  <li className={`nav-item ${active.services && "active"}`}>
                    <a className="page-scroll" href="#services" onClick={() =>
                        setActive({
                          home: false,
                          about: false,
                          services: true,
                          blog: false,
                        })
                      }>
                      Productos Financieros
                    </a>
                  </li>
                  {/* <li className="nav-item">
									<a className="page-scroll" href="#case">Cases</a>
								</li>
								<li className="nav-item">
									<a className="page-scroll" href="#growth">Growth</a>
								</li>
								<li className="nav-item">
									<a className="page-scroll" href="#team">Team</a>
								</li> */}
                  <li className={`nav-item ${active.blog && "active"}`}>
                    <a className="page-scroll" href="#blog" onClick={() =>
                        setActive({
                          home: false,
                          about: false,
                          services: false,
                          blog: true,
                        })
                      }>
                      Únete a mi equipo
                    </a>
                  </li>
                </ul>
              </div>

              <div className="navbar-btn d-none d-sm-inline-block">
                <a className="main-btn" data-scroll-nav="0" href="#services">
                  Agenda una cita
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
