import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import ParticleBackground from '../../components/effects/ParticleBackground';

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0A0E27 0%, #1A1F3A 50%, #2C3454 100%);
  background-size: 200% 200%;
  animation: gradient-shift 15s ease infinite;
  padding: 6rem 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 5rem 1rem 3rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #F4D03F 0%, #D4AF37 50%, #B8860B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 80px rgba(212, 175, 55, 0.5);
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  color: #B8C4D9;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Stats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const StatCard = styled(motion.div)`
  background: rgba(26, 31, 58, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(212, 175, 55, 0.4);
    box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #D4AF37;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #B8C4D9;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #6B7A99;
  cursor: pointer;
  
  &:hover {
    color: #D4AF37;
  }
`;

const MouseIcon = styled.div`
  width: 24px;
  height: 36px;
  border: 2px solid currentColor;
  border-radius: 12px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: currentColor;
    border-radius: 2px;
    animation: scroll 1.5s ease-in-out infinite;
  }
  
  @keyframes scroll {
    0% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
  }
`;

const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <HeroContainer>
      <ParticleBackground />
      
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building India's Manufacturing Revolution
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering the next generation of innovators with cutting-edge automation,
          AI-driven learning, and Industry 4.0 solutions
        </Subtitle>
        
        <CTAButtons
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            onClick={() => navigate('/contact')}
          >
            Get Started Free
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToFeatures}
          >
            Explore Platform
          </Button>
        </CTAButtons>
        
        {/*<Stats
          id="stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <StatNumber>5000+</StatNumber>
            <StatLabel>Students Trained</StatLabel>
          </StatCard>
          
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <StatNumber>50+</StatNumber>
            <StatLabel>Centers of Excellence</StatLabel>
          </StatCard>
          
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <StatNumber>200+</StatNumber>
            <StatLabel>MSME Partners</StatLabel>
          </StatCard>
        </Stats>*/}
      </HeroContent>
      
      <ScrollIndicator
        onClick={scrollToFeatures}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <MouseIcon />
        <span>Scroll to explore</span>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;
