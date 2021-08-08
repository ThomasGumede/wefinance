import {GrCirclePlay} from 'react-icons/gr'
import Btn from './SharedComponets/Btn'

// home component
// data-aos= for animation
const Home = () => {

  return (
    <div
      id="#home"
      className="relative space-y-4 w-full sm:flex md:space-x-6 items-center my-11 px-4 sm:px-6 md:px-16 lg:px-20"
    >
      <div data-aos='zoom-in' className="space-y-11 sm:w-[400px] md:w-[500px] h-[300px] md:h-[400px]">
        <h1 data-aos='fade-down' data-aos-delay='400' className="text-2xl md:text-5xl font-normal text-[#042352]">
          Recording Your business finances now{" "}
          <span className="font-bold">effortless</span>
        </h1>

        <p data-aos='fade-down' data-aos-delay='500' className="text-sm sm:text-base text-[#5c667b]">
          From now on, let's move on to your financial records, making it easier
          to record your finances by simply monitoring financial reports
        </p>

        <div data-aos='fade-down' data-aos-delay='600' className="flex items-center space-x-11">
            <div>
                <Btn href='#home'>Get Started</Btn>
            </div>
            <div className="flex items-center space-x-5">
                <div>
                    <GrCirclePlay className='w-[20px] h-[20px] xsm:w-[25px] xsm:h-[25px] text-[#5c667b]'/>
                </div>
                <div>
                    <a href="http://" className='text-sm md:text-base font-normal text-[#5c667b]'>
                        How it works
                    </a>
                </div>
            </div>
        </div>
      </div>

      <div data-aos='zoom-in'>
        <img src="/img/m2.svg" alt="" className='w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px]'  />
      </div>
    </div>
  );
};

export default Home;
