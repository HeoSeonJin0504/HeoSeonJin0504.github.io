import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 1px 3px var(--color-shadow);
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  height: 64px;
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

const DesktopNav = styled.nav`
  display: none;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0;
  cursor: pointer;
  &:hover { color: var(--color-accent); }
`;

const HamburgerButton = styled.button<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;

  @media (min-width: 768px) { display: none; }

  span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: var(--color-text-primary);
    border-radius: 2px;
    transition: all 0.22s ease;
    transform-origin: center;
  }

  span:nth-child(1) { transform: ${({ $open }) => $open ? 'translateY(7px) rotate(45deg)' : 'none'}; }
  span:nth-child(2) { opacity: ${({ $open }) => $open ? 0 : 1}; transform: ${({ $open }) => $open ? 'scaleX(0)' : 'none'}; }
  span:nth-child(3) { transform: ${({ $open }) => $open ? 'translateY(-7px) rotate(-45deg)' : 'none'}; }
`;

/* 헤더 바로 아래 드롭다운 */
const Dropdown = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => $open ? 'flex' : 'none'};
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.98);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  animation: ${slideDown} 0.18s ease;

  @media (min-width: 768px) { display: none; }
`;

const DropdownItem = styled.button`
  background: none;
  border: none;
  text-align: left;
  padding: 0.875rem var(--spacing-md);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  cursor: pointer;
  border-bottom: 1px solid var(--color-border);

  &:last-child { border-bottom: none; }
  &:active { background-color: var(--color-bg-secondary); color: var(--color-accent); }
`;

const navItems = [
  { id: 'about',    label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  /* 외부 탭 시 닫기 */
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, []);

  return (
    <HeaderContainer ref={ref}>
      <HeaderContent>
        <Logo>HeoSeonJin</Logo>

        <DesktopNav>
          {navItems.map(({ id, label }) => (
            <NavButton key={id} onClick={() => scrollToSection(id)}>{label}</NavButton>
          ))}
        </DesktopNav>

        <HamburgerButton
          $open={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          <span /><span /><span />
        </HamburgerButton>
      </HeaderContent>

      <Dropdown $open={menuOpen}>
        {navItems.map(({ id, label }) => (
          <DropdownItem key={id} onClick={() => scrollToSection(id)}>
            {label}
          </DropdownItem>
        ))}
      </Dropdown>
    </HeaderContainer>
  );
};

export default Header;