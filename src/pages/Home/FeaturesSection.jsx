import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiShoppingBag, 
  FiBook, 
  FiHeart, 
  FiTool, 
  FiUsers, 
  FiZap 
} from 'react-icons/fi';

const FeaturesContainer = styled.section`
  padding: 6rem 2rem;
  background: #0A0E27;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #F4D03F 0%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: #B8C4D9;
  font-size: 1.125rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(26, 31, 58, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 1rem;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #D4AF37;
    box-shadow: 0 0 40px rgba(212, 175, 55, 0.3);
    transform: translateY(-8px);
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #D4AF37, #F4D03F);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #0A0E27;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    background: linear-gradient(135deg, #D4AF37, #F4D03F);
    opacity: 0.3;
    filter: blur(10px);
    z-index: -1;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #D4AF37;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #B8C4D9;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FeatureBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${({ status }) => status === 'live' ? '#00FF88' : '#00D4FF'};
  color: #0A0E27;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
`;

const features = [
  {
    icon: <FiShoppingBag />,
    title: 'Smart Marketplace',
    description: 'AI-powered B2B & B2C platform for CNC parts, sensors, automation kits, and robotics systems.',
    status: 'Shop',
  },
  {
    icon: <FiBook />,
    title: 'AI Learning Hub',
    description: 'Adaptive learning platform with virtual labs, digital twins, and -verified certificates.',
    status: 'Join',
  },
  {
    icon: <FiHeart />,
    title: 'Forge the Future CSR',
    description: 'Scholarships, grants, and Centers of Excellence empowering the next generation of makers.',
    status: 'live',
  },
  {
    icon: <FiTool />,
    title: 'AI Consulting Tools',
    description: 'Factory diagnostics, ROI calculator, and predictive maintenance for MSMEs.',
    status: 'contact',
  },
  {
    icon: <FiUsers />,
    title: 'Community Network',
    description: 'Tech forum, partner collaboration, and knowledge hub connecting innovators nationwide.',
    status: 'Join',
  },
  {
    icon: <FiZap />,
    title: 'ForgeBot AI Assistant',
    description: 'Multi-lingual conversational AI for product queries, course recommendations, and support.',
    status: 'Connect',
  }
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <FeaturesContainer id="features" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Comprehensive Platform for Industry 4.0
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Everything you need to transform your manufacturing capabilities
      </SectionSubtitle>
      
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <IconWrapper>{feature.icon}</IconWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
            <FeatureBadge status={feature.status}>
              {feature.status === 'live' ? 'Coming Soon' : 'Coming Soon'}
            </FeatureBadge>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
