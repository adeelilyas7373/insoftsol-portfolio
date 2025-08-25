import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b p-1.5 border-gray-100 shadow-sm z-50">
      <style>
        {`
          .header-fade-in {
            animation: headerFadeIn 0.55s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          @keyframes headerFadeIn {
            0% { opacity: 0; transform: translateY(-18px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .nav-link-anim {
            transition: color 0.18s, transform 0.18s;
            position: relative;
            font-weight: 500;
            letter-spacing: 0.01em;
          }
          .nav-link-anim::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #2563eb 0%, #7c3aed 100%);
            transition: width 0.22s;
            position: absolute;
            left: 50%;
            bottom: -5px;
            transform: translateX(-50%);
            border-radius: 2px;
          }
          .nav-link-anim:hover,
          .nav-link-anim.active {
            color: #2563eb !important;
            transform: translateY(-1px) scale(1.04);
          }
          .nav-link-anim:hover::after,
          .nav-link-anim.active::after {
            width: 100%;
          }
          .logo-text {
            background: linear-gradient(135deg, #2563eb 0%, #38bdf8 50%, #7c3aed 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .menu-btn {
            background: transparent;
            border: 1px solid #e5e7eb;
            transition: all 0.18s;
          }
          .menu-btn:hover {
            background: #f3f4f6;
            border-color: #d1d5db;
          }
        `}
      </style>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 header-fade-in">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
            style={{ textDecoration: "none" }}
          >
            <img
              src={logo}
              alt="Logics Bay"
              className="w-9 h-9 object-contain"
              style={{ minWidth: "2.25rem" }}
            />
            <span className="logo-text text-[1.35rem] font-bold tracking-tight select-none">
              Logics Bay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, idx) => {
              const isActive =
                link.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link-anim px-3 py-2 text-[0.97rem] text-gray-700 hover:text-blue-600${
                    isActive ? " active" : ""
                  }`}
                  style={{
                    animation: `headerFadeIn 0.5s ${0.08 + idx * 0.07}s both`,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden menu-btn p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-2.5 bg-white border border-gray-100 rounded-xl shadow-lg animate-fadeIn">
            <nav className="flex flex-col py-1.5">
              {navLinks.map((link) => {
                const isActive =
                  link.to === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`nav-link-anim px-4 py-3 text-[0.97rem] text-gray-700 hover:text-blue-600 hover:bg-gray-50${
                      isActive ? " active" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 0.32s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
