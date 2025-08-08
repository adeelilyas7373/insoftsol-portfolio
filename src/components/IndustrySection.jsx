import { useRef, useEffect } from "react";
import ProjectCard from "./ProjectCrad";

const fadeInVariants = [
  "animate-fade-in-up",
  "animate-fade-in-up delay-100",
  "animate-fade-in-up delay-200",
  "animate-fade-in-up delay-300",
  "animate-fade-in-up delay-400",
  "animate-fade-in-up delay-500",
];

const IndustrySection = ({ id, title, description, projects }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("industry-animate");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="mb-20 rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 border border-blue-100 relative"
      style={{ transition: "box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1)" }}
    >
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          }
          .delay-100 { animation-delay: 0.12s; }
          .delay-200 { animation-delay: 0.24s; }
          .delay-300 { animation-delay: 0.36s; }
          .delay-400 { animation-delay: 0.48s; }
          .delay-500 { animation-delay: 0.6s; }
          .industry-animate .animate-fade-in-up {
            opacity: 1 !important;
          }
          .industry-title-gradient {
            background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          .industry-desc {
            color: #2563eb;
            font-weight: 500;
            letter-spacing: 0.01em;
          }
        `}
      </style>
      <div className="px-8 py-12 md:px-16 md:py-16">
        <h2
          className={`text-4xl font-extrabold mb-4 tracking-tight industry-title-gradient animate-fade-in-up`}
        >
          {title}
        </h2>
        <p className="text-lg mb-10 max-w-3xl industry-desc animate-fade-in-up delay-100">
          {description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={fadeInVariants[index % fadeInVariants.length]}
              style={{
                transition:
                  "transform 0.25s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.25s",
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
