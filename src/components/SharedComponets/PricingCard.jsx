const PricingCard = ({ icon, title, price, type, descr }) => {
  return (
    <div className="text-left space-y-5 w-[200px] sm:w-[250px] h-[350px] p-5 bg-white rounded-md transition duration-500 delay-200 hover:scale-105 hover:border-2 group border-[#009366]">
      <div
        data-aos="fade-down"
        data-aos-delay="600"
        className="flex items-center justify-center text-2xl sm:text-3xl text-[#009366] bg-[#f8fafb] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-full"
      >
        {icon}
      </div>
      <h2
        data-aos="fade-down"
        data-aos-delay="400"
        className=" text-base sm:text-lg font-bold text-[#042352]"
      >
        {title}
      </h2>
      <h1
        data-aos="fade-down"
        data-aos-delay="400"
        className="text-lg sm:text-xl font-bold text-[#042352]"
      >
        {price} <span className="font-medium text-[#5c667b]">{type}</span>
      </h1>
      <p
        data-aos="fade-down"
        data-aos-delay="500"
        className="text-sm font-medium sm:text-base text-[#5c667b]"
      >
        {descr}
      </p>

      <div data-aos='fade-down' data-aos-delay="600">
        <a
          href="http://"
          className="w-full h-10 sm:h-12 text-sm ms:text-base font-medium text-[#009366] border-2 rounded-md border-[#009366] flex items-center justify-center group-hover:bg-[#009366] group-hover:text-white"
        >
          Choose plan
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
