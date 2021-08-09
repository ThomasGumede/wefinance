import Card from "./SharedComponets/Card"
import {CgFileDocument} from 'react-icons/cg'
import {RiWallet3Line, RiFolder4Line} from 'react-icons/ri'

const About = () => {


    return (
        <div data-aos='zoom-in' className='relative bg-[#f8fafb] space-y-6'>
            <div data-aos='fade-down' data-aos-delay='300' className="absolute top-0 right-0 w-max hidden md:flex items-center space-x-6 bg-white px-14 py-6 rounded-l-xl">
                <div className='space-y-2'>
                    <h5 className="text-xl font-bold text-[#042352]">
                        3.400k
                    </h5>
                    <p className="text-sm text-[#5c667b]">
                        Active Users Joined
                    </p>
                </div>
                <div className='space-y-2'>
                    <h5 className="text-xl font-bold text-[#042352]">
                        5.5%
                    </h5>
                    <p className="text-sm text-[#5c667b]">
                        Monthly Interest
                    </p>
                </div>
                <div className='space-y-2'>
                    <h5 className="text-xl font-bold text-[#042352]">
                        10x
                    </h5>
                    <p className="text-sm text-[#5c667b]">
                        Faster Recording
                    </p>
                </div>
            </div>
            <div data-aos='fade-down' data-aos-delay='400' className="p-11 text-3xl lg:text-4xl font-semibold text-[#042352]  px-4 sm:px-6 md:px-16 lg:px-20">
                <h1 className="">
                    Why You Should Join Us?
                </h1> 
            </div>
            
            <div data-aos='fade-down' data-aos-delay='500' className="grid xsm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 p-11 px-4 sm:px-6 md:px-16 lg:px-20">
                <Card icon={<CgFileDocument/>} title='Financial report' descr='Your just monitor financial reports easly'/>
                <Card icon={<RiFolder4Line/>} title='Auto recap finance' descr="Don't dizziness. here already auto-recapped" />
                <Card icon={<RiWallet3Line/>} title='Unlimited cashback' descr="you can get unlimited cashback, so let's get it." />
            </div>
        </div>
    )
}

export default About
