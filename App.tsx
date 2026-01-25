import React from 'react';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-950">
      {/* 
        SCALING STRATEGY:
        Outer container: 600x600 fixed.
        Inner content: 1280x720 (High Fidelity).
        Scale Factor: 600 / 1280 = 0.46875.
        Vertical Centering: (600 - (720 * 0.46875)) / 2 = (600 - 337.5) / 2 = 131.25px
      */}
      <div className="w-[600px] h-[600px] overflow-hidden relative bg-[#020c1b] shadow-2xl rounded-xl border border-slate-800 flex flex-col items-center">
        <div 
          className="origin-top-left absolute left-0 top-0"
          style={{ 
            width: '1280px', 
            height: '720px', 
            transform: 'scale(0.46875) translateY(140px)' // Adjusted translation for visual balance
          }}
        >
          <Dashboard />
        </div>
      </div>
    </div>
  );
}