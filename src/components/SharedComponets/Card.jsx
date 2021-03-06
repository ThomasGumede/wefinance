const Card = ({icon, title, descr}) => {
    return (
        <div className='flex flex-col items-center justify-center w-[240px] sm:w-[290px] bg-white group rounded-2xl text-center h-[320px] space-y-6 p-4 hover:shadow-xl'>
            <div data-aos='fade-down' data-aos-delay='600' className='flex items-center justify-center text-5xl text-[#009366] bg-[#f8fafb] w-[90px] h-[90px] rounded-full'>
               {icon}
            </div>
            <div data-aos='fade-down' data-aos-delay='700' className="text-lg font-semibold text-[#042352]">
                <h1>
                    {title}
                </h1>
            </div>
            <p data-aos='fade-down' data-aos-delay='800' className="text-base text-[#5c667b]">
                {descr}
            </p>
            
        </div>
    )
}

export default Card
