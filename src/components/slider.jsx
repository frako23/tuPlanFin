import "../styles/style.css"
import hero1 from "../assets/imgs/hero1.jpg"

export function Slider() {
    return (
        <div id="home" className="header_slider">
            <div className="container-fluid">
                <div className="slider-active">
                    <div className="single_slider bg_cover d-flex align-items-center" style={{backgroundImage: `url(${hero1})`}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="slider_content">
                                        <h2 className="slider_title" data-animation="fadeInUp" data-delay="0.2s">Obten asosoría financiera profesional</h2>
                                        <p data-animation="fadeInUp" data-delay="0.6s">Logra todas tus metas financieras, a través de herramientas de planificación financiera</p>
                                        <a className="main-btn" href="https://rebrand.ly/financio-ud" data-animation="fadeInUp" data-delay="1s">Agenda una cita</a>
                                    </div> 
                                </div>
                            </div> 
                        </div> 
                    </div> 
                    
                </div> 
            </div> 
        </div> 
    )
}