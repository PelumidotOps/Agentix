import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection({ onNavigate }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What are AI agents and how do they work?',
      a: 'AI agents are autonomous programs that handle tasks, make decisions, and optimize workflows without constant human supervision. They learn and adapt to improve performance over time.'
    },
    {
      q: 'How does Agentix improve my productivity?',
      a: 'Agentix automates multi-step processes, reduces human error, and operates 24/7, freeing your team to focus on high-leverage strategic growth and innovation.'
    },
    {
      q: 'Do I need technical skills to use Agentix?',
      a: 'No coding or technical background is needed. You can prompt and configure agents using natural language instructions and intuitive visual workflows.'
    },
    {
      q: 'Can Agentix integrate with our existing tools?',
      a: 'Yes, Agentix integrates with over 500+ popular platforms including Slack, Google Workspace, GitHub, Salesforce, Notion, PostgreSQL, and custom REST APIs.'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-zinc-950 tracking-tight leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-zinc-600 text-base">
            Quick answers to common questions, all in one place
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Accordion Column */}
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-zinc-200/80 rounded-2xl bg-zinc-50/50 hover:bg-zinc-50 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-zinc-950 text-base sm:text-lg pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-orange-600' : 'text-zinc-400'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-zinc-600 text-[15px] leading-relaxed border-t border-zinc-200/60 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
