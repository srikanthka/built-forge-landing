import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledCard = styled(motion.div)`
  background: ${({ gradient, theme }) => 
    gradient 
      ? 'linear-gradient(180deg, rgba(26, 31, 58, 0.8) 0%, rgba(10, 14, 39, 0.9) 100%)'
      : theme.colors.glass
  };
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.colors.border.main};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ padding, theme }) => padding || theme.spacing.xl};
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  transition: all ${({ theme }) => theme.transitions.medium};

  ${({ hoverable }) => hoverable && `
    &:hover {
      transform: translateY(-5px);
      border-color: rgba(212, 175, 55, 0.4);
      box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.5),
                  0 0 20px rgba(212, 175, 55, 0.3);
    }
  `}
`;

export const Card = ({
  children,
  hoverable = false,
  gradient = false,
  padding,
  ...props
}) => {
  return (
    <StyledCard
      hoverable={hoverable}
      gradient={gradient}
      padding={padding}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
