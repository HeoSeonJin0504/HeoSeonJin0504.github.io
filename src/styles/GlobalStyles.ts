import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap');

  :root {
    /* Colors - 밝은 테마 */
    --color-bg: #ffffff;
    --color-bg-secondary: #f8f9fa;
    --color-bg-elevated: #ffffff;
    --color-text-primary: #1a1a1a;
    --color-text-secondary: #4a5568;
    --color-text-muted: #718096;
    --color-accent: #0891b2;
    --color-accent-hover: #06b6d4;
    --color-accent-light: rgba(8, 145, 178, 0.1);
    --color-border: #e2e8f0;
    --color-shadow: rgba(0, 0, 0, 0.08);
    
    /* Typography */
    --font-heading: 'Lexend', sans-serif;
    --font-body: 'Manrope', sans-serif;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-2xl: 4rem;
    
    /* Border Radius */
    --radius-sm: 0.5rem;
    --radius-md: 0.75rem;
    --radius-lg: 1rem;
    
    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-base: 250ms ease;
    --transition-slow: 400ms ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-body);
    background-color: var(--color-bg);
    color: var(--color-text-primary);
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 600;
    line-height: 1.2;
    color: var(--color-text-primary);
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  a:hover {
    color: var(--color-accent);
  }

  button {
    font-family: var(--font-body);
    border: none;
    cursor: pointer;
    transition: all var(--transition-base);
  }

  img {
    max-width: 100%;
    display: block;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-text-muted);
  }

  /* Selection */
  ::selection {
    background-color: var(--color-accent-light);
    color: var(--color-accent);
  }

  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .fade-in-up {
    animation: fadeInUp 0.8s ease forwards;
  }

  .fade-in {
    animation: fadeIn 0.6s ease forwards;
  }

  .slide-in-left {
    animation: slideInLeft 0.8s ease forwards;
  }

  /* Smooth transitions */
  * {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;