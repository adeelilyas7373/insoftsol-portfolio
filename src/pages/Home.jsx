import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { industries } from "../data/projects";
import Iridescence from "../animation/BgAnimation";

const fadeInVariants = [
  "animate-fade-in-up",
  "animate-fade-in-up delay-100",
  "animate-fade-in-up delay-200",
  "animate-fade-in-up delay-300",
];

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const industriesRef = useRef(null);

  useEffect(() => {
    const fadeInSection = (ref) => {
      if (!ref.current) return;
      const section = ref.current;
      section.classList.add("opacity-0", "translate-y-10");
      setTimeout(() => {
        section.classList.add("transition-all", "duration-800", "ease-out");
        section.classList.remove("opacity-0", "translate-y-10");
        section.classList.add("opacity-100", "translate-y-0");
      }, 100);
    };
    fadeInSection(heroRef);
    setTimeout(() => fadeInSection(aboutRef), 200);
    setTimeout(() => fadeInSection(industriesRef), 400);
  }, []);

  return (
    <div>
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          }
          .delay-100 { animation-delay: 0.12s; }
          .delay-200 { animation-delay: 0.24s; }
          .delay-300 { animation-delay: 0.36s; }
          .gradient-title {
            background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .hero-title-override {
            color: #fff !important;
            background: none !important;
            -webkit-background-clip: unset !important;
            -webkit-text-fill-color: unset !important;
            background-clip: unset !important;
          }
          .home-btn {
            transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
            box-shadow: 0 2px 12px rgba(56,189,248,0.10);
          }
          .home-btn-primary {
            background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
            color: #fff !important;
          }
          .home-btn-primary:hover {
            background: linear-gradient(90deg, #38bdf8 0%, #2563eb 100%);
            color: #fff !important;
            transform: translateY(-2px) scale(1.05);
          }
          .home-btn-outline {
            border: 2px solid #fff;
            color: #fff !important;
            background: transparent;
          }
          .home-btn-outline:hover {
            background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
            color: #fff !important;
            border-color: #38bdf8;
            transform: translateY(-2px) scale(1.05);
          }
          .industry-card {
            background: linear-gradient(120deg, #f0f9ff 60%, #dbeafe 100%);
            box-shadow: 0 4px 24px 0 rgba(30, 41, 59, 0.10), 0 1.5px 6px 0 rgba(56, 189, 248, 0.08);
            transition: box-shadow 0.3s, transform 0.2s;
          }
          .industry-card:hover {
            box-shadow: 0 8px 32px 0 rgba(30, 41, 59, 0.16), 0 3px 12px 0 rgba(56, 189, 248, 0.12);
            transform: translateY(-4px) scale(1.03);
          }
        `}
      </style>
      {/* Hero Banner */}
      <section
        ref={heroRef}
        className="relative py-20 overflow-hidden"
        style={
          {
            // Remove the static gradient background, animation will be used instead
          }
        }
      >
        {/* Animated Iridescence Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Iridescence
            color={[0.1, 0.4, 0.7]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* Content above the animation */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${fadeInVariants[0]} hero-title-override`}
          >
            Innovative Digital Solutions
          </h1>
          <p
            className={`text-xl mb-8 max-w-2xl mx-auto ${fadeInVariants[1]} text-blue-50`}
          >
            We deliver cutting-edge technology solutions across multiple
            industries with a focus on quality and user experience.
          </p>
          <div className={`space-x-4 flex justify-center ${fadeInVariants[2]}`}>
            <Link
              to="/projects"
              className="home-btn home-btn-primary px-6 py-3 rounded-lg font-medium inline-block"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="home-btn home-btn-outline px-6 py-3 rounded-lg font-medium inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section ref={aboutRef} className="py-16">
        <div className="container mx-auto px-6">
          <h2
            className={`text-3xl font-bold text-center mb-12 gradient-title ${fadeInVariants[0]}`}
          >
            About Our Company
          </h2>
          <div
            className={`max-w-4xl mx-auto text-center text-gray-700 ${fadeInVariants[1]}`}
          >
            <p className="mb-6">
              We are a team of experienced developers specializing in creating
              custom software solutions for businesses across various
              industries. Our expertise spans healthcare, logistics, e-commerce,
              education, and more.
            </p>
            <p>
              With a focus on modern technologies and user-centered design, we
              build applications that solve real business problems and deliver
              measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section
        ref={industriesRef}
        className="py-16"
        style={{
          background:
            "linear-gradient(120deg, #f0f9ff 0%, #e0f2fe 60%, #f1f5f9 100%)",
        }}
      >
        <div className="container mx-auto px-6">
          <h2
            className={`text-3xl font-bold text-center mb-12 gradient-title ${fadeInVariants[0]}`}
          >
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <div
                key={industry.id}
                className={`industry-card p-8 rounded-2xl ${
                  fadeInVariants[idx % fadeInVariants.length]
                }`}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-700 gradient-title">
                  {industry.name}
                </h3>
                <p className="text-gray-700">{industry.description}</p>
                <Link
                  to={`/industries#${industry.id}`}
                  className="text-blue-700 mt-4 inline-block font-medium hover:underline transition-colors"
                >
                  View Projects →
                </Link>
              </div>
            ))}
          </div>
          <div className={`text-center mt-10 ${fadeInVariants[3]}`}>
            <Link
              to="/industries"
              className="home-btn home-btn-primary px-6 py-3 rounded-lg font-medium inline-block"
            >
              View All Industries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
