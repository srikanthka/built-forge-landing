import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiClock, FiBell } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { useState } from 'react';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 2rem 2rem;
  background: linear-gradient(135deg, #0A0E27 0%, #1A1F3A 50%, #2C3454 100%);
  position: relative;
  overflow: hidden;
`;

const BackgroundOrbs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
    animation: ${float} 6s ease-in-out infinite;
  }
  
  &::before {
    width: 500px;
    height: 500px;
    top: -250px;
    right: -250px;
    animation-delay: 0s;
  }
  
  &::after {
    width: 400px;
    height: 400px;
    bottom: -200px;
    left: -200px;
    animation-delay: 3s;
  }
`;

const Content = styled(motion.div)`
  max-width: 800px;
  text-align: center;
  position: relative;
  z-index: 10;
`;

const IconWrapper = styled(motion.div)`
  width: 150px;
  height: 150px;
  margin: 0 auto 2rem;
  position: relative;
`;

const RotatingRing = styled.div`
  position: absolute;
  inset: 0;
  border: 3px solid transparent;
  border-top-color: #D4AF37;
  border-right-color: #D4AF37;
  border-radius: 50%;
  animation: ${rotate} 3s linear infinite;
`;

const InnerCircle = styled.div`
  position: absolute;
  inset: 20px;
  background: linear-gradient(135deg, #D4AF37, #F4D03F);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #0A0E27;
  box-shadow: 0 0 50px rgba(212, 175, 55, 0.5);
  animation: ${pulse} 2s ease-in-out infinite;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #F4D03F 0%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  color: #B8C4D9;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const CountdownContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CountdownBox = styled.div`
  background: rgba(26, 31, 58, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
    animation: ${shimmer} 3s infinite;
  }
`;

const CountdownNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #D4AF37;
  margin-bottom: 0.5rem;
`;

const CountdownLabel = styled.div`
  font-size: 0.875rem;
  color: #B8C4D9;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const NotifyForm = styled(motion.div)`
  max-width: 500px;
  margin: 0 auto 2rem;
  display: flex;
  gap: 1rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  background: rgba(26, 31, 58, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 0.75rem;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #D4AF37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }
  
  &::placeholder {
    color: #6B7A99;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const FeaturesList = styled(motion.div)`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #B8C4D9;
  font-size: 0.9rem;
  
  svg {
    color: #D4AF37;
    flex-shrink: 0;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 255, 136, 0.05));
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
  color: #00FF88;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
`;

const ComingSoonPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNotify = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <PageContainer>
      <BackgroundOrbs />
      
      <Content
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <IconWrapper
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <RotatingRing />
          <InnerCircle>
            <FiClock />
          </InnerCircle>
        </IconWrapper>

        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Coming Soon
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We're crafting something extraordinary for India's manufacturing revolution. 
          Stay tuned for the launch!
        </Subtitle>

        <CountdownContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <CountdownBox>
            <CountdownNumber>30</CountdownNumber>
            <CountdownLabel>Days</CountdownLabel>
          </CountdownBox>
          <CountdownBox>
            <CountdownNumber>12</CountdownNumber>
            <CountdownLabel>Hours</CountdownLabel>
          </CountdownBox>
          <CountdownBox>
            <CountdownNumber>45</CountdownNumber>
            <CountdownLabel>Minutes</CountdownLabel>
          </CountdownBox>
          <CountdownBox>
            <CountdownNumber>20</CountdownNumber>
            <CountdownLabel>Seconds</CountdownLabel>
          </CountdownBox>
        </CountdownContainer>

        <NotifyForm
          as="form"
          onSubmit={handleNotify}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <EmailInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" size="large">
            <FiBell /> Notify Me
          </Button>
        </NotifyForm>

        {subscribed && (
          <SuccessMessage
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            ✓ You'll be notified when we launch!
          </SuccessMessage>
        )}

        <ButtonGroup>
          <Button
            variant="outline"
            onClick={() => navigate('/')}
          >
            <FiArrowLeft /> Back to Home
          </Button>
        </ButtonGroup>

        <FeaturesList
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <FeatureItem>
            ✨ AI-Powered Solutions
          </FeatureItem>
          <FeatureItem>
            🎓 Industry 4.0 Learning
          </FeatureItem>
          <FeatureItem>
            🤝 Community Building
          </FeatureItem>
          <FeatureItem>
            🚀 Innovation Tools
          </FeatureItem>
        </FeaturesList>
      </Content>
    </PageContainer>
  );
};

export default ComingSoonPage;