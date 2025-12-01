import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiFacebook, 
  FiTwitter, 
  FiLinkedin, 
  FiYoutube 
} from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.bg.dark};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterLogo = styled.img`
  height: 60px;
  width: auto;
  margin-bottom: 1rem;
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gold.primary};
  margin-bottom: 1.5rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.gold.primary};
    padding-left: 5px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 1rem;
  
  svg {
    margin-top: 2px;
    flex-shrink: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.bg.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.gold.primary};
    color: ${({ theme }) => theme.colors.bg.darkest};
    border-color: ${({ theme }) => theme.colors.gold.primary};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.gold.glow};
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.muted};
  
  p {
    margin-bottom: 0.5rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterContent>
        <FooterSection>
          <FooterLogo src="/logo.png" alt="Built Forge India" />
          <FooterTitle>Built Forge India</FooterTitle>
          <p style={{ color: '#B8C4D9', marginBottom: '1rem' }}>
            Empowering India's manufacturing revolution through technology, education, and innovation.
          </p>
          <SocialLinks>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FiFacebook />
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FiTwitter />
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FiYoutube />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Platform</FooterTitle>
          <FooterLinks>
            <FooterLink to="/shop">Smart Marketplace</FooterLink>
            <FooterLink to="/learning">Learning Hub</FooterLink>
            <FooterLink to="/csr">Forge the Future</FooterLink>
            <FooterLink to="/consulting">AI Consulting</FooterLink>
            <FooterLink to="/community">Community</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Company</FooterTitle>
          <FooterLinks>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <ContactInfo>
            <FiMapPin />
            <span>P-6, Peenya Industrial Area, Bengaluru</span>
          </ContactInfo>
          <ContactInfo>
            <FiMail />
            <span>info@builtforge.in</span>
          </ContactInfo>
          <ContactInfo>
            <FiPhone />
            <span>+91 901 907 5430</span>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Built Forge India. All rights reserved.</p>
        <p>
          <Link to="/privacy" style={{ color: '#6B7A99', marginRight: '1rem' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: '#6B7A99' }}>Terms of Service</Link>
        </p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
