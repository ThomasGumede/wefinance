 import Aos from "aos";
import 'aos/dist/aos.css'
import About from "./components/About";
import Form from "./components/Form";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services1 from "./components/Services1";
import Services2 from "./components/Services2";



function App() {

  Aos.init({
    offset:30
  })

  return (
  
    <div className=''>
      <Navbar />
      <Home />
      <About />
      <Services1 />
      <Services2 />
      <Pricing />
      <Form />
    </div>
   
    
  );
}

export default App;
