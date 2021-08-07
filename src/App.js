 import Aos from "aos";
import 'aos/dist/aos.css'
import Navbar from "./components/Navbar";



function App() {

  Aos.init({
    offset:30
  })

  return (
  
    <div className='mx-2 sm:mx-3 md:mx-5'>
      <Navbar />
    </div>
   
    
  );
}

export default App;
