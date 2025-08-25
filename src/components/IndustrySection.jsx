import { useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import ProjectCard from "./ProjectCrad";

// Animations and theme from Home.jsx
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(32px);}
  100% { opacity: 1; transform: translateY(0);}
`;

const FadeInElement = styled.div`
  opacity: 0;
  animation: ${fadeInUp} 0.45s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  ${({ delay }) =>
    delay &&
    css`
      animation-delay: ${delay}s;
    `}
`;

const SectionContainer = styled.section`
  margin-bottom: 5rem;
  border-radius: 2rem;
  box-shadow: 0 10px 32px -8px rgba(59, 130, 246, 0.13);
  overflow: hidden;
  background: linear-gradient(135deg, #e0e7ff 0%, #f0f9ff 50%, #dbeafe 100%);
  border: 1px solid #c7d2fe;
  position: relative;
  transition: box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1);

  @media (max-width: 640px) {
    margin-bottom: 2.5rem;
    border-radius: 1.2rem;
  }
`;

const SectionInner = styled.div`
  padding: 3.5rem 2rem;

  @media (min-width: 768px) {
    padding: 4.5rem 4rem;
  }
`;

const IndustryTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.7rem);
  font-weight: 800;
  margin-bottom: 1.1rem;
  letter-spacing: -0.01em;
  background: linear-gradient(90deg, #2563eb 0%, #9333ea 60%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    text-shadow: 0 0 12px rgba(59, 130, 246, 0.18);
    transform: scale(1.01);
  }
`;

const IndustryDescription = styled.p`
  font-size: 1.18rem;
  color: #2563eb;
  font-weight: 500;
  letter-spacing: 0.01em;
  margin-bottom: 2.5rem;
  max-width: 40rem;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2.2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const IndustrySection = ({ id, title, description, projects }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.classList.add("opacity-0", "translate-y-8");
    setTimeout(() => {
      section.classList.add("transition-all", "duration-400", "ease-out");
      section.classList.remove("opacity-0", "translate-y-8");
      section.classList.add("opacity-100", "translate-y-0");
    }, 40);
  }, []);

  // Animation delays for project cards
  const fadeInDelays = [0, 0.08, 0.16, 0.24, 0.32, 0.4];

  return (
    <SectionContainer id={id} ref={sectionRef}>
      <SectionInner>
        <FadeInElement delay={0}>
          <IndustryTitle>{title}</IndustryTitle>
        </FadeInElement>
        <FadeInElement delay={0.08}>
          <IndustryDescription>{description}</IndustryDescription>
        </FadeInElement>
        <ProjectsGrid>
          {projects.map((project, idx) => (
            <FadeInElement
              key={project.id || idx}
              delay={fadeInDelays[idx % fadeInDelays.length]}
              style={{
                transition:
                  "transform 0.25s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.25s",
              }}
            >
              <ProjectCard project={project} />
            </FadeInElement>
          ))}
        </ProjectsGrid>
      </SectionInner>
    </SectionContainer>
  );
};

export default IndustrySection;
