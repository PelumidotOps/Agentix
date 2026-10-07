import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-orange-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate}
        onOpenDemo={() => setDemoModalOpen(true)}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenDemo={() => setDemoModalOpen(true)} 
          />
        )}
        {activePage === 'blog' && (
          <BlogPage 
            onNavigate={handleNavigate} 
            onOpenDemo={() => setDemoModalOpen(true)} 
          />
        )}
        {activePage === 'blog-details' && (
          <BlogDetailPage 
            onNavigate={handleNavigate} 
            onOpenDemo={() => setDemoModalOpen(true)} 
          />
        )}
        {activePage === 'contact' && (
          <ContactPage 
            onNavigate={handleNavigate} 
            onOpenDemo={() => setDemoModalOpen(true)} 
          />
        )}
        {activePage === 'terms' && (
          <TermsPage 
            onOpenDemo={() => setDemoModalOpen(true)} 
          />
        )}
        {activePage === 'privacy' && (
          <PrivacyPage 
            onOpenDemo={() => setDemoModalOpen(true)} 
          />
        )}
        {activePage === '404' && (
          <NotFoundPage 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Booking / Demo Modal */}
      <DemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
      />

    </div>
  );
}
