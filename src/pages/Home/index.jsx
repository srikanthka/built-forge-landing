import styled from 'styled-components';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import CTASection from './CTASection';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
    </HomeContainer>
  );
};

export default Home;
