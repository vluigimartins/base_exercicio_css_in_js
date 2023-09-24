import React from 'react';
import { HeroContainer, Overlay, Container, HeroTitle } from './styles'

const Hero = () => (
  <HeroContainer>
    <Overlay />
    <Container>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </HeroContainer>
);

export default Hero;
