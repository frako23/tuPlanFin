import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

import "../styles/style.css";

export const Navbar = () => {
  const [toggler, setToggler] = useState(false);
  const [active, setActive] = useState({
    home: false,
    about: false,
    services: false,
    blog: false,
    contact: false
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

  const myRef = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

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
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={() =>
                        setActive({
                          home: true,
                          about: false,
                          services: false,
                          blog: false,
                          contact: false
                        })
                      }
                      style={{
                        cursor: "pointer"
                      }}
                    >
                      Inicio
                    </Link>
                  </li>
                  <li className={`nav-item ${active.about && "active"}`}>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={() => {
                        setActive({
                          home: false,
                          about: true,
                          services: false,
                          blog: false,
                          contact: false
                        });
                        executeScroll;
                      }}
                      style={{
                        cursor: "pointer"
                      }}
                    >
                      Acerca de mi
                    </Link>
                  </li>
                  <li className={`nav-item ${active.services && "active"}`}>
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={() =>
                        setActive({
                          home: false,
                          about: false,
                          services: true,
                          blog: false,
                          contact: false
                        })
                      }
                      style={{
                        cursor: "pointer"
                      }}
                    >
                      Productos Financieros
                    </Link>
                  </li>
                  <li className={`nav-item ${active.blog && "active"}`}>
                    <Link
                      to="blog"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={() =>
                        setActive({
                          home: false,
                          about: false,
                          services: false,
                          blog: true,
                          contact: false
                        })
                      }
                      style={{
                        cursor: "pointer"
                      }}
                    >
                      Únete a mi equipo
                    </Link>
                  </li>
                  <li className={`nav-item ${active.contact && "active"}`}>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      onClick={() =>
                        setActive({
                          home: false,
                          about: false,
                          services: false,
                          blog: false,
                          contact: true
                        })
                      }
                      style={{
                        cursor: "pointer"
                      }}
                    >
                      Contáctame
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="navbar-btn d-none d-sm-inline-block">
                <a className="main-btn" data-scroll-nav="0" href="https://calendly.com/tuplanificadorafinanciera/60min?month=2023-10">
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
