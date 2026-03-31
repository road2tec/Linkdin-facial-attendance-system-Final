import React, { useState } from 'react';
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
  Lock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeProvider';

const SmartAttendLanding = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Statistics', href: '#stats' },
    { name: 'Security', href: '#security' },
  ];

  // Helper for mixed color gradients (Indigo to Violet)
  const premiumGradient = "bg-gradient-to-r from-indigo-600 to-violet-600";
  const softLavenderWash = isDark ? "bg-[#020617]" : "bg-[#f8fafc]";

  return (
    <div className={`min-h-screen w-full transition-colors duration-700 font-sans neural-mesh ${isDark ? 'bg-[#020617] text-slate-100' : 'bg-[#f8fafc] text-slate-900'}`}>
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isDark ? 'bg-[#020617]/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : 'bg-white/80 backdrop-blur-2xl border-b border-slate-200/40 shadow-sm'}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/20 group-hover:rotate-6 transition-all duration-500`}>
              <Activity className="text-white" size={20} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-indigo-600 transition-colors`}>SmartAttend</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-[11px] font-bold uppercase tracking-widest transition-all hover:text-indigo-600 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={toggleTheme} 
              className={`p-2.5 rounded-xl transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 text-indigo-400' : 'bg-slate-100 hover:bg-slate-200 text-indigo-600'}`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => navigate('/login')}
              className={`text-sm font-semibold transition-all ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              Login
            </button>
            <button 
              onClick={() => navigate('/signup')}
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white text-sm font-bold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-20 left-0 w-full p-8 animate-in slide-in-from-top-5 duration-300 ${isDark ? 'bg-[#0f172a] border-b border-white/10 shadow-2xl' : 'bg-white border-b border-slate-200 shadow-xl'}`}>
            <div className="flex flex-col gap-6 font-bold text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl hover:text-purple-600"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-slate-200 dark:bg-white/10 w-full" />
              <button onClick={() => navigate('/login')} className="w-full py-4 text-center text-xl">Log In</button>
              <button onClick={() => navigate('/signup')} className={`${premiumGradient} w-full py-5 rounded-3xl text-white text-xl`}>Sign Up</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section (Neural Mesh + Glowing Blobs) */}
      <header className={`relative overflow-hidden pt-56 pb-32 px-8 ${isDark ? 'bg-transparent' : 'bg-brand-light/20'}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            {/* Animated Grid Overlay */}
            <div className="absolute inset-0 opacity-20 dark:opacity-40 neural-mesh"></div>
        </div>

        <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-center lg:text-left space-y-10">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase border ${isDark ? 'bg-indigo-500/5 text-indigo-400 border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border-indigo-100'}`}>
              <ShieldCheck size={14} /> AI-Powered Attendance Verification
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-slate-900 dark:text-white">
              Smarter <span className="text-indigo-600 italic font-medium">Authentication</span> <br />
              for Modern Campus.
            </h1>
            
            <p className={`text-lg md:text-xl max-w-xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Mark your presence instantly with high-precision biometric face scans. Secure, transparent, and completely automated.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <button 
                onClick={() => navigate('/login')}
                className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                Go to Dashboard <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => navigate('/signup')} 
                className={`px-8 py-4 rounded-xl font-bold border-2 transition-all ${isDark ? 'border-indigo-500/20 text-indigo-400 hover:bg-indigo-500/5' : 'border-slate-200 text-slate-700 hover:border-indigo-600 hover:text-indigo-600'}`}
              >
                Create Account
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
               <div className="flex flex-col gap-1">
                 <span className="text-2xl font-black">99.9%</span>
                 <span className="text-[9px] font-black uppercase tracking-widest">Accuracy</span>
               </div>
               <div className="w-px h-10 bg-slate-300 dark:bg-white/10"></div>
               <div className="flex flex-col gap-1">
                 <span className="text-2xl font-black">200ms</span>
                 <span className="text-[9px] font-black uppercase tracking-widest">Recognition</span>
               </div>
            </div>
          </div>

          {/* Interactive Elite Mockup */}
          <div className="flex-1 w-full max-w-xl relative group">
             <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-[60px] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
             <div className="glass-card-elite p-3 rounded-[56px] relative overflow-hidden animate-float">
                <div className="bg-[#020617] rounded-[48px] overflow-hidden aspect-[4/5] relative">
                   <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                      alt="Neural Scan Face" 
                      className="w-full h-full object-cover opacity-60"
                   />
                   {/* AI Scanning Visuals */}
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>
                   <div className="scan-line"></div>
                   
                   <div className="absolute top-10 left-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                      <div className="flex items-center gap-3">
                         <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                         <span className="text-[10px] font-black text-white uppercase tracking-widest">ID Verified</span>
                      </div>
                   </div>

                   <div className="absolute bottom-10 left-10 right-10 p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 space-y-3">
                      <div className="flex justify-between items-center text-[10px] font-black text-white/50 uppercase tracking-widest">
                         <span>Neural Match</span>
                         <span className="text-emerald-400">98.4%</span>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-emerald-500 w-[98%] shadow-[0_0_10px_#10b981]"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* Statistics Section (Deep Space) */}
      <section id="stats" className={`py-40 px-6 relative z-10 border-t border-b ${isDark ? 'bg-[#020617] border-white/5' : 'bg-brand-light/20 border-purple-100/50'}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Campuses', val: '320+' },
              { label: 'Face Scans', val: '4.5M+' },
              { label: 'Active Users', val: '150K+' },
              { label: 'Accuracy', val: '99.9%' },
            ].map((s) => (
              <div key={s.label} className="space-y-2">
                <p className={`text-4xl md:text-5xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.val}</p>
                <p className={`text-xs uppercase tracking-widest font-bold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid (Modern Clean White) */}
      <section id="features" className={`py-40 px-6 ${isDark ? 'bg-[#020617] neural-mesh' : 'bg-white neural-mesh'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-28 max-w-4xl mx-auto">
             <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-brand-primary/10 text-brand-primary mb-8">
               <Zap size={24} />
             </div>
             <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Smart System.</h2>
             <p className={`text-xl md:text-2xl leading-relaxed font-bold ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Improving education through advanced technology. Experience a simple way to mark attendance safely.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Camera size={26} className="text-indigo-600" />, 
                title: 'High-Precision Scan', 
                text: 'Fast, secure biometric scans eliminate manual entries and prevent spoofing.' 
              },
              { 
                icon: <MapPin size={26} className="text-violet-600" />, 
                title: 'Proximity Check', 
                text: 'Verified attendance based on precise classroom location logs.' 
              },
              { 
                icon: <LineChart size={26} className="text-indigo-600" />, 
                title: 'Real-time Analytics', 
                text: 'Instant reports and trends for student academic progress.' 
              },
              { 
                icon: <Users size={26} className="text-violet-600" />, 
                title: 'Role Portals', 
                text: 'Dedicated dashboards for admins, teachers, and students.' 
              },
              { 
                icon: <ShieldCheck size={26} className="text-indigo-600" />, 
                title: 'Encrytped Security', 
                text: 'Bank-grade security protocols for all institutional data.' 
              },
              { 
                icon: <Globe size={26} className="text-violet-600" />, 
                title: 'Cloud Integration', 
                text: 'Seamless access to records from any device, anywhere.' 
              },
            ].map((f) => (
              <div key={f.title} className={`p-8 rounded-3xl border transition-all hover:shadow-xl hover:-translate-y-1 ${isDark ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-white border-slate-100'}`}>
                <div className={`h-12 w-12 rounded-xl mb-6 flex items-center justify-center ${isDark ? 'bg-indigo-500/10' : 'bg-indigo-50'}`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{f.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section (Professional Dark Section) */}
      <section id="security" className={`py-48 px-6 border-t border-b ${isDark ? 'bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#312e81] border-white/10' : 'bg-slate-950 border-white/10'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-32 items-center">
            <div className="text-white">
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white mb-8 shadow-xl shadow-indigo-600/20`}>
                <Lock size={32} />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-[1.1]">Hardened Campus Security.</h2>
              <p className="text-lg md:text-xl mb-12 leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}">
                Protecting institutional data is our priority. Our biometric authentication uses encrypted signatures to ensure identity is never compromised.
              </p>
              <ul className="space-y-6 font-bold">
                {[
                  'Bank-grade Data Encryption',
                  'Frictionless Bio-Matching',
                  'Secure Campus Integration',
                  'Identity Privacy Guard'
                ].map(item => (
                  <li key={item} className="flex items-center gap-5">
                    <CheckCircle2 className="text-indigo-500 shrink-0" size={26} />
                    <span className="text-xl">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
               <div className="p-16 rounded-[64px] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-3xl">
                  <div className={`h-[450px] rounded-[48px] ${premiumGradient} flex items-center justify-center relative overflow-hidden shadow-2xl`}>
                     <ShieldCheck size={260} className="text-white/10 absolute -right-16 -bottom-16" />
                     <ShieldCheck size={160} className="text-white animate-pulse" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-32 px-6 ${isDark ? 'bg-[#020617]' : 'bg-white'}`}>
        <div className="container mx-auto text-center md:text-left">
          <div className="grid md:grid-cols-4 gap-20">
            <div className="col-span-2">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
                <div className={`h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20`}>
                  <Activity className="text-white" size={20} />
                </div>
                <span className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>SmartAttend</span>
              </div>
              <p className={`max-w-md text-sm leading-relaxed mb-10 font-medium mx-auto md:mx-0 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                 State-of-the-art campus monitoring solutions for modern academic institutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-indigo-600">Explore</h4>
              <ul className={`space-y-4 text-sm font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                <li><a href="#features" className="hover:text-indigo-600 transition-colors">Features</a></li>
                <li><a href="#stats" className="hover:text-indigo-600 transition-colors">Statistics</a></li>
                <li><a href="#security" className="hover:text-indigo-600 transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-indigo-600">Legal</h4>
              <ul className={`space-y-4 text-sm font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-40 pt-16 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 text-slate-500 font-black">
             <p className="text-lg">© 2026 SmartAttend. Enhancing Education Safely.</p>
             <div className="flex gap-16 text-xl">
               <a href="#" className="hover:text-purple-600 transition-all underline decoration-2 underline-offset-8">Twitter</a>
               <a href="#" className="hover:text-purple-600 transition-all underline decoration-2 underline-offset-8">LinkedIn</a>
               <a href="#" className="hover:text-purple-600 transition-all underline decoration-2 underline-offset-8">GitHub</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartAttendLanding;