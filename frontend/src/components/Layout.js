import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>TravelUs App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="container mx-auto">
        <h1 className='font-serif text-4xl text-cyan-100 flex items-center italic underline md:mr-20'>TravelUs</h1>
        </div>
        <div className='flex justify-evenly'>

        {/* home Button */}
        <Link href="/">
          <button className="bg-white text-blue-500 hover:bg-blue-100 text-sm rounded-full py-2 px-4">
            Home
          </button>
        </Link>
      </div>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto">
          <p className="text-center text-blue-600">&copy; {new Date().getFullYear()} TravelUs App</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
