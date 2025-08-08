import { industries } from "../data/projects";
import ProjectCard from "../components/ProjectCrad";
import { useRef, useEffect } from "react";

const Projects = () => {
  // Flatten all projects from all industries
  const allProjects = industries.flatMap((industry) => industry.projects);

  const pageRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    // Page fade-in animation (smooth)
    if (pageRef.current) {
      pageRef.current.classList.add("opacity-0");
      setTimeout(() => {
        pageRef.current.classList.add(
          "transition-all",
          "duration-800",
          "ease-out"
        );
        pageRef.current.classList.remove("opacity-0");
        pageRef.current.classList.add("opacity-100");
      }, 80);
    }
    // Title slide-in animation (smooth)
    if (titleRef.current) {
      titleRef.current.classList.add("opacity-0", "translate-y-8");
      setTimeout(() => {
        titleRef.current.classList.add(
          "transition-all",
          "duration-700",
          "ease-out"
        );
        titleRef.current.classList.remove("opacity-0", "translate-y-8");
        titleRef.current.classList.add("opacity-100", "translate-y-0");
      }, 200);
    }

    // Projects smooth fade-in using IntersectionObserver
    if (projectRefs.current.length) {
      projectRefs.current.forEach((el, idx) => {
        if (!el) return;
        el.classList.remove("in-view");
      });

      if ("IntersectionObserver" in window) {
        const observer = new window.IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.25,
          }
        );
        projectRefs.current.forEach((el, idx) => {
          if (el) {
            observer.observe(el);
          }
        });
        return () => observer.disconnect();
      } else {
        // Fallback: fade in on scroll
        const handleScroll = () => {
          projectRefs.current.forEach((el, idx) => {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            if (
              rect.top < window.innerHeight - 40 &&
              !el.classList.contains("in-view")
            ) {
              el.classList.add("in-view");
            }
          });
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
      }
    }
  }, [allProjects.length]);

  return (
    <div
      ref={pageRef}
      className="py-16 min-h-screen opacity-0"
      style={{
        background:
          "linear-gradient(120deg, #e0f2fe 0%, #f0f9ff 50%, #f1f5f9 100%)",
      }}
    >
      <style>
        {`
          .projects-gradient-title {
            background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .projects-section-fade {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1), transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
            will-change: opacity, transform;
          }
          .projects-section-fade.in-view {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
      <div className="container mx-auto px-6">
        <h1
          ref={titleRef}
          className="text-4xl font-bold text-center mb-16 projects-gradient-title"
        >
          All Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="projects-section-fade"
              ref={(el) => (projectRefs.current[index] = el)}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
