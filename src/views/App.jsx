import { useContext } from "react";
import "../styles/App.css";
import { Context } from "../store/appContext";
import { Slider } from "../components/slider";
// import { Brand } from "../components/brand";
import { Preloader } from "../components/preloader";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Blag } from "../components/blag";

function App() {
  const { store, actions } = useContext(Context);

  return (
    <>
    {/* <Preloader/> */}
      <Slider />
      {/* <Brand /> */}
      <Features />
      <About />
      <Services />
      <Blag />
    </>
  );
}

export default App;
