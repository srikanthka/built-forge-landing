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

const TermsPage = () => {
  return (
    <PageContainer>
      <Content
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Terms of Service</Title>
        <LastUpdated>Last Updated: November 30, 2024</LastUpdated>

        <Section>
          <SectionTitle>1. Agreement to Terms</SectionTitle>
          <Paragraph>
            By accessing or using Built Forge India's website and services, you agree to be bound by these
            Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access 
            our services.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. Description of Services</SectionTitle>
          <Paragraph>
            Built Forge India provides a comprehensive manufacturing platform that includes:
          </Paragraph>
          <List>
            <ListItem>AI-powered marketplace for manufacturing equipment and components</ListItem>
            <ListItem>Industry 4.0 educational courses and training programs</ListItem>
            <ListItem>AI consulting tools and factory diagnostics</ListItem>
            <ListItem>Community forums and networking opportunities</ListItem>
            <ListItem>CSR programs and scholarship initiatives</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. User Accounts</SectionTitle>
          <Paragraph>
            When you create an account with us, you must provide accurate, complete, and current information. 
            You are responsible for:
          </Paragraph>
          <List>
            <ListItem>Maintaining the confidentiality of your account credentials</ListItem>
            <ListItem>All activities that occur under your account</ListItem>
            <ListItem>Notifying us immediately of any unauthorized access</ListItem>
            <ListItem>Ensuring your account information is accurate and up-to-date</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Acceptable Use</SectionTitle>
          <Paragraph>You agree not to:</Paragraph>
          <List>
            <ListItem>Use our services for any illegal or unauthorized purpose</ListItem>
            <ListItem>Violate any laws in your jurisdiction</ListItem>
            <ListItem>Infringe on intellectual property rights</ListItem>
            <ListItem>Upload viruses or malicious code</ListItem>
            <ListItem>Attempt to gain unauthorized access to our systems</ListItem>
            <ListItem>Harass, abuse, or harm other users</ListItem>
            <ListItem>Spam or send unsolicited communications</ListItem>
            <ListItem>Impersonate any person or entity</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. Intellectual Property</SectionTitle>
          <Paragraph>
            All content, features, and functionality on our platform, including but not limited to text, 
            graphics, logos, icons, images, audio clips, video clips, data compilations, and software, 
            are the exclusive property of Built Forge India and are protected by international copyright,
            trademark, and other intellectual property laws.
          </Paragraph>
          <Paragraph>
            You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit 
            any content without our prior written permission.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. Course Enrollment and Payment</SectionTitle>
          <Paragraph>
            When you enroll in a course:
          </Paragraph>
          <List>
            <ListItem>Payment is required before accessing course materials</ListItem>
            <ListItem>All fees are in Indian Rupees (INR) unless otherwise stated</ListItem>
            <ListItem>Refunds are subject to our refund policy (14-day money-back guarantee)</ListItem>
            <ListItem>You receive a personal, non-transferable license to access the course</ListItem>
            <ListItem>Course access may be time-limited as specified in the course description</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>7. Marketplace Transactions</SectionTitle>
          <Paragraph>
            For marketplace purchases:
          </Paragraph>
          <List>
            <ListItem>We act as a platform connecting buyers and sellers</ListItem>
            <ListItem>Product descriptions are provided by sellers and manufacturers</ListItem>
            <ListItem>Pricing, availability, and specifications are subject to change</ListItem>
            <ListItem>Shipping and delivery terms are specified for each product</ListItem>
            <ListItem>Returns and warranties are governed by seller policies</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>8. User-Generated Content</SectionTitle>
          <Paragraph>
            By posting content to our platform (forums, comments, reviews), you grant us a worldwide, 
            non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content.
          </Paragraph>
          <Paragraph>
            You retain all rights to your content but represent and warrant that:
          </Paragraph>
          <List>
            <ListItem>You own or have the necessary rights to your content</ListItem>
            <ListItem>Your content does not violate any third-party rights</ListItem>
            <ListItem>Your content complies with these Terms</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>9. Disclaimers</SectionTitle>
          <Paragraph>
            Our services are provided "as is" and "as available" without warranties of any kind, either 
            express or implied, including but not limited to:
          </Paragraph>
          <List>
            <ListItem>Merchantability or fitness for a particular purpose</ListItem>
            <ListItem>Accuracy, reliability, or completeness of content</ListItem>
            <ListItem>Uninterrupted or error-free operation</ListItem>
            <ListItem>Security of data transmission</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>10. Limitation of Liability</SectionTitle>
          <Paragraph>
            To the maximum extent permitted by law, Built Forge India shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages, including but not limited to loss of 
            profits, data, or business opportunities, arising from:
          </Paragraph>
          <List>
            <ListItem>Your use or inability to use our services</ListItem>
            <ListItem>Unauthorized access to your account or data</ListItem>
            <ListItem>Errors or omissions in content</ListItem>
            <ListItem>Third-party conduct or content</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>11. Indemnification</SectionTitle>
          <Paragraph>
            You agree to indemnify, defend, and hold harmless Built Forge India, its officers, directors,
            employees, and agents from any claims, liabilities, damages, losses, and expenses arising from:
          </Paragraph>
          <List>
            <ListItem>Your violation of these Terms</ListItem>
            <ListItem>Your violation of any third-party rights</ListItem>
            <ListItem>Your use of our services</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>12. Termination</SectionTitle>
          <Paragraph>
            We may terminate or suspend your account and access to our services immediately, without prior 
            notice or liability, for any reason, including breach of these Terms.
          </Paragraph>
          <Paragraph>
            Upon termination, your right to use our services will immediately cease. You may also terminate 
            your account at any time through your account settings.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>13. Governing Law</SectionTitle>
          <Paragraph>
            These Terms shall be governed by and construed in accordance with the laws of India, without 
            regard to its conflict of law provisions. Any disputes arising from these Terms or your use 
            of our services shall be subject to the exclusive jurisdiction of courts in India.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>14. Changes to Terms</SectionTitle>
          <Paragraph>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, 
            we will provide at least 30 days' notice before the new terms take effect. What constitutes a 
            material change will be determined at our sole discretion.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>15. Contact Information</SectionTitle>
          <Paragraph>
            If you have any questions about these Terms, please contact us:
          </Paragraph>
          <List>
            <ListItem>Email: info@builtforgeindia.com</ListItem>
            <ListItem>Phone: +91 991 614 6577</ListItem>
            <ListItem>Address: P-6, Peenya Industrial Area, Bengaluru</ListItem>
          </List>
        </Section>

        <Section>
          <Paragraph style={{ fontStyle: 'italic', marginTop: '2rem' }}>
            By using Built Forge India's services, you acknowledge that you have read, understood, and
            agree to be bound by these Terms of Service.
          </Paragraph>
        </Section>
      </Content>
    </PageContainer>
  );
};

export default TermsPage;
