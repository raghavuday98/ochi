function Footer() {
  return (
    <div className="w-full bg-black text-white py-10 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left Section */}
        <div className="text-[7.5vw] leading-none mb-10 lg:mb-0 font-bold">
          <h1>Eye-</h1>
          <h1>Opening</h1>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between text-base md:text-lg">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-gray-400 mb-3">S:</h2>
            <ul className="space-y-1">
              <li>Instagram</li>
              <li>Behance</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-400 mb-3">L:</h2>
            <ul className="space-y-1">
              <li>202-1965 W 4th Ave</li>
              <li>Vancouver, Canada</li>
              <li>30 Chukarina St</li>
              <li>Lviv, Ukraine</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-gray-400 text-sm">
        <p>© Ochi Design 2025. Legal terms apply.</p>
        <a
          href="#"
          className="flex items-center gap-2 mt-4 md:mt-0 text-white hover:text-gray-300 transition"
        >
          Back to top
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-up-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14 2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h10.293L2.146 13.646a.5.5 0 0 0 .708.708L14.5 3.707V14a.5.5 0 0 0 1 0v-11z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Footer;
