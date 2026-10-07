import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ activePage, onNavigate, onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Company', id: 'home', hash: '#company' },
    { name: 'Feature', id: 'home', hash: '#features' },
    { name: 'Pricing', id: 'home', hash: '#pricing' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    onNavigate(item.id);
    if (item.hash && item.id === activePage) {
      const el = document.querySelector(item.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center text-left focus:outline-none"
          >
            <Logo />
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`text-[15px] font-medium transition-colors hover:text-orange-600 ${
                  activePage === item.id 
                    ? 'text-zinc-950 font-semibold' 
                    : 'text-zinc-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <button 
              onClick={() => onNavigate('contact')}
              className="text-[15px] font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
            >
              Login
            </button>
            <button 
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[14px] font-medium bg-zinc-950 text-white hover:bg-zinc-800 transition-all shadow-sm active:scale-95"
            >
              Try For Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-700 hover:text-zinc-950 p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`text-left px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  activePage === item.id 
                    ? 'bg-orange-50 text-orange-600 font-semibold' 
                    : 'text-zinc-700 hover:bg-zinc-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
            <button 
              onClick={() => { setMobileMenuOpen(false); onNavigate('contact'); }}
              className="w-full text-center py-2.5 text-sm font-medium text-zinc-700 rounded-lg hover:bg-zinc-100"
            >
              Login
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full text-center py-3 text-sm font-medium bg-zinc-950 text-white rounded-full shadow-sm"
            >
              Try For Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
