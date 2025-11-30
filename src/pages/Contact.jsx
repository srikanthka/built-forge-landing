import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { Button } from '../components/common/Button';
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
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(Card)`
  padding: 2.5rem;
`;

const FormTitle = styled.h2`
  font-size: 1.75rem;
  color: #D4AF37;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #B8C4D9;
  font-size: 0.9rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 1rem 1.25rem;
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

const TextArea = styled.textarea`
  padding: 1rem 1.25rem;
  background: rgba(26, 31, 58, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 0.75rem;
  color: #fff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
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

const ContactInfo = styled(Card)`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoTitle = styled.h2`
  font-size: 1.75rem;
  color: #D4AF37;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #D4AF37, #F4D03F);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #0A0E27;
  flex-shrink: 0;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  color: #B8C4D9;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const InfoValue = styled.div`
  color: #fff;
  font-size: 1.125rem;
  font-weight: 500;
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 255, 136, 0.05));
  border: 1px solid rgba(0, 255, 136, 0.3);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.5rem;
    color: #00FF88;
    flex-shrink: 0;
  }
`;

const SuccessText = styled.div`
  color: #00FF88;
  font-size: 1rem;
  font-weight: 500;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:info@builtforgeindia.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <PageContainer>
      <Hero>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Subtitle>
      </Hero>

      <ContentGrid>
        <ContactForm
          as={motion.div}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <FormTitle>Send us a Message</FormTitle>
          
          {submitted && (
            <SuccessMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <FiCheckCircle />
              <SuccessText>
                Your email client will open shortly. Thank you for reaching out!
              </SuccessText>
            </SuccessMessage>
          )}
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject *</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message *</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <Button type="submit" size="large" style={{ width: '100%' }}>
              <FiSend /> Send Message
            </Button>
          </Form>
        </ContactForm>

        <ContactInfo
          as={motion.div}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div>
            <InfoTitle>Contact Information</InfoTitle>
            <p style={{ color: '#B8C4D9', marginTop: '0.5rem' }}>
              Reach out to us through any of these channels
            </p>
          </div>

          <InfoItem>
            <InfoIcon>
              <FiMail />
            </InfoIcon>
            <InfoContent>
              <InfoLabel>Email</InfoLabel>
              <InfoValue>info@builtforgeindia.com</InfoValue>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <FiPhone />
            </InfoIcon>
            <InfoContent>
              <InfoLabel>Phone</InfoLabel>
              <InfoValue>+91 991 614 6577</InfoValue>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <InfoIcon>
              <FiMapPin />
            </InfoIcon>
            <InfoContent>
              <InfoLabel>Location</InfoLabel>
              <InfoValue>P-6, Peenya Industrial Area, Bengaluru</InfoValue>
            </InfoContent>
          </InfoItem>

          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <InfoLabel style={{ marginBottom: '1rem' }}>Business Hours</InfoLabel>
            <InfoValue style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              Monday - Friday: 9:00 AM - 6:00 PM IST
            </InfoValue>
            <InfoValue style={{ fontSize: '1rem', color: '#B8C4D9' }}>
              Saturday - Sunday: Closed
            </InfoValue>
          </div>
        </ContactInfo>
      </ContentGrid>
    </PageContainer>
  );
};

export default ContactPage;