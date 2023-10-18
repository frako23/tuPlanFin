import "../styles/style.css"

export function Blag() {
  return (
    <section id="blog" className="blog_area pt-95 pb-100">
      <div className="container">
        <div className="text-center">
          <h2> Deseas trabajar de forma remota ¡Forma parte de mi equipo!</h2>
          <p style={{color: "#333"}}>
            Si te interesan las ventas de productos financieros, trabajar de forma remota  manejando tu propio horario contáctame
          </p>
          <a
            className="main-btn"
            href="https://calendly.com/tuplanificadorafinanciera/60min?month=2023-10"
            data-animation="fadeInUp"
            data-delay="1s"
            tabIndex="0"
            style={{animationDelay: "1s"}}
          >
            Agenda una cita
          </a>
        </div>
      </div>
    </section>
  );
}
