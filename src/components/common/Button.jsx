import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pulseGlow } from '../../styles/animations';

const StyledButton = styled(motion.button)`
  position: relative;
  padding: ${({ size, theme }) => {
    if (size === 'large') return `${theme.spacing.md} ${theme.spacing['2xl']}`;
    if (size === 'small') return `${theme.spacing.sm} ${theme.spacing.lg}`;
    return `${theme.spacing.md} ${theme.spacing['2xl']}`;
  }};
  font-size: ${({ size, theme }) => {
    if (size === 'large') return theme.fontSizes.lg;
    if (size === 'small') return theme.fontSizes.sm;
    return theme.fontSizes.md;
  }};
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ variant, theme }) => {
    if (variant === 'primary') return theme.gradients?.primary || '#D4AF37';
    if (variant === 'outline' || variant === 'ghost') return 'transparent';
    return theme.colors?.background?.light || '#1A1F3A';
  }};
  color: ${({ variant, theme }) => {
    if (variant === 'outline' || variant === 'ghost') return theme.colors?.primary?.main || '#D4AF37';
    return theme.colors?.background?.dark || '#0A0E27';
  }};
  border: ${({ variant, theme }) => {
    if (variant === 'outline') return `2px solid ${theme.colors?.primary?.main || '#D4AF37'}`;
    return 'none';
  }};
  box-shadow: ${({ variant, theme }) => {
    if (variant === 'primary') return theme.shadows?.button || '0 4px 15px rgba(212, 175, 55, 0.4)';
    return 'none';
  }};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions?.normal || '300ms ease-in-out'};
  cursor: pointer;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${({ variant, theme }) => {
      if (variant === 'primary') return theme.shadows?.glow || '0 0 20px rgba(212, 175, 55, 0.5)';
      return theme.shadows?.button || '0 4px 15px rgba(212, 175, 55, 0.4)';
    }};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $glow }) => $glow && `
    animation: ${pulseGlow} 2s ease-in-out infinite;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover:not(:disabled)::before {
    width: 300px;
    height: 300px;
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  glow = false,
  onClick,
  disabled = false,
  type = 'button',
  style,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      $glow={glow}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={style}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      {...props}
    >
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
