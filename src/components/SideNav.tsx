import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const sections = [
  { id: 'about',    label: 'About',    initial: 'A' },
  { id: 'projects', label: 'Projects', initial: 'P' },
  { id: 'contact',  label: 'Contact',  initial: 'C' },
];

const NavContainer = styled.nav`
  position: fixed;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  z-index: 900;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DotWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover > span {
    opacity: 1;
    transform: translateX(0);
    pointer-events: auto;
  }
`;

const NavButton = styled.button<{ $active: boolean }>`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
  transition: all 220ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  padding: 0;

  background-color: ${({ $active }) =>
    $active ? 'var(--color-accent)' : '#ffffff'};
  box-shadow: ${({ $active }) =>
    $active
      ? '0 4px 14px rgba(61, 86, 214, 0.45)'
      : '0 2px 10px rgba(0, 0, 0, 0.12)'};

  &:hover {
    background-color: ${({ $active }) =>
      $active ? 'var(--color-accent-hover)' : '#f3f4f6'};
    box-shadow: ${({ $active }) =>
      $active
        ? '0 6px 18px rgba(61, 86, 214, 0.5)'
        : '0 4px 14px rgba(0, 0, 0, 0.15)'};
    transform: scale(1.08);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px var(--color-accent-light);
  }
`;

const Initial = styled.span<{ $active: boolean }>`
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1;
  color: ${({ $active }) => ($active ? '#ffffff' : '#6b7280')};
  transition: color 220ms ease;

  ${NavButton}:hover & {
    color: ${({ $active }) => ($active ? '#ffffff' : 'var(--color-accent)')};
  }
`;

const Underline = styled.span<{ $active: boolean }>`
  display: block;
  width: ${({ $active }) => ($active ? '14px' : '0px')};
  height: 2px;
  border-radius: 1px;
  background-color: #ffffff;
  transition: width 220ms cubic-bezier(0.4, 0, 0.2, 1);

  ${NavButton}:hover & {
    width: 14px;
    background-color: ${({ $active }) => ($active ? '#ffffff' : 'var(--color-accent)')};
  }
`;

const Tooltip = styled.span`
  position: absolute;
  right: calc(100% + 10px);
  background-color: #1a1a1a;
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(6px);
  pointer-events: none;
  transition: opacity 180ms ease, transform 180ms ease;
  user-select: none;

  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-left-color: #1a1a1a;
  }
`;

const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavContainer aria-label="페이지 섹션 네비게이션">
      {sections.map(({ id, label, initial }) => (
        <DotWrapper key={id} onClick={() => handleClick(id)}>
          <NavButton $active={activeSection === id} aria-label={`${label} 섹션으로 이동`}>
            <Initial $active={activeSection === id}>{initial}</Initial>
            <Underline $active={activeSection === id} />
          </NavButton>
          <Tooltip>{label}</Tooltip>
        </DotWrapper>
      ))}
    </NavContainer>
  );
};

export default SideNav;