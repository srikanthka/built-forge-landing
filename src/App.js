import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from './styles/GlobalStyles';
import theme from './theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ComingSoonPage from './pages/ComingSoon';
import AboutUsPage from './pages/AboutUs';
import ContactPage from './pages/Contact';
import PrivacyPolicyPage from './pages/Privacy';
import TermsPage from './pages/Terms';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ComingSoonPage />} />
          <Route path="/learning" element={<ComingSoonPage />} />
          <Route path="/csr" element={<ComingSoonPage />} />
          <Route path="/consulting" element={<ComingSoonPage />} />
          <Route path="/community" element={<ComingSoonPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1A1F3A',
              color: '#fff',
              border: '1px solid rgba(212, 175, 55, 0.2)',
            },
          }}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
