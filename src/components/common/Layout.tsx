import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../styles/components/Layout.css';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="layout">
      <Header />
      <main className={`main ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
