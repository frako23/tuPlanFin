import "../styles/style.css";
import { Link } from "react-scroll";
import logo from "../assets/imgs/logo.jpeg";
import Swal from "sweetalert2";
import { useForm, ValidationError } from "@formspree/react";

export const Footer = () => {
  const [state, handleSubmit] = useForm("xknlklrl");

  if (state.succeeded) {
    Swal.fire({
      icon: "success",
      title: "!Gracias por dejarme un mensaje!",
      text: "Te respondré lo más pronto posible!",
      confirmButtonColor: "#0898E7",
      footer: "Atte: Tu Planificadora Financiera <span>&#128521</span> ",
    });
    document.getElementById("contact-form").reset();
  }

  return (
    <footer id="footer" className="footer_area">
      <div className="container">
        <div className="footer_wrapper pt-50 pb-100">
          <div className="row">
            <div className="col-lg-3 col-md-6 order-md-1 order-lg-1">
              <div className="footer_about mt-50">
                <div
                  className="navbar-brand"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textWrap: "balance",
                  }}
                >
                  <img src={logo} alt="Logo" style={{ height: "3rem" }} />
                  <h4 className="footer_title">Tu Planificadora Financiera</h4>
                </div>
                <p id="contact">
                  Acá te dejo el link a todas mis redes sociales desde donde
                  puedes contactarme.
                </p>
                <ul className="social">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@tuplannerfinanciera">
                      <i className="fa-brands fa-tiktok"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/tuplanificadorafinanciera/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/kesling-garcia-05a0a390/">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:tuplanifiadorafinanciera@gmail.com">
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=584143050116">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 order-md-3 order-lg-2">
              <div className="footer_link_wrapper d-flex flex-wrap">
                <div className="footer_link mt-45">
                  <h4 className="footer_title">Links de interés</h4>
                  <ul className="link">
                    <li>
                      <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        Acerca de mi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        Productos financieros
                      </Link>
                    </li>
                    {/* <li>
                    <a href="#">Blog</a>
                  </li> */}
                    <li>
                      <Link
                        to="blog"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        Únete a mi equipo
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="footer_link mt-45">
                <h4 className="footer_title">Terms</h4>
                <ul className="link">
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Our Advisors</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Policy</a>
                  </li>
                </ul>
              </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-md-2 order-lg-3">
              <div className="footer_form mt-45">
                <h4 className="footer_title">Envíame un mensaje</h4>
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="single_form">
                    <input
                      type="text"
                      id="name"
                      placeholder="Nombre"
                      name="name"
                    />
                    <ValidationError
                      prefix="Nombre"
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div className="single_form">
                    <input
                      type="text"
                      id="email"
                      placeholder="Email"
                      name="email"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="single_form">
                    <textarea
                      placeholder="Mensaje"
                      name="message"
                      id="message"
                    ></textarea>
                    <ValidationError
                      prefix="Mensaje"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <p className="form-message"></p>
                  <div className="single_form">
                    <button className="main-btn" type="submit" disabled={state.submitting}>
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center pb-30">
          Desarrollado por{" "}
          <a href="https://frako-dev.vercel.app/" rel="nofollow">
            frakoDev
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};
