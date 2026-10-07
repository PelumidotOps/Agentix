import React from 'react';
import { ArrowRight } from 'lucide-react';
import CTABanner from '../components/CTABanner';

export default function BlogPage({ onNavigate, onOpenDemo }) {
  const articles = [
    {
      id: 'insights-future',
      img: '/assets/Frame_1707482556_55386019.png',
      date: 'June 28, 2026',
      title: 'How AI agents transform business workflows',
      category: 'Productivity'
    },
    {
      id: 'maximize-efficiency',
      img: '/assets/Frame_1707482556_94329ba3.png',
      date: 'June 28, 2026',
      title: '5 Ways to maximize AI agent efficiency',
      category: 'Strategy'
    },
    {
      id: 'future-automation',
      img: '/assets/Frame_1707482556_11722487.png',
      date: 'June 28, 2026',
      title: 'The future of automation: 24/7 AI Agents',
      category: 'Automation'
    },
    {
      id: 'innovation-redefining',
      img: '/assets/image_5_b5ce6f9c.png',
      date: 'June 28, 2026',
      title: 'How innovation is redefining the future of business',
      category: 'Innovation'
    },
    {
      id: 'data-driven-decisions',
      img: '/assets/Frame_1707482556_52278870.png',
      date: 'June 28, 2026',
      title: 'Why data-driven decisions matter more than ever',
      category: 'Analytics'
    },
    {
      id: 'stay-ahead',
      img: '/assets/image_7_8dbb10a7.png',
      date: 'June 28, 2026',
      title: 'The strategies modern companies use to stay ahead',
      category: 'Leadership'
    },
    {
      id: 'emerging-trends',
      img: '/assets/image_8_e6425a03.png',
      date: 'June 28, 2026',
      title: 'Emerging trends every business leader should watch',
      category: 'Trends'
    },
    {
      id: 'sustainable-growth',
      img: '/assets/image_15_c1bdeec5.png',
      date: 'June 28, 2026',
      title: 'The role of technology in sustainable business growth',
      category: 'Technology'
    },
    {
      id: 'salable-businesses',
      img: '/assets/image_5_1758eba1.png',
      date: 'June 28, 2026',
      title: 'Building scalable businesses in a fast-changing market',
      category: 'Growth'
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Title */}
        <div className="text-center space-y-3 pt-6">
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-zinc-950 tracking-tight">
            Latest News & Articles
          </h1>
          <p className="text-zinc-600 text-base sm:text-lg max-w-xl mx-auto">
            Stay ahead with news, practical guides, and deep-dives into autonomous systems.
          </p>
        </div>

        {/* Featured Post Card */}
        <div 
          onClick={() => onNavigate('blog-details')}
          className="rounded-3xl border border-zinc-200/80 bg-zinc-50/60 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer hover:bg-zinc-50 transition-all shadow-sm hover:shadow-md group"
        >
          {/* Featured Image */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden h-72 sm:h-96 bg-zinc-200">
            <img 
              src="/assets/image_9_f1dc533a.png" 
              alt="Featured Article" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Featured Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-[#FF7A00] text-white text-xs font-semibold tracking-wide">
              Business
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-zinc-950 group-hover:text-orange-600 transition-colors leading-tight">
              Insights That Shape The Future of Business
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Explore how artificial intelligence and autonomous workflows are revolutionizing operational performance across industries.
            </p>

            {/* Author */}
            <div className="flex items-center gap-3.5 pt-2">
              <img 
                src="/assets/Frame_1707482117_f5ffc887.png" 
                alt="Alex Morgan" 
                className="w-12 h-12 rounded-full object-cover border border-zinc-200"
              />
              <div>
                <div className="font-semibold text-zinc-900 text-sm">Alex Morgan</div>
                <div className="text-xs text-zinc-500">Senior Business Strategist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent News Grid */}
        <div className="space-y-8 pt-8">
          <h2 className="text-3xl font-display font-medium text-zinc-950 tracking-tight">
            Recent News
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((art) => (
              <article
                key={art.id}
                onClick={() => onNavigate('blog-details')}
                className="group cursor-pointer rounded-3xl bg-white border border-zinc-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="h-52 overflow-hidden bg-zinc-100">
                  <img 
                    src={art.img} 
                    alt={art.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-zinc-400">{art.date}</div>
                    <h3 className="text-lg font-semibold text-zinc-950 group-hover:text-orange-600 transition-colors leading-snug">
                      {art.title}
                    </h3>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold text-orange-600">
                    <span>Read Article</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>

      <CTABanner onOpenDemo={onOpenDemo} />
    </div>
  );
}
