import { useContext, useState, useEffect } from "react";
import "../styles/App.css";
import { Context } from "../store/appContext";
import { Slider } from "../components/slider";
// import { Brand } from "../components/brand";
import { Preloader } from "../components/preloader";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Blag } from "../components/blag";
import "../styles/style.css"

function App() {
  const { store, actions } = useContext(Context);
  const [sticky, setSticky] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
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

  return (
    <>
      {/* <Preloader/> */}
      <Slider />
      {/* <Brand /> */}
      <Features />
      <About />
      <Services />
      <Blag />
      <button  className={sticky ? "back-to-top" : "display-none"} onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
}

export default App;
