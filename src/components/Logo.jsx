import React from 'react';

export default function Logo({ className = '', light = false }) {
  return (
    <div className={`flex items-center gap-2.5 font-display font-bold text-2xl tracking-tight select-none ${className}`}>
      {/* Orange rounded square icon */}
      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF6B00] to-[#FFA337] flex items-center justify-center shadow-sm shadow-orange-500/20 flex-shrink-0">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 9.5 19.5 7.5 17 7.5C14.5 7.5 13.5 9.5 13.5 11.5C13.5 13.5 14.5 15 16 15C17.5 15 18 13.8 18 13.8" 
            stroke="white" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="2.2" fill="white" />
        </svg>
      </div>
      <span className={light ? "text-white" : "text-zinc-950"}>
        Agentix
      </span>
    </div>
  );
}
