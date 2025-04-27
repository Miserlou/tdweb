import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-white text-black shadow z-20">
      <div className="container mx-auto relative py-4 flex items-center justify-center">
        {/* Hamburger */}
        <button
          className="absolute bg-white left-4 top-4 focus:outline-none z-30"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black" />
            <span className="block w-6 h-0.5 bg-black" />
            <span className="block w-6 h-0.5 bg-black" />
          </div>
        </button>

        {/* Centered Logo */}
        <div className="w-1/4">
          <img src="/logo.png" className="w-full" alt="Tiny Diamond Logo" />
        </div>

        {/* Slide-in Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform ${
            open ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-40 shadow-lg`}
        >
          <nav className="mt-16">
            <ul className="flex flex-col">
              <li className="px-6 py-4 hover:bg-gray-100 hover:cursor-pointer">
                <Link
                  to="/"
                  className="text-gray-950 font-semibold no-underline"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="px-6 py-4 hover:bg-gray-100 hover:cursor-pointer">
                <Link
                  to="/about"
                  className="text-black font-semibold no-underline"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="px-6 py-4 hover:bg-gray-100 hover:cursor-pointer">
                <Link
                  to="/contact"
                  className="text-black font-semibold no-underline"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Optional dark overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </header>
  );
}