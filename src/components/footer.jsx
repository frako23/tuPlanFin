import "../styles/style.css";

export const Footer = () => (
  <footer id="footer" className="footer_area">
    <div className="container">
      <div className="footer_wrapper pt-50 pb-100">
        <div className="row">
          <div className="col-lg-3 col-md-6 order-md-1 order-lg-1">
            <div className="footer_about mt-50">
              <a href="#">
                <img src="" alt="" />
              </a>
              <p>
                Lorem ipsum dolor sitco nsetetu nonumy eirmod tempor invidunt ut
                labore etert dolore magna uyam Lorem ipsum dolor sitco nsetetu.
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
                    <a href="#home">Inicio</a>
                  </li>
                  <li>
                    <a href="#about">Acerca de mi</a>
                  </li>
                  <li>
                    <a href="#services">Productos financieros</a>
                  </li>
                  {/* <li>
                    <a href="#">Blog</a>
                  </li> */}
                  <li>
                    <a href="#blog">Únete a mi equipo</a>
                  </li>
                </ul>
              </div>
              <div className="footer_link mt-45">
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
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 order-md-2 order-lg-3">
            <div className="footer_form mt-45">
              <h4 className="footer_title">Envíame un mensaje</h4>
              <form id="contact-form" action="assets/contact.php">
                <div className="single_form">
                  <input type="text" placeholder="Nombre" name="Nombre" />
                </div>
                <div className="single_form">
                  <input type="text" placeholder="Email" name="email" />
                </div>
                <div className="single_form">
                  <textarea placeholder="Mensaje" name="mensaje"></textarea>
                </div>
                <p className="form-message"></p>
                <div className="single_form">
                  <button className="main-btn">Enviar</button>
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
