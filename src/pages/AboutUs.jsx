import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTarget, FiEye, FiHeart, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { Card } from '../components/common/Card';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 100px 2rem 4rem;
  background: linear-gradient(135deg, #0A0E27 0%, #1A1F3A 50%, #0A0E27 100%);
`;

const Hero = styled.section`
  max-width: 1200px;
  margin: 0 auto 4rem;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #F4D03F 0%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  color: #B8C4D9;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.8;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto 5rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #D4AF37;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled(Card)`
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 40px rgba(212, 175, 55, 0.4);
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
  font-size: 2.5rem;
  color: #0A0E27;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #D4AF37;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: #B8C4D9;
  line-height: 1.6;
  font-size: 1rem;
`;

const StorySection = styled(Card)`
  max-width: 900px;
  margin: 0 auto 5rem;
  padding: 3rem;
`;

const StoryText = styled.p`
  color: #B8C4D9;
  line-height: 1.8;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const StatCard = styled(Card)`
  padding: 2rem;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #D4AF37;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #B8C4D9;
  font-size: 1rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const TeamCard = styled(Card)`
  padding: 2rem;
  text-align: center;
`;

const TeamImage = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #D4AF37, #F4D03F);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
`;

const TeamName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const TeamRole = styled.div`
  color: #D4AF37;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TeamBio = styled.p`
  color: #B8C4D9;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const AboutUsPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: <FiTarget />,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technology and innovative solutions to transform traditional manufacturing.'
    },
    {
      icon: <FiEye />,
      title: 'Vision for Growth',
      description: 'Empowering MSMEs and students with Industry 4.0 capabilities to compete globally.'
    },
    {
      icon: <FiHeart />,
      title: 'Community Driven',
      description: 'Building a collaborative ecosystem where knowledge, resources, and opportunities are shared.'
    },
    {
      icon: <FiAward />,
      title: 'Excellence',
      description: 'Committed to delivering world-class education, tools, and support for manufacturing excellence.'
    },
    {
      icon: <FiUsers />,
      title: 'Inclusive Impact',
      description: 'Creating opportunities for all - from students to enterprises, ensuring no one is left behind.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Sustainable Growth',
      description: 'Promoting sustainable manufacturing practices that benefit both business and environment.'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Students Trained' },
    { number: '200+', label: 'MSME Partners' },
    { number: '50+', label: 'Centers of Excellence' },
    { number: '85%', label: 'Placement Rate' }
  ];

  return (
    <PageContainer>
      <Hero ref={heroRef}>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Built Forge India
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Revolutionizing India's manufacturing sector through AI-powered solutions, 
          world-class education, and a thriving community ecosystem
        </Subtitle>
      </Hero>

      <Section ref={missionRef}>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={missionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </SectionTitle>
        <StorySection>
          <StoryText>
            Built Forge India was born from a simple observation: India's manufacturing sector,
            despite its immense potential, was struggling to adapt to the Fourth Industrial Revolution. 
            Small and medium enterprises lacked access to modern technology, students weren't getting 
            industry-relevant skills, and the gap between education and industry was widening.
          </StoryText>
          <StoryText>
            We set out to change this. Our mission is to democratize access to Industry 4.0 technologies, 
            provide world-class manufacturing education, and create a vibrant ecosystem where students, 
            MSMEs, corporates, and technology partners can collaborate and grow together.
          </StoryText>
          <StoryText>
            Today, Built Forge India is more than a platform—it's a movement. We're empowering thousands
            of students with cutting-edge skills, helping MSMEs modernize their operations, and building 
            Centers of Excellence across the country. Together, we're not just building products; 
            we're forging the future of Indian manufacturing.
          </StoryText>
        </StorySection>
      </Section>

      <Section ref={valuesRef}>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Core Values
        </SectionTitle>
        <Grid>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <IconWrapper>{value.icon}</IconWrapper>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </Grid>
      </Section>

      <Section ref={statsRef}>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Impact
        </SectionTitle>
        {/*<StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>*/}
      </Section>

      <Section>
        <SectionTitle>Leadership Team</SectionTitle>
        <TeamGrid>
          <TeamCard>
            <TeamImage>👨‍💼</TeamImage>
            <TeamName>Visionary Leader</TeamName>
            <TeamRole>Founder & CEO</TeamRole>
            <TeamBio>
              Pioneering the future of Indian manufacturing with over 15 years of industry experience.
            </TeamBio>
          </TeamCard>
          <TeamCard>
            <TeamImage>👩‍💻</TeamImage>
            <TeamName>Tech Innovator</TeamName>
            <TeamRole>CTO</TeamRole>
            <TeamBio>
              Leading AI and automation initiatives to transform traditional manufacturing processes.
            </TeamBio>
          </TeamCard>
          <TeamCard>
            <TeamImage>👨‍🏫</TeamImage>
            <TeamName>Education Expert</TeamName>
            <TeamRole>Head of Learning</TeamRole>
            <TeamBio>
              Designing world-class curriculum that bridges the gap between education and industry.
            </TeamBio>
          </TeamCard>
        </TeamGrid>
      </Section>
    </PageContainer>
  );
};

export default AboutUsPage;
