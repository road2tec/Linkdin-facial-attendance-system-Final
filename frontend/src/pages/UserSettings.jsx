import React, { useState } from 'react';
import { useTheme } from '../context/ThemeProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  Settings, Sun, Moon, Bell, Shield, Key, Eye, HelpCircle, Info
} from 'lucide-react';

const UserSettings = () => {
  const { theme, toggleTheme, isDark, themeConfig } = useTheme();
  const currentTheme = themeConfig[theme] || {
    background: isDark ? 'bg-[#020617]' : 'bg-[#f8fafc]',
    card: isDark ? 'bg-[#0B1219]' : 'bg-white',
    text: isDark ? 'text-white' : 'text-slate-900',
    secondaryText: isDark ? 'text-slate-400' : 'text-slate-500',
  };

  const [notifications, setNotifications] = useState({
    attendanceReminders: true,
    resultAlerts: true,
    announcements: true,
    systemUpdates: false
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    biometricConfirmation: true
  });

  const handleNotificationChange = (key) => {
    setNotifications(prev => {
      const next = { ...prev, [key]: !prev[key] };
      toast.success('Notification preferences updated!');
      return next;
    });
  };

  const handleSecurityChange = (key) => {
    setSecuritySettings(prev => {
      const next = { ...prev, [key]: !prev[key] };
      toast.success('Security preference updated!');
      return next;
    });
  };

  const toggleClass = "relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none";
  const knobClass = "absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-300";

  return (
    <div className={`p-4 md:p-8 font-sans`}>
      <ToastContainer position="top-right" theme={isDark ? 'dark' : 'light'} />
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Header Block */}
        <div className={`relative overflow-hidden rounded-[2.5rem] ${currentTheme.card} p-8 border ${isDark ? 'border-[#1E2733]/50' : 'border-indigo-100'} shadow-lg`}>
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex items-center gap-6">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${isDark ? 'bg-brand-primary/20 text-brand-light' : 'bg-indigo-600 text-white'}`}>
              <Settings size={28} />
            </div>
            <div>
              <h1 className={`text-3xl font-extrabold tracking-tight ${currentTheme.text}`}>System Settings</h1>
              <p className={`text-sm mt-1 ${currentTheme.secondaryText}`}>Configure your interface, notification and security configurations.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Settings Options Card */}
          <div className="md:col-span-2 space-y-8">
            {/* Appearance Settings */}
            <div className={`${currentTheme.card} p-8 rounded-[2.5rem] border ${isDark ? 'border-[#1E2733]/50' : 'border-slate-100'} shadow-sm space-y-6`}>
              <h3 className={`text-lg font-black tracking-tight ${currentTheme.text} flex items-center gap-3 border-b ${isDark ? 'border-white/5' : 'border-slate-100'} pb-4`}>
                {isDark ? <Moon size={20} className="text-brand-primary" /> : <Sun size={20} className="text-brand-primary" />} Appearance & Feel
              </h3>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className={`text-sm font-extrabold ${currentTheme.text}`}>Interface Theme</h4>
                  <p className="text-xs text-slate-500 mt-1">Switch between beautiful dark mode or clear light mode interface.</p>
                </div>
                <button 
                  onClick={toggleTheme}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                    isDark ? 'bg-white/5 text-amber-300 hover:bg-white/10' : 'bg-slate-100 text-brand-primary hover:bg-slate-200'
                  }`}
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                  {isDark ? 'Light Theme' : 'Dark Theme'}
                </button>
              </div>
            </div>

            {/* Notification settings */}
            <div className={`${currentTheme.card} p-8 rounded-[2.5rem] border ${isDark ? 'border-[#1E2733]/50' : 'border-slate-100'} shadow-sm space-y-6`}>
              <h3 className={`text-lg font-black tracking-tight ${currentTheme.text} flex items-center gap-3 border-b ${isDark ? 'border-white/5' : 'border-slate-100'} pb-4`}>
                <Bell size={20} className="text-brand-primary" /> Notification Center
              </h3>
              
              <div className="space-y-6">
                {[
                  { key: 'attendanceReminders', title: 'Attendance Windows Alerts', desc: 'Notify me instantly when a teacher opens a live attendance window for my class.' },
                  { key: 'resultAlerts', title: 'Academic Test Score alerts', desc: 'Get notified immediately when new quiz, exam or evaluation results are published.' },
                  { key: 'announcements', title: 'Notice board Announcements', desc: 'Notify me when professors or administrators share critical updates on the dashboard.' },
                  { key: 'systemUpdates', title: 'System and Security releases', desc: 'Stay in the loop with institutional platform features and regular system maintenance.' }
                ].map(item => (
                  <div key={item.key} className="flex items-center justify-between">
                    <div className="max-w-md">
                      <h4 className={`text-sm font-extrabold ${currentTheme.text}`}>{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                    <button
                      onClick={() => handleNotificationChange(item.key)}
                      className={`${toggleClass} ${notifications[item.key] ? 'bg-brand-primary' : 'bg-slate-300 dark:bg-white/10'}`}
                    >
                      <div className={`${knobClass} ${notifications[item.key] ? 'transform translate-x-6' : ''}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Configurations */}
            <div className={`${currentTheme.card} p-8 rounded-[2.5rem] border ${isDark ? 'border-[#1E2733]/50' : 'border-slate-100'} shadow-sm space-y-6`}>
              <h3 className={`text-lg font-black tracking-tight ${currentTheme.text} flex items-center gap-3 border-b ${isDark ? 'border-white/5' : 'border-slate-100'} pb-4`}>
                <Shield size={20} className="text-brand-primary" /> Security & Protection
              </h3>
              
              <div className="space-y-6">
                {[
                  { key: 'twoFactorAuth', title: 'Two-Factor Email Verification', desc: 'Enable multi-layered authentication to shield your academic logs from unauthorized entries.' },
                  { key: 'biometricConfirmation', title: 'Strict Face Authentication', desc: 'Require neural face confirmation before initiating any attendance verification block.' }
                ].map(item => (
                  <div key={item.key} className="flex items-center justify-between">
                    <div className="max-w-md">
                      <h4 className={`text-sm font-extrabold ${currentTheme.text}`}>{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                    <button
                      onClick={() => handleSecurityChange(item.key)}
                      className={`${toggleClass} ${securitySettings[item.key] ? 'bg-brand-primary' : 'bg-slate-300 dark:bg-white/10'}`}
                    >
                      <div className={`${knobClass} ${securitySettings[item.key] ? 'transform translate-x-6' : ''}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar info cards */}
          <div className="space-y-8">
            <div className={`${currentTheme.card} p-8 rounded-[2.5rem] border ${isDark ? 'border-[#1E2733]/50' : 'border-slate-100'} shadow-sm space-y-6`}>
              <h3 className={`text-base font-black uppercase tracking-wider ${currentTheme.text} border-b ${isDark ? 'border-white/5' : 'border-slate-100'} pb-4`}>
                Credential Update
              </h3>
              <div className="flex gap-4 items-start">
                <div className={`p-3 rounded-xl ${isDark ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'}`}>
                  <Key size={20} />
                </div>
                <div className="space-y-2">
                  <h4 className={`text-sm font-bold ${currentTheme.text}`}>Change Password</h4>
                  <p className="text-[11px] leading-relaxed text-slate-500">To modify your password, please initiate a credential correction request in your Profile window or contact the institutional IT bureau.</p>
                </div>
              </div>
            </div>

            <div className={`${currentTheme.card} p-8 rounded-[2.5rem] border ${isDark ? 'border-[#1E2733]/50' : 'border-slate-100'} shadow-sm space-y-6`}>
              <h3 className={`text-base font-black uppercase tracking-wider ${currentTheme.text} border-b ${isDark ? 'border-white/5' : 'border-slate-100'} pb-4`}>
                About SmartAttend
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-3 text-xs font-bold text-slate-500">
                  <Info size={16} className="text-brand-primary shrink-0" />
                  <span>Version: v4.2.0 (Stable release)</span>
                </div>
                <div className="flex gap-3 text-xs font-bold text-slate-500">
                  <Eye size={16} className="text-brand-primary shrink-0" />
                  <span>Biometric: face-api.js active</span>
                </div>
                <div className="flex gap-3 text-xs font-bold text-slate-500">
                  <HelpCircle size={16} className="text-brand-primary shrink-0" />
                  <span>Support: support@smartattend.edu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserSettings;
