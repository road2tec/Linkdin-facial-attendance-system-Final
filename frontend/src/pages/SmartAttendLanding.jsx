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
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeProvider';

const SmartAttendLanding = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Security', href: '#security' },
  ];

  return (
    <div className={`min-h-screen w-full transition-colors duration-700 font-sans neural-mesh ${isDark ? 'bg-[#020617] text-white' : 'bg-[#f8fafc] text-slate-900'}`}>
      
      {/* Navbar - Floating Glass Layer */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 pt-4`}>
        <nav className={`container mx-auto h-20 rounded-[30px] transition-all duration-700 border flex items-center justify-between px-8 ${scrolled ? (isDark ? 'bg-[#020617]/60 backdrop-blur-3xl border-white/10 shadow-2xl' : 'bg-white/70 backdrop-blur-3xl border-white/50 shadow-xl') : 'bg-transparent border-transparent'}`}>
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="h-10 w-10 rounded-2xl bg-brand-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:rotate-12 transition-all">
              <Activity size={22} className="group-hover:animate-pulse" />
            </div>
            <span className={`text-2xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>SmartAttend</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-[15px] font-black uppercase tracking-widest transition-all hover:text-brand-primary ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
             <button onClick={toggleTheme} className={`p-3 rounded-2xl transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 text-indigo-400 border border-white/5' : 'bg-white/80 hover:bg-white text-indigo-600 border border-slate-200 shadow-sm'}`}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => navigate('/login')} className={`hidden md:block px-6 py-3 rounded-2xl text-[12px] font-black uppercase tracking-widest transition-all ${isDark ? 'text-slate-300 hover:bg-white/5' : 'text-slate-600 hover:bg-black/5'}`}>Log In</button>
            <button onClick={() => navigate('/signup')} className="btn-premium">Get Started</button>
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Section - High End Aesthetics */}
      <header className="relative pt-64 pb-32 px-8 min-h-screen flex items-center overflow-hidden">
        {/* Animated Gradient Orbs Behind Content */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand-primary/10 rounded-full blur-[150px] animate-pulse"></div>
           <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-brand-secondary/10 rounded-full blur-[150px] animate-pulse delay-700"></div>
           
           <img src="/modern_bg.png" className={`w-full h-full object-cover opacity-30 ${isDark ? 'mix-blend-overlay grayscale' : 'mix-blend-multiply opacity-[0.05]'}`} alt="Bg" />
           <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617]' : 'bg-gradient-to-b from-[#f8fafc]/80 via-transparent to-[#f8fafc]'}`}></div>
        </div>

        <div className="container mx-auto relative z-10 flex flex-col items-center text-center space-y-12">
          <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.3em] border animate-float shadow-2xl ${isDark ? 'bg-brand-primary/10 text-brand-primary border-brand-primary/20' : 'bg-white text-brand-primary border-brand-primary/10'}`}>
            <Sparkles size={16} className="text-yellow-500" /> Advanced Recognition System
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900 dark:text-white max-w-5xl">
            THE <span className="text-gradient">INTELLIGENT</span> <br />
            VERIFICATION.
          </h1>
          
          <p className={`text-xl md:text-2xl max-w-3xl leading-relaxed font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Institutional-grade biometrics reimagined with a high-performance interface. Unified security for the modern campus.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 pt-10">
            <button onClick={() => navigate('/login')} className="btn-premium px-12 py-5 text-sm">
              Access Portal Now <ArrowRight className="inline ml-2" size={20} />
            </button>
            <button onClick={() => navigate('/signup')} className={`px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs border-2 transition-all ${isDark ? 'border-white/10 text-white hover:bg-white/5 shadow-2xl shadow-indigo-600/10' : 'border-slate-200 text-slate-900 hover:border-brand-primary shadow-xl shadow-black/5'}`}>
              Institutional Reg
            </button>
          </div>
        </div>
      </header>

      {/* Features - Premium Bento-ish Layout */}
      <section id="features" className="py-48 px-8 relative">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-32 flex flex-col md:flex-row items-end gap-8">
             <div className="flex-1">
                <span className="text-xs font-black tracking-[0.4em] uppercase text-brand-primary mb-6 block">Capabilities</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">Core Ecosystem.</h2>
             </div>
             <p className="text-xl text-slate-500 font-bold leading-relaxed max-w-xs">Modular precision tools built for the next generation of academic environments.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
            {[
              { 
                icon: <Camera size={32} />, 
                title: 'Adaptive Bio-ID', 
                text: 'State-of-the-art neural engine for fast, accurate facial matching that evolves with institutional environment changes.' 
              },
              { 
                icon: <MapPin size={32} />, 
                title: 'Geospatial Lock', 
                text: 'Military-grade proximity boundaries ensuring physical presence within designated classroom zones with precise GPS verification.' 
              },
              { 
                icon: <LineChart size={32} />, 
                title: 'Auditable Data', 
                text: 'Instantly generate compliance-ready reports and identify academic performance trends with high-fidelity visual analytics.' 
              },
              { 
                icon: <Users size={32} />, 
                title: 'Unified Experience', 
                text: 'Tailored, role-based dashboard experiences providing students and faculty members with absolute clarity and control.' 
              },
              { 
                icon: <ShieldCheck size={32} />, 
                title: 'Privacy Protocol', 
                text: 'Encrypted at rest and in transit. Our decentralized signatures ensure student biometric data remains sovereign and secure.' 
              },
              { 
                icon: <Zap size={32} />, 
                title: 'Real-time Execution', 
                text: 'High-concurrency infrastructure built to support thousands of simultaneous scans without any performance degradation.' 
              },
            ].map((f) => (
              <div key={f.title} className="glass-card-elite group p-12 rounded-[50px] relative overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(139,92,246,0.15)] border-white/5 bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className={`h-20 w-20 rounded-3xl mb-10 flex items-center justify-center transition-all duration-700 group-hover:scale-110 shadow-2xl ${isDark ? 'bg-brand-primary/20 text-brand-primary border border-brand-primary/20 shadow-brand-primary/10' : 'bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-indigo-600/5'}`}>
                  {f.icon}
                </div>
                <h3 className="text-3xl font-black tracking-tighter mb-6 group-hover:text-gradient transition-all">{f.title}</h3>
                <p className={`text-lg leading-relaxed font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{f.text}</p>
                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                   <ArrowRight className="text-brand-primary" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow - Professional Steps */}
      <section id="workflow" className={`py-48 px-8 relative overflow-hidden ${isDark ? 'bg-[#020617]' : 'bg-[#fcfdff]'}`}>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-brand-primary/10 hidden lg:block"></div>
         
         <div className="container mx-auto">
          <div className="text-center mb-32">
             <h2 className="text-5xl md:text-[6rem] font-black tracking-tighter leading-none mb-8">Seamless Sync.</h2>
             <p className="text-2xl text-slate-500 font-bold max-w-2xl mx-auto">The architecture behind perfect institutional coordination.</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-24 relative z-10">
             {[
               { step: '01', title: 'Schedule', text: 'Faculty configures session parameters.' },
               { step: '02', title: 'Detect', text: 'System initiates neural scanning protocol.' },
               { step: '03', title: 'Verify', text: 'Instant biometric & spatial authentication.' },
               { step: '04', title: 'Compute', text: 'Records synchronized to secure cloud.' },
             ].map((item) => (
               <div key={item.step} className="text-center group">
                 <div className={`w-20 h-20 rounded-[28px] flex items-center justify-center font-black text-2xl mx-auto mb-10 transition-all duration-700 group-hover:rotate-6 shadow-2xl ${isDark ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary border border-slate-100 shadow-indigo-600/10'}`}>
                    {item.step}
                 </div>
                 <h3 className="text-3xl font-black tracking-tighter mb-4">{item.title}</h3>
                 <p className="text-lg text-slate-500 font-bold">{item.text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Security - High Impact Section */}
      <section id="security" className={`py-48 px-8 border-t border-b ${isDark ? 'bg-[#020617] border-white/5' : 'bg-white border-slate-100 shadow-2xl shadow-indigo-600/5'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-32 items-center">
            <div>
              <div className="h-16 w-16 rounded-[24px] bg-brand-primary text-white flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                <Lock size={32} />
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">Hardened Security.</h2>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-bold">
                Identity integrity is our foundation. Our biometric signature system uses multi-layered encryption to protect every data point.
              </p>
              <div className="grid grid-cols-2 gap-8 font-black text-[11px] uppercase tracking-widest text-slate-500">
                <div className="flex items-center gap-3"><CheckCircle2 className="text-brand-primary" size={24} /> 256-bit AES</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="text-brand-primary" size={24} /> Liveness Check</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="text-brand-primary" size={24} /> End-to-End SSL</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="text-brand-primary" size={24} /> IP Hardened</div>
              </div>
            </div>
            <div className="glass-card-elite p-20 rounded-[64px] border-white/5 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-primary/10 blur-[100px] animate-pulse"></div>
                <ShieldCheck size={260} className="text-brand-primary relative z-10 animate-float transition-transform group-hover:scale-110 duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Professional Polish */}
      <footer className="py-24 px-8 relative">
        <div className="container mx-auto border-t border-slate-200 dark:border-white/10 pt-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-brand-primary flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  <Activity className="text-white" size={20} />
                </div>
                <span className="text-2xl font-black tracking-tighter">SmartAttend</span>
             </div>
             
             <div className="flex gap-16 text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">
                <a href="#" className="hover:text-brand-primary transition-all">Privacy</a>
                <a href="#" className="hover:text-brand-primary transition-all">Terms</a>
                <a href="#" className="hover:text-brand-primary transition-all">GitHub</a>
             </div>

             <div className="flex flex-col items-end gap-2 text-right">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 italic">© 2026 Institutional Excellence.</p>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartAttendLanding;