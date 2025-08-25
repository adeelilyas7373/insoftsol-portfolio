import { useRef, useEffect } from "react";
import {
  FaGlobe,
  FaCode,
  FaCogs,
  FaRocket,
  FaLink,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiReact,
  SiAngular,
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiFigma,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

// Map tech names to icons with updated color scheme
const techIconMap = {
  ReactJS: {
    icon: <SiReact className="text-indigo-500" title="ReactJS" />,
    label: "ReactJS",
  },
  "React Native": {
    icon: <SiReact className="text-indigo-400" title="React Native" />,
    label: "React Native",
  },
  Angular: {
    icon: <SiAngular className="text-red-500" title="Angular" />,
    label: "Angular",
  },
  "Angular 7": {
    icon: <SiAngular className="text-red-500" title="Angular 7" />,
    label: "Angular 7",
  },
  PHP: {
    icon: <SiPhp className="text-purple-500" title="PHP" />,
    label: "PHP",
  },
  MySQL: {
    icon: <SiMysql className="text-amber-600" title="MySQL" />,
    label: "MySQL",
  },
  NodeJS: {
    icon: <FaNodeJs className="text-emerald-600" title="NodeJS" />,
    label: "NodeJS",
  },
  "Node.js/PHP": {
    icon: (
      <span className="flex items-center gap-1">
        <FaNodeJs className="text-emerald-600" title="Node.js" />
        <SiPhp className="text-purple-500" title="PHP" />
      </span>
    ),
    label: "Node.js/PHP",
  },
  Bootstrap: {
    icon: <SiBootstrap className="text-violet-600" title="Bootstrap" />,
    label: "Bootstrap",
  },
  Figma: {
    icon: <SiFigma className="text-pink-500" title="Figma" />,
    label: "Figma",
  },
  GraphQL: {
    icon: <SiGraphql className="text-pink-600" title="GraphQL" />,
    label: "GraphQL",
  },
  Redux: {
    icon: <SiRedux className="text-violet-500" title="Redux" />,
    label: "Redux",
  },
  "Material UI": {
    icon: (
      <span className="text-blue-500" title="Material UI">
        MUI
      </span>
    ),
    label: "Material UI",
  },
  "Tailwind CSS": {
    icon: <SiTailwindcss className="text-cyan-500" title="Tailwind CSS" />,
    label: "Tailwind CSS",
  },
  "API Integration": {
    icon: <FaCogs className="text-slate-500" title="API Integration" />,
    label: "API Integration",
  },
  ExpressJS: {
    icon: <FaCode className="text-slate-700" title="ExpressJS" />,
    label: "ExpressJS",
  },
};

// You can customize this icon for industry if you want
const industryIcon = <FaGlobe className="text-indigo-400" title="Industry" />;

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

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
          threshold: 0.35,
        }
      );
      observer.observe(card);
    } else {
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

  // Use a single color/gradient for all cards
  const cardGradient = "from-white via-indigo-50 to-indigo-100";

  const projectImage =
    project.image &&
    typeof project.image === "string" &&
    project.image.length > 0
      ? project.image
      : "/images/placeholder.jpg";

  // Use a single fun icon for all cards
  const funIcon = <FaRocket className="text-indigo-400" title="Rocket" />;

  return (
    <div
      ref={cardRef}
      className={`project-card bg-gradient-to-br ${cardGradient} rounded-xl overflow-hidden transition-all duration-300 border border-slate-200 flex flex-col h-full min-h-[520px] shadow-lg hover:shadow-xl`}
      style={{
        position: "relative",
        boxShadow: "0 4px 20px rgba(102, 126, 234, 0.1)",
      }}
    >
      <style>
        {`
          @keyframes projectCardFadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.98);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .project-card {
            opacity: 0;
          }
          .project-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 30px rgba(102, 126, 234, 0.15);
          }
          .project-card-animate {
            animation: projectCardFadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
          .project-title-gradient {
            background: linear-gradient(90deg, #1e293b 0%, #4f46e5 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          .project-tech-badge {
            background: linear-gradient(90deg, #f1f5f9 0%, #e0e7ff 100%);
            color: #4f46e5;
            font-weight: 500;
            font-size: 0.85rem;
            padding: 0.25rem 0.8rem;
            border-radius: 9999px;
            border: 1px solid #e0e7ff;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 0.4em;
          }
          .project-tech-badge:hover {
            background: linear-gradient(90deg, #4f46e5 0%, #6366f1 100%);
            color: white;
          }
          .project-link-btn {
            background: linear-gradient(90deg, #4f46e5 0%, #6366f1 100%);
            color: white;
            font-weight: 500;
            border-radius: 9999px;
            padding: 0.5rem 1.25rem;
            transition: all 0.2s;
          }
          .project-link-btn:hover {
            background: linear-gradient(90deg, #6366f1 0%, #4f46e5 100%);
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
          }
          .project-image {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 0.5rem 0.5rem 0 0;
            background: #e0e7ff;
          }
          .project-fun-icon {
            position: absolute;
            top: 16px;
            right: 16px;
            font-size: 1.8rem;
            opacity: 0.15;
            z-index: 2;
            animation: funIconSpin 4s ease-in-out infinite alternate;
          }
          @keyframes funIconSpin {
            0% { transform: rotate(-5deg) scale(1);}
            100% { transform: rotate(5deg) scale(1.1);}
          }
          .project-details-row {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-top: 1.25rem;
            margin-bottom: 1.25rem;
          }
          .project-details-col {
            flex: 1 1 180px;
            min-width: 160px;
          }
          .project-details-label {
            font-size: 0.92rem;
            color: #6366f1;
            font-weight: 600;
            margin-bottom: 0.25rem;
            display: block;
          }
          .project-details-value {
            color: #334155;
            font-size: 0.97rem;
            font-weight: 500;
            word-break: break-word;
          }
          .project-industry-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.4em;
            background: linear-gradient(90deg, #e0e7ff 0%, #f1f5f9 100%);
            color: #6366f1;
            font-weight: 500;
            font-size: 0.92rem;
            padding: 0.22rem 0.8rem;
            border-radius: 9999px;
            border: 1px solid #e0e7ff;
            margin-top: 0.2rem;
            margin-bottom: 0.2rem;
          }
        `}
      </style>
      {/* Fun Icon Top Right */}
      <div className="project-fun-icon">{funIcon}</div>
      {/* Project Image */}
      <img
        src={projectImage}
        alt={project.name + " image"}
        className="project-image"
        loading="lazy"
      />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 project-title-gradient">
          {project.name}
        </h3>
        <p className="text-slate-600 mb-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Project Details Row */}
        <div className="project-details-row">
          {project._industry && (
            <div className="project-details-col">
              <span className="project-details-label flex items-center gap-1">
                {/* Move icon to the left of the word "Industry" */}
                <span className="flex items-center gap-1">
                  {industryIcon}
                  <span>Industry:</span>
                </span>
              </span>
              <span className="project-industry-badge">
                <span>{project._industry}</span>
              </span>
            </div>
          )}
          {project.year && (
            <div className="project-details-col">
              <span className="project-details-label">Year</span>
              <span className="project-details-value">{project.year}</span>
            </div>
          )}
          {project.role && (
            <div className="project-details-col">
              <span className="project-details-label">Role</span>
              <span className="project-details-value">{project.role}</span>
            </div>
          )}
        </div>

        <div className="mb-4">
          <h4 className="font-medium mb-2 text-indigo-700 text-sm flex items-center gap-1">
            <FaCode className="text-indigo-500" /> Technology Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => {
              const techObj = techIconMap[tech];
              return (
                <span key={index} className="project-tech-badge">
                  <span className="flex items-center gap-1">
                    {techObj ? (
                      techObj.icon
                    ) : (
                      <FaCogs className="text-slate-400" title={tech} />
                    )}
                    <span>{techObj ? techObj.label : tech}</span>
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="flex-1"></div>
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn mt-auto inline-flex items-center justify-center"
          >
            <FaLink className="mr-1" /> Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
