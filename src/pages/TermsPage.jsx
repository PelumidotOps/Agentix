import React from 'react';
import CTABanner from '../components/CTABanner';

export default function TermsPage({ onOpenDemo }) {
  const sections = [
    {
      title: 'Introduction and Scope',
      content: 'We collect personal information that helps us deliver and improve our AI management services. This may include names, email addresses, phone numbers, employee records, payroll data, attendance logs, and any information provided during onboarding or account setup. We also gather technical data such as IP addresses, browser types, device information, and usage statistics to ensure platform security, performance, and reliability.'
    },
    {
      title: 'Information We Collect',
      content: 'We collect information that identifies you, such as your name and email address, as well as "Task Data" (the content of your lists, notes, and projects). Additionally, we automatically collect technical data, including your IP address, device type, and usage patterns, to ensure our platform operates smoothly and securely.'
    },
    {
      title: 'How We Use Your Data',
      content: 'Your data is used to provide and improve our services. Specifically, we use your information to manage your account, facilitate collaboration between users, and power our AI features—such as automated scheduling, task prioritization, and predictive analytics. We do not sell your personal information to third parties for marketing purposes.'
    },
    {
      title: 'AI Training and Machine Learning',
      content: 'To improve our AI’s accuracy, we may use de-identified and aggregated data to train our machine learning models. This process ensures that your specific, identifiable task content remains private. You may have the option to "opt-out" of having your data used for model training through your account settings.\n\nWe may share your data with trusted third-party vendors who assist us in operating our platform, such as cloud storage providers (e.g., AWS) or AI infrastructure providers (e.g., OpenAI). These partners are contractually obligated to protect your data and are prohibited from using it for any other purpose.'
    },
    {
      title: 'Data Security Measures',
      content: 'We implement industry-standard security protocols, including AES-256 encryption for data at rest and TLS/SSL encryption for data in transit. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the internet is 100% secure.'
    },
    {
      title: 'Data Retention and Deletion',
      content: 'We retain your personal information only for as long as your account is active or as needed to provide you with services. If you choose to delete your account, we will purge your personal data from our active databases within 30 days, though some information may remain in encrypted backups for a limited time.'
    },
    {
      title: 'Your Rights and Choices',
      content: 'Depending on your location, you may have rights under the GDPR or CCPA, including the right to access, correct, or delete your personal data. You also have the right to request a copy of your data in a portable format. Please contact our Data Protection Officer to exercise these rights.'
    },
    {
      title: 'Cookies and Tracking Technologies',
      content: 'We use cookies to remember your preferences and analyze how users interact with our site. You can control cookie settings through your browser; however, disabling certain cookies may limit your ability to use some features.'
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update our Privacy Policy from time to time to reflect changes in our AI technologies or legal requirements. We will notify you of any significant changes by posting the new policy on this page and updating the "Effective Date" at the top of the document.'
    },
    {
      title: 'Updates to This Privacy Policy',
      content: 'We retain personal information only as long as it is necessary to fulfill business or legal requirements. Once data is no longer needed, we securely delete or anonymize it. Retention periods may vary depending on the nature of the data, such as payroll records, employee documents, and compliance-related files.'
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
            Terms & Conditions
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
