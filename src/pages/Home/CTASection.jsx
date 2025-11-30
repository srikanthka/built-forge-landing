import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';

const CTAContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0A0E27 0%, #1A1F3A 50%, #0A0E27 100%);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.5) 0%, transparent 70%);
  opacity: 0.3;
  animation: pulse-glow 4s ease-in-out infinite;
`;

const CTAContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
`;

const CTATitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #F4D03F 0%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CTADescription = styled.p`
  font-size: 1.25rem;
  color: #B8C4D9;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTASection = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <CTAContainer id="cta" ref={ref}>
      <GlowEffect />
      
      <CTAContent
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <CTATitle>
          Ready to Transform Your Manufacturing Journey?
        </CTATitle>
        <CTADescription>
          Join thousands of students, MSMEs, and industry leaders building the future of Indian manufacturing
        </CTADescription>
        <CTAButtons>
          <Button 
            size="lg" 
            onClick={() => navigate('/contact')}
          >
            Get Started Today
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </Button>
        </CTAButtons>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTASection;
