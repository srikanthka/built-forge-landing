import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.colors.bg.darkest};
    color: ${({ theme }) => theme.colors.text.primary};
    overflow-x: hidden;
  }

  code {
    font-family: ${({ theme }) => theme.fonts.mono};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  input, textarea, select {
    font-family: inherit;
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.bg.dark};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gold.dark};
    border-radius: ${({ theme }) => theme.radius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.gold.primary};
  }

  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
    }
    50% {
      box-shadow: 0 0 40px rgba(212, 175, 55, 0.8);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .slide-in-right {
    animation: slideInRight 0.6s ease-out;
  }

  .glass-effect {
    background: rgba(26, 31, 58, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(212, 175, 55, 0.2);
  }

  .text-gradient {
    background: linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glow {
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.5),
                0 0 40px rgba(212, 175, 55, 0.3),
                0 0 60px rgba(212, 175, 55, 0.1);
  }
`;

export default GlobalStyles;
