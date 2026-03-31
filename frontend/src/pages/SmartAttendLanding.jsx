import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  LineChart, 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  Zap, 
  Camera, 
  ArrowRight,
  Globe,
  Activity,
  Menu,
  X,
  Shield,
  Moon,
  Sun,
  Lock,
  Sparkles,
  Smartphone,
  Server,
  Fingerprint
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeProvider';

const SmartAttendLanding = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Security', href: '#security' },
  ];

  const premiumGradient = "bg-gradient-to-r from-indigo-700 via-violet-600 to-indigo-700";
  
  return (
    <div className={`min-h-screen w-full transition-colors duration-1000 font-sans selection:bg-indigo-500/30 ${isDark ? 'bg-[#020617] text-slate-100' : 'bg-[#fcfdff] text-slate-900'}`}>
      
      {/* Noise Overlay for Texture */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Navbar */}
      <div className={`fixed top-0 left-0 w-full z-[110] transition-all duration-500 px-6 pt-6 ${scrolled ? 'translate-y-[-10px]' : ''}`}>
        <nav className={`container mx-auto h-20 rounded-[30px] transition-all duration-700 border ${scrolled ? (isDark ? 'bg-[#020617]/60 backdrop-blur-3xl border-white/10 shadow-2xl' : 'bg-white/70 backdrop-blur-3xl border-white/40 shadow-xl') : 'bg-transparent border-transparent'} flex items-center justify-between px-8`}>
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="h-10 w-10 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:rotate-[15deg] transition-all">
              <Activity className="text-white" size={20} />
            </div>
            <span className={`text-2xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>SmartAttend</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-[15px] font-bold tracking-tight transition-all hover:text-indigo-600 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={toggleTheme} className={`p-3 rounded-2xl transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 text-indigo-400' : 'bg-white/80 hover:bg-white text-indigo-600 shadow-sm'}`}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => navigate('/login')} className={`px-6 py-3 rounded-2xl text-[15px] font-bold transition-all ${isDark ? 'text-slate-300 hover:bg-white/5' : 'text-slate-600 hover:bg-black/5'}`}>Log In</button>
            <button onClick={() => navigate('/signup')} className="px-8 py-3.5 rounded-2xl bg-indigo-600 text-white text-[15px] font-black shadow-[0_15px_35px_rgba(79,70,229,0.3)] hover:scale-[1.05] active:scale-95 transition-all">Get Started</button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <header className="relative pt-64 pb-32 px-8 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/modern_bg.png" className={`w-full h-full object-cover opacity-30 ${isDark ? 'mix-blend-overlay' : 'mix-blend-multiply opacity-[0.1]'}`} alt="Hero Bg" />
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#020617]/95 via-transparent to-[#020617]' : 'bg-gradient-to-b from-white/95 via-transparent to-white'}`}></div>
        </div>

        <div className="container mx-auto relative z-10 flex flex-col items-center text-center space-y-12">
          <div className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-black tracking-widest uppercase border animate-float shadow-xl ${isDark ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' : 'bg-white text-indigo-600 border-white'}`}>
             <Sparkles size={16} className="text-yellow-400" /> Automated Excellence
          </div>
          
          <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.9] text-slate-900 dark:text-white max-w-6xl">
            Identity in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600 italic">High Definition.</span>
          </h1>
          
          <p className={`text-xl md:text-2xl max-w-3xl leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Experience the future of campus governance with biometric precision and seamless geospatial intelligence.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <button onClick={() => navigate('/login')} className="px-12 py-6 rounded-[30px] bg-indigo-600 text-white font-black text-lg shadow-[0_20px_50px_rgba(79,70,229,0.4)] hover:shadow-[0_25px_60px_rgba(79,70,229,0.6)] hover:-translate-y-2 transition-all group">
              Start Scanning <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
            <button onClick={() => navigate('/signup')} className={`px-12 py-6 rounded-[30px] font-black text-lg border-2 transition-all ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-900 hover:border-black hover:bg-black/5'}`}>Institutional Sign-Up</button>
          </div>
        </div>
      </header>

      {/* Partners Marquee */}
      <div className={`py-12 border-y ${isDark ? 'border-white/5 bg-white/2' : 'border-slate-100 bg-slate-50/50'} overflow-hidden`}>
         <div className="flex whitespace-nowrap animate-shimmer gap-24 items-center opacity-30 grayscale hover:grayscale-0 transition-all cursor-default">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className={`flex items-center gap-4 text-3xl font-black tracking-tighter ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                <Globe size={24} /> UNIVERSITY GLOBAL SYSTEM {i}
              </div>
            ))}
         </div>
      </div>

      {/* Bento Grid Features */}
      <section id="features" className="py-48 px-8 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mb-32">
             <span className="text-sm font-black tracking-[0.3em] uppercase text-indigo-600 mb-6 block">Capabilities</span>
             <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9]">The Bento Box of <br /> Campus Control.</h2>
             <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">Modular, high-performance tools integrated into a single unified architecture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 h-auto lg:h-[900px]">
             {/* Main AI Card */}
             <div className={`md:col-span-2 md:row-span-2 group overflow-hidden rounded-[48px] border transition-all duration-700 hover:shadow-3xl p-12 relative flex flex-col justify-end ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-100 shadow-xl shadow-black/5'}`}>
                <div className="absolute top-12 left-12 w-24 h-24 rounded-3xl bg-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-600/30">
                   <Camera size={40} />
                </div>
                <div className="absolute top-0 right-0 w-full h-full opacity-20 group-hover:scale-110 transition-transform duration-1000">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[40px] border-indigo-600/10 rounded-full animate-spin-slow"></div>
                </div>
                <div className="relative z-10">
                   <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-sm font-black mb-6">Flagship AI</span>
                   <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Neural Bio-Scan 2.0</h3>
                   <p className="text-lg text-slate-500 font-medium leading-relaxed">Advanced 3D facial mapping that process 8,000+ landmarks in milliseconds for 99.9% identification accuracy.</p>
                </div>
             </div>

             {/* Geofence Card */}
             <div className={`md:col-span-2 group rounded-[48px] border p-10 flex flex-col justify-between transition-all duration-700 hover:shadow-2xl ${isDark ? 'bg-indigo-600/10 border-indigo-500/20' : 'bg-indigo-50 border-indigo-100'}`}>
                <div className="flex justify-between items-start">
                   <div className="h-14 w-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                      <MapPin size={28} />
                   </div>
                   <Activity className="text-indigo-600/30" size={40} />
                </div>
                <div>
                   <h3 className="text-3xl font-black tracking-tighter mb-4">Spatial Geofencing</h3>
                   <p className="text-base text-slate-500 font-medium">Coordinate-locked attendance that strictly enforces classroom presence rules.</p>
                </div>
             </div>

             {/* Security Card */}
             <div className={`group rounded-[48px] border p-10 transition-all duration-700 hover:scale-[1.02] ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-100 shadow-xl shadow-black/5'}`}>
                <div className="h-12 w-12 rounded-2xl bg-violet-600/10 text-violet-600 flex items-center justify-center mb-8">
                   <ShieldCheck size={24} />
                </div>
                <h3 className="text-2xl font-black tracking-tighter mb-4">Hardened Logic</h3>
                <p className="text-sm text-slate-400 font-bold">Encrypted from end-to-end.</p>
             </div>

             {/* Analytics Card */}
             <div className={`group rounded-[48px] border p-10 transition-all duration-700 hover:scale-[1.02] ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-100 shadow-xl shadow-black/5'}`}>
                <div className="h-12 w-12 rounded-2xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center mb-8">
                   <LineChart size={24} />
                </div>
                <h3 className="text-2xl font-black tracking-tighter mb-4">Deep Analytics</h3>
                <p className="text-sm text-slate-400 font-bold">Compliance-ready reports.</p>
             </div>
          </div>
        </div>
      </section>

      {/* How it Works - Timeline Section */}
      <section id="workflow" className={`py-48 px-8 ${isDark ? 'bg-[#020617]' : 'bg-[#fcfdff]'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-40">
             <h2 className="text-6xl md:text-[6rem] font-black tracking-tighter mb-8 leading-none">Seamless Flow.</h2>
             <p className="text-2xl text-slate-500 max-w-2xl mx-auto font-medium">The four steps to institutional perfection.</p>
          </div>

          <div className="relative">
             <div className="absolute top-[85px] left-0 w-full h-[4px] bg-indigo-600/5 hidden lg:block">
                <div className="h-full bg-indigo-600 w-1/3 animate-shimmer"></div>
             </div>

             <div className="grid lg:grid-cols-4 gap-20">
               {[
                 { step: '01', title: 'Schedule', icon: <Smartphone size={24} />, text: 'Faculty sets time/area.' },
                 { step: '02', title: 'Detect', icon: <Camera size={24} />, text: 'Real-time facial scan.' },
                 { step: '03', title: 'Verify', icon: <Fingerprint size={24} />, text: 'Biometric cross-check.' },
                 { step: '04', title: 'Record', icon: <Server size={24} />, text: 'Sync to central cloud.' },
               ].map((item) => (
                 <div key={item.step} className="group text-center lg:text-left relative z-10">
                    <div className={`mx-auto lg:mx-0 w-[170px] h-[170px] rounded-[60px] border-4 flex items-center justify-center mb-10 transition-all duration-700 group-hover:rotate-6 group-hover:border-indigo-600 ${isDark ? 'bg-[#0f172a] border-white/5 text-indigo-600 shadow-2xl' : 'bg-white border-slate-50 text-indigo-600 shadow-2xl shadow-indigo-600/10'}`}>
                       {item.icon}
                       <span className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-xl">{item.step}</span>
                    </div>
                    <h3 className="text-3xl font-black tracking-tighter mb-4">{item.title}</h3>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.text}</p>
                 </div>
               ))}
             </div>
          </div>

          <div className="mt-48 p-16 rounded-[60px] bg-[#020617] text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
             <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
             <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]"></div>
             <div className="relative z-10">
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">Start Smarter.</h3>
                <p className="text-2xl text-slate-400 font-medium">The future isn't tomorrow. It's right now.</p>
             </div>
             <button onClick={() => navigate('/signup')} className="relative z-10 px-16 py-8 rounded-[30px] bg-white text-black font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-3xl flex items-center gap-4">
                Deploy Now <ArrowRight size={32} />
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-20 px-8 ${isDark ? 'bg-[#020617]' : 'bg-[#fcfdff]'}`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-12 border-t border-slate-200 dark:border-white/5">
             <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  <Activity className="text-white" size={20} />
                </div>
                <span className={`text-2xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>SmartAttend</span>
             </div>
             <div className="flex gap-12 text-sm font-black tracking-widest uppercase text-slate-500">
                <a href="#" className="hover:text-indigo-600 transition-all">Twitter</a>
                <a href="#" className="hover:text-indigo-600 transition-all">LinkedIn</a>
                <a href="#" className="hover:text-indigo-600 transition-all">GitHub</a>
             </div>
             <p className="font-bold text-slate-500 text-sm italic">© 2026 Evolving Institutional Standards.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartAttendLanding;