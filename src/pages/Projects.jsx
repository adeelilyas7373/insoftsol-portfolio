import { industries } from "../data/projects";
import ProjectCard from "../components/ProjectCrad";
import { useState, useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";

// Animations (matching Home.jsx)
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

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #e0f2fe 0%, #f0f9ff 50%, #f1f5f9 100%);
  padding: 3.5rem 0 2.5rem 0;
`;

const Container = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 1.2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #5b73e8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`;

const SectionTitle = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.2rem;
  line-height: 1.13;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    text-shadow: 0 0 12px rgba(102, 126, 234, 0.4);
    transform: scale(1.01);
  }
`;

const SectionDivider = styled.div`
  width: 5rem;
  height: 0.25rem;
  background: linear-gradient(to right, #a855f7, #3b82f6);
  margin: 0 auto 1.2rem;
  border-radius: 9999px;
`;

const FilterDropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

const DropdownContainer = styled.div`
  width: 100%;
  max-width: 22rem;
  position: relative;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.85rem 2.5rem 0.85rem 1.2rem;
  border-radius: 1.1rem;
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid #c7d2fe;
  color: #2563eb;
  background: #fff;
  box-shadow: 0 4px 16px -8px rgba(59, 130, 246, 0.08);
  outline: none;
  transition: all 0.22s cubic-bezier(0.23, 1, 0.32, 1);
  appearance: none;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: #6366f1;
    box-shadow: 0 8px 24px -8px rgba(102, 126, 234, 0.13);
  }

  ${({ $open }) =>
    $open &&
    css`
      border-color: #6366f1;
      box-shadow: 0 8px 24px -8px rgba(102, 126, 234, 0.18);
      z-index: 20;
    `}
`;

const DropdownArrow = styled.div`
  pointer-events: none;
  position: absolute;
  right: 1.1rem;
  top: 50%;
  transform: translateY(-50%) ${({ $open }) => ($open ? "rotate(180deg)" : "")};
  color: #6366f1;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NoProjects = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  color: #64748b;
  font-size: 1.15rem;
  padding: 3.5rem 0;
  opacity: 0.85;
`;

const fadeInVariants = [
  { delay: 0 },
  { delay: 0.08 },
  { delay: 0.16 },
  { delay: 0.24 },
];

const Projects = () => {
  // Use search params for filter
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const selectRef = useRef(null);

  // Get industry id from URL, default to "all"
  const industryIdFromUrl = searchParams.get("industry") || "all";
  const [selectedIndustryId, setSelectedIndustryId] =
    useState(industryIdFromUrl);

  // Sync state with URL if user navigates via browser controls
  useEffect(() => {
    setSelectedIndustryId(industryIdFromUrl);
  }, [industryIdFromUrl]);

  // Update URL and state when filter changes
  const handleIndustryChange = (e) => {
    const value = e.target.value;
    setSelectedIndustryId(value);
    if (value === "all") {
      // Remove industry param from URL
      searchParams.delete("industry");
      setSearchParams(searchParams, { replace: true });
    } else {
      searchParams.set("industry", value);
      setSearchParams(searchParams, { replace: true });
    }
  };

  // Filter projects by industry id
  let filteredProjects = [];
  if (selectedIndustryId === "all") {
    filteredProjects = industries.flatMap((industry) =>
      industry.projects.map((project) => ({
        ...project,
        _industry: industry.name,
        _industryId: industry.id,
      }))
    );
  } else {
    const industry = industries.find((ind) => ind.id === selectedIndustryId);
    filteredProjects = industry
      ? industry.projects.map((project) => ({
          ...project,
          _industry: industry.name,
          _industryId: industry.id,
        }))
      : [];
  }

  // Handle focus/blur for dropdown open state
  const handleFocus = () => setDropdownOpen(true);
  const handleBlur = () => setDropdownOpen(false);

  return (
    <PageContainer>
      <Container>
        <SectionHeader>
          <FadeInElement delay={fadeInVariants[0].delay}>
            <SectionTitle>
              <GradientText>All Projects</GradientText>
            </SectionTitle>
            <SectionDivider />
          </FadeInElement>
        </SectionHeader>

        {/* Industry Filter Dropdown */}
        <FilterDropdownWrapper>
          <DropdownContainer>
            <StyledSelect
              ref={selectRef}
              value={selectedIndustryId}
              onChange={handleIndustryChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              $open={dropdownOpen}
              aria-label="Filter by Industry"
            >
              <option value="all">All Industries</option>
              {industries.map((industry) => (
                <option key={industry.id} value={industry.id}>
                  {industry.name}
                </option>
              ))}
            </StyledSelect>
            <DropdownArrow $open={dropdownOpen}>
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ display: "block" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </DropdownArrow>
          </DropdownContainer>
        </FilterDropdownWrapper>

        <ProjectsGrid>
          {filteredProjects.length === 0 ? (
            <NoProjects>Koi project nahi mila.</NoProjects>
          ) : (
            filteredProjects.map((project, idx) => (
              <FadeInElement
                key={`${project._industryId}-${project.name}`}
                delay={fadeInVariants[idx % fadeInVariants.length].delay}
              >
                <ProjectCard project={project} />
              </FadeInElement>
            ))
          )}
        </ProjectsGrid>
      </Container>
    </PageContainer>
  );
};

export default Projects;
