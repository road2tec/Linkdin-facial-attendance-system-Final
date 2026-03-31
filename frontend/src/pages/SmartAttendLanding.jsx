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
    { name: 'Workflow', href: '#workflow' },
    { name: 'Statistics', href: '#stats' },
    { name: 'Security', href: '#security' },
  ];

  // Helper for mixed color gradients (Indigo to Violet)
  const premiumGradient = "bg-gradient-to-r from-indigo-600 to-violet-600";
  const softLavenderWash = isDark ? "bg-[#020617]" : "bg-[#f8fafc]";

  return (
    <div className={`min-h-screen w-full transition-colors duration-700 font-sans neural-mesh ${isDark ? 'bg-[#020617] text-slate-100' : 'bg-[#f8fafc] text-slate-900'}`}>
      
      {/* Navbar - Floating Glass Layer */}
      <div className="fixed top-6 left-0 w-full z-50 px-6">
        <nav className={`container mx-auto h-20 rounded-[32px] transition-all duration-500 border ${isDark ? 'bg-[#020617]/40 backdrop-blur-3xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-white/60 backdrop-blur-3xl border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.05)]'} flex items-center justify-between px-8`}>
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="h-10 w-10 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-all">
              <Activity className="text-white" size={20} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>SmartAttend</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-[13px] font-semibold transition-all hover:text-indigo-600 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
             <button 
              onClick={toggleTheme} 
              className={`p-3 rounded-2xl transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 text-indigo-400' : 'bg-white/80 hover:bg-white text-indigo-600'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => navigate('/login')}
              className={`px-6 py-3 rounded-2xl text-[13px] font-bold transition-all ${isDark ? 'text-slate-300 hover:bg-white/5' : 'text-slate-600 hover:bg-black/5'}`}
            >
              Log In
            </button>
            <button 
              onClick={() => navigate('/signup')}
              className="px-8 py-3.5 rounded-2xl bg-indigo-600 text-white text-[13px] font-bold shadow-xl shadow-indigo-600/20 hover:scale-[1.02] transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`mt-4 rounded-3xl p-8 border animate-in slide-in-from-top-4 duration-300 ${isDark ? 'bg-[#020617]/90 backdrop-blur-3xl border-white/10' : 'bg-white/90 backdrop-blur-3xl border-slate-200'}`}>
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-medium"> {link.name} </a>
              ))}
              <div className="h-px bg-slate-200 dark:bg-white/5" />
              <button onClick={() => navigate('/login')} className="py-2">Log In</button>
              <button onClick={() => navigate('/signup')} className="py-4 bg-indigo-600 rounded-2xl text-white">Sign Up</button>
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <header className="relative pt-64 pb-32 px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-indigo-900/40' : 'bg-indigo-200/60'}`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 ${isDark ? 'bg-purple-900/40' : 'bg-purple-200/60'}`}></div>
        </div>

        <div className="container mx-auto relative z-10 flex flex-col items-center text-center space-y-10">
          <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border animate-fade-in ${isDark ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border-indigo-100'}`}>
            <Activity size={14} className="animate-pulse" /> The Standard in Digital Attendance
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1] text-slate-900 dark:text-white max-w-5xl">
            Modern Biometrics <br />
            <span className="text-indigo-600 italic">Reimagined.</span>
          </h1>
          
          <p className={`text-lg md:text-2xl max-w-2xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Transform your institution with high-precision face scans, real-time tracking, and effortless automated reporting.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <button 
              onClick={() => navigate('/login')}
              className="px-10 py-5 rounded-[24px] bg-indigo-600 text-white font-bold shadow-2xl shadow-indigo-600/30 hover:bg-indigo-700 hover:-translate-y-1 transition-all"
            >
              Access Dashboard
            </button>
            <button 
              onClick={() => navigate('/signup')} 
              className={`px-10 py-5 rounded-[24px] font-bold border-2 transition-all ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-900 hover:border-black hover:bg-black/5'}`}
            >
              Institutional Sign-Up
            </button>
          </div>

          {/* Hero Visual Teaser */}
          <div className="w-full max-w-5xl pt-20 relative px-4">
             <div className="absolute -inset-10 bg-indigo-500/10 rounded-[60px] blur-[100px] pointer-events-none"></div>
             <div className={`p-4 rounded-[48px] border ${isDark ? 'bg-[#020617]/50 border-white/5 shadow-2xl' : 'bg-white/50 border-white shadow-xl'} backdrop-blur-xl relative overflow-hidden group hover:scale-[1.01] transition-transform duration-700`}>
                <div className="aspect-[21/9] rounded-[36px] overflow-hidden relative">
                   <img 
                      src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop" 
                      alt="Abstract Tech" 
                      className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-indigo-900/40 backdrop-blur-[2px]"></div>
                   
                   {/* Scanning Visual Elements */}
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 border-2 border-indigo-400/30 rounded-full animate-ping"></div>
                      <div className="absolute w-80 h-80 border border-white/10 rounded-full animate-pulse"></div>
                      <ShieldCheck size={120} className="text-white relative z-10 opacity-80" />
                   </div>
                   
                   <div className="absolute bottom-10 left-10 p-8 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 text-white max-w-sm text-left">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-2">Live Verification</p>
                      <h3 className="text-2xl font-bold mb-4 tracking-tight">Seamless Security Implementation</h3>
                      <p className="text-sm text-slate-300">Our neural engine processes thousands of data points to ensure 99.9% identity accuracy.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* Stats Section - Dashboard Aligned */}
      <section id="stats" className={`py-40 px-8 relative overflow-hidden`}>
        <div className={`absolute inset-0 ${isDark ? 'bg-[#020617]' : 'bg-[#f8fafc]'}`}></div>
        <div className="container mx-auto relative z-10">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 p-12 rounded-[40px] border border-white/20 ${isDark ? 'bg-white/5 backdrop-blur-3xl shadow-2xl' : 'bg-white/40 backdrop-blur-2xl shadow-xl shadow-black/5 border-white'}`}>
            {[
              { label: 'Campus Integrations', val: '450+' },
              { label: 'Facial Templates', val: '12M+' },
              { label: 'Verified Sessions', val: '80K+' },
              { label: 'System Uptime', val: '99.9%' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className={`text-4xl md:text-5xl font-bold tracking-tighter mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.val}</p>
                <p className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isDark ? 'text-indigo-500' : 'text-indigo-600'}`}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section id="features" className="py-40 px-8">
        <div className="container mx-auto text-left">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-600/10 text-indigo-600 mb-8">
                <Zap size={24} />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Institutional <br />Precision.</h2>
              <p className={`text-lg md:text-xl font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Engineered for massive-scale identity management and institutional security.
              </p>
            </div>
            <div className={`hidden lg:block w-px h-24 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}></div>
            <div className="max-w-xs text-sm text-slate-500 font-medium">
              Every detail is optimized for high-traffic campus environments, ensuring zero friction and maximum security.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Camera size={22} />, 
                title: 'Adaptive Bio-ID', 
                text: 'Advanced facial mapping that works in low-light and diverse environments.' 
              },
              { 
                icon: <MapPin size={22} />, 
                title: 'Geospatial Lock', 
                text: 'Smart proximity detection that guarantees student presence in-class.' 
              },
              { 
                icon: <LineChart size={22} />, 
                title: 'Audit-Ready Reports', 
                text: 'Export detailed analytics for institutional compliance and performance.' 
              },
              { 
                icon: <Users size={22} />, 
                title: 'Multi-Role Portals', 
                text: 'Optimized experiences for faculty, students, and system owners.' 
              },
              { 
                icon: <ShieldCheck size={22} />, 
                title: 'Identity Privacy', 
                text: 'Decentralized data storage ensures biometric data remains private.' 
              },
              { 
                icon: <Globe size={22} />, 
                title: 'Universal Access', 
                text: 'Synchronized cross-platform performance across all modern hardware.' 
              },
            ].map((f) => (
              <div key={f.title} className={`p-10 rounded-[32px] border transition-all duration-500 hover:shadow-2xl hover:bg-white dark:hover:bg-white/5 ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-100 shadow-sm shadow-black/5'}`}>
                <div className={`h-11 w-11 rounded-xl mb-8 flex items-center justify-center ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">{f.title}</h3>
                <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - Workflow Section */}
      <section id="workflow" className={`py-40 px-8 ${isDark ? 'bg-[#020617]' : 'bg-[#f8fafc]'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-32">
             <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">How it Works.</h2>
             <p className={`text-lg md:text-xl max-w-2xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                A seamless 4-step process designed for students and educators.
             </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-12 relative">
             {/* Desktop Connector Line */}
             <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-600/20 to-transparent"></div>

             {[
               { 
                 step: '01', 
                 title: 'Course Scheduling', 
                 text: 'Faculty schedules sessions with precise location and time parameters.',
                 icon: <GraduationCap size={20} />
               },
               { 
                 step: '02', 
                 title: 'Biometric Scan', 
                 text: 'Students scan their face upon entering the designated classroom zone.',
                 icon: <Camera size={20} />
               },
               { 
                 step: '03', 
                 title: 'Spatial Verification', 
                 text: 'System instantly confirms biometric match and geospatial coordinates.',
                 icon: <ShieldCheck size={20} />
               },
               { 
                 step: '04', 
                 title: 'Instant Recording', 
                 text: 'Attendance is recorded and synced to the secure institutional database.',
                 icon: <LineChart size={20} />
               },
             ].map((item, idx) => (
               <div key={item.step} className="relative z-10 group">
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 shadow-lg ${isDark ? 'bg-indigo-600 text-white shadow-indigo-600/20' : 'bg-white text-indigo-600 shadow-indigo-600/10'}`}>
                    {item.icon}
                 </div>
                 <div className="space-y-4">
                    <span className="text-sm font-bold text-indigo-600 tracking-widest uppercase">Step {item.step}</span>
                    <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                    <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                       {item.text}
                    </p>
                 </div>
               </div>
             ))}
          </div>

          {/* CTA Teaser */}
          <div className="mt-40 p-12 rounded-[40px] bg-indigo-600 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-3xl shadow-indigo-600/20">
             <div>
                <h3 className="text-4xl font-bold tracking-tight mb-2">Ready to modernize?</h3>
                <p className="text-indigo-100 font-medium">Join 450+ campuses already using SmartAttend.</p>
             </div>
             <button onClick={() => navigate('/signup')} className="px-10 py-5 rounded-2xl bg-white text-indigo-600 font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                Get Started Now <ArrowRight size={20} />
             </button>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className={`py-48 px-8 border-t border-b ${isDark ? 'bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#312e81] border-white/10' : 'bg-slate-950 border-white/10 text-white'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-32 items-center">
            <div className="text-white text-left">
              <div className={`h-16 w-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white mb-8 shadow-xl shadow-indigo-600/20`}>
                <Lock size={32} />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-[1.1]">Hardened Campus Security.</h2>
              <p className="text-lg md:text-xl mb-12 leading-relaxed font-medium text-slate-400">
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
      <footer className={`py-32 px-8 ${isDark ? 'bg-[#020617]' : 'bg-white'}`}>
        <div className="container mx-auto text-center md:text-left">
          <div className="grid md:grid-cols-4 gap-20">
            <div className="col-span-2">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
                <div className={`h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/20`}>
                  <Activity className="text-white" size={20} />
                </div>
                <span className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>SmartAttend</span>
              </div>
              <p className={`max-w-md text-sm leading-relaxed mb-10 font-medium mx-auto md:mx-0 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
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
          <div className="mt-40 pt-16 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 text-slate-500 font-bold">
             <p className="text-sm">© 2026 SmartAttend. Enhancing Education Safely.</p>
             <div className="flex gap-16 text-sm">
               <a href="#" className="hover:text-indigo-600 transition-all underline decoration-2 underline-offset-8">Twitter</a>
               <a href="#" className="hover:text-indigo-600 transition-all underline decoration-2 underline-offset-8">LinkedIn</a>
               <a href="#" className="hover:text-indigo-600 transition-all underline decoration-2 underline-offset-8">GitHub</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartAttendLanding;