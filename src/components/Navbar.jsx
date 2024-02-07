import React, { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="py-2 absolute z-10 w-full bg-white shadow-md">
      <div className="max-container">
        <nav className="flex items-center justify-between">
          <a href="/" className="px-4 text-red-600 font-bold text-2xl ">
            Deka
          </a>
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              <li>
                <a
                  href="#"
                  className="text-slate-gray text-red-500 font-bold transition-colors duration-300 hover:text-coral-red"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-gray text-red-500 font-bold transition-colors duration-300 hover:text-coral-red"
                  style={{ textDecoration: "none" }}
                >
                  Category
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-gray text-red-500 font-bold transition-colors duration-300 hover:text-coral-red"
                  style={{ textDecoration: "none" }}
                >
                  Profile
                </a>
              </li>
            </ul>
            <button className='bg-red-500 text-white font-semibold py-3 px-10 rounded-xl'>Cart</button>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleNav}
              className="text-red-500 fomt-bold focus:outline-none"
            >
              {isNavOpen ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
        {isNavOpen && (
          <ul className="mt-4 flex flex-col items-center gap-4">
            <li>
              <a
                href="#"
                className="block text-red-500 fomt-bold hover:text-coral-red"
                style={{ textDecoration: "none" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-red-500 fomt-bold hover:text-coral-red"
                style={{ textDecoration: "none" }}
              >
                Category
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-red-500 fomt-bold hover:text-coral-red"
                style={{ textDecoration: "none" }}
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-red-500 fomt-bold hover:text-coral-red"
                style={{ textDecoration: "none" }}
              >
                Cart
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
