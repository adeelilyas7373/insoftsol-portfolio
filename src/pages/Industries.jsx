import { industries } from "../data/projects";
import IndustrySection from "../components/IndustrySection";
import { useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

// Animation for fade-in up
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(32px);}
  100% { opacity: 1; transform: translateY(0);}
`;

// Styled components for title and layout
const PageContainer = styled.div`
  min-height: 100vh;
  padding: 4.5rem 2rem 3rem 2rem;
  background: linear-gradient(120deg, #e0f2fe 0%, #f0f9ff 50%, #f1f5f9 100%);
  position: relative;
  overflow-x: hidden;

  @media (max-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
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

const SectionSubtitle = styled.p`
  font-size: 1.15rem;
  color: #4b5563;
  max-width: 36rem;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
  opacity: 0.92;
`;

const IndustriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;

const FadeInDiv = styled.div`
  opacity: 0;
  transform: translateY(40px);
  animation: ${({ delay }) =>
    css`
      ${fadeInUp} 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards
    `};
  animation-delay: ${({ delay }) => delay || 0}s;
`;

const Industries = () => {
  return (
    <PageContainer>
      <Container>
        <SectionHeader>
          <SectionTitle>
            <GradientText>All Industries</GradientText>
          </SectionTitle>
          <SectionDivider />
          <SectionSubtitle>
            Our diverse portfolio spans across multiple sectors, delivering
            tailored solutions for each industry's unique challenges with
            precision and innovation.
          </SectionSubtitle>
        </SectionHeader>
        <IndustriesList>
          {industries.map((industry, idx) => (
            <FadeInDiv key={industry.id} delay={0.15 + idx * 0.08}>
              <IndustrySection
                id={industry.id}
                title={industry.name}
                description={industry.description}
                projects={industry.projects}
              />
            </FadeInDiv>
          ))}
        </IndustriesList>
      </Container>
    </PageContainer>
  );
};

export default Industries;
