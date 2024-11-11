import About from "./sections/About/About";
import Footer from "./sections/Footer/Footer";
import Home from "./sections/Home/Home";
import Proyects from "./sections/Proyects/Proyects";

function App() {
  return (
    <div className="main">
      <Home />
      <Proyects />
      <About />
      <Footer />
    </div>
  );
}
export default App;
