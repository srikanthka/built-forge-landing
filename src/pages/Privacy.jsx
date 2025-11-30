import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 100px 2rem 4rem;
  background: linear-gradient(135deg, #0A0E27 0%, #1A1F3A 50%, #0A0E27 100%);
`;

const Content = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  background: rgba(26, 31, 58, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 1rem;
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #F4D03F 0%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const LastUpdated = styled.p`
  color: #B8C4D9;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #D4AF37;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Paragraph = styled.p`
  color: #B8C4D9;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const List = styled.ul`
  color: #B8C4D9;
  line-height: 1.8;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const PrivacyPolicyPage = () => {
  return (
    <PageContainer>
      <Content
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Privacy Policy</Title>
        <LastUpdated>Last Updated: November 30, 2024</LastUpdated>

        <Section>
          <SectionTitle>1. Introduction</SectionTitle>
          <Paragraph>
            Welcome to Built Forge India ("we," "our," or "us"). We are committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you visit our website and use our services.
          </Paragraph>
          <Paragraph>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
            please do not access the site or use our services.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. Information We Collect</SectionTitle>
          <Paragraph>We collect information that you provide directly to us, including:</Paragraph>
          <List>
            <ListItem>Personal identification information (name, email address, phone number)</ListItem>
            <ListItem>Account credentials and profile information</ListItem>
            <ListItem>Communication preferences</ListItem>
            <ListItem>Course enrollment and progress data</ListItem>
            <ListItem>Payment and billing information</ListItem>
            <ListItem>Feedback, survey responses, and correspondence</ListItem>
          </List>
          <Paragraph>
            We also automatically collect certain information when you visit our website, including:
          </Paragraph>
          <List>
            <ListItem>Device information (IP address, browser type, operating system)</ListItem>
            <ListItem>Usage data (pages viewed, time spent, navigation paths)</ListItem>
            <ListItem>Cookies and similar tracking technologies</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. How We Use Your Information</SectionTitle>
          <Paragraph>We use the information we collect to:</Paragraph>
          <List>
            <ListItem>Provide, maintain, and improve our services</ListItem>
            <ListItem>Process your transactions and manage your account</ListItem>
            <ListItem>Send you technical notices, updates, and support messages</ListItem>
            <ListItem>Respond to your comments, questions, and customer service requests</ListItem>
            <ListItem>Communicate with you about products, services, and events</ListItem>
            <ListItem>Monitor and analyze trends, usage, and activities</ListItem>
            <ListItem>Detect, prevent, and address technical issues and fraudulent activities</ListItem>
            <ListItem>Personalize your experience and deliver relevant content</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Information Sharing and Disclosure</SectionTitle>
          <Paragraph>
            We do not sell your personal information. We may share your information in the following circumstances:
          </Paragraph>
          <List>
            <ListItem>With service providers who perform services on our behalf</ListItem>
            <ListItem>With educational partners and institutions for course delivery</ListItem>
            <ListItem>When required by law or to respond to legal process</ListItem>
            <ListItem>To protect our rights, privacy, safety, or property</ListItem>
            <ListItem>In connection with a merger, sale, or asset transfer</ListItem>
            <ListItem>With your consent or at your direction</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. Data Security</SectionTitle>
          <Paragraph>
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission 
            is completely secure, and we cannot guarantee absolute security.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. Your Privacy Rights</SectionTitle>
          <Paragraph>Depending on your location, you may have the following rights:</Paragraph>
          <List>
            <ListItem>Access, correct, or delete your personal information</ListItem>
            <ListItem>Object to or restrict processing of your data</ListItem>
            <ListItem>Data portability</ListItem>
            <ListItem>Withdraw consent at any time</ListItem>
            <ListItem>Opt-out of marketing communications</ListItem>
          </List>
          <Paragraph>
            To exercise these rights, please contact us at info@builtforgeindia.com
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. Cookies and Tracking Technologies</SectionTitle>
          <Paragraph>
            We use cookies and similar tracking technologies to track activity on our website and hold certain 
            information. You can instruct your browser to refuse all cookies or to indicate when a cookie is 
            being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>8. Children's Privacy</SectionTitle>
          <Paragraph>
            Our services are not directed to children under 13. We do not knowingly collect personal information 
            from children under 13. If you become aware that a child has provided us with personal information, 
            please contact us immediately.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>9. International Data Transfers</SectionTitle>
          <Paragraph>
            Your information may be transferred to and maintained on computers located outside of your state, 
            province, country, or other governmental jurisdiction where data protection laws may differ. We take 
            steps to ensure appropriate safeguards are in place.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>10. Changes to This Privacy Policy</SectionTitle>
          <Paragraph>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review 
            this Privacy Policy periodically for any changes.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>11. Contact Us</SectionTitle>
          <Paragraph>
            If you have any questions about this Privacy Policy, please contact us:
          </Paragraph>
          <List>
            <ListItem>Email: info@builtforgeindia.com</ListItem>
            <ListItem>Phone: +91 991 614 6577</ListItem>
            <ListItem>Address: P-6, Peenya Industrial Area, Bengaluru</ListItem>
          </List>
        </Section>
      </Content>
    </PageContainer>
  );
};

export default PrivacyPolicyPage;
