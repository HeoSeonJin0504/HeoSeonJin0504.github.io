import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import type { Project } from "../types";

const Card = styled.div<{ $delay: number }>`
  background-color: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: ${props => props.$delay}s;
  opacity: 0.3;
  box-shadow: 0 2px 8px var(--color-shadow);
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, var(--color-accent), var(--color-accent-hover));
    opacity: 0;
    transition: opacity var(--transition-base);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px var(--color-shadow);
    border-color: var(--color-accent);

    &::before { opacity: 1; }
  }

  /* 모바일: hover 효과 제거 (터치 디바이스) */
  @media (hover: none) {
    &:active {
      transform: scale(0.98);
      box-shadow: 0 2px 8px var(--color-shadow);
    }
    &:hover {
      transform: none;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-elevated) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: 480px) {
    height: 220px;
  }

  @media (min-width: 768px) {
    height: 240px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--color-border), transparent);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform var(--transition-slow);

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const PlaceholderText = styled.div`
  color: var(--color-text-muted);
  font-size: 0.875rem;
`;

const Content = styled.div`
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.625rem;
  color: var(--color-text-primary);

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.875rem;
  line-height: 1.6;
  word-break: keep-all;

  @media (min-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
`;

const Section = styled.div`
  margin-bottom: 0.875rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const SectionTitle = styled.h4`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.2rem;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

const SectionText = styled.p`
  font-size: 0.825rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  word-break: keep-all;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
  margin-top: auto;

  @media (min-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

const TechBadge = styled.span`
  padding: 0.2rem 0.625rem;
  background-color: var(--color-accent-light);
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  color: var(--color-accent);
  font-weight: 500;

  @media (min-width: 768px) {
    padding: 0.25rem 0.75rem;
    font-size: 0.8rem;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 0.75rem;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.875rem;
  background-color: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: all var(--transition-base);
  min-height: 40px; /* 모바일 터치 영역 */

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  @media (min-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    gap: 0.5rem;
  }
`;

const LinkIcon = styled.svg`
  width: 0.9rem;
  height: 0.9rem;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 1rem;
    height: 1rem;
  }
`;

const VisitLink = styled(Link)`
  background-color: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.5);
  color: #10b981;

  &:hover {
    background-color: rgba(16, 185, 129, 0.18);
    border-color: #10b981;
    color: #10b981;
  }
`;

const SoloBadge = styled.span`
  font-size: 0.825rem;
  color: #d97706;
  font-weight: 500;
  line-height: 1.6;
`;

const TestAccountBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.875rem;
  padding: 0.5rem 0.75rem;
  background-color: rgba(234, 179, 8, 0.08);
  border: 1px dashed rgba(234, 179, 8, 0.5);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  color: #92400e;
  font-weight: 500;
  width: fit-content;
`;

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [imageError, setImageError] = React.useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    window.scrollTo(0, 0);
    navigate(`/project/${project.id}`);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Card $delay={index * 0.2} onClick={handleCardClick}>
      <ImageContainer>
        {!imageError ? (
          <Image
            src={project.imageUrls[0]}
            alt={project.title}
            onError={() => setImageError(true)}
          />
        ) : (
          <PlaceholderText>이미지 준비 중</PlaceholderText>
        )}
      </ImageContainer>
      <Content>
        <ProjectTitle>{project.title}</ProjectTitle>
        <Description>{project.description}</Description>

        {project.details && (
          <Section>
            <SectionTitle>상세 설명</SectionTitle>
            <SectionText>{project.details}</SectionText>
          </Section>
        )}

        {project.teamSize && (
          <Section>
            <SectionTitle>팀 규모</SectionTitle>
            {project.teamSize === '개인 프로젝트' ? (
              <SoloBadge>{project.teamSize}</SoloBadge>
            ) : (
              <SectionText>{project.teamSize}</SectionText>
            )}
          </Section>
        )}

        {project.role && (
          <Section>
            <SectionTitle>역할</SectionTitle>
            <SectionText>{project.role}</SectionText>
          </Section>
        )}

        <TechStack>
          {project.techStack.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </TechStack>

        <Links onClick={handleLinkClick}>
          {project.githubUrls.map((github, idx) => (
            <Link key={idx} href={github.url} target="_blank" rel="noopener noreferrer">
              <LinkIcon viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </LinkIcon>
              {github.label}
            </Link>
          ))}

          {project.demoUrl && (
            <VisitLink href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <LinkIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </LinkIcon>
              페이지 방문
            </VisitLink>
          )}

          {project.videoUrl && (
            <Link href={project.videoUrl} target="_blank" rel="noopener noreferrer">
              <LinkIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </LinkIcon>
              시연 영상
            </Link>
          )}
        </Links>

          {project.testAccount && (
            <TestAccountBadge>
              상세 페이지에 테스트 계정 정보가 있습니다!
            </TestAccountBadge>
          )}
      </Content>
    </Card>
  );
};

export default ProjectCard;