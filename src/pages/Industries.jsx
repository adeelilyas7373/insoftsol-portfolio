import { industries } from "../data/projects";
import IndustrySection from "../components/IndustrySection";
import { useRef, useEffect } from "react";

const Industries = () => {
  const pageRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Animate page fade-in
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
    // Animate title slide-in
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
  }, []);

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
          .industries-gradient-title {
            background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .industries-section-fade {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1), transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          }
          .industries-section-fade.in-view {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
      <div className="container mx-auto px-6">
        <h1
          ref={titleRef}
          className="text-4xl font-bold text-center mb-16 industries-gradient-title opacity-0"
        >
          Our Industries
        </h1>

        {industries.map((industry, idx) => (
          <div
            key={industry.id}
            className="industries-section-fade"
            style={{ transitionDelay: `${0.15 + idx * 0.08}s` }}
            ref={(el) => {
              // IntersectionObserver for fade-in
              if (!el) return;
              if (el._observerAttached) return;
              el._observerAttached = true;
              const observer = new window.IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      el.classList.add("in-view");
                      observer.disconnect();
                    }
                  });
                },
                { threshold: 0.25 }
              );
              observer.observe(el);
            }}
          >
            <IndustrySection
              id={industry.id}
              title={industry.name}
              description={industry.description}
              projects={industry.projects}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
