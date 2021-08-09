import { useState } from "react";

import "./InputCheck.css";
import PricingCard from "./SharedComponets/PricingCard";

import { RiHome4Line } from "react-icons/ri";
import { IoIosBusiness, IoMdBusiness } from "react-icons/io";

const Pricing = () => {
  const [show, setShow] = useState(false);

  const onclick = () => (show === false ? setShow(true) : setShow(false));

  console.log(show);

  return (
    <div className="flex flex-col space-y-5 text-center bg-[#f8fafb] p-11 my-14 px-4 sm:px-6 md:px-16 lg:px-20">
      <h1
        data-aos="fade-down"
        data-aos-delay="300"
        className="text-lg font-bold text-[#009366]"
      >
        Pricing
      </h1>
      <h2
        data-aos="fade-down"
        data-aos-delay="400"
        className="text-2xl sm:text-3xl font-semibold text-[#042352]"
      >
        We offer you the best price
      </h2>

      <div className="self-center flex items-center space-x-5">
        <p
          data-aos="fade-down"
          data-aos-delay="500"
          className="text-sm font-medium sm:text-base text-[#5c667b]"
        >
          Monthly pricing
        </p>

        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" name="" id="toggle" className="sr-only" />
            <div className="back block bg-gray-600 w-12 h-7 rounded-full"></div>
            <div
              className="dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full  transition"
              onClick={onclick}
            ></div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="500"
            className="color ml-3 text-sm font-medium sm:text-base text-[#5c667b]"
          >
            <p>Yearly pricing / save 20%</p>
          </div>
        </label>
      </div>

      <div className="grid xsm:grid-cols-2 md:grid-cols-3 gap-5 items-center justify-center p-12">
        <PricingCard
          icon={<RiHome4Line />}
          title="Starter"
          price={show === false ? "$20" : `$${(20 * 12) - (20*12) * (20/100)}`}
          type={show === false ? "/ Monthly" : "/ Yearly"}
          descr="Only for small companies and only access to few features"
        />
        <PricingCard
          icon={<IoIosBusiness />}
          title="Business"
          price={show === false ? "$40" : `$${(40 * 12) - (40*12) * (20/100)}`}
          type={show === false ? "/ Monthly" : "/ Yearly"}
          descr="Used by medium-sized business and  access to all features"
        />
        <PricingCard
          icon={<IoMdBusiness />}
          title="Enterprise"
          price={show === false ? "$60" : `$${(60 * 12) - (60*12) * (20/100)}`}
          type={show === false ? "/ Monthly" : "/ Yearly"}
          descr="Best plan for big company access to unlimited features"
        />
      </div>
    </div>
  );
};

export default Pricing;
