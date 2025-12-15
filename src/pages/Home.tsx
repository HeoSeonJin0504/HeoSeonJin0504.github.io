import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;