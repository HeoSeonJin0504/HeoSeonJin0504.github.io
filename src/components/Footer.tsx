import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  border-top: 1px solid var(--color-border);
  padding: 2rem 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <Text>© {currentYear} 허선진. All rights reserved.</Text>
      </Container>
    </FooterContainer>
  );
};

export default Footer;