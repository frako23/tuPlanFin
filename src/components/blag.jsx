import "../styles/style.css"

export function Blag() {
  return (
    <section id="blog" className="blog_area pt-95 pb-100">
      <div className="container">
        <div className="text-center">
          <h2>You are using free lite version of Financio</h2>
          <p style={{color: "#333"}}>
            Please, purchase full version to get all pages, features and
            permission to remove footer credit
          </p>
          <a
            className="main-btn"
            href="https://rebrand.ly/financio-ud"
            data-animation="fadeInUp"
            data-delay="1s"
            tabIndex="0"
            style={{animationDelay: "1s"}}
          >
            Purchase Now
          </a>
        </div>
      </div>
    </section>
  );
}
