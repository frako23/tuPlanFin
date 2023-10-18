import "../styles/style.css";
import about from "../assets/imgs/about.jpg";

export function About() {
  return (
    <section id="about" className="about_area pt-50">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about_image mt-50">
              <img src={about} alt="about image" />
              <div
                className="experiance d-flex justify-content-center align-items-center text-center wow fadeInUpBig"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="experiance_wrapper text-center">
                  <span>12</span>
                  <p>Años de experiencia</p>
                </div>
              </div>
              <div className="about_shape">
                <img src="" alt="shape" />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content mt-45">
              <div className="section_title">
                <h4 className="sub_title">Acerca de mi</h4>
                <h3 className="title">
                  Más de 100 clientes satisfechos de recibir consultoría de
                  valor
                </h3>
              </div>
              <p>
                Tener más de 100 clientes satisfechos ha sido un gran logro para
                mi y un testimonio de la calidad de los servicio. La
                satisfacción de cada cliente ha sido un factor clave para el
                éxito en mi carrera. construyendo estas relaciones sólidas con
                mis clientes me ha permitido no solo asesorarlos a ellos sino
                tambien a sus familiares y amigos permitiendome ayudar a más
                personas en el mundo de las finanzas personales.
              </p>

              {/* <div className="about_skills pt-15">
                            <div className="skill_item mt-20">
                                <div className="skill_header">
                                    <h6 className="skill_title">Finance</h6>
                                    <div className="skill_percentage">
                                        <p><span className="counter">85</span>%</p>
                                    </div>
                                </div>
                                <div className="skill_bar">
                                    <div className="bar_inner">
                                        <div className="bar progress_line" data-width="85"></div>
                                    </div>
                                </div>
                            </div> 
                            <div className="skill_item mt-20">
                                <div className="skill_header">
                                    <h6 className="skill_title">TAX</h6>
                                    <div className="skill_percentage">
                                        <p><span className="counter">75</span>%</p>
                                    </div>
                                </div>
                                <div className="skill_bar">
                                    <div className="bar_inner">
                                        <div className="bar progress_line" data-width="75"></div>
                                    </div>
                                </div>
                            </div> 
                            <div className="skill_item mt-20">
                                <div className="skill_header">
                                    <h6 className="skill_title">Investment</h6>
                                    <div className="skill_percentage">
                                        <p><span className="counter">90</span>%</p>
                                    </div>
                                </div>
                                <div className="skill_bar">
                                    <div className="bar_inner">
                                        <div className="bar progress_line" data-width="90"></div>
                                    </div>
                                </div>
                            </div> 
                            <div className="skill_item mt-20">
                                <div className="skill_header">
                                    <h6 className="skill_title">Growth</h6>
                                    <div className="skill_percentage">
                                        <p><span className="counter">65</span>%</p>
                                    </div>
                                </div>
                                <div className="skill_bar">
                                    <div className="bar_inner">
                                        <div className="bar progress_line" data-width="65"></div>
                                    </div>
                                </div>
                            </div> 
                        </div>  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
