import colors from './colors';

const theme = {
  colors,

  gradients: {
    primary: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
    background: 'linear-gradient(135deg, #0A0E27 0%, #1A1F3A 50%, #2C3454 100%)',
    card: 'linear-gradient(180deg, rgba(26, 31, 58, 0.8) 0%, rgba(10, 14, 39, 0.9) 100%)',
  },

  fonts: {
    primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"Fira Code", "Courier New", monospace',
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },

  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
    glow: '0 0 20px rgba(212, 175, 55, 0.5)',
    glowStrong: '0 0 40px rgba(212, 175, 55, 0.7)',
    card: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    button: '0 4px 15px rgba(212, 175, 55, 0.4)',
  },

  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
    medium: '300ms ease-in-out',
  },

  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
};

export default theme;
