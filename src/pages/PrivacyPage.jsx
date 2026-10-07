import React from 'react';
import CTABanner from '../components/CTABanner';

export default function PrivacyPage({ onOpenDemo }) {
  const sections = [
    {
      title: '1. Overview and Commitment',
      content: 'At Agentix, your privacy and data security are our highest priorities. This Privacy Policy details the types of information we collect when you use our autonomous AI agents, applications, and APIs, as well as how we safeguard that data under international privacy frameworks including GDPR and CCPA.'
    },
    {
      title: '2. Information We Collect',
      content: 'We collect account credentials (name, email, organization), billing details via secure payment processors, and operational telemetry required to orchestrate AI tasks. We do not inspect the raw semantic contents of your proprietary documents without explicit user consent.'
    },
    {
      title: '3. Use of AI and Machine Learning',
      content: 'Agentix utilizes advanced LLMs and neural architectures. Customer data is processed strictly within isolated tenant boundaries. Customer prompts, documents, and output tasks are NEVER used to train shared public foundation models without your organization’s express written consent.'
    },
    {
      title: '4. Third-Party Disclosures',
      content: 'We do not sell, rent, or monetize your personal information. Information is shared only with vetted sub-processors (such as cloud hosting and database infrastructure providers) who operate under strict Data Protection Agreements (DPAs).'
    },
    {
      title: '5. Security Protocols',
      content: 'All data transmissions are encrypted using TLS 1.3. Stored assets and database snapshots are encrypted at rest using AES-256. Regular third-party penetration tests and SOC2 Type II audits ensure institutional-grade resilience.'
    },
    {
      title: '6. Your Rights and Contact',
      content: 'You maintain full data sovereignty. You may request data exports, erasure, or opt out of specific agent monitoring triggers at any time by contacting privacy@agentix.ai.'
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 pt-6">
          <div className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            Last Updated: 06 May, 2024
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-zinc-950 tracking-tight">
            Privacy Policy
          </h1>
        </div>

        {/* Content list */}
        <div className="space-y-10 border-t border-zinc-200 pt-10 text-zinc-700 leading-relaxed text-base sm:text-lg">
          {sections.map((sec, i) => (
            <section key={i} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-zinc-950">
                {sec.title}
              </h2>
              <p className="whitespace-pre-line text-zinc-600 text-[15px] sm:text-base leading-relaxed">
                {sec.content}
              </p>
            </section>
          ))}
        </div>

      </div>

      <CTABanner onOpenDemo={onOpenDemo} />
    </div>
  );
}
