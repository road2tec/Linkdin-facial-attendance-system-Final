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
    <div className={`min-h-screen w-full transition-colors duration-700 font-sans ${isDark ? 'bg-[#020617] text-slate-200' : 'bg-[#f8fafc] text-slate-800'}`}>
      
      {/* Navbar - Subtle Floating */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 pt-4`}>
        <nav className={`container mx-auto h-16 rounded-2xl transition-all duration-500 border flex items-center justify-between px-6 ${scrolled ? (isDark ? 'bg-[#020617]/80 backdrop-blur-xl border-white/10 shadow-lg' : 'bg-white/80 backdrop-blur-xl border-slate-200 shadow-md') : 'bg-transparent border-transparent'}`}>
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Activity size={18} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>SmartAttend</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-semibold transition-all hover:text-indigo-600 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
             <button onClick={toggleTheme} className={`p-2 rounded-xl transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 text-indigo-400' : 'bg-white/80 hover:bg-white text-indigo-600 shadow-sm'}`}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => navigate('/login')} className={`hidden md:block px-4 py-2 rounded-xl text-sm font-bold transition-all ${isDark ? 'text-slate-300 hover:bg-white/5' : 'text-slate-600 hover:bg-black/5'}`}>Log In</button>
            <button onClick={() => navigate('/signup')} className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold shadow-md hover:scale-[1.02] transition-all">Get Started</button>
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Section - Subtle and Clean */}
      <header className="relative pt-48 pb-24 px-8 min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src="/modern_bg.png" className={`w-full h-full object-cover opacity-20 ${isDark ? 'grayscale' : 'opacity-[0.05]'}`} alt="Bg" />
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#020617]/80 via-transparent to-[#020617]' : 'bg-gradient-to-b from-white/80 via-transparent to-white'}`}></div>
        </div>

        <div className="container mx-auto relative z-10 flex flex-col items-center text-center space-y-8">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-bold border ${isDark ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border-indigo-100'}`}>
            <Sparkles size={14} className="text-yellow-500" /> Professional AI Attendance
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 dark:text-white max-w-4xl">
            Modern Biometrics <br />
            <span className="text-indigo-600">Reimagined for Institutions.</span>
          </h1>
          
          <p className={`text-lg md:text-xl max-w-2xl leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Experience a clean, user-friendly interface for effortless campus identity management and real-time attendance tracking.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button onClick={() => navigate('/login')} className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700 transition-all">Access Dashboard</button>
            <button onClick={() => navigate('/signup')} className={`px-8 py-4 rounded-xl font-bold border transition-all ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-900 hover:bg-black/5'}`}>Sign Up Your College</button>
          </div>
        </div>
      </header>

      {/* Features - User Friendly Grid */}
      <section id="features" className="py-32 px-8">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-20">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Core Features.</h2>
             <p className="text-lg text-slate-500 font-medium">Everything you need to manage attendance with simplicity and precision.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Camera size={26} />, title: 'Adaptive Biometrics', text: 'Fast and accurate facial recognition for all lighting conditions.' },
              { icon: <MapPin size={26} />, title: 'Geosync Protection', text: 'Ensures students are physically present within classroom bounds.' },
              { icon: <LineChart size={26} />, title: 'Instant Analytics', text: 'Clean reports and data visualization for teachers and admins.' },
              { icon: <Users size={26} />, title: 'Multi-Role Panels', text: 'Specific, easy-to-use views for students and faculty.' },
              { icon: <ShieldCheck size={26} />, title: 'Privacy First', text: 'Secure encryption standards for all institutional data.' },
              { icon: <Zap size={26} />, title: 'Zero Latency', text: 'Scanning and recording happens in under a second.' },
            ].map((f) => (
              <div key={f.title} className={`p-8 rounded-2xl border transition-all hover:shadow-md ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-100 shadow-sm'}`}>
                <div className={`h-12 w-12 rounded-xl mb-6 flex items-center justify-center ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-base text-slate-500 leading-relaxed font-medium">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow - Simple Steps */}
      <section id="workflow" className={`py-32 px-8 ${isDark ? 'bg-white/1' : 'bg-slate-50'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">How it Works.</h2>
             <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto">A seamless 4-step process for students and educators.</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
             {[
               { step: '01', title: 'Schedule', text: 'Teachers set class time.' },
               { step: '02', title: 'Identify', text: 'Students scan their face.' },
               { step: '03', title: 'Verify', text: 'System confirms identity.' },
               { step: '04', title: 'Complete', text: 'Attendance is recorded.' },
             ].map((item) => (
               <div key={item.step} className="text-center">
                 <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-md">
                    {item.step}
                 </div>
                 <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                 <p className="text-base text-slate-500 font-medium">{item.text}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Security - Trust and Policy */}
      <section id="security" className={`py-32 px-8 border-t border-b ${isDark ? 'border-white/5 bg-[#020617]' : 'border-slate-200 bg-white'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-12 w-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-md shadow-indigo-600/20">
                <Lock size={24} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Institutional Security.</h2>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                Protecting student and faculty data is our absolute priority. We use bank-grade encryption to ensure identity stays private.
              </p>
              <div className="space-y-4">
                {['Bank-grade Encryption', 'Anti-Spoofing Sensors', 'Privacy First Policy'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-indigo-600" size={20} />
                    <span className="font-bold text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`p-12 rounded-[40px] border flex items-center justify-center ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                <ShieldCheck size={200} className="text-indigo-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist */}
      <footer className={`py-12 px-8 ${isDark ? 'bg-[#020617]' : 'bg-white'}`}>
        <div className="container mx-auto border-t border-slate-200 dark:border-white/5 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                  <Activity size={18} />
                </div>
                <span className="text-xl font-bold tracking-tight">SmartAttend</span>
             </div>
             <div className="flex gap-8 text-sm font-bold text-slate-500">
                <a href="#" className="hover:text-indigo-600">Privacy</a>
                <a href="#" className="hover:text-indigo-600">Terms</a>
                <a href="#" className="hover:text-indigo-600">GitHub</a>
             </div>
             <p className="text-sm font-medium text-slate-500 italic">© 2026 SmartAttend System.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartAttendLanding;