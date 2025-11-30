import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorksContainer = styled.section`
  padding: 6rem 2rem;
  background: #1A1F3A;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  }
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #F4D03F 0%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #D4AF37 0%, #B8860B 100%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  gap: 4rem;
  align-items: center;
  position: relative;
  
  ${({ align }) => align === 'left' ? 'flex-direction: row-reverse;' : ''}
  
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  background: rgba(26, 31, 58, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  
  ${({ align }) => align === 'left' ? 'text-align: right;' : ''}
  
  @media (max-width: 768px) {
    text-align: left;
    margin-left: 60px;
  }
`;

const TimelineNumber = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #D4AF37, #F4D03F);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #0A0E27;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
  z-index: 10;
  
  @media (max-width: 768px) {
    left: 20px;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #D4AF37;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  color: #B8C4D9;
  line-height: 1.6;
`;

const steps = [
  {
    number: 1,
    title: 'Create Your Account',
    description: 'Sign up as a Student, MSME, Corporate, or Partner. Get instant access to personalized features and recommendations.',
    align: 'right'
  },
  {
    number: 2,
    title: 'Explore the Platform',
    description: 'Browse our AI-powered marketplace, enroll in Industry 4.0 courses, or access consulting tools tailored to your needs.',
    align: 'left'
  },
  {
    number: 3,
    title: 'Learn & Implement',
    description: 'Master new skills with virtual labs, get AI-driven recommendations, and implement cutting-edge automation solutions.',
    align: 'right'
  },
  {
    number: 4,
    title: 'Transform Your Future',
    description: 'Join our community, earn -verified certificates, and be part of India\'s manufacturing revolution.',
    align: 'left'
  }
];

const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <HowItWorksContainer id="how-it-works" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </SectionTitle>
        
        <Timeline>
          {steps.map((step, index) => (
            <TimelineItem
              key={index}
              align={step.align}
              initial={{ opacity: 0, x: step.align === 'left' ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TimelineNumber>{step.number}</TimelineNumber>
              <TimelineContent align={step.align}>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </TimelineContent>
              <div style={{ flex: 1 }} />
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </HowItWorksContainer>
  );
};

export default HowItWorksSection;
