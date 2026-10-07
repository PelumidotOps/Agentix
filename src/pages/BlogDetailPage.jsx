import React from 'react';
import { ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';
import CTABanner from '../components/CTABanner';

export default function BlogDetailPage({ onNavigate, onOpenDemo }) {
  return (
    <div className="py-12 bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link */}
        <div>
          <button
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to all articles</span>
          </button>
        </div>

        {/* Header */}
        <div className="space-y-4 text-center">
          <div className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            Last Updated: 06 May, 2024
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-zinc-950 tracking-tight leading-tight">
            Insights That Shape The Future of Business
          </h1>
        </div>

        {/* Hero Photo */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-zinc-200/80 aspect-[16/9] bg-zinc-100">
          <img 
            src="/assets/image_9_f1dc533a.png" 
            alt="Insights That Shape The Future of Business" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lead In */}
        <div className="text-lg sm:text-xl text-zinc-800 leading-relaxed font-normal border-b border-zinc-200 pb-10">
          In today’s rapidly evolving market, businesses no longer win by instinct alone. Insight—driven by data, technology, and human understanding—has become the foundation of smart decision-making. Companies that act on the right insights adapt faster, innovate better, and stay ahead of change.
        </div>

        {/* Article Body Sections */}
        <div className="space-y-10 text-zinc-700 text-base sm:text-lg leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-2xl font-display font-semibold text-zinc-950">
              Data-Driven Decisions as a Business Standard
            </h2>
            <p>
              Data is no longer just a support tool; it’s a strategic asset. Modern businesses rely on real-time analytics to understand customer behavior, track performance, and predict trends. These insights reduce guesswork and help leaders make confident, informed decisions at every level.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-semibold text-zinc-950">
              AI and Automation Redefining Strategy
            </h2>
            <p>
              Artificial intelligence is transforming how insights are generated and used. From predictive analytics to automated reporting, AI uncovers patterns humans might miss. This allows businesses to move from reactive strategies to proactive planning, shaping the future rather than chasing it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-semibold text-zinc-950">
              Customer Insights That Drive Growth
            </h2>
            <p>
              Understanding customers is at the heart of sustainable success. Insights gathered from feedback, behavior, and engagement help businesses personalize experiences, improve products, and build long-term loyalty. When customers feel understood, growth follows naturally.
            </p>
          </section>

          {/* Inline Graphic Photo */}
          <div className="rounded-3xl overflow-hidden shadow-md my-8 aspect-[16/8] bg-zinc-100">
            <img 
              src="/assets/image_15_c1bdeec5.png" 
              alt="Office collaboration space" 
              className="w-full h-full object-cover"
            />
          </div>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-semibold text-zinc-950">
              Agility as a Competitive Advantage
            </h2>
            <p>
              Markets change quickly, and rigid strategies fail. Insight-driven organizations stay agile by constantly learning and adjusting. They test ideas, analyze results, and pivot when needed—turning uncertainty into opportunity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-semibold text-zinc-950">
              The Role of Leadership in Insight Adoption
            </h2>
            <p>
              Technology alone isn’t enough. Leaders must foster a culture that values insight, curiosity, and continuous learning. When teams are encouraged to question data, share knowledge, and act on insights, innovation becomes part of everyday work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-semibold text-zinc-950">
              Turning Insights Into Action
            </h2>
            <p>
              Insights only matter when they lead to action. The most successful businesses translate data into clear strategies, measurable goals, and practical execution. This bridge between insight and action is what truly shapes long-term success.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-display font-semibold text-zinc-950">
              Looking Ahead
            </h2>
            <p>
              The future of business belongs to organizations that listen, learn, and evolve. By embracing insights powered by data, AI, and human creativity, businesses can not only keep up with change—but lead it with confidence.
            </p>
          </section>

        </div>

      </article>

      <CTABanner onOpenDemo={onOpenDemo} />
    </div>
  );
}
