import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles/Layout.css'; // Adjusted import path
import '../styles/ThemeToggle.css'

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}-theme`} data-theme={theme}>
      {/* Decorative background element */}
      <div className="theme-accent-bg"></div>
      
      <Navbar />
      
      <div className="app-content">
        {/* Left sidebar - matches your design */}
        <aside className="app-sidebar">
          <div className="creative-tag">Creative.</div>
          <div className="color-palette">31 Best Color Combinations</div>
          <div className="title-badge">
            <span>GRAPHIC</span>
            <span>DESIGNER</span>
          </div>
        </aside>

        {/* Main content area */}
        <main className="main-content">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;