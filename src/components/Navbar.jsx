import { useState } from "react";
import NavItems from "./SharedComponets/NavItems";
import { CgMenuRight, CgMenuLeft } from "react-icons/cg";

function Navbar() {
  const [show, setShow] = useState(false);

  const onclick = () => {
    show === false ? setShow(true) : setShow(false);
  };

  window.onscroll = () => {
    setShow(false);
  };

  return (
    <nav className="w-full bg-white z-50 py-4 transition duration-1000 px-2 sm:px-6 md:px-16 lg:px-20">
      <div className="flex items-center justify-between m-auto">
        <div>
          <a href="http://" className="logo">
            We<span className="text-[#009366]">Finance</span>
          </a>
        </div>

        <ul
          className={`z-40 md:tablet ${
            show === true ? "left-0" : "-left-full"
          } flex phone`}
        >
          <NavItems href="#Home">Home</NavItems>
          <NavItems href="#Home">Pricing</NavItems>
          <NavItems href="#Home">Testemonials</NavItems>
          <NavItems href="#Home">Contact</NavItems>
          <NavItems href="#Home">FAQ</NavItems>

          <li className="ml-7 my-6 md:my-0">
            <a
              href="#HOME"
              className="block text-center text-xl border-2 w-[120px] border-white md:border-[#009366] text-white md:text-[#009366] md:text-lg p-1 hover:hoverButton transition-all duration-300 ease-linear"
            >
              login
            </a>
          </li>

          <div
            onClick={onclick}
            className="absolute top-5 right-8 text-3xl text-white md:hidden"
          >
            <CgMenuLeft />
          </div>
        </ul>

        <CgMenuRight
          onClick={onclick}
          className={`text-3xl text-[#042352] ${
            show === true ? "hidden" : "block"
          } md:hidden`}
        />
      </div>
    </nav>
  );
}

export default Navbar;
