import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 1px 3px var(--color-shadow);
  z-index: 1000;
  padding: 1rem 0;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
`;

const Logo = styled.div`
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavButton = styled.button`
  background: none;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0;
  
  &:hover {
    color: var(--color-accent);
  }
`;

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>HeoSeonJin</Logo>
        <Nav>
          <NavButton onClick={() => scrollToSection('about')}>About</NavButton>
          <NavButton onClick={() => scrollToSection('projects')}>Projects</NavButton>
          <NavButton onClick={() => scrollToSection('contact')}>Contact</NavButton>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;