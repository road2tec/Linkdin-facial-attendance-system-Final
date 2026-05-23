import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../context/ThemeProvider';
import { updateProfile } from '../app/features/auth/authThunks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  User, Mail, Phone, Calendar, MapPin, 
  ShieldCheck, Loader, Camera, Edit2, Check, X, Building, BookOpen
} from 'lucide-react';

const UserProfile = () => {
  const { theme, themeConfig, isDark } = useTheme();
  const currentTheme = themeConfig[theme] || {
    background: isDark ? 'bg-[#020617]' : 'bg-[#f8fafc]',
    card: isDark ? 'bg-[#0B1219]' : 'bg-white',
    text: isDark ? 'text-white' : 'text-slate-900',
    secondaryText: isDark ? 'text-slate-400' : 'text-slate-500',
  };

  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  // Edit Mode state
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    dateOfBirth: '',
    gender: '',
    permanentAddress: {
      street: '',
      city: '',
      state: '',
      pincode: '',
      country: ''
    },
    currentAddress: {
      street: '',
      city: '',
      state: '',
      pincode: '',
      country: ''
    }
  });

  // Load user data into state
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        mobile: user.mobile || '',
        dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth).toISOString().split('T')[0] : '',
        gender: user.gender || '',
        permanentAddress: {
          street: user.permanentAddress?.street || '',
          city: user.permanentAddress?.city || '',
          state: user.permanentAddress?.state || '',
          pincode: user.permanentAddress?.pincode || '',
          country: user.permanentAddress?.country || ''
        },
        currentAddress: {
          street: user.currentAddress?.street || '',
          city: user.currentAddress?.city || '',
          state: user.currentAddress?.state || '',
          pincode: user.currentAddress?.pincode || '',
          country: user.currentAddress?.country || ''
        }
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error('Image size must be less than 2MB');
      return;
    }

    const data = new FormData();
    data.append('profileImage', file);

    try {
      await dispatch(updateProfile(data)).unwrap();
      toast.success('Profile picture updated successfully!');
    } catch (err) {
      toast.error(err || 'Failed to update profile picture');
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateProfile(formData)).unwrap();
      toast.success('Profile updated successfully!');
      setIsEditing(false);
    } catch (err) {
      toast.error(err || 'Failed to update profile');
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border transition-all duration-300 outline-none font-bold text-sm ${
    isDark 
      ? 'bg-white/5 border-white/10 text-white focus:border-brand-primary/50 focus:bg-white/10' 
      : 'bg-white border-slate-200 text-slate-900 focus:border-brand-primary/40 focus:bg-slate-50 shadow-sm'
  }`;

  const labelClass = `block text-[10px] font-black uppercase tracking-[0.2em] mb-2 px-1 ${
    isDark ? 'text-slate-500' : 'text-slate-400'
  }`;

  const displayName = `${user?.firstName} ${user?.lastName}`;

  return (
    <div className={`p-4 md:p-8 font-sans`}>
      <ToastContainer position="top-right" theme={isDark ? 'dark' : 'light'} />
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Header Block */}
        <div className={`relative overflow-hidden rounded-[2.5rem] ${currentTheme.card} p-8 border ${isDark ? 'border-[#1E2733]/50' : 'border-indigo-100'} shadow-lg`}>
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Profile Avatar / Photo */}
            <div className="relative group">
              <div className="h-28 w-28 rounded-[2rem] bg-brand-primary/10 flex items-center justify-center overflow-hidden border-2 border-brand-primary/20 shadow-xl">
                {user?.profileImage ? (
                  <img src={user.profileImage.startsWith('http') ? user.profileImage : `${import.meta.env.VITE_API_URL.replace('/api', '')}${user.profileImage}`} alt={displayName} className="w-full h-full object-cover" />
                ) : (
                  <User className="text-brand-primary" size={48} />
                )}
              </div>
              <label className="absolute bottom-1 right-1 bg-brand-primary hover:bg-brand-secondary text-white p-2.5 rounded-2xl cursor-pointer shadow-lg hover:scale-105 transition-all">
                <Camera size={16} />
                <input type="file" onChange={handleProfileImageChange} className="hidden" accept="image/*" />
              </label>
            </div>

            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <h1 className={`text-3xl font-extrabold tracking-tight ${currentTheme.text}`}>{displayName}</h1>
                <span className={`px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  isDark ? 'bg-brand-primary/20 text-brand-light border border-brand-primary/20' : 'bg-indigo-50 text-indigo-700 border border-indigo-100 shadow-sm'
                }`}>
                  {user?.role}
                </span>
                <span className={`px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  user?.status === 'active' 
                    ? (isDark ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border border-emerald-100')
                    : (isDark ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-amber-50 text-amber-700 border-amber-100')
                }`}>
                  {user?.status}
                </span>
              </div>
              <p className={`text-sm ${currentTheme.secondaryText} flex items-center justify-center md:justify-start gap-2`}>
                <Mail size={16} className="text-brand-primary" /> {user?.email}
              </p>
              {user?.mobile && (
                <p className={`text-sm ${currentTheme.secondaryText} flex items-center justify-center md:justify-start gap-2`}>
                  <Phone size={16} className="text-brand-primary" /> {user?.mobile}
                </p>
              )}
            </div>

            <div>
              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="btn-premium px-8 py-3.5 flex items-center gap-2"
                >
                  <Edit2 size={16} /> Edit Profile
                </button>
              ) : (
                <div className="flex gap-3">
                  <button 
                    onClick={() => setIsEditing(false)}
                    className={`px-6 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-widest border transition-all ${
                      isDark ? 'border-white/10 text-slate-400 hover:bg-white/5' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <X size={16} className="inline mr-1" /> Cancel
                  </button>
                  <button 
                    onClick={handleSave}
                    disabled={isLoading}
                    className="btn-premium px-8 py-3.5 flex items-center gap-2"
                  >
                    {isLoading ? <Loader className="animate-spin" size={16} /> : <Check size={16} />} Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Details Form Grid */}
        <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Info Card */}
          <div className={`md:col-span-2 space-y-6 ${currentTheme.card} p-8 rounded-[2.5rem] border ${isDark ? 'border-[#1E2733]/50' : 'border-slate-100'} shadow-sm`}>
            <h3 className={`text-lg font-black tracking-tight ${currentTheme.text} border-b ${isDark ? 'border-white/5' : 'border-slate-100'} pb-4`}>
              Personal Details
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleInputChange} 
                  disabled={!isEditing} 
                  className={inputClass} 
                />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleInputChange} 
                  disabled={!isEditing} 
                  className={inputClass} 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Mobile Number</label>
                <input 
                  type="text" 
                  name="mobile" 
                  value={formData.mobile} 
                  onChange={handleInputChange} 
                  disabled={!isEditing} 
                  className={inputClass} 
                  placeholder="10 Digits"
                />
              </div>
              <div>
                <label className={labelClass}>Gender</label>
                <select 
                  name="gender" 
                  value={formData.gender} 
                  onChange={handleInputChange} 
                  disabled={!isEditing} 
                  className={inputClass}
                >
                  <option value="" disabled className={isDark ? 'bg-[#0F172A]' : 'bg-white'}>Select Gender</option>
                  <option value="male" className={isDark ? 'bg-[#0F172A]' : 'bg-white'}>Male</option>
                  <option value="female" className={isDark ? 'bg-[#0F172A]' : 'bg-white'}>Female</option>
                  <option value="other" className={isDark ? 'bg-[#0F172A]' : 'bg-white'}>Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Date of Birth</label>
                <input 
                  type="date" 
                  name="dateOfBirth" 
                  value={formData.dateOfBirth} 
                  onChange={handleInputChange} 
                  disabled={!isEditing} 
                  className={inputClass} 
                />
              </div>
            </div>

            {/* Address Sections */}
            <div className="space-y-6 pt-4">
              <h4 className={`text-sm font-black uppercase tracking-wider ${isDark ? 'text-brand-light' : 'text-brand-primary'}`}>
                Permanent Address
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className={labelClass}>Street Address</label>
                  <input 
                    type="text" 
                    name="permanentAddress.street" 
                    value={formData.permanentAddress.street} 
                    onChange={handleInputChange} 
                    disabled={!isEditing} 
                    className={inputClass} 
                  />
                </div>
                <div>
                  <label className={labelClass}>City</label>
                  <input 
                    type="text" 
                    name="permanentAddress.city" 
                    value={formData.permanentAddress.city} 
                    onChange={handleInputChange} 
                    disabled={!isEditing} 
                    className={inputClass} 
                  />
                </div>
                <div>
                  <label className={labelClass}>State</label>
                  <input 
                    type="text" 
                    name="permanentAddress.state" 
                    value={formData.permanentAddress.state} 
                    onChange={handleInputChange} 
                    disabled={!isEditing} 
                    className={inputClass} 
                  />
                </div>
                <div>
                  <label className={labelClass}>Pin Code</label>
                  <input 
                    type="text" 
                    name="permanentAddress.pincode" 
                    value={formData.permanentAddress.pincode} 
                    onChange={handleInputChange} 
                    disabled={!isEditing} 
                    className={inputClass} 
                  />
                </div>
                <div>
                  <label className={labelClass}>Country</label>
                  <input 
                    type="text" 
                    name="permanentAddress.country" 
                    value={formData.permanentAddress.country} 
                    onChange={handleInputChange} 
                    disabled={!isEditing} 
                    className={inputClass} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Academic / Role specific info sidebar */}
          <div className="space-y-8">
            <div className={`${currentTheme.card} p-8 rounded-[2.5rem] border ${isDark ? 'border-[#1E2733]/50' : 'border-slate-100'} shadow-sm space-y-6`}>
              <h3 className={`text-lg font-black tracking-tight ${currentTheme.text} border-b ${isDark ? 'border-white/5' : 'border-slate-100'} pb-4`}>
                Academic Space
              </h3>

              {user?.department && (
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                    <Building size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Department</span>
                    <p className={`text-sm font-bold mt-0.5 ${currentTheme.text}`}>{user.department.name || 'Department Attached'}</p>
                  </div>
                </div>
              )}

              {user?.rollNumber && (
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                    <User size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Roll Number</span>
                    <p className={`text-sm font-bold mt-0.5 ${currentTheme.text}`}>{user.rollNumber}</p>
                  </div>
                </div>
              )}

              {user?.admissionYear && (
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'}`}>
                    <Calendar size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Admission Year</span>
                    <p className={`text-sm font-bold mt-0.5 ${currentTheme.text}`}>{user.admissionYear}</p>
                  </div>
                </div>
              )}

              {user?.group && (
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Student Group</span>
                    <p className={`text-sm font-bold mt-0.5 ${currentTheme.text}`}>{user.group.name || 'Group Assigned'}</p>
                  </div>
                </div>
              )}

              {user?.employeeId && (
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Employee ID</span>
                    <p className={`text-sm font-bold mt-0.5 ${currentTheme.text}`}>{user.employeeId}</p>
                  </div>
                </div>
              )}
            </div>

            <div className={`p-8 rounded-[2.5rem] border ${isDark ? 'bg-brand-primary/5 border-brand-primary/20' : 'bg-indigo-50/50 border-indigo-100'} shadow-sm text-center space-y-4`}>
              <div className={`w-12 h-12 rounded-2xl mx-auto flex items-center justify-center ${isDark ? 'bg-brand-primary/20 text-brand-light' : 'bg-indigo-600 text-white'}`}>
                <ShieldCheck size={24} />
              </div>
              <h4 className={`text-sm font-extrabold uppercase tracking-widest ${currentTheme.text}`}>Institutional Security</h4>
              <p className="text-[11px] font-medium leading-relaxed text-slate-500">Your profile information is verified and hosted on the SmartAttend encrypted registry.</p>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default UserProfile;
