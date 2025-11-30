import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../common/Button';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.main};
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gold.primary};
  text-shadow: 0 0 20px ${({ theme }) => theme.colors.gold.glow};
  cursor: pointer;
  
  &:hover {
    text-shadow: 0 0 30px ${({ theme }) => theme.colors.gold.glow};
  }
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  
  @media (max-width: 768px) {
    height: 40px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.fast};
  position: relative;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.gold.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gold.primary};
    transition: width 0.3s;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.5rem;
  padding: 0.5rem;
  
  @media (max-width: 968px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  background: ${({ theme }) => theme.colors.bg.dark};
  border-left: 1px solid ${({ theme }) => theme.colors.border.main};
  padding: 2rem;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.overlay};
  z-index: ${({ theme }) => theme.zIndex.modalBackdrop};
`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };
  
  return (
    <>
      <Nav>
        <NavContainer>
          <Logo to="/">
            <LogoImage src="/logo.png" alt="Built Forge India" />
            Built Forge India
          </Logo>
          
          <NavLinks>
            <NavLink onClick={() => scrollToSection('features')}>
              Features
            </NavLink>
            <NavLink onClick={() => scrollToSection('how-it-works')}>
              How It Works
            </NavLink>
            <NavLink onClick={() => scrollToSection('stats')}>
              Our Impact
            </NavLink>
            <NavLink onClick={() => scrollToSection('footer')}>
              Contact
            </NavLink>
          </NavLinks>
          
          <NavActions>
            <Button 
              variant="outline" 
              size="small"
              onClick={() => scrollToSection('cta')}
            >
              Get Started
            </Button>
            <Button 
              variant="primary" 
              size="small"
              onClick={() => scrollToSection('footer')}
            >
              Contact Us
            </Button>
          </NavActions>
          
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
            <FiMenu />
          </MobileMenuButton>
        </NavContainer>
      </Nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <MobileMenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
          >
            <MobileMenuButton 
              onClick={() => setMobileMenuOpen(false)}
              style={{ alignSelf: 'flex-end' }}
            >
              <FiX />
            </MobileMenuButton>
            
            <NavLink onClick={() => scrollToSection('features')}>
              Features
            </NavLink>
            <NavLink onClick={() => scrollToSection('how-it-works')}>
              How It Works
            </NavLink>
            <NavLink onClick={() => scrollToSection('stats')}>
              Our Impact
            </NavLink>
            <NavLink onClick={() => scrollToSection('footer')}>
              Contact
            </NavLink>
            
            <Button 
              variant="outline" 
              style={{ width: '100%' }}
              onClick={() => scrollToSection('cta')}
            >
              Get Started
            </Button>
            <Button 
              variant="primary" 
              style={{ width: '100%' }}
              onClick={() => scrollToSection('footer')}
            >
              Contact Us
            </Button>
          </MobileMenu>
        </>
      )}
    </>
  );
};

export default Navbar;
