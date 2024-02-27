import walauwwa from "public/Images/walauwwa.png";

export default function Header() {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 pb-10 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            {/* <img
              src={walauwwa}
              alt="Walauwwa Logo"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            /> */}
            <span className="ml-3 text-xl">Walawwa</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">History</a>
            <a className="mr-5 hover:text-white">Gallery</a>
            <a className="mr-5 hover:text-white">Evolution</a>
            <a className="mr-5 hover:text-white">Contact</a>
          </nav>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Social
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
