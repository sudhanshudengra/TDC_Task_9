

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 md:p-4 flex justify-between items-center">
      <div className="md:flex items-center space-x-4">
        {/* Logo */}
        <Link href="/">
          <button className="flex items-center space-x-2">
            
            <span className="text-white text-lg font-semibold"><img src="../logo.gif" alt="Logo" className="w-12 h-12" /></span>
          </button>
        </Link>

        {/* Navigation Buttons */}
        <Link href="/flights">
          <button className="nav-button hover:bg-blue-400 underline">Flights</button>
        </Link>
        <Link href="/trains">
          <button className="nav-button hover:bg-blue-400 underline">Trains</button>
        </Link>
        <Link href="/bus">
          <button className="nav-button hover:bg-blue-400 underline">Bus</button>
        </Link>
        <Link href="/cabs">
          <button className="nav-button hover:bg-blue-400 underline">Cabs</button>
        </Link>
        <Link href="/cruise">
          <button className="nav-button hover:bg-blue-400 underline">Cruise</button>
        </Link>
        <Link href="/hotels">
          <button className="nav-button hover:bg-blue-400 underline">Hotels</button>
        </Link>
      </div>
    <h1 className='font-serif text-5xl text-cyan-100 flex items-center italic underline md:mr-20'>TravelUs</h1>

      <div>
        {/* Get Help */}
        <Link href="/">
          <button className="nav-button md:mr-4">Get Help</button>
        </Link>

        {/* Login Button */}
        <Link href="/Login">
          <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm rounded-full py-2 px-4">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
