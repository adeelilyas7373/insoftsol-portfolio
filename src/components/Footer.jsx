import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

// Dark color scheme: deep blue, indigo, purple gradients, dark backgrounds, and accent gradients
const fadeInVariants = [
  "footer-animate-fade-in-up",
  "footer-animate-fade-in-up delay-100",
  "footer-animate-fade-in-up delay-200",
  "footer-animate-fade-in-up delay-300",
];

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const handleScroll = () => {
      const rect = footer.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        footer.classList.add("footer-animate");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, #181a2a 0%, #23244a 40%, #312e81 70%, #4f46e5 100%)",
      }}
    >
      <style>
        {`
          @keyframes footerFadeInUp {
            0% {
              opacity: 0;
              transform: translateY(60px) scale(0.98);
              filter: blur(6px);
            }
            60% {
              opacity: 0.7;
              transform: translateY(10px) scale(1.01);
              filter: blur(1.5px);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }
          .footer-animate-fade-in-up {
            opacity: 0;
            animation: footerFadeInUp 1.1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          }
          .delay-100 { animation-delay: 0.18s; }
          .delay-200 { animation-delay: 0.36s; }
          .delay-300 { animation-delay: 0.54s; }
          .footer-animate .footer-animate-fade-in-up {
            opacity: 1 !important;
          }
          .footer-link {
            transition: color 0.22s, transform 0.22s, text-shadow 0.22s;
            will-change: color, transform, text-shadow;
            position: relative;
            color: #c7d2fe;
          }
          .footer-link:after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #818cf8 0%, #a78bfa 100%);
            transition: width 0.25s;
            position: absolute;
            left: 0;
            bottom: -2px;
            border-radius: 2px;
          }
          .footer-link:hover {
            color: #a5b4fc !important;
            transform: translateY(-2px) scale(1.07);
            text-shadow: 0 2px 12px rgba(129,140,248,0.18);
          }
          .footer-link:hover:after {
            width: 100%;
          }
          .footer-brand-gradient {
            background: linear-gradient(90deg, #818cf8 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .footer-section-title {
            letter-spacing: 0.04em;
            background: linear-gradient(90deg, #a5b4fc 0%, #818cf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .footer-contact-gradient {
            background: linear-gradient(90deg, #a5b4fc 0%, #818cf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .footer-copyright {
            background: linear-gradient(90deg, #818cf8 0%, #a78bfa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 500;
          }
          .footer-bg-blur {
            position: absolute;
            z-index: 0;
            pointer-events: none;
            filter: blur(80px);
            opacity: 0.18;
          }
        `}
      </style>
      {/* Decorative blurred gradients for professional look */}
      <div
        className="footer-bg-blur"
        style={{
          top: "-80px",
          left: "-120px",
          width: "320px",
          height: "320px",
          background:
            "radial-gradient(circle at 30% 30%, #6366f1 0%, transparent 70%)",
        }}
      />
      <div
        className="footer-bg-blur"
        style={{
          bottom: "-100px",
          right: "-100px",
          width: "260px",
          height: "260px",
          background:
            "radial-gradient(circle at 70% 70%, #a78bfa 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className={fadeInVariants[0]}>
            <h3 className="text-2xl font-extrabold mb-4 tracking-wide footer-brand-gradient footer-animate-fade-in-up italic">
              Logics Bay
            </h3>
            <p className="text-indigo-100/90 font-medium footer-animate-fade-in-up delay-100">
              Delivering innovative digital solutions across industries with a
              focus on quality and user experience.
            </p>
          </div>

          <div className={fadeInVariants[1]}>
            <h4 className="footer-section-title font-bold mb-4 text-lg footer-animate-fade-in-up">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="footer-link footer-animate-fade-in-up delay-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="footer-link footer-animate-fade-in-up delay-200"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="footer-link footer-animate-fade-in-up delay-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="footer-link footer-animate-fade-in-up delay-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className={fadeInVariants[2]}>
            <h4 className="footer-section-title font-bold mb-4 text-lg footer-animate-fade-in-up">
              Industries
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/industries#healthcare"
                  className="footer-link footer-animate-fade-in-up delay-100"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  to="/industries#ecommerce"
                  className="footer-link footer-animate-fade-in-up delay-200"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  to="/industries#logistics"
                  className="footer-link footer-animate-fade-in-up delay-300"
                >
                  Logistics
                </Link>
              </li>
              <li>
                <Link
                  to="/industries#finance"
                  className="footer-link footer-animate-fade-in-up delay-300"
                >
                  Finance
                </Link>
              </li>
            </ul>
          </div>

          <div className={fadeInVariants[3]}>
            <h4 className="footer-section-title font-bold mb-4 text-lg footer-animate-fade-in-up">
              Contact Info
            </h4>
            <address className="not-italic text-indigo-200/90 font-medium footer-animate-fade-in-up delay-100">
              <p className="footer-contact-gradient">
                765-C, Street 16, Block C Faisal Town,
              </p>
              <p className="footer-contact-gradient">
                Lahore-54700 Punjab PAKISTAN
              </p>
              <p className="mt-2 footer-contact-gradient">
                haseeb@logicsbay.com
              </p>
              <p className="footer-contact-gradient">+92 314 4366017</p>
            </address>
          </div>
        </div>

        <div className="border-t border-indigo-400/30 mt-14 pt-8 text-center">
          <p className="footer-copyright footer-animate-fade-in-up delay-300">
            &copy; {new Date().getFullYear()} Logics Bay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
