import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Products } from "./components/Products";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Products />
      <Services />
      <About/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
