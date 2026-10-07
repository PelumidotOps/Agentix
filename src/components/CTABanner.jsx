import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({ onOpenDemo }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FF7A00] via-[#FF3B77] to-[#C837AB] p-10 sm:p-16 lg:p-20 text-center shadow-2xl shadow-orange-500/20">
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-tight">
            Start automating today
          </h2>
          <p className="text-white/90 text-base sm:text-lg font-normal max-w-xl mx-auto leading-relaxed">
            Start automating today and let AI agents handle repetitive tasks, make intelligent decisions, and optimize your business.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-zinc-950 text-white font-medium text-sm hover:bg-zinc-900 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-black/30"
            >
              <span>Get Started Free</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
