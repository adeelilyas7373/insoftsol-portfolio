import { useRef, useEffect } from "react";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Use IntersectionObserver for buttery smooth animation
    let observer;
    if ("IntersectionObserver" in window) {
      observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !animationTriggered.current) {
              card.classList.add("project-card-animate");
              animationTriggered.current = true;
              observer.disconnect();
            }
          });
        },
        {
          threshold: 0.35, // Trigger when 35% visible
        }
      );
      observer.observe(card);
    } else {
      // Fallback for old browsers
      const handleScroll = () => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80 && !animationTriggered.current) {
          card.classList.add("project-card-animate");
          animationTriggered.current = true;
          window.removeEventListener("scroll", handleScroll);
        }
      };
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  // Professional, modern gradients for card backgrounds
  const gradients = [
    "from-white via-blue-50 to-blue-100",
    "from-white via-cyan-50 to-cyan-100",
    "from-white via-slate-50 to-slate-200",
    "from-white via-indigo-50 to-blue-100",
    "from-white via-blue-100 to-cyan-50",
    "from-white via-gray-50 to-blue-50",
  ];
  // Pick a gradient based on project name hash for consistency
  const hash =
    project.name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    gradients.length;
  const cardGradient = gradients[hash];

  return (
    <div
      ref={cardRef}
      className={`project-card bg-gradient-to-br ${cardGradient} rounded-2xl overflow-hidden transition-all duration-500 border border-slate-200`}
      style={{
        position: "relative",
        boxShadow:
          "0 4px 24px 0 rgba(30, 41, 59, 0.10), 0 1.5px 6px 0 rgba(56, 189, 248, 0.08)",
        // subtle blue shadow for professional look
      }}
    >
      <style>
        {`
          @keyframes projectCardFadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.97);
              box-shadow: none;
            }
            60% {
              opacity: 0.7;
              transform: translateY(8px) scale(1.01);
              box-shadow: 0 4px 24px 0 rgba(30,41,59,0.10), 0 1.5px 6px 0 rgba(56,189,248,0.08);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              box-shadow: 0 8px 32px 0 rgba(30,41,59,0.13), 0 2px 12px 0 rgba(56,189,248,0.10);
            }
          }
          .project-card {
            opacity: 0;
            transform: translateY(40px) scale(0.97);
            transition: box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1), transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            box-shadow: 0 4px 24px 0 rgba(30, 41, 59, 0.10), 0 1.5px 6px 0 rgba(56, 189, 248, 0.08);
            will-change: opacity, transform, box-shadow;
          }
          .project-card-animate {
            animation: projectCardFadeInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
          .project-title-gradient {
            background: linear-gradient(90deg, #1e293b 0%, #2563eb 60%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            display: inline-block;
          }
          .project-tech-badge {
            background: linear-gradient(90deg, #f1f5f9 0%, #e0e7ff 100%);
            color: #2563eb;
            font-weight: 500;
            font-size: 0.95rem;
            padding: 0.25rem 0.9rem;
            border-radius: 9999px;
            box-shadow: 0 1px 4px rgba(30,41,59,0.07);
            transition: background 0.2s, color 0.2s;
            border: 1px solid #e0e7ef;
          }
          .project-tech-badge:hover {
            background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
            color: #fff;
          }
          .project-link-btn {
            background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
            color: #fff;
            font-weight: 600;
            border-radius: 9999px;
            padding: 0.5rem 1.5rem;
            box-shadow: 0 2px 12px rgba(56,189,248,0.10);
            transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
            display: inline-block;
            margin-top: 0.5rem;
            letter-spacing: 0.01em;
            border: none;
          }
          .project-link-btn:hover {
            background: linear-gradient(90deg, #38bdf8 0%, #2563eb 100%);
            color: #fff;
            transform: translateY(-2px) scale(1.04);
            box-shadow: 0 6px 24px rgba(56,189,248,0.18);
            text-shadow: 0 2px 8px rgba(56,189,248,0.08);
          }
        `}
      </style>
      <div className="p-7">
        <h3 className="text-2xl font-extrabold mb-2 project-title-gradient drop-shadow-sm">
          {project.name}
        </h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-5">
          <h4 className="font-semibold mb-2 text-blue-800">
            Technology Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span key={index} className="project-tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
