import React, { useState } from 'react';
import { 
  ArrowRight, Check, Sparkles, TrendingUp, ShieldCheck, 
  Cpu, Bell, Users, Database, BarChart3, Layers, Sliders, Play, Lock, ExternalLink
} from 'lucide-react';
import CTABanner from '../components/CTABanner';
import FAQSection from '../components/FAQSection';

export default function HomePage({ onNavigate, onOpenDemo }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [activePossibilityTab, setActivePossibilityTab] = useState(0);

  // Pricing plans
  const plans = [
    {
      name: 'Starter',
      desc: 'Choose the plan that fits your needs and scale. Every plan comes.',
      monthlyPrice: 39,
      yearlyPrice: 31,
      popular: false,
      features: [
        '1 AI Agent',
        '1000 Tasks / Month',
        'Basic Integrations',
        'Inventory Features',
        'Dedicated Support'
      ]
    },
    {
      name: 'Pro',
      desc: 'Step up with the Pro Plan. Run multiple AI agents automate.',
      monthlyPrice: 99,
      yearlyPrice: 79,
      popular: true,
      features: [
        '5 AI Agents',
        '10,000 Tasks / Month',
        'Advanced Integrations',
        'Performance Analytics',
        'Dedicated Support'
      ]
    },
    {
      name: 'Enterprise',
      desc: 'Go all-in with the Enterprise Plan. Deploy unlimited AI agents.',
      monthlyPrice: 179,
      yearlyPrice: 143,
      popular: false,
      features: [
        '5 AI Agents',
        '10,000 Tasks / Month',
        '10,000 Tasks / Month',
        'Performance Analytics',
        'Dedicated Support'
      ]
    }
  ];

  const brandQuotes = [
    {
      name: 'Autonex',
      quote: '“Our AI agents run 24/7 and handle tasks we used to manage manually. Productivity has increased dramatically.”',
      role: 'Operations Manager'
    },
    {
      name: 'Fluxenta',
      quote: '“From deployment to results, everything was seamless. The agents adapt quickly, learn from real data, and continuously improve.”',
      role: 'Product Lead'
    },
    {
      name: 'Cognix',
      quote: '“We needed automation that could scale with our business—and this delivered. The AI agents run reliably day and night.”',
      role: 'Operations Manager'
    },
    {
      name: 'Autonex',
      quote: '“What impressed us most is the intelligence behind the automation. These agents don’t just execute tasks—they make smart decisions.”',
      role: 'Technology Manager'
    }
  ];

  return (
    <div className="overflow-hidden">

      {/* ======================================================== */}
      {/* 1. HERO SECTION                                          */}
      {/* ======================================================== */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 bg-white">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-orange-400/20 via-pink-500/15 to-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-xs font-semibold text-orange-700 shadow-sm animate-pulse">
            <span className="bg-[#FF6B00] text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider">NEW</span>
            <span>Automation That Never Sleeps</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium text-zinc-950 tracking-tight max-w-4xl mx-auto leading-[1.08]">
            AI Agents Working 24/7
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal">
            AI agents work continuously to automate tasks, analyze data, and make intelligent decisions day & night. With always-on performance, ensure efficiency.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF7A00] hover:bg-[#EA6A00] text-white text-sm font-medium transition-all transform hover:-translate-y-0.5 shadow-lg shadow-orange-500/25 active:translate-y-0"
            >
              <span>Book a Demo</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('features');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 text-sm font-medium transition-all shadow-sm hover:border-zinc-300"
            >
              Learn More
            </button>
          </div>

          {/* Dashboard Chart Mockup (Exact recreation of Figma Frame) */}
          <div className="pt-10 max-w-5xl mx-auto">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-white border border-zinc-200/90 shadow-2xl shadow-zinc-200/60 text-left overflow-hidden">
              
              {/* Header row */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                <div>
                  <h3 className="font-semibold text-zinc-950 text-base sm:text-lg">Agent Performance</h3>
                  <div className="flex items-center gap-4 text-xs text-zinc-500 pt-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> Active Agents
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span> Inactive Agents
                    </span>
                  </div>
                </div>
                <div className="px-3 py-1 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600">
                  This Year
                </div>
              </div>

              {/* Chart Grid & SVG Curves */}
              <div className="relative h-64 sm:h-72 w-full pt-6">
                
                {/* Y-Axis lines */}
                <div className="absolute inset-x-0 inset-y-6 flex flex-col justify-between text-[11px] text-zinc-400 pointer-events-none">
                  {[12, 10, 8, 6, 4, 2, 0].map((val) => (
                    <div key={val} className="w-full flex items-center gap-3">
                      <span className="w-5 text-right">{val}</span>
                      <div className="h-px bg-zinc-100 flex-1"></div>
                    </div>
                  ))}
                </div>

                {/* SVG Curve Lines */}
                <svg className="absolute inset-0 w-full h-full p-6 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 240">
                  <defs>
                    <linearGradient id="curveGrad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.25"/>
                      <stop offset="100%" stopColor="#FF7A00" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Active Agents curve (Orange) */}
                  <path 
                    d="M 50 180 C 130 190, 200 110, 280 140 C 360 170, 440 80, 520 70 C 600 60, 680 130, 760 100 C 840 70, 920 120, 970 80 L 970 230 L 50 230 Z" 
                    fill="url(#curveGrad1)"
                  />
                  <path 
                    d="M 50 180 C 130 190, 200 110, 280 140 C 360 170, 440 80, 520 70 C 600 60, 680 130, 760 100 C 840 70, 920 120, 970 80" 
                    fill="none" 
                    stroke="#FF7A00" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                  />

                  {/* Inactive Agents curve (Magenta) */}
                  <path 
                    d="M 50 200 C 140 180, 220 220, 300 170 C 380 120, 460 180, 540 160 C 620 140, 700 180, 780 150 C 860 120, 930 150, 970 140" 
                    fill="none" 
                    stroke="#FF2E93" 
                    strokeWidth="3" 
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                  />
                  
                  {/* Pinpoint Dot */}
                  <circle cx="560" cy="95" r="6" fill="#18181B" stroke="white" strokeWidth="2.5" />
                </svg>

                {/* Floating Tooltip matching Figma */}
                <div className="absolute top-12 left-1/2 -translate-x-12 sm:translate-x-4 bg-zinc-950 text-white rounded-xl p-3 shadow-xl text-xs space-y-1 z-20 border border-zinc-800 pointer-events-none">
                  <div className="text-zinc-400 font-medium">July 2024</div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Active</span>
                    <span className="font-semibold text-white">56,245</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> Inactive</span>
                    <span className="font-semibold text-zinc-300">$2,100</span>
                  </div>
                </div>

                {/* X-Axis labels */}
                <div className="absolute inset-x-0 bottom-0 pl-10 pr-2 flex justify-between text-[11px] text-zinc-400">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Testimonial ticker */}
          <div className="pt-16 border-t border-zinc-100 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {brandQuotes.map((b, i) => (
                <div key={i} className="p-5 rounded-2xl bg-zinc-50/70 border border-zinc-200/50 space-y-3 hover:bg-zinc-50 transition-colors">
                  <div className="font-display font-bold text-lg text-zinc-900 tracking-tight">
                    {b.name}
                  </div>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {b.quote}
                  </p>
                  <div className="text-[11px] text-zinc-400 font-medium">
                    — {b.role}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 2. "AI THAT GETS WORK DONE"                              */}
      {/* ======================================================== */}
      <section id="features" className="py-24 bg-zinc-50/60 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight">
              AI That Gets Work Done
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg">
              Where AI gets things done by automating tasks, making intelligent decisions, and operating continuously without interruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Card 1: Self-Learning System */}
            <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm space-y-6 hover:shadow-md transition-shadow">
              <div className="p-4 bg-orange-50/70 rounded-2xl border border-orange-100/60 space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span>Revenue</span>
                  <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">+245%</span>
                </div>
                <div className="text-2xl font-bold font-display text-zinc-900">$5,234.00</div>
                <div className="h-6 w-full flex items-end gap-1 pt-2">
                  <div className="w-1/6 h-2 bg-orange-200 rounded-sm"></div>
                  <div className="w-1/6 h-3 bg-orange-300 rounded-sm"></div>
                  <div className="w-1/6 h-4 bg-orange-400 rounded-sm"></div>
                  <div className="w-1/6 h-3 bg-orange-300 rounded-sm"></div>
                  <div className="w-1/6 h-5 bg-orange-500 rounded-sm"></div>
                  <div className="w-1/6 h-6 bg-orange-600 rounded-sm"></div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-zinc-950">Self-Learning System</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Our self-learning system continuously improves by analyzing outcomes and refining behavioral accuracy.
                </p>
              </div>
            </div>

            {/* Card 2: Real-Time Monitoring */}
            <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm space-y-6 hover:shadow-md transition-shadow">
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200/70 text-xs space-y-2">
                <div className="flex justify-between font-semibold text-zinc-400 border-b border-zinc-200 pb-1">
                  <span>Page path</span>
                  <span>Sessions</span>
                  <span>Efficiency</span>
                </div>
                <div className="flex justify-between text-zinc-700">
                  <span>/home</span>
                  <span>2,450</span>
                  <span className="text-emerald-600 font-semibold">99%</span>
                </div>
                <div className="flex justify-between text-zinc-700">
                  <span>/features</span>
                  <span>512</span>
                  <span className="text-emerald-600 font-semibold">95%</span>
                </div>
                <div className="flex justify-between text-zinc-700">
                  <span>/contact</span>
                  <span>141</span>
                  <span className="text-emerald-600 font-semibold">91%</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-zinc-950">Real-Time Monitoring</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Monitor AI agent activity, performance, and operational outcomes in real time across departments.
                </p>
              </div>
            </div>

            {/* Card 3: Enterprise-Grade Security */}
            <div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-sm space-y-6 hover:shadow-md transition-shadow">
              <div className="p-6 bg-gradient-to-tr from-orange-50 to-pink-50 rounded-2xl border border-orange-100 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#FF2E93] text-white flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <ShieldCheck size={32} />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-zinc-950">Enterprise-Grade Security</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Enterprise-grade security protects your sensitive data with AES-256 encryption and SOC2 compliance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ======================================================== */}
      {/* 3. UNLOCK LIMITLESS POSSIBILITIES                        */}
      {/* ======================================================== */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight">
            Unlock Limitless Possibilities
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Unlock limitless possibilities with AI that streamlines work, boosts efficiency, and helps your team achieve more with less effort.
          </p>
        </div>

        {/* Feature Block 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 sm:p-12 rounded-3xl bg-zinc-50 border border-zinc-200/80">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-4xl font-display font-medium text-zinc-950 tracking-tight leading-snug">
              Powerful Features Built For Autonomous AI
            </h3>
            <p className="text-zinc-600 text-base leading-relaxed">
              AI agents work continuously to automate tasks, analyze data, and make intelligent decisions day and night without manual supervision.
            </p>
            <div className="space-y-3 pt-2">
              {[
                'Track KPIs in real time across channels',
                'Monitor growth trends instantly with alerts',
                'Compare progress over time with forecasting'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-zinc-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-zinc-950">24/7</div>
                <div className="text-xs text-zinc-500 pt-0.5">Continuous operations</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-zinc-950">80%</div>
                <div className="text-xs text-zinc-500 pt-0.5">Reduction in manual work</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-zinc-950">500+</div>
                <div className="text-xs text-zinc-500 pt-0.5">Teams powered by AI</div>
              </div>
            </div>
          </div>

          {/* Flowchart Mockup */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono pb-2 border-b border-zinc-100">
              <span>WORKFLOW PIPELINE</span>
              <span className="text-emerald-500 font-semibold">● ACTIVE</span>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-between text-sm">
                <span className="font-medium text-zinc-800">Smart budget has finance q3</span>
                <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md font-semibold">is approved</span>
              </div>
              <div className="w-0.5 h-4 bg-orange-400 mx-auto"></div>
              <div className="p-3 bg-orange-50 rounded-xl border border-orange-200 flex items-center justify-between text-sm">
                <span className="font-medium text-orange-900">Sync with #team-falcon</span>
                <span className="text-xs px-2 py-0.5 bg-orange-200 text-orange-800 rounded-md font-semibold">is ready now</span>
              </div>
              <div className="w-0.5 h-4 bg-orange-400 mx-auto"></div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-between text-sm">
                <span className="font-medium text-zinc-800">Sign this NDA</span>
                <span className="text-xs px-2 py-0.5 bg-zinc-200 text-zinc-700 rounded-md font-semibold">#legal-dept</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Block 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 sm:p-12 rounded-3xl bg-zinc-50 border border-zinc-200/80">
          
          {/* Dashboard mockup */}
          <div className="order-2 lg:order-1 bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <h4 className="font-semibold text-zinc-900 text-sm">Advanced Analytics</h4>
              <span className="text-xs text-zinc-500">Live feed</span>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl text-sm">
                <span className="text-zinc-600">Revenue</span>
                <span className="font-bold text-zinc-950">$12,450</span>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+245%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl text-sm">
                <span className="text-zinc-600">Expenses</span>
                <span className="font-bold text-zinc-950">$2,340</span>
                <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">-54%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-xl text-sm border border-orange-100">
                <span className="text-orange-900 font-medium">Net Growth</span>
                <span className="font-bold text-orange-950">$10,110</span>
                <span className="text-xs font-semibold text-orange-600 bg-white px-2 py-0.5 rounded-full">+191%</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl sm:text-4xl font-display font-medium text-zinc-950 tracking-tight leading-snug">
              Advanced Features For Autonomous Intelligence
            </h3>
            <p className="text-zinc-600 text-base leading-relaxed">
              AI agents run continuously to automate tasks and workflows without interruption, proactively executing smart actions.
            </p>
            <div className="space-y-3 pt-2">
              {[
                'Always-On AI Automation across services',
                'Smart, Real-Time Decisions based on telemetry',
                'Live Performance Insights with continuous feedback'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-zinc-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-zinc-950">99.9%</div>
                <div className="text-xs text-zinc-500 pt-0.5">Reliable automation</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-zinc-950">3x Faster</div>
                <div className="text-xs text-zinc-500 pt-0.5">Fraction of time</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-zinc-950">1M+ Tasks</div>
                <div className="text-xs text-zinc-500 pt-0.5">Automated monthly</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Block 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 sm:p-12 rounded-3xl bg-zinc-50 border border-zinc-200/80">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-4xl font-display font-medium text-zinc-950 tracking-tight leading-snug">
              Where Intelligence Becomes Autonomous
            </h3>
            <p className="text-zinc-600 text-base leading-relaxed">
              Where intelligence becomes autonomous—AI agents operate independently to streamline cross-team communications.
            </p>
            <div className="space-y-3 pt-2">
              {[
                'Always-On AI Operations without human bottlenecks',
                'Self-Driven Decision Making aligned with company policies',
                'Continuous Learning & Adaptation to business shifts'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-zinc-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-zinc-950">10×</div>
                <div className="text-xs text-zinc-500 pt-0.5">Productivity boost</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-zinc-950">500+</div>
                <div className="text-xs text-zinc-500 pt-0.5">High-performing teams</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-zinc-950">70%</div>
                <div className="text-xs text-zinc-500 pt-0.5">Faster completion</div>
              </div>
            </div>
          </div>

          {/* Schedule/Agent Squad Mockup */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
            {[
              { title: 'AI Planning Session', time: '10AM - 11AM', team: 'Strategy Core' },
              { title: 'Neural Network Team', time: '01PM - 02PM', team: 'Deep Learning' },
              { title: 'Quantum Computing', time: '03PM - 04PM', team: 'Research Lab' }
            ].map((slot, i) => (
              <div key={i} className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-zinc-950">{slot.title}</div>
                  <div className="text-xs text-zinc-500">{slot.time} • {slot.team}</div>
                </div>
                <div className="flex -space-x-1.5 overflow-hidden">
                  <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-orange-400"></div>
                  <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-pink-400"></div>
                  <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-purple-400"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>


      {/* ======================================================== */}
      {/* 4. CHOSEN BY 2.5K+ COMPANIES (Bento Grid)                */}
      {/* ======================================================== */}
      <section className="py-24 bg-zinc-50/50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight">
              Chosen by 2,5k+ Companies
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg">
              Empowering fast-growing companies and global enterprises with reliable AI autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Box 1: 80% */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm flex flex-col justify-between h-72">
              <div>
                <div className="text-5xl font-display font-medium text-zinc-950">80%</div>
                <p className="text-zinc-600 text-sm mt-2">Reduction in manual tasks for teams</p>
              </div>
              <div className="text-2xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
                <span className="text-orange-500">▶</span> Zentra
              </div>
            </div>

            {/* Box 2: kamksl testimonial with user photo */}
            <div className="rounded-3xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 text-white p-7 shadow-sm flex flex-col justify-between h-72 relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <p className="text-sm font-medium leading-relaxed max-w-[200px]">
                  “Our AI agents now handle workflows 24/7. We’ve reduced manual work and improved efficiency across.”
                </p>
              </div>
              {/* Photo on right side */}
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

            {/* Box 3: 24/7 */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm flex flex-col justify-between h-72">
              <div>
                <div className="text-5xl font-display font-medium text-zinc-950">24/7</div>
                <p className="text-zinc-600 text-sm mt-2">Continuous AI operations, around the clock</p>
              </div>
              <div className="text-2xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
                <span className="text-orange-500">★</span> Synthra
              </div>
            </div>

            {/* Box 4: Cognix Dark Card */}
            <div className="p-8 rounded-3xl bg-[#141416] text-white flex flex-col justify-between h-72 shadow-md relative overflow-hidden">
              <p className="text-sm text-zinc-300 leading-relaxed max-w-xs relative z-10">
                “Setup was fast, integrations were seamless, and results were immediate. The AI agents truly work on their own.”
              </p>
              {/* Watermark logo */}
              <div className="text-2xl font-bold tracking-tight flex items-center gap-2 text-white relative z-10">
                <span>❋</span> Cognix
              </div>
            </div>

            {/* Box 5: 500+ */}
            <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-sm flex flex-col justify-between h-72">
              <div>
                <div className="text-5xl font-display font-medium text-zinc-950">500+</div>
                <p className="text-zinc-600 text-sm mt-2">Teams powered by autonomous AI agents</p>
              </div>
              <div className="text-2xl font-bold tracking-tight text-zinc-900">
                umarex
              </div>
            </div>

            {/* Box 6: Tencat Gradient Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-tr from-[#FF7A00] via-[#FF2E93] to-[#FF6B00] text-white flex flex-col justify-between h-72 shadow-md">
              <p className="text-sm text-white/95 leading-relaxed">
                “This AI agent completely transformed how we work. Tasks run automatically, insights are always up to date, and our team can finally focus on expansion.”
              </p>
              <div className="text-2xl font-bold tracking-tight">
                Tencat
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ======================================================== */}
      {/* 5. PRICING SECTION                                       */}
      {/* ======================================================== */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight">
            Choose The Perfect Plan
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Choose a plan that scales with your needs. All plans include AI agents.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-sm font-medium">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-zinc-950 shadow-sm font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full flex items-center gap-2 transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-white text-zinc-950 shadow-sm font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              <span>Yearly</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            return (
              <div
                key={i}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-[#FF7A00] via-[#FF5500] to-[#E11D48] text-white shadow-2xl shadow-orange-500/30 scale-105 z-10'
                    : 'bg-white border border-zinc-200/80 text-zinc-900 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-zinc-950 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    MOST POPULAR
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold font-display">{plan.name}</h3>
                    <p className={`text-xs mt-1 leading-relaxed ${plan.popular ? 'text-white/80' : 'text-zinc-500'}`}>
                      {plan.desc}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-display font-medium tracking-tight">${price}</span>
                    <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-zinc-500'}`}>/mo/user</span>
                  </div>

                  <button
                    onClick={onOpenDemo}
                    className={`w-full py-3.5 rounded-full text-sm font-semibold transition-all ${
                      plan.popular
                        ? 'bg-white text-zinc-950 hover:bg-zinc-100 shadow-md'
                        : 'bg-zinc-950 text-white hover:bg-zinc-800'
                    }`}
                  >
                    Get Started Now
                  </button>

                  <div className="pt-4 space-y-3">
                    <div className={`text-xs font-semibold uppercase tracking-wider ${plan.popular ? 'text-white/90' : 'text-zinc-500'}`}>
                      What do you get:
                    </div>
                    {plan.features.map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-3 text-sm">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-600'}`}>
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className={plan.popular ? 'text-white' : 'text-zinc-700'}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>


      {/* ======================================================== */}
      {/* 6. WORKFLOW DEMO SECTION (Dark Banner with 3 Photos)     */}
      {/* ======================================================== */}
      <section className="py-24 bg-[#141416] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight leading-tight">
              Our AI agents operate autonomously to automate tasks analyze data and make intelligent decisions real time.
            </h2>
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-full bg-white text-zinc-950 text-sm font-semibold hover:bg-zinc-200 transition-colors"
              >
                Book a Demo →
              </button>
              <button
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-full bg-zinc-800 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* 3 Step Cards with real downloaded photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-5 space-y-4 overflow-hidden group">
              <div className="relative h-56 rounded-2xl overflow-hidden bg-zinc-800">
                <img 
                  src="/assets/Rectangle_1000002051_e6a8f087.png" 
                  alt="Define Goals"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <button 
                  onClick={onOpenDemo}
                  className="absolute inset-0 m-auto w-28 h-9 rounded-full bg-zinc-950/80 backdrop-blur-sm text-white text-xs font-semibold flex items-center justify-center gap-2 border border-zinc-700 hover:bg-zinc-900"
                >
                  <Play size={12} fill="white" />
                  <span>Watch Video</span>
                </button>
              </div>
              <div className="space-y-1.5 px-2 pb-2">
                <h4 className="text-lg font-semibold text-white">Define your goals</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Tell your AI agents what you want to achieve set tasks workflows.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-5 space-y-4 overflow-hidden group">
              <div className="relative h-56 rounded-2xl overflow-hidden bg-zinc-800">
                <img 
                  src="/assets/Rectangle_1000002051_930193f6.png" 
                  alt="Deploy Agents"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="space-y-1.5 px-2 pb-2">
                <h4 className="text-lg font-semibold text-white">Deploy your agents</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Connect tools integrate data sources and launch AI agents effortlessly.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-5 space-y-4 overflow-hidden group">
              <div className="relative h-56 rounded-2xl overflow-hidden bg-zinc-800">
                <img 
                  src="/assets/Rectangle_1000002051_4550b7ad.png" 
                  alt="Let AI Work"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="space-y-1.5 px-2 pb-2">
                <h4 className="text-lg font-semibold text-white">Let AI work</h4>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Agents operate autonomously make smart decisions and optimize.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 7. AI THAT GETS WORK DONE (6 Capability Badges)          */}
      {/* ======================================================== */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight">
              AI that gets work done
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg">
              Where AI gets things done by automating tasks, making intelligent decisions, and operating continuously without interruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: 'Customization Agents',
                desc: 'Customization agents let you tailor AI behavior to your unique business logic and workflows.'
              },
              {
                icon: Database,
                title: 'Secure Data Handling',
                desc: 'Secure data handling ensures that all your information is protected with strict compliance.'
              },
              {
                icon: BarChart3,
                title: 'Task Prioritization',
                desc: 'Task prioritization allows AI agents to automatically rank and manage critical pipeline events.'
              },
              {
                icon: Bell,
                title: 'Instant Alerts',
                desc: 'Instant alerts notify you in real time whenever important system triggers take place.'
              },
              {
                icon: Layers,
                title: 'Adaptive Learning',
                desc: 'Adaptive learning enables AI agents to continuously improve by analyzing recurring patterns.'
              },
              {
                icon: Users,
                title: 'Collaboration Support',
                desc: 'Collaboration support enables AI agents to assist cross-functional teams and departments.'
              }
            ].map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/70 space-y-4 hover:bg-zinc-50 hover:border-zinc-300 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-950">{cap.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 8. FAQ ACCORDION                                         */}
      {/* ======================================================== */}
      <FAQSection onNavigate={onNavigate} />


      {/* ======================================================== */}
      {/* 9. LATEST NEWS & ARTICLES                                */}
      {/* ======================================================== */}
      <section className="py-24 bg-zinc-50/50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight">
                Latest News & Articles
              </h2>
              <p className="text-zinc-600 text-base mt-2">
                Discover our latest insights, product updates, and AI research.
              </p>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
            >
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: '/assets/Frame_1707482556_55386019.png',
                date: 'June 28, 2026',
                title: 'How AI agents transform business workflows'
              },
              {
                img: '/assets/Frame_1707482556_94329ba3.png',
                date: 'June 28, 2026',
                title: '5 Ways to maximize AI agent efficiency'
              },
              {
                img: '/assets/Frame_1707482556_11722487.png',
                date: 'June 28, 2026',
                title: 'The Future of Automation 24/7 AI Agents'
              }
            ].map((art, idx) => (
              <div 
                key={idx} 
                onClick={() => onNavigate('blog-details')}
                className="bg-white rounded-3xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="h-52 overflow-hidden bg-zinc-100">
                  <img 
                    src={art.img} 
                    alt={art.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <div className="text-xs font-medium text-zinc-400">{art.date}</div>
                  <h3 className="text-lg font-semibold text-zinc-950 group-hover:text-orange-600 transition-colors leading-snug">
                    {art.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================== */}
      {/* 10. CTA BANNER                                           */}
      {/* ======================================================== */}
      <CTABanner onOpenDemo={onOpenDemo} />

    </div>
  );
}
