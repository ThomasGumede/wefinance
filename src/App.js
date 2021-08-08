 import Aos from "aos";
import 'aos/dist/aos.css'
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";



function App() {

  Aos.init({
    offset:30
  })

  return (
  
    <div className=''>
      <Navbar />
      <Home />
      <About />
    </div>
   
    
  );
}

export default App;
