import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 shadow-lg relative z-50">
      <style>
        {`
          .header-fade-in {
            animation: headerFadeIn 1s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          @keyframes headerFadeIn {
            0% { opacity: 0; transform: translateY(-30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .nav-link-anim {
            transition: color 0.2s, background 0.2s, box-shadow 0.2s, transform 0.2s;
            position: relative;
          }
          .nav-link-anim::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #38bdf8 0%, #2563eb 100%);
            transition: width 0.3s;
            position: absolute;
            left: 0;
            bottom: -2px;
          }
          /* Remove background change from nav-link-anim hover */
          .nav-link-anim:hover {
            color: #fff !important;
            /* background removed */
            box-shadow: 0 2px 12px rgba(56,189,248,0.10);
            transform: translateY(-2px) scale(1.05);
          }
          .nav-link-anim:hover::after {
            width: 100%;
          }
          /* Add background change on button hover */
          .menu-btn-anim:hover {
            background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%) !important;
          }
        `}
      </style>
      <div className="container mx-auto px-6 py-4 header-fade-in">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent tracking-tight drop-shadow-lg transition-all duration-300"
            style={{ letterSpacing: "0.04em" }}
          >
            MountSol
          </Link>
          <nav className="hidden md:flex space-x-8 ml-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link-anim px-3 py-1 rounded-md text-lg font-medium text-white/90 hover:text-white transition-all duration-200`}
                style={{
                  animation: `headerFadeIn 0.7s ${0.1 + idx * 0.08}s both`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden focus:outline-none p-2 rounded transition menu-btn-anim"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            <svg
              className="w-7 h-7 text-white"
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
              ></path>
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400 rounded-lg shadow-lg p-4 animate-fade-in-up">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="nav-link-anim px-3 py-2 rounded-md text-lg font-semibold text-white/90 hover:text-white transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
