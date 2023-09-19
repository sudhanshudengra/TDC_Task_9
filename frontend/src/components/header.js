

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Link href="/">
          <button className="flex items-center space-x-2">
            
            <span className="text-white text-lg font-semibold"><img src="../logo.gif" alt="Logo" className="w-12 h-12" /></span>
          </button>
        </Link>

        {/* Navigation Buttons */}
        <Link href="/flights">
          <button className="nav-button">Flights</button>
        </Link>
        <Link href="/trains">
          <button className="nav-button">Trains</button>
        </Link>
        <Link href="/bus">
          <button className="nav-button">Bus</button>
        </Link>
        <Link href="/cabs">
          <button className="nav-button">Cabs</button>
        </Link>
        <Link href="/cruise">
          <button className="nav-button">Cruise</button>
        </Link>
        <Link href="/hotels">
          <button className="nav-button">Hotels</button>
        </Link>
      </div>

      <div>
        {/* Get Help */}
        <Link href="/get_help">
          <button className="nav-button mr-4">Get Help</button>
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
