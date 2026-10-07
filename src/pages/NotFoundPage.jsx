import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage({ onNavigate }) {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
        
        {/* 404 Cute Monster SVG Illustration */}
        <div className="w-80 sm:w-96 mx-auto">
          <svg viewBox="0 0 500 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
            {/* Orange Banner holding "404" */}
            <rect x="75" y="45" width="350" height="95" rx="8" fill="#FF7A00" />
            
            {/* "404" text inside banner */}
            <text x="180" y="115" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="72" fill="white">4</text>
            {/* Planet / orbital atom for the '0' */}
            <g transform="translate(250, 92)">
              <circle cx="0" cy="0" r="22" stroke="white" strokeWidth="4.5" fill="none" />
              <ellipse cx="0" cy="0" rx="32" ry="12" stroke="white" strokeWidth="3" transform="rotate(-30)" fill="none" />
              <circle cx="20" cy="-12" r="3.5" fill="white" />
            </g>
            <text x="290" y="115" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="72" fill="white">4</text>

            {/* Left Arm reaching up to banner */}
            <path d="M125 105 C 100 130, 80 160, 140 220" stroke="#2D7A68" strokeWidth="20" strokeLinecap="round" fill="none"/>
            <circle cx="115" cy="115" r="14" fill="#246455" />

            {/* Right Arm reaching up to banner */}
            <path d="M375 105 C 400 130, 420 160, 360 220" stroke="#2D7A68" strokeWidth="20" strokeLinecap="round" fill="none"/>
            <circle cx="385" cy="115" r="14" fill="#246455" />

            {/* Feet */}
            <path d="M 230 360 C 230 400, 180 430, 220 430 C 260 430, 250 370, 250 360" fill="#246455" />
            <path d="M 270 360 C 270 400, 320 430, 280 430 C 240 430, 250 370, 250 360" fill="#246455" />

            {/* Monster Body (Round green blob) */}
            <ellipse cx="250" cy="260" rx="145" ry="110" fill="#2D7A68" />
            {/* Texture spots */}
            <circle cx="160" cy="220" r="10" fill="#246455" opacity="0.4" />
            <circle cx="140" cy="245" r="7" fill="#246455" opacity="0.4" />
            <circle cx="340" cy="220" r="12" fill="#246455" opacity="0.4" />
            <circle cx="360" cy="250" r="8" fill="#246455" opacity="0.4" />

            {/* Big Eyes */}
            <circle cx="205" cy="225" r="16" fill="white" />
            <circle cx="208" cy="225" r="9" fill="#18181B" />
            <circle cx="211" cy="222" r="3.5" fill="white" />

            <circle cx="295" cy="225" r="16" fill="white" />
            <circle cx="292" cy="225" r="9" fill="#18181B" />
            <circle cx="295" cy="222" r="3.5" fill="white" />

            {/* Big Smiling Mouth */}
            <path d="M 175 270 C 190 325, 310 325, 325 270 Z" fill="#18181B" />
            {/* Red Tongue */}
            <path d="M 220 315 C 235 285, 265 285, 280 315 Z" fill="#D9433B" />
            {/* White Teeth */}
            <path d="M 195 270 L 205 280 L 215 270" fill="white" />
            <path d="M 235 270 L 245 280 L 255 270" fill="white" />
            <path d="M 275 270 L 285 280 L 295 270" fill="white" />

            {/* Cute Green Feet / Tentacles */}
            <path d="M 235 340 C 235 410, 175 435, 195 435 C 220 435, 250 380, 250 350" fill="#2D7A68" />
            <path d="M 265 340 C 265 410, 325 435, 305 435 C 280 435, 250 380, 250 350" fill="#2D7A68" />
            <ellipse cx="205" cy="425" rx="35" ry="16" fill="#246455" />
            <ellipse cx="295" cy="425" rx="35" ry="16" fill="#246455" />
          </svg>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-display font-medium text-zinc-950 tracking-tight">
            Sorry! Page Not Found
          </h1>
          <p className="text-zinc-600 text-base sm:text-lg max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Back to Home Button */}
        <div>
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF7A00] hover:bg-[#EA6A00] text-white font-medium text-sm transition-all shadow-md shadow-orange-500/20 active:scale-95"
          >
            <ArrowLeft size={16} />
            <span>Go Back To Home</span>
          </button>
        </div>

      </div>
    </div>
  );
}
