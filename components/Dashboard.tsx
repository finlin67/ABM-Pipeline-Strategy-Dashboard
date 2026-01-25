import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, 
  Settings, 
  Target, 
  Zap, 
  Workflow, 
  AlertTriangle, 
  Download, 
  Share2, 
  Rocket,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const COLORS = {
  primary: "#00d2ff",
  accent: "#f59f0a",
  navyDeep: "#0a192f",
  navyCard: "#112240",
  navyBorder: "#233554",
  emerald: "#10b981",
  rose: "#fb7185"
};

// Reusable animated counter
const Counter = ({ value, prefix = "", suffix = "" }: { value: number | string, prefix?: string, suffix?: string }) => {
  return (
    <span className="tabular-nums">
      {prefix}{value}{suffix}
    </span>
  );
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'monthly' | 'quarterly'>('monthly');
  
  // Simulate live data updates
  const [stats, setStats] = useState({
    targeting: 450,
    engagement: 120,
    opportunity: 80,
    pipelineValue: 1.2,
    engageRate: 26.6,
    roi: 4.5,
    targets: 450
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        targeting: prev.targeting + Math.floor(Math.random() * 3) - 1,
        engagement: prev.engagement + Math.floor(Math.random() * 2) - 1,
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#0a192f] text-slate-300 font-sans flex flex-col overflow-hidden relative selection:bg-[#00d2ff]/20">
      
      {/* Header */}
      <header className="z-10 flex items-center justify-between px-8 py-5 border-b border-[#233554] bg-[#0a192f]/95 backdrop-blur-md sticky top-0">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-[#00d2ff]/10 rounded border border-[#00d2ff]/20">
            <Network className="text-[#00d2ff]" size={24} />
          </div>
          <div className="flex items-center gap-6">
            <div>
              <h2 className="text-xl font-extrabold text-white tracking-tight uppercase italic flex items-center gap-2">
                ABM Pipeline Strategy
              </h2>
              <p className="text-[10px] text-[#00d2ff] font-bold uppercase tracking-[0.2em]">Active Intelligence Phase</p>
            </div>
            
            {/* Toggle */}
            <div className="bg-[#112240] p-1 rounded-md flex relative border border-[#233554] h-8 w-48">
              <motion.div 
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#00d2ff] rounded-[4px] shadow-[0_0_10px_rgba(0,210,255,0.3)] z-0"
                initial={false}
                animate={{ x: activeTab === 'monthly' ? 4 : '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button 
                onClick={() => setActiveTab('monthly')}
                className={`relative z-10 flex-1 text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-200 ${activeTab === 'monthly' ? 'text-[#0a192f]' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setActiveTab('quarterly')}
                className={`relative z-10 flex-1 text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-200 ${activeTab === 'quarterly' ? 'text-[#0a192f]' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Quarterly
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
            <motion.div 
              animate={{ opacity: [1, 0.5, 1] }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-emerald-500 rounded-full" 
            />
            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-wider">Ready for Launch</span>
          </div>
          <div className="flex gap-3 items-center">
            <button className="flex items-center justify-center rounded px-4 h-9 bg-[#112240] text-white border border-[#233554] text-xs font-bold hover:bg-[#233554] transition-all hover:text-[#00d2ff]">
              <Settings className="mr-2" size={14} /> Settings
            </button>
            <div className="rounded-full w-9 h-9 border border-[#00d2ff]/30 overflow-hidden">
               <img src="https://picsum.photos/100/100?random=88" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden p-6 gap-6 z-10">
        
        {/* Left Section: Funnel */}
        <section className="flex-[1.8] flex flex-col gap-6">
          <div className="bg-[#112240] rounded border border-[#233554] p-8 flex-1 flex flex-col shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-[#00d2ff] pl-3">Funnel Stage Analysis</h3>
              <span className="text-[10px] font-medium text-slate-500 uppercase">Comparison View • FY2024</span>
            </div>

            <div className="grid grid-cols-3 gap-6 relative">
              
              {/* Card 1: Targeting */}
              <FunnelCard 
                icon={<Target size={24} />} 
                title="Targeting" 
                value={stats.targeting} 
                change={12.5} 
                color="text-[#00d2ff]"
                borderColor="border-[#00d2ff]"
                shadowColor="rgba(0,210,255,0.1)"
              >
                 <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 20">
                    <motion.path 
                      d="M0 15 Q 10 18, 20 12 T 40 10 T 60 14 T 80 5 T 100 8" 
                      fill="none" 
                      stroke="#00d2ff" 
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <path d="M0 18 Q 15 15, 30 17 T 60 12 T 90 10 T 100 15" fill="none" opacity="0.6" stroke="#f59f0a" strokeDasharray="2 1" strokeWidth="1"></path>
                  </svg>
              </FunnelCard>

              {/* Card 2: Engagement */}
              <FunnelCard 
                icon={<Zap size={24} />} 
                title="Engagement" 
                value={stats.engagement} 
                change={8.2} 
                color="text-[#00d2ff]"
                borderColor="border-[#00d2ff]"
                shadowColor="rgba(0,210,255,0.1)"
              >
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 20">
                    <motion.path 
                      d="M0 10 Q 15 5, 30 12 T 60 8 T 90 2 T 100 5" 
                      fill="none" 
                      stroke="#00d2ff" 
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                    />
                    <path d="M0 15 Q 20 12, 40 14 T 70 10 T 100 12" fill="none" opacity="0.6" stroke="#f59f0a" strokeDasharray="2 1" strokeWidth="1"></path>
                </svg>
              </FunnelCard>

              {/* Card 3: Opportunity */}
              <FunnelCard 
                icon={<Workflow size={24} />} 
                title="Opportunity" 
                value={stats.opportunity} 
                change={-3.4} 
                color="text-slate-400"
                borderColor="border-[#233554]"
                shadowColor="rgba(0,0,0,0)"
                isNeutral
              >
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 20">
                    <motion.path 
                      d="M0 5 Q 20 10, 40 5 T 60 12 T 80 15 T 100 18" 
                      fill="none" 
                      stroke="#00d2ff" 
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
                    />
                    <path d="M0 8 Q 25 5, 50 8 T 80 4 T 100 10" fill="none" opacity="0.6" stroke="#f59f0a" strokeDasharray="2 1" strokeWidth="1"></path>
                </svg>
              </FunnelCard>

            </div>

            <div className="mt-auto grid grid-cols-2 gap-4 pt-8">
              {/* High Intent Accounts */}
              <div className="p-4 rounded bg-[#0a192f]/50 border border-[#233554]">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-3">High-Intent Accounts</p>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img key={i} className="w-8 h-8 rounded border border-[#233554]" src={`https://picsum.photos/40/40?random=${i}`} alt="User" />
                  ))}
                  <div className="w-8 h-8 rounded border border-[#233554] bg-[#233554] flex items-center justify-center text-[10px] font-bold text-[#00d2ff]">+15</div>
                </div>
              </div>
              
              {/* Bottleneck Alert */}
              <div className="p-4 rounded bg-[#0a192f]/50 border border-[#233554]">
                <p className="text-[10px] text-[#f59f0a] font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                  <AlertTriangle size={12} /> Bottleneck Alert
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                  Conversion velocity is <span className="text-rose-400 font-bold">-4%</span> vs benchmark.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section: Growth Insights */}
        <section className="flex-1 flex flex-col gap-6">
          <div className="bg-[#112240] rounded border border-[#233554] p-6 flex-1 flex flex-col shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-[#00d2ff] pl-3">Growth Insights</h3>
              <div className="flex gap-2">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]"></span>
                  <span className="text-[9px] text-slate-500 uppercase font-bold">Sales</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59f0a]"></span>
                  <span className="text-[9px] text-slate-500 uppercase font-bold">Visits</span>
                </div>
              </div>
            </div>

            {/* Graph Area */}
            <div className="flex-1 min-h-[140px] relative mb-4 bg-[#0a192f]/30 rounded border border-[#233554]/50 p-2 overflow-hidden">
               {/* Grid Lines */}
               <div className="absolute inset-0 grid grid-rows-4 px-2">
                 <div className="border-b border-[#233554]/20"></div>
                 <div className="border-b border-[#233554]/20"></div>
                 <div className="border-b border-[#233554]/20"></div>
                 <div className="border-b border-[#233554]/20"></div>
               </div>
               
               {/* Main Chart SVG */}
               <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <motion.path 
                    d="M0 80 Q 20 60, 40 70 T 80 30 T 100 20" 
                    fill="none" 
                    stroke="#00d2ff" 
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                  />
                  <path d="M0 90 Q 30 70, 50 75 T 90 40 T 100 35" fill="none" stroke="#f59f0a" strokeDasharray="2 1" strokeWidth="1.5"></path>
                  
                  {/* Floating Point */}
                  <motion.circle cx="85" cy="27" r="3" fill="#00d2ff" animate={{ r: [3, 5, 3], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
               </svg>

               <div className="absolute top-2 right-4 text-right">
                 <p className="text-2xl font-black text-[#00d2ff] tracking-tighter tabular-nums">4.5x</p>
                 <p className="text-[10px] text-emerald-400 font-black tabular-nums">+18%</p>
               </div>
            </div>

            {/* Priority Targets List */}
            <div className="space-y-2 overflow-y-auto pr-1">
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Priority Targets</p>
              
              <TargetItem 
                initials="AC" 
                name="Acme Corp" 
                tier="Tier 1 • High Intent" 
                value="$120k" 
                status="Engaged" 
                statusColor="text-emerald-400"
                iconColor="text-[#00d2ff]"
                iconBg="bg-[#00d2ff]/10"
                iconBorder="border-[#00d2ff]/20"
              />
              <TargetItem 
                initials="ST" 
                name="Stark Tech" 
                tier="Tier 1 • Expansion" 
                value="$450k" 
                status="Qualified" 
                statusColor="text-[#00d2ff]"
                iconColor="text-[#f59f0a]"
                iconBg="bg-[#f59f0a]/10"
                iconBorder="border-[#f59f0a]/20"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="z-10 bg-[#0a192f] border-t border-[#233554] p-6 mt-auto">
        <div className="grid grid-cols-4 gap-6 mb-6">
          <StatBox label="Pipeline Value" value={`$${stats.pipelineValue}M`} prev="$1.0M" change={12.5} />
          <StatBox label="Engage Rate" value={`${stats.engageRate}%`} prev="22.8%" change={3.8} />
          <StatBox label="Expected ROI" value={`${stats.roi}x`} prev="4.0x" change={0.5} />
          <StatBox label="Total Targets" value={stats.targets} prev="428" change={5} />
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#233554]/50">
           <div className="flex gap-6">
              <button className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider group">
                <Download className="text-lg group-hover:scale-110 transition-transform" size={18} /> Export
              </button>
              <button className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider group">
                <Share2 className="text-lg group-hover:scale-110 transition-transform" size={18} /> Share
              </button>
           </div>
           
           <div className="flex items-center gap-4">
              <button className="h-10 px-6 rounded bg-[#0a192f] border border-[#233554] text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#233554] transition-all">
                  View Pipeline
              </button>
              
              <motion.button 
                whileHover={{ y: -2, boxShadow: "0 0 20px rgba(99,102,241,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative h-10 px-8 rounded bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-[11px] font-black uppercase tracking-[0.15em] flex items-center gap-3 overflow-hidden"
              >
                {/* Shimmer Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                <span className="relative z-10">Launch Campaign</span>
                <Rocket className="relative z-10 group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>
           </div>
        </div>
      </footer>

    </div>
  );
}

/* --- Subcomponents --- */

function FunnelCard({ icon, title, value, change, color, borderColor, shadowColor, children, isNeutral = false }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: `0 0 20px ${isNeutral ? 'rgba(35,53,84,0.5)' : 'rgba(0,210,255,0.3)'}` }}
      className="bg-[#0a192f]/40 border border-[#233554]/60 rounded-lg p-5 flex flex-col items-center group cursor-default transition-all duration-300"
    >
      <div 
        className={`w-14 h-14 rounded-full bg-[#0a192f] border-2 flex items-center justify-center mb-4 transition-all duration-300 ${color} ${borderColor}`}
        style={{ boxShadow: `0 0 15px ${shadowColor}` }}
      >
        {icon}
      </div>
      <p className="font-black text-white text-[11px] uppercase tracking-tighter mb-1">{title}</p>
      <p className={`text-2xl font-black tabular-nums tracking-tighter ${isNeutral ? 'text-[#00d2ff]' : 'text-[#00d2ff]'}`}>
        <Counter value={value} />
      </p>
      
      <div className="mt-2 flex items-center gap-1.5">
        <span className={`${change > 0 ? 'text-emerald-400' : 'text-rose-400'} text-[10px] font-bold tabular-nums flex items-center`}>
          {change > 0 ? '+' : ''}{change}%
        </span>
        <span className="text-[9px] text-slate-500 uppercase font-medium">vs Prev Q</span>
      </div>
      
      <div className="w-full h-8 mt-4 overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}

function StatBox({ label, value, prev, change }: any) {
  return (
    <div className="bg-[#112240]/50 p-4 border-l border-[#00d2ff]/30">
      <p className="text-[10px] text-slate-500 font-black uppercase tracking-wider mb-2">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-black text-[#00d2ff] tabular-nums tracking-tighter">{value}</p>
      </div>
      <div className="flex flex-col gap-0.5 mt-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-slate-500 font-bold">Prev Q: <span className="tabular-nums text-slate-400">{prev}</span></span>
          <span className="text-[10px] text-emerald-400 font-black tabular-nums flex items-center gap-1">
            <ArrowUp size={8} strokeWidth={4} /> {change}%
          </span>
        </div>
        <span className="text-[8px] text-slate-600 uppercase font-bold tracking-tighter">v. Prev Quarter</span>
      </div>
    </div>
  );
}

function TargetItem({ initials, name, tier, value, status, statusColor, iconColor, iconBg, iconBorder }: any) {
  return (
    <div className="flex items-center justify-between p-2.5 rounded bg-[#0a192f] border border-[#233554] hover:border-[#00d2ff]/30 transition-colors cursor-pointer group">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded ${iconBg} border ${iconBorder} flex items-center justify-center font-black text-[10px] ${iconColor}`}>
          {initials}
        </div>
        <div>
          <p className="text-xs font-bold text-white group-hover:text-[#00d2ff] transition-colors">{name}</p>
          <p className="text-[9px] text-slate-500 uppercase">{tier}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[11px] font-bold text-white tabular-nums">{value}</p>
        <p className={`text-[9px] font-bold ${statusColor}`}>{status}</p>
      </div>
    </div>
  );
}
