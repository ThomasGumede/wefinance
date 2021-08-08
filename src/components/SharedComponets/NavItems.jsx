const NavItems = ({ href, children }) => {
  return (
    <li className="mx-5 my-6 md:my-0">
      <a
        href={href}
        className="relative block text-xl font-medium text-white md:text-[#5c667b] md:text-lg md:py-1 before:hov hover:before:hov2"
      >
        {children}
      </a>
    </li>
  );
};

export default NavItems;
