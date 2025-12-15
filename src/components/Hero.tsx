import React from 'react';
import styled from 'styled-components';
import { profile, socialLinks } from '../data/projects';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 70%;
    height: 70%;
    background: radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 50%;
    height: 50%;
    background: radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  animation: fadeIn 0.8s ease forwards;
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
`;

const Title = styled.p`
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  color: var(--color-accent);
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const Bio = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  color: var(--color-text-secondary);
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const SkillsSection = styled.div`
  margin-bottom: 3rem;
`;

const SkillsTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-primary);
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

const SkillBadge = styled.span<{ $delay: number }>`
  padding: 0.5rem 1rem;
  background-color: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: all var(--transition-base);
  animation: fadeIn 0.6s ease forwards;
  animation-delay: ${props => props.$delay}s;
  opacity: 0;

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: all var(--transition-base);

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
    transform: translateY(-2px);
  }
`;

const Icon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
`;

const Hero: React.FC = () => {
  return (
    <HeroSection id="about">
      <Container>
        <Content className="fade-in-up">
          <Name>{profile.name}</Name>
          <Title>{profile.title}</Title>
          <Bio>{profile.bio}</Bio>
          
          <SkillsSection>
            <SkillsTitle>기술 스택</SkillsTitle>
            <SkillsGrid>
              {profile.skills.map((skill, index) => (
                <SkillBadge key={skill} $delay={index * 0.1}>
                  {skill}
                </SkillBadge>
              ))}
            </SkillsGrid>
          </SkillsSection>

          <SocialLinks>
            {socialLinks.map((link) => (
              <SocialLink
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.platform === 'GitHub' && (
                  <Icon viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </Icon>
                )}
                {link.platform === 'Email' && (
                  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </Icon>
                )}
                <span>{link.platform}</span>
              </SocialLink>
            ))}
          </SocialLinks>
        </Content>
      </Container>
    </HeroSection>
  );
};

export default Hero;