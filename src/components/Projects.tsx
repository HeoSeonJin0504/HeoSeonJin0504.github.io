import React from 'react';
import styled from 'styled-components';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection = styled.section`
  padding: 5rem 0;
  min-height: 100vh;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-border) 20%,
      var(--color-border) 80%,
      transparent
    );
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
  position: relative;
  width: 100%;
`;

const Subheading = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <Heading className="fade-in-up">Projects</Heading>
        <Subheading className="fade-in-up">지금까지 진행한 프로젝트를 소개합니다</Subheading>
        
        <Grid>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Grid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;