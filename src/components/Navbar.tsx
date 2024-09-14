import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Menu = [
    { id: 1, tag: "Home", path: "/" },
    { id: 2, tag: "Healthcare Professionals", path: "/health-care-professionals" },
    { id: 3, tag: "Our Story", path: "/our-story" },
    { id: 4, tag: "Contact Us", path: "/contact-us" },
  ];

  const location = useLocation();

  return (
    <main className='relative pb-20'>
      <nav className="bg-white shadow-lg p-[0.7rem] md:py-4 fixed w-full top-0 z-50">
        <div className='flex justify-between items-center px-10'>
          <div className='flex justify-center items-center gap-20'>
            <div className='logo'>
              <Link to="/">
                <img src='/logo.svg' alt='' className=''/>
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className='space-x-10 hidden lg:block'>
              {Menu.map((menu) => (
                <Link to={menu.path} key={menu.id} className={`hover:text-primary hover:font-bold ${location.pathname === menu.path ? 'text-black font-bold text-[1.1rem] hover:text-black' : "font-normal text-[1.1rem]"}`}>
                  <span>{menu.tag}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className='hidden lg:block'>
            <button className='bg-primary px-9 py-[0.75rem] rounded-full'>
              <Link to="/">
                <span className='font-medium text-md text-white'>Get The App</span>
              </Link>
            </button>
          </div>
          <div className='lg:hidden block'>
            <span className={`text-xl menu-icon ${isOpen ? 'rotate-90' : ''}`} onClick={toggleMenu}>
              {/* Hamburger Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </span>
          </div>
        </div>
      </nav>

      {/* Animated Mobile Menu */}
      <div className={`menu-slide ${isOpen ? 'open' : ''}`}>
        <div className='flex justify-end items-center px-10 py-5'>
          <span onClick={toggleMenu}>
            {/* Close Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 hover:cursor-pointer hover:text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </div>
        <div className='flex flex-col justify-center items-start gap-10 p-10'>
          <div className='logo'>
            <Link to="/">
              <img src='/logo.svg' alt='' className=''/>
            </Link>
          </div>

          {Menu.map((menu) => (
            <Link to={menu.path} key={menu.id} className={`hover:text-primary hover:font-bold ${location.pathname === menu.path ? 'text-black font-bold text-[1.35rem] hover:text-black' : "font-normal text-[1.35rem]"}`} onClick={toggleMenu}>
              <span>{menu.tag}</span>
            </Link>
          ))}
        </div>

        <div className='mt-4 w-full'>
          <button className='bg-primary px-9 py-[0.75rem] rounded-full w-full'>
            <Link to="/">
              <span className='font-medium text-md text-white'>Get The App</span>
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
