import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import FAQSection from '../components/FAQSection';
import CTABanner from '../components/CTABanner';

export default function ContactPage({ onNavigate, onOpenDemo }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'demo@mail.com',
    subject: 'Sales Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center space-y-3 pt-6">
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-zinc-950 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-zinc-600 text-base sm:text-lg max-w-xl mx-auto">
            Get in touch with our team to ask questions, explore solutions or start your journey with us
          </p>
        </div>

        {/* Contact Grid: Orange card + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Orange Info Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#FF6B00] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-orange-500/20">
            <div className="space-y-4">
              <h2 className="text-3xl font-display font-semibold tracking-tight">
                We’re here to help
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                We’re here to help with guidance, answers, and support whenever you need it.
              </p>
            </div>

            <div className="space-y-8 py-10">
              {/* Phone */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-semibold text-sm text-white/90">
                  <Phone size={16} />
                  <span>Phone:</span>
                </div>
                <div className="text-sm pl-6 space-y-0.5 text-white/95">
                  <div>+1 (000) 123-4567</div>
                  <div>+1 (000) 123-4567</div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-semibold text-sm text-white/90">
                  <Mail size={16} />
                  <span>Email:</span>
                </div>
                <div className="text-sm pl-6 text-white/95">
                  support@yourdomain.com
                </div>
              </div>

              {/* Address */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-semibold text-sm text-white/90">
                  <MapPin size={16} />
                  <span>Address</span>
                </div>
                <div className="text-sm pl-6 text-white/95 leading-relaxed">
                  New York, United States,<br />Illinois 85486
                </div>
              </div>
            </div>

            <div className="text-xs text-white/70">
              Average response time: under 15 minutes.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200/90 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">First Name*</label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">Last Name*</label>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1.5">Email*</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1.5">Subject*</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1.5">Message*</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#FF6B00] hover:bg-[#EA580C] text-white font-medium text-sm transition-all shadow-md shadow-orange-500/20 flex items-center justify-center gap-2"
                >
                  <span>Book a Demo</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div className="py-16 text-center space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold font-display text-zinc-950">Message Sent!</h3>
                <p className="text-zinc-600 text-sm max-w-sm mx-auto leading-relaxed">
                  Thanks for reaching out, {form.firstName}! Our sales and engineering team will review your message and reply to {form.email} shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Social Proof Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight">
            Chosen by 2,5k+ Companies
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Empowering fast-growing companies and global enterprises with reliable AI autonomy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm flex flex-col justify-between h-72">
            <div>
              <div className="text-5xl font-display font-medium text-zinc-950">80%</div>
              <p className="text-zinc-600 text-sm mt-2">Reduction in manual tasks for teams</p>
            </div>
            <div className="text-2xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
              <span className="text-orange-500">▶</span> Zentra
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 text-white p-7 shadow-sm flex flex-col justify-between h-72 relative overflow-hidden">
            <p className="text-sm font-medium leading-relaxed max-w-[200px] relative z-10">
              “Our AI agents now handle workflows 24/7. We’ve reduced manual work and improved efficiency across.”
            </p>
            <div className="absolute right-4 bottom-4 top-4 w-36 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="/assets/Frame_2147228258_63673749.png" 
                alt="Kamksl Executive" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="relative z-10 text-xl font-bold tracking-tight">
              kamksl
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm flex flex-col justify-between h-72">
            <div>
              <div className="text-5xl font-display font-medium text-zinc-950">24/7</div>
              <p className="text-zinc-600 text-sm mt-2">Continuous AI operations, around the clock</p>
            </div>
            <div className="text-2xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
              <span className="text-orange-500">★</span> Synthra
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#141416] text-white flex flex-col justify-between h-72 shadow-md relative overflow-hidden">
            <p className="text-sm text-zinc-300 leading-relaxed max-w-xs relative z-10">
              “Setup was fast, integrations were seamless, and results were immediate. The AI agents truly work on their own.”
            </p>
            <div className="text-2xl font-bold tracking-tight flex items-center gap-2 text-white relative z-10">
              <span>❋</span> Cognix
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm flex flex-col justify-between h-72">
            <div>
              <div className="text-5xl font-display font-medium text-zinc-950">500+</div>
              <p className="text-zinc-600 text-sm mt-2">Teams powered by autonomous AI agents</p>
            </div>
            <div className="text-2xl font-bold tracking-tight text-zinc-900">
              umarex
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-tr from-[#FF7A00] via-[#FF2E93] to-[#FF6B00] text-white flex flex-col justify-between h-72 shadow-md">
            <p className="text-sm text-white/95 leading-relaxed">
              “This AI agent completely transformed how we work. Tasks run automatically insights are always up to date team can finally.”
            </p>
            <div className="text-2xl font-bold tracking-tight">
              Tencat
            </div>
          </div>
        </div>
      </section>

      <FAQSection onNavigate={onNavigate} />
      <CTABanner onOpenDemo={onOpenDemo} />
    </div>
  );
}
