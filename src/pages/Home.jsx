// import { Link } from "react-router-dom";
// import { useRef, useEffect } from "react";
// import styled, { keyframes, css } from "styled-components";
// import { industries } from "../data/projects";
// import { FaUsers, FaProjectDiagram, FaIndustry, FaAward } from "react-icons/fa";

// // Animations: Faster and Smoother
// const fadeInUp = keyframes`
//   0% { opacity: 0; transform: translateY(32px); }
//   100% { opacity: 1; transform: translateY(0); }
// `;

// const float = keyframes`
//   0%, 100% { transform: translateY(0px) rotate(0deg); }
//   50% { transform: translateY(-18px) rotate(3deg); }
// `;

// const typing = keyframes`
//   0% { width: 0; }
//   100% { width: 100%; }
// `;

// const blink = keyframes`
//   50% { border-color: transparent; }
// `;

// // Styled Components with Professional, Medium Font Sizes
// const PageContainer = styled.div`
//   min-height: 100vh;
// `;

// const FadeInElement = styled.div`
//   opacity: 0;
//   animation: ${fadeInUp} 0.45s cubic-bezier(0.23, 1, 0.32, 1) forwards;
//   ${({ delay }) =>
//     delay &&
//     css`
//       animation-delay: ${delay}s;
//     `}
// `;

// const GradientText = styled.span`
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #5b73e8 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   position: relative;
// `;

// const HeroSection = styled.section`
//   position: relative;
//   min-height: 80vh;
//   display: flex;
//   align-items: center;
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #5b73e8 100%);
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>')
//       repeat;
//     animation: ${float} 12s ease-in-out infinite;
//   }
// `;

// const HeroOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.1);
// `;

// const FloatingElement = styled.div`
//   position: absolute;
//   animation: ${float} 5.5s ease-in-out infinite;
//   backdrop-filter: blur(10px);

//   ${({ delay }) =>
//     delay &&
//     css`
//       animation-delay: ${delay}s;
//     `}
// `;

// const FloatingCircle = styled.div`
//   background: rgba(255, 255, 255, 0.2);
//   border-radius: 50%;
//   backdrop-filter: blur(10px);
//   border: 1px solid rgba(255, 255, 255, 0.3);
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 10;
//   text-align: center;
//   color: white;
//   max-width: 70rem;
//   margin: 0 auto;
// `;

// const WelcomeBadge = styled.span`
//   font-size: 1rem;
//   font-weight: 600;
//   opacity: 0.95;
//   letter-spacing: 0.08em;
//   text-transform: uppercase;
//   background: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(10px);
//   padding: 0.4rem 1.2rem;
//   border-radius: 9999px;
//   border: 1px solid rgba(255, 255, 255, 0.2);
// `;

// const HeroTitle = styled.h1`
//   font-size: clamp(2.2rem, 5vw, 3.5rem);
//   font-weight: 700;
//   margin-bottom: 1.5rem;
//   line-height: 1.13;
//   transition: all 0.3s ease;

//   &:hover {
//     text-shadow: 0 0 12px rgba(102, 126, 234, 0.4);
//     transform: scale(1.01);
//   }
// `;

// const TypingText = styled.span`
//   display: inline-block;
//   background: linear-gradient(to right, #ffffff, #dbeafe);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   overflow: hidden;
//   border-right: 2px solid #fff;
//   white-space: nowrap;
//   animation: ${typing} 2.2s steps(30) 0.5s alternate,
//     ${blink} 0.7s step-end infinite alternate;
//   font-size: inherit;
// `;

// const HeroDescription = styled.p`
//   font-size: clamp(1.05rem, 2.1vw, 1.25rem);
//   margin-bottom: 2.5rem;
//   opacity: 0.95;
//   max-width: 48rem;
//   margin-left: auto;
//   margin-right: auto;
//   line-height: 1.6;
//   font-weight: 400;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;
//   justify-content: center;

//   @media (min-width: 640px) {
//     flex-direction: row;
//   }
// `;

// const PortfolioButton = styled(Link)`
//   position: relative;
//   overflow: hidden;
//   padding: 0.85rem 2rem;
//   border-radius: 9999px;
//   font-weight: 600;
//   font-size: 1rem;
//   transition: all 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   backdrop-filter: blur(10px);
//   text-decoration: none;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//       90deg,
//       transparent,
//       rgba(255, 255, 255, 0.22),
//       transparent
//     );
//     transition: left 0.4s ease;
//   }

//   &:hover::before {
//     left: 100%;
//   }

//   &:hover {
//     transform: translateY(-2px) scale(1.01);
//     box-shadow: 0 8px 24px rgba(102, 126, 234, 0.22);
//   }

//   &:active {
//     transform: translateY(-1px) scale(0.98);
//   }
// `;

// const PrimaryButton = styled(PortfolioButton)`
//   background: rgba(255, 255, 255, 0.95);
//   color: #1f2937;
//   box-shadow: 0 10px 24px -8px rgba(0, 0, 0, 0.18);
//   border: 1px solid rgba(255, 255, 255, 0.22);

//   &:hover {
//     background: rgba(255, 255, 255, 1);
//     color: #1f2937;
//   }
// `;

// const SecondaryButton = styled(PortfolioButton)`
//   border: 2px solid rgba(255, 255, 255, 0.7);
//   color: white;

//   &:hover {
//     background: rgba(255, 255, 255, 0.08);
//     color: white;
//   }
// `;

// const AboutSection = styled.section`
//   padding: 3.5rem 0;
//   background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 1px;
//     background: linear-gradient(90deg, #a855f7, #3b82f6, #6366f1);
//   }
// `;

// const Container = styled.div`
//   max-width: 90rem;
//   margin: 0 auto;
//   padding: 0 1.2rem;
// `;

// const SectionHeader = styled.div`
//   text-align: center;
//   margin-bottom: 2.5rem;
// `;

// const SectionTitle = styled.h2`
//   font-size: clamp(1.8rem, 4vw, 2.5rem);
//   font-weight: 700;
//   margin-bottom: 1.2rem;
//   transition: all 0.3s ease;

//   &:hover {
//     text-shadow: 0 0 12px rgba(102, 126, 234, 0.4);
//     transform: scale(1.01);
//   }
// `;

// const SectionDivider = styled.div`
//   width: 5rem;
//   height: 0.25rem;
//   background: linear-gradient(to right, #a855f7, #3b82f6);
//   margin: 0 auto 1.2rem;
//   border-radius: 9999px;
// `;

// const SectionSubtitle = styled.p`
//   font-size: 1.05rem;
//   color: #4b5563;
//   max-width: 38rem;
//   margin: 0 auto;
//   line-height: 1.6;
//   font-weight: 400;
// `;

// const AboutGrid = styled.div`
//   display: grid;
//   gap: 2.2rem;
//   align-items: center;
//   margin-bottom: 2.5rem;

//   @media (min-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// const AboutContent = styled.div`
//   /* No extra spacing, handled by AboutText */
// `;

// const AboutTitle = styled.h3`
//   font-size: 1.45rem;
//   font-weight: 700;
//   margin-bottom: 1.1rem;
//   background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   transition: all 0.3s ease;

//   &:hover {
//     text-shadow: 0 0 12px rgba(102, 126, 234, 0.4);
//     transform: scale(1.01);
//   }
// `;

// const AboutText = styled.p`
//   font-size: 1rem;
//   color: #4b5563;
//   line-height: 1.6;
//   font-weight: 400;
//   margin-bottom: 1rem;
// `;

// const AboutLink = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   color: #2563eb;
//   font-weight: 600;
//   text-decoration: none;
//   transition: all 0.3s ease;
//   margin-top: 0.7rem;

//   &:hover {
//     color: #1d4ed8;

//     svg {
//       transform: translateX(0.18rem);
//     }
//   }

//   svg {
//     margin-left: 0.4rem;
//     width: 1.1rem;
//     height: 1.1rem;
//     transition: transform 0.3s ease;
//   }
// `;

// const MissionCard = styled.div`
//   background: linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #f3e8ff 100%);
//   padding: 1.5rem;
//   border-radius: 1.1rem;
//   box-shadow: 0 10px 24px -8px rgba(0, 0, 0, 0.18);
//   border: 1px solid rgba(59, 130, 246, 0.09);
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: -50%;
//     right: -50%;
//     width: 5rem;
//     height: 5rem;
//     background: linear-gradient(
//       135deg,
//       rgba(59, 130, 246, 0.08) 0%,
//       rgba(168, 85, 247, 0.08) 100%
//     );
//     border-radius: 50%;
//     transform: translate(2.5rem, -2.5rem);
//   }
// `;

// const MissionTitle = styled.h4`
//   font-size: 1.15rem;
//   font-weight: 700;
//   margin-bottom: 1rem;
//   position: relative;
//   transition: all 0.3s ease;

//   &:hover {
//     text-shadow: 0 0 12px rgba(102, 126, 234, 0.4);
//     transform: scale(1.01);
//   }
// `;

// const MissionText = styled.p`
//   color: #374151;
//   line-height: 1.6;
//   font-size: 1rem;
//   font-weight: 400;
// `;

// const StatsGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 1.2rem;

//   @media (min-width: 640px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(4, 1fr);
//   }
// `;

// const StatCard = styled.div`
//   background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
//   border-radius: 1.1rem;
//   box-shadow: 0 4px 16px rgba(102, 126, 234, 0.08);
//   padding: 1.5rem 1.1rem;
//   text-align: center;
//   transition: all 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   border: 1px solid rgba(102, 126, 234, 0.07);
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: -50%;
//     left: -50%;
//     width: 200%;
//     height: 200%;
//     background: linear-gradient(
//       45deg,
//       transparent 30%,
//       rgba(102, 126, 234, 0.02) 50%,
//       transparent 70%
//     );
//     transition: transform 0.4s ease;
//     transform: rotate(-45deg) translate(-100%, -100%);
//   }

//   &:hover::before {
//     transform: rotate(-45deg) translate(0%, 0%);
//   }

//   &:hover {
//     transform: translateY(-4px) scale(1.03);
//     box-shadow: 0 10px 32px rgba(102, 126, 234, 0.13);
//     border-color: rgba(102, 126, 234, 0.18);
//     background: linear-gradient(145deg, #ffffff 0%, #fafbff 100%);
//   }
// `;

// const StatIcon = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 1rem;

//   span {
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     width: 2.5rem;
//     height: 2.5rem;
//     border-radius: 0.7rem;
//     box-shadow: 0 4px 12px -3px rgba(0, 0, 0, 0.08);
//   }
// `;

// const StatValue = styled.div`
//   font-size: 1.45rem;
//   font-weight: 700;
//   background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   margin-bottom: 0.3rem;
//   transition: transform 0.3s ease;

//   .stat-card:hover & {
//     transform: scale(1.07);
//   }
// `;

// const StatLabel = styled.div`
//   color: #4b5563;
//   font-size: 1rem;
//   font-weight: 500;
// `;

// const SectionDividerLine = styled.div`
//   height: 1px;
//   background: linear-gradient(
//     90deg,
//     transparent 0%,
//     rgba(102, 126, 234, 0.18) 50%,
//     transparent 100%
//   );
//   margin: 2.5rem 0;
// `;

// const IndustriesSection = styled.section`
//   padding: 3.5rem 0;
//   background: white;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 1.2rem;
//     right: 1.2rem;
//     width: 8rem;
//     height: 8rem;
//     background: linear-gradient(135deg, #dbeafe 0%, #f3e8ff 100%);
//     border-radius: 50%;
//     opacity: 0.18;
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     bottom: 1.2rem;
//     left: 1.2rem;
//     width: 6rem;
//     height: 6rem;
//     background: linear-gradient(135deg, #f3e8ff 0%, #e0e7ff 100%);
//     border-radius: 50%;
//     opacity: 0.13;
//   }
// `;

// const IndustriesGrid = styled.div`
//   display: grid;
//   gap: 1.2rem;
//   margin-bottom: 2.5rem;

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (min-width: 1024px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
// `;

// const IndustryCard = styled.div`
//   background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
//   border: 1px solid #e2e8f0;
//   border-radius: 1.1rem;
//   padding: 1.5rem;
//   transition: all 0.32s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//       90deg,
//       transparent,
//       rgba(102, 126, 234, 0.06),
//       transparent
//     );
//     transition: left 0.32s ease;
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 2px;
//     background: linear-gradient(90deg, #667eea, #764ba2);
//     transform: scaleX(0);
//     transition: transform 0.32s ease;
//     transform-origin: left;
//   }

//   &:hover::before {
//     left: 100%;
//   }

//   &:hover::after {
//     transform: scaleX(1);
//   }

//   &:hover {
//     transform: translateY(-5px) scale(1.01);
//     box-shadow: 0 8px 20px rgba(102, 126, 234, 0.13);
//     border-color: #667eea;
//     background: linear-gradient(145deg, #ffffff 0%, #fafbff 100%);
//   }
// `;

// const IndustryTitle = styled.h3`
//   font-size: 1.1rem;
//   font-weight: 700;
//   margin-bottom: 1rem;
//   transition: transform 0.3s ease;

//   .industry-card:hover & {
//     transform: scale(1.03);
//   }
// `;

// const IndustryDescription = styled.p`
//   color: #4b5563;
//   margin-bottom: 1.2rem;
//   line-height: 1.6;
//   font-weight: 400;
//   font-size: 1rem;
// `;

// const IndustryLink = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   color: #2563eb;
//   font-weight: 600;
//   text-decoration: none;
//   transition: all 0.3s ease;

//   &:hover {
//     color: #1d4ed8;
//     transform: translateX(0.18rem);
//   }

//   svg {
//     margin-left: 0.4rem;
//     width: 1.1rem;
//     height: 1.1rem;
//     transition: transform 0.3s ease;
//   }

//   &:hover svg {
//     transform: translateX(0.18rem);
//   }
// `;

// const CTASection = styled.section`
//   padding: 3.5rem 0;
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #5b73e8 100%);
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     inset: 0;
//     background: rgba(0, 0, 0, 0.03);
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="60" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>')
//       repeat;
//     opacity: 0.13;
//   }
// `;

// const CTAContent = styled.div`
//   text-align: center;
//   position: relative;
//   z-index: 10;
//   max-width: 70rem;
//   margin: 0 auto;
//   color: white;
// `;

// const CTATitle = styled.h2`
//   font-size: clamp(1.8rem, 4vw, 2.5rem);
//   font-weight: 700;
//   margin-bottom: 1.2rem;
//   transition: all 0.3s ease;

//   &:hover {
//     text-shadow: 0 0 12px rgba(102, 126, 234, 0.4);
//     transform: scale(1.01);
//   }
// `;

// const CTADescription = styled.p`
//   font-size: 1.15rem;
//   margin-bottom: 2rem;
//   opacity: 0.95;
//   font-weight: 400;
//   line-height: 1.6;
// `;

// // Animation delays: faster
// const fadeInVariants = [
//   { delay: 0 },
//   { delay: 0.08 },
//   { delay: 0.16 },
//   { delay: 0.24 },
// ];

// const companyStats = [
//   {
//     label: "Clients",
//     value: "120+",
//     icon: (
//       <StatIcon>
//         <span className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/30">
//           <FaUsers className="text-blue-600 text-2xl" />
//         </span>
//       </StatIcon>
//     ),
//   },
//   {
//     label: "Projects",
//     value: "200+",
//     icon: (
//       <StatIcon>
//         <span className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/30">
//           <FaProjectDiagram className="text-purple-600 text-2xl" />
//         </span>
//       </StatIcon>
//     ),
//   },
//   {
//     label: "Industries",
//     value: "10+",
//     icon: (
//       <StatIcon>
//         <span className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200/30">
//           <FaIndustry className="text-indigo-600 text-2xl" />
//         </span>
//       </StatIcon>
//     ),
//   },
//   {
//     label: "Years Experience",
//     value: "8+",
//     icon: (
//       <StatIcon>
//         <span className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200/30">
//           <FaAward className="text-pink-600 text-2xl" />
//         </span>
//       </StatIcon>
//     ),
//   },
// ];

// const Home = () => {
//   const heroRef = useRef(null);
//   const aboutRef = useRef(null);
//   const industriesRef = useRef(null);

//   useEffect(() => {
//     // Animation: much faster and more responsive
//     const fadeInSection = (ref) => {
//       if (!ref.current) return;
//       const section = ref.current;
//       section.classList.add("opacity-0", "translate-y-8");
//       setTimeout(() => {
//         section.classList.add("transition-all", "duration-400", "ease-out");
//         section.classList.remove("opacity-0", "translate-y-8");
//         section.classList.add("opacity-100", "translate-y-0");
//       }, 40);
//     };
//     fadeInSection(heroRef);
//     setTimeout(() => fadeInSection(aboutRef), 120);
//     setTimeout(() => fadeInSection(industriesRef), 220);
//   }, []);

//   return (
//     <PageContainer>
//       {/* Hero Section */}
//       <HeroSection ref={heroRef}>
//         <HeroOverlay />

//         {/* Floating Elements */}
//         <FloatingElement style={{ top: "3rem", left: "1.5rem", opacity: 0.22 }}>
//           <FloatingCircle style={{ width: "3.5rem", height: "3.5rem" }} />
//         </FloatingElement>
//         <FloatingElement
//           delay={1.2}
//           style={{ top: "7rem", right: "2.5rem", opacity: 0.16 }}
//         >
//           <FloatingCircle style={{ width: "4.5rem", height: "4.5rem" }} />
//         </FloatingElement>
//         <FloatingElement
//           delay={2.2}
//           style={{ bottom: "6rem", left: "2.5rem", opacity: 0.19 }}
//         >
//           <FloatingCircle style={{ width: "2.5rem", height: "2.5rem" }} />
//         </FloatingElement>
//         <FloatingElement
//           delay={3.1}
//           style={{ top: "50%", right: "1.5rem", opacity: 0.13 }}
//         >
//           <FloatingCircle style={{ width: "2rem", height: "2rem" }} />
//         </FloatingElement>

//         <Container>
//           <HeroContent>
//             <FadeInElement
//               delay={fadeInVariants[0].delay}
//               style={{ marginBottom: "1.2rem" }}
//             >
//               <WelcomeBadge>Welcome to Logics Bay</WelcomeBadge>
//             </FadeInElement>

//             <FadeInElement delay={fadeInVariants[1].delay}>
//               <HeroTitle>
//                 We Create
//                 <br />
//                 <TypingText>Digital Excellence</TypingText>
//               </HeroTitle>
//             </FadeInElement>

//             <FadeInElement delay={fadeInVariants[2].delay}>
//               <HeroDescription>
//                 A premium software development company crafting innovative
//                 solutions that transform businesses and create meaningful user
//                 experiences through cutting-edge technology.
//               </HeroDescription>
//             </FadeInElement>

//             <FadeInElement delay={fadeInVariants[3].delay}>
//               <ButtonContainer>
//                 <PrimaryButton to="/projects">View Our Projects</PrimaryButton>
//                 <SecondaryButton to="/contact">
//                   Start Your Project
//                 </SecondaryButton>
//               </ButtonContainer>
//             </FadeInElement>
//           </HeroContent>
//         </Container>
//       </HeroSection>

//       {/* About Logics Bay Section with Stats */}
//       <AboutSection ref={aboutRef}>
//         <Container>
//           <SectionHeader>
//             <FadeInElement delay={fadeInVariants[0].delay}>
//               <SectionTitle>
//                 <GradientText>About Logics Bay</GradientText>
//               </SectionTitle>
//               <SectionDivider />
//               <SectionSubtitle>
//                 Transforming digital landscapes with innovative solutions
//               </SectionSubtitle>
//             </FadeInElement>
//           </SectionHeader>

//           <AboutGrid>
//             <FadeInElement delay={fadeInVariants[1].delay}>
//               <AboutContent>
//                 <AboutTitle>Transforming Ideas Into Reality</AboutTitle>
//                 <AboutText>
//                   We are a passionate team of developers, designers, and
//                   strategists who believe in the power of technology to solve
//                   complex business challenges. Our portfolio spans across
//                   multiple industries, creating solutions that matter.
//                 </AboutText>
//                 <AboutText>
//                   From startups to enterprise-level organizations, we partner
//                   with our clients to deliver exceptional digital experiences
//                   that drive growth and innovation.
//                 </AboutText>
//                 {/* <AboutLink to="/about">
//                   Learn More About Us
//                   <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </AboutLink> */}
//               </AboutContent>
//             </FadeInElement>

//             <FadeInElement delay={fadeInVariants[2].delay}>
//               <MissionCard>
//                 <MissionTitle>
//                   <GradientText>Our Mission</GradientText>
//                 </MissionTitle>
//                 <MissionText>
//                   To deliver exceptional digital solutions that empower
//                   businesses to achieve their goals through innovative
//                   technology and thoughtful design.
//                 </MissionText>
//               </MissionCard>
//             </FadeInElement>
//           </AboutGrid>

//           {/* Stats Cards */}
//           <StatsGrid>
//             {companyStats.map((stat, idx) => (
//               <FadeInElement
//                 key={stat.label}
//                 delay={fadeInVariants[idx % fadeInVariants.length].delay}
//               >
//                 <StatCard className="stat-card group">
//                   <div style={{ position: "relative" }}>
//                     {stat.icon}
//                     <StatValue className="group-hover:scale-110 transition-transform duration-300">
//                       {stat.value}
//                     </StatValue>
//                     <StatLabel>{stat.label}</StatLabel>
//                   </div>
//                 </StatCard>
//               </FadeInElement>
//             ))}
//           </StatsGrid>
//         </Container>
//       </AboutSection>

//       <SectionDividerLine />

//       {/* Industries Section */}
//       <IndustriesSection ref={industriesRef}>
//         <Container style={{ position: "relative" }}>
//           <SectionHeader>
//             <FadeInElement delay={fadeInVariants[0].delay}>
//               <SectionTitle>
//                 <GradientText>Industries We Serve</GradientText>
//               </SectionTitle>
//               <SectionDivider />
//               <SectionSubtitle>
//                 Our diverse portfolio spans across multiple sectors, delivering
//                 tailored solutions for each industry's unique challenges with
//                 precision and innovation
//               </SectionSubtitle>
//             </FadeInElement>
//           </SectionHeader>

//           <IndustriesGrid>
//             {industries.slice(0, 6).map((industry, idx) => (
//               <FadeInElement
//                 key={industry.id}
//                 delay={fadeInVariants[idx % fadeInVariants.length].delay}
//               >
//                 <IndustryCard className="industry-card group">
//                   <div style={{ position: "relative" }}>
//                     <IndustryTitle className="group-hover:scale-105 transition-transform duration-300">
//                       <GradientText>{industry.name}</GradientText>
//                     </IndustryTitle>
//                     <IndustryDescription>
//                       {industry.description}
//                     </IndustryDescription>
//                     <IndustryLink to={`/industries#${industry.id}`}>
//                       Explore Projects
//                       <svg
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                     </IndustryLink>
//                   </div>
//                 </IndustryCard>
//               </FadeInElement>
//             ))}
//           </IndustriesGrid>

//           <FadeInElement
//             delay={fadeInVariants[3].delay}
//             style={{ textAlign: "center" }}
//           >
//             <PortfolioButton
//               to="/industries"
//               style={{
//                 background:
//                   "linear-gradient(to right, #2563eb, #9333ea, #4f46e5)",
//                 color: "white",
//                 boxShadow: "0 10px 24px -8px rgba(0, 0, 0, 0.18)",
//                 padding: "0.85rem 2.2rem",
//                 fontSize: "1rem",
//               }}
//             >
//               View All Industries
//             </PortfolioButton>
//           </FadeInElement>
//         </Container>
//       </IndustriesSection>

//       {/* CTA Section */}
//       <CTASection>
//         <Container>
//           <CTAContent>
//             <CTATitle>Ready to Start Your Project?</CTATitle>
//             <CTADescription>
//               Let's discuss how we can help transform your business with
//               innovative digital solutions that drive real results
//             </CTADescription>
//             <ButtonContainer>
//               <PrimaryButton to="/contact">Get In Touch</PrimaryButton>
//               <SecondaryButton to="/projects">View Our Work</SecondaryButton>
//             </ButtonContainer>
//           </CTAContent>
//         </Container>
//       </CTASection>
//     </PageContainer>
//   );
// };

// export default Home;

import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { industries } from "../data/projects";
import { FaUsers, FaProjectDiagram, FaIndustry, FaAward } from "react-icons/fa";

// Animations: Faster and Smoother
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(32px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-18px) rotate(3deg); }
`;

const typing = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

// New Work-in-Progress Animations
const slideAcross = keyframes`
  0% { transform: translateX(-100px) translateY(0px); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateX(calc(100vw + 100px)) translateY(-20px); opacity: 0; }
`;

const pulseCode = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const dataFlow = keyframes`
  0% { transform: translateX(-50px); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateX(300px); opacity: 0; }
`;

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const bounceWork = keyframes`
  0%, 100% { transform: translateY(0px); }
  25% { transform: translateY(-15px); }
  50% { transform: translateY(-25px); }
  75% { transform: translateY(-10px); }
`;

const progressBar = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

// Styled Components with Professional, Medium Font Sizes
const PageContainer = styled.div`
  min-height: 100vh;
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

const GradientText = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #5b73e8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #5b73e8 100%);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="60" r="1" fill="rgba(255,255,255,0.1)"/></svg>')
      repeat;
    animation: ${float} 12s ease-in-out infinite;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
`;

// Work Animation Elements
const WorkAnimationContainer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 5;
`;

const CodeBlock = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 8px 12px;
  font-family: "Courier New", monospace;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  animation: ${pulseCode} 3s ease-in-out infinite;

  &:nth-child(1) {
    top: 15%;
    left: 10%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    top: 25%;
    right: 15%;
    animation-delay: 1s;
  }

  &:nth-child(3) {
    bottom: 30%;
    left: 8%;
    animation-delay: 2s;
  }
`;

const DataPacket = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: ${dataFlow} 4s linear infinite;

  &:nth-child(4) {
    top: 20%;
    animation-delay: 0s;
  }

  &:nth-child(5) {
    top: 35%;
    animation-delay: 1s;
  }

  &:nth-child(6) {
    top: 50%;
    animation-delay: 2s;
  }

  &:nth-child(7) {
    top: 65%;
    animation-delay: 3s;
  }
`;

const WorkIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  animation: ${slideAcross} 8s linear infinite;

  &:nth-child(8) {
    top: 10%;
    animation-delay: 0s;
  }

  &:nth-child(9) {
    top: 40%;
    animation-delay: 2s;
  }

  &:nth-child(10) {
    top: 70%;
    animation-delay: 4s;
  }
`;

const ProgressIndicator = styled.div`
  position: absolute;
  bottom: 20%;
  right: 10%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 12px;
  width: 120px;
  animation: ${bounceWork} 2s ease-in-out infinite;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 6px;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #00ff88, #00ccff);
  border-radius: 2px;
  animation: ${progressBar} 3s ease-in-out infinite;
`;

const ProgressText = styled.div`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-family: "Courier New", monospace;
`;

const GearIcon = styled.div`
  position: absolute;
  top: 60%;
  left: 5%;
  width: 30px;
  height: 30px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  animation: ${rotate360} 4s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  animation: ${float} 5.5s ease-in-out infinite;
  backdrop-filter: blur(10px);

  ${({ delay }) =>
    delay &&
    css`
      animation-delay: ${delay}s;
    `}
`;

const FloatingCircle = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 70rem;
  margin: 0 auto;
`;

const WelcomeBadge = styled.span`
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.95;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.4rem 1.2rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.13;
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 0 0 12px rgba(102, 126, 234, 0.4);
    transform: scale(1.01);
  }
`;

const TypingText = styled.span`
  display: inline-block;
  background: linear-gradient(to right, #ffffff, #dbeafe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  overflow: hidden;
  border-right: 2px solid #fff;
  white-space: nowrap;
  animation: ${typing} 2.2s steps(30) 0.5s alternate,
    ${blink} 0.7s step-end infinite alternate;
  font-size: inherit;
`;

const HeroDescription = styled.p`
  font-size: clamp(1.05rem, 2.1vw, 1.25rem);
  margin-bottom: 2.5rem;
  opacity: 0.95;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  font-weight: 400;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PortfolioButton = styled(Link)`
  position: relative;
  overflow: hidden;
  padding: 0.85rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(10px);
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.22),
      transparent
    );
    transition: left 0.4s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.22);
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }
`;

const PrimaryButton = styled(PortfolioButton)`
  background: rgba(255, 255, 255, 0.95);
  color: #1f2937;
  box-shadow: 0 10px 24px -8px rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.22);

  &:hover {
    background: rgba(255, 255, 255, 1);
    color: #1f2937;
  }
`;

const SecondaryButton = styled(PortfolioButton)`
  border: 2px solid rgba(255, 255, 255, 0.7);
  color: white;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: white;
  }
`;

const AboutSection = styled.section`
  padding: 3.5rem 0;
  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #a855f7, #3b82f6, #6366f1);
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

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1.2rem;
  transition: all 0.3s ease;

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
  font-size: 1.05rem;
  color: #4b5563;
  max-width: 38rem;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
`;

const AboutGrid = styled.div`
  display: grid;
  gap: 2.2rem;
  align-items: center;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutContent = styled.div`
  /* No extra spacing, handled by AboutText */
`;

const AboutTitle = styled.h3`
  font-size: 1.45rem;
  font-weight: 700;
  margin-bottom: 1.1rem;
  background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 0 0 12px rgba(102, 126, 234, 0.4);
    transform: scale(1.01);
  }
`;

const AboutText = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.6;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const AboutLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 0.7rem;

  &:hover {
    color: #1d4ed8;

    svg {
      transform: translateX(0.18rem);
    }
  }

  svg {
    margin-left: 0.4rem;
    width: 1.1rem;
    height: 1.1rem;
    transition: transform 0.3s ease;
  }
`;

const MissionCard = styled.div`
  background: linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #f3e8ff 100%);
  padding: 1.5rem;
  border-radius: 1.1rem;
  box-shadow: 0 10px 24px -8px rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(59, 130, 246, 0.09);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 5rem;
    height: 5rem;
    background: linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.08) 0%,
      rgba(168, 85, 247, 0.08) 100%
    );
    border-radius: 50%;
    transform: translate(2.5rem, -2.5rem);
  }
`;

const MissionTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 0 0 12px rgba(102, 126, 234, 0.4);
    transform: scale(1.01);
  }
`;

const MissionText = styled.p`
  color: #374151;
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 400;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 1.1rem;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.08);
  padding: 1.5rem 1.1rem;
  text-align: center;
  transition: all 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(102, 126, 234, 0.07);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(102, 126, 234, 0.02) 50%,
      transparent 70%
    );
    transition: transform 0.4s ease;
    transform: rotate(-45deg) translate(-100%, -100%);
  }

  &:hover::before {
    transform: rotate(-45deg) translate(0%, 0%);
  }

  &:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 10px 32px rgba(102, 126, 234, 0.13);
    border-color: rgba(102, 126, 234, 0.18);
    background: linear-gradient(145deg, #ffffff 0%, #fafbff 100%);
  }
`;

const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.7rem;
    box-shadow: 0 4px 12px -3px rgba(0, 0, 0, 0.08);
  }
`;

const StatValue = styled.div`
  font-size: 1.45rem;
  font-weight: 700;
  background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.3rem;
  transition: transform 0.3s ease;

  .stat-card:hover & {
    transform: scale(1.07);
  }
`;

const StatLabel = styled.div`
  color: #4b5563;
  font-size: 1rem;
  font-weight: 500;
`;

const SectionDividerLine = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(102, 126, 234, 0.18) 50%,
    transparent 100%
  );
  margin: 2.5rem 0;
`;

const IndustriesSection = styled.section`
  padding: 3.5rem 0;
  background: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    width: 8rem;
    height: 8rem;
    background: linear-gradient(135deg, #dbeafe 0%, #f3e8ff 100%);
    border-radius: 50%;
    opacity: 0.18;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 1.2rem;
    left: 1.2rem;
    width: 6rem;
    height: 6rem;
    background: linear-gradient(135deg, #f3e8ff 0%, #e0e7ff 100%);
    border-radius: 50%;
    opacity: 0.13;
  }
`;

const IndustriesGrid = styled.div`
  display: grid;
  gap: 1.2rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const IndustryCard = styled.div`
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  border-radius: 1.1rem;
  padding: 1.5rem;
  transition: all 0.32s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(102, 126, 234, 0.06),
      transparent
    );
    transition: left 0.32s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transform: scaleX(0);
    transition: transform 0.32s ease;
    transform-origin: left;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.13);
    border-color: #667eea;
    background: linear-gradient(145deg, #ffffff 0%, #fafbff 100%);
  }
`;

const IndustryTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  .industry-card:hover & {
    transform: scale(1.03);
  }
`;

const IndustryDescription = styled.p`
  color: #4b5563;
  margin-bottom: 1.2rem;
  line-height: 1.6;
  font-weight: 400;
  font-size: 1rem;
`;

const IndustryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #1d4ed8;
    transform: translateX(0.18rem);
  }

  svg {
    margin-left: 0.4rem;
    width: 1.1rem;
    height: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(0.18rem);
  }
`;

const CTASection = styled.section`
  padding: 3.5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #5b73e8 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.03);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="60" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>')
      repeat;
    opacity: 0.13;
  }
`;

const CTAContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 10;
  max-width: 70rem;
  margin: 0 auto;
  color: white;
`;

const CTATitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 0 0 12px rgba(102, 126, 234, 0.4);
    transform: scale(1.01);
  }
`;

const CTADescription = styled.p`
  font-size: 1.15rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  font-weight: 400;
  line-height: 1.6;
`;

// Animation delays: faster
const fadeInVariants = [
  { delay: 0 },
  { delay: 0.08 },
  { delay: 0.16 },
  { delay: 0.24 },
];

const companyStats = [
  {
    label: "Clients",
    value: "120+",
    icon: (
      <StatIcon>
        <span className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/30">
          <FaUsers className="text-blue-600 text-2xl" />
        </span>
      </StatIcon>
    ),
  },
  {
    label: "Projects",
    value: "200+",
    icon: (
      <StatIcon>
        <span className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/30">
          <FaProjectDiagram className="text-purple-600 text-2xl" />
        </span>
      </StatIcon>
    ),
  },
  {
    label: "Industries",
    value: "8+",
    icon: (
      <StatIcon>
        <span className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200/30">
          <FaIndustry className="text-indigo-600 text-2xl" />
        </span>
      </StatIcon>
    ),
  },
  {
    label: "Years Experience",
    value: "8+",
    icon: (
      <StatIcon>
        <span className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200/30">
          <FaAward className="text-pink-600 text-2xl" />
        </span>
      </StatIcon>
    ),
  },
];

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const industriesRef = useRef(null);

  useEffect(() => {
    // Animation: much faster and more responsive
    const fadeInSection = (ref) => {
      if (!ref.current) return;
      const section = ref.current;
      section.classList.add("opacity-0", "translate-y-8");
      setTimeout(() => {
        section.classList.add("transition-all", "duration-400", "ease-out");
        section.classList.remove("opacity-0", "translate-y-8");
        section.classList.add("opacity-100", "translate-y-0");
      }, 40);
    };
    fadeInSection(heroRef);
    setTimeout(() => fadeInSection(aboutRef), 120);
    setTimeout(() => fadeInSection(industriesRef), 220);
  }, []);

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection ref={heroRef}>
        <HeroOverlay />

        {/* Work Animation Container */}
        <WorkAnimationContainer>
          {/* Code Blocks */}
          <CodeBlock>
            {`function build() {`}
            <br />
            {`  return success;`}
            <br />
            {`}`}
          </CodeBlock>
          <CodeBlock>
            {`const app = new`}
            <br />
            {`Project();`}
            <br />
            {`app.deploy();`}
          </CodeBlock>
          <CodeBlock>
            {`database.query(`}
            <br />
            {`  "SELECT * FROM"`}
            <br />
            {`);`}
          </CodeBlock>

          {/* Data Flow Packets */}
          <DataPacket />
          <DataPacket />
          <DataPacket />
          <DataPacket />

          {/* Moving Work Icons */}
          <WorkIcon>
            <span style={{ fontSize: "16px" }}>⚡</span>
          </WorkIcon>
          <WorkIcon>
            <span style={{ fontSize: "16px" }}>🔧</span>
          </WorkIcon>
          <WorkIcon>
            <span style={{ fontSize: "16px" }}>📊</span>
          </WorkIcon>

          {/* Progress Indicator */}
          <ProgressIndicator>
            <ProgressBarContainer>
              <ProgressBarFill />
            </ProgressBarContainer>
            <ProgressText>Building Project...</ProgressText>
          </ProgressIndicator>

          {/* Rotating Gear */}
          <GearIcon />
        </WorkAnimationContainer>

        {/* Floating Elements */}
        <FloatingElement style={{ top: "3rem", left: "1.5rem", opacity: 0.22 }}>
          <FloatingCircle style={{ width: "3.5rem", height: "3.5rem" }} />
        </FloatingElement>
        <FloatingElement
          delay={1.2}
          style={{ top: "7rem", right: "2.5rem", opacity: 0.16 }}
        >
          <FloatingCircle style={{ width: "4.5rem", height: "4.5rem" }} />
        </FloatingElement>
        <FloatingElement
          delay={2.2}
          style={{ bottom: "6rem", left: "2.5rem", opacity: 0.19 }}
        >
          <FloatingCircle style={{ width: "2.5rem", height: "2.5rem" }} />
        </FloatingElement>
        <FloatingElement
          delay={3.1}
          style={{ top: "50%", right: "1.5rem", opacity: 0.13 }}
        >
          <FloatingCircle style={{ width: "2rem", height: "2rem" }} />
        </FloatingElement>

        <Container>
          <HeroContent>
            <FadeInElement
              delay={fadeInVariants[0].delay}
              style={{ marginBottom: "1.2rem" }}
            >
              <WelcomeBadge>Welcome to Logics Bay</WelcomeBadge>
            </FadeInElement>

            <FadeInElement delay={fadeInVariants[1].delay}>
              <HeroTitle>
                We Create
                <br />
                <TypingText>Digital Excellence</TypingText>
              </HeroTitle>
            </FadeInElement>

            <FadeInElement delay={fadeInVariants[2].delay}>
              <HeroDescription>
                A premium software development company crafting innovative
                solutions that transform businesses and create meaningful user
                experiences through cutting-edge technology.
              </HeroDescription>
            </FadeInElement>

            <FadeInElement delay={fadeInVariants[3].delay}>
              <ButtonContainer>
                <PrimaryButton to="/projects">View Our Projects</PrimaryButton>
                <SecondaryButton to="/contact">
                  Start Your Project
                </SecondaryButton>
              </ButtonContainer>
            </FadeInElement>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* About Logics Bay Section with Stats */}
      <AboutSection ref={aboutRef}>
        <Container>
          <SectionHeader>
            <FadeInElement delay={fadeInVariants[0].delay}>
              <SectionTitle>
                <GradientText>About Logics Bay</GradientText>
              </SectionTitle>
              <SectionDivider />
              <SectionSubtitle>
                Transforming digital landscapes with innovative solutions
              </SectionSubtitle>
            </FadeInElement>
          </SectionHeader>

          <AboutGrid>
            <FadeInElement delay={fadeInVariants[1].delay}>
              <AboutContent>
                <AboutTitle>Transforming Ideas Into Reality</AboutTitle>
                <AboutText>
                  We are a passionate team of developers, designers, and
                  strategists who believe in the power of technology to solve
                  complex business challenges. Our portfolio spans across
                  multiple industries, creating solutions that matter.
                </AboutText>
                <AboutText>
                  From startups to enterprise-level organizations, we partner
                  with our clients to deliver exceptional digital experiences
                  that drive growth and innovation.
                </AboutText>
              </AboutContent>
            </FadeInElement>

            <FadeInElement delay={fadeInVariants[2].delay}>
              <MissionCard>
                <MissionTitle>
                  <GradientText>Our Mission</GradientText>
                </MissionTitle>
                <MissionText>
                  To deliver exceptional digital solutions that empower
                  businesses to achieve their goals through innovative
                  technology and thoughtful design.
                </MissionText>
              </MissionCard>
            </FadeInElement>
          </AboutGrid>

          {/* Stats Cards */}
          <StatsGrid>
            {companyStats.map((stat, idx) => (
              <FadeInElement
                key={stat.label}
                delay={fadeInVariants[idx % fadeInVariants.length].delay}
              >
                <StatCard className="stat-card group">
                  <div style={{ position: "relative" }}>
                    {stat.icon}
                    <StatValue className="group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </StatValue>
                    <StatLabel>{stat.label}</StatLabel>
                  </div>
                </StatCard>
              </FadeInElement>
            ))}
          </StatsGrid>
        </Container>
      </AboutSection>

      <SectionDividerLine />

      {/* Industries Section */}
      <IndustriesSection ref={industriesRef}>
        <Container style={{ position: "relative" }}>
          <SectionHeader>
            <FadeInElement delay={fadeInVariants[0].delay}>
              <SectionTitle>
                <GradientText>Industries We Serve</GradientText>
              </SectionTitle>
              <SectionDivider />
              <SectionSubtitle>
                Our diverse portfolio spans across multiple sectors, delivering
                tailored solutions for each industry's unique challenges with
                precision and innovation
              </SectionSubtitle>
            </FadeInElement>
          </SectionHeader>

          <IndustriesGrid>
            {industries.slice(0, 6).map((industry, idx) => (
              <FadeInElement
                key={industry.id}
                delay={fadeInVariants[idx % fadeInVariants.length].delay}
              >
                <IndustryCard className="industry-card group">
                  <div style={{ position: "relative" }}>
                    <IndustryTitle className="group-hover:scale-105 transition-transform duration-300">
                      <GradientText>{industry.name}</GradientText>
                    </IndustryTitle>
                    <IndustryDescription>
                      {industry.description}
                    </IndustryDescription>
                    <IndustryLink to={`/industries#${industry.id}`}>
                      Explore Projects
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </IndustryLink>
                  </div>
                </IndustryCard>
              </FadeInElement>
            ))}
          </IndustriesGrid>

          <FadeInElement
            delay={fadeInVariants[3].delay}
            style={{ textAlign: "center" }}
          >
            <PortfolioButton
              to="/industries"
              style={{
                background:
                  "linear-gradient(to right, #2563eb, #9333ea, #4f46e5)",
                color: "white",
                boxShadow: "0 10px 24px -8px rgba(0, 0, 0, 0.18)",
                padding: "0.85rem 2.2rem",
                fontSize: "1rem",
              }}
            >
              View All Industries
            </PortfolioButton>
          </FadeInElement>
        </Container>
      </IndustriesSection>

      {/* CTA Section */}
      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle>Ready to Start Your Project?</CTATitle>
            <CTADescription>
              Let's discuss how we can help transform your business with
              innovative digital solutions that drive real results
            </CTADescription>
            <ButtonContainer>
              <PrimaryButton to="/contact">Get In Touch</PrimaryButton>
              <SecondaryButton to="/projects">View Our Work</SecondaryButton>
            </ButtonContainer>
          </CTAContent>
        </Container>
      </CTASection>
    </PageContainer>
  );
};

export default Home;
