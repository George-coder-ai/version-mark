
import React, { useState, useEffect } from 'react';
import { 
  Globe, ChevronLeft, Mail, Lock, User, Store, MapPin, 
  Plus, Mic, Image as ImageIcon, Package, ShoppingBag, 
  BarChart3, MessageSquare, LogOut, Calendar, Link as LinkIcon, 
  CheckCircle2, Trash2, ExternalLink, Sparkles, TrendingUp, 
  ShieldCheck, Zap, Bell, ArrowRight, MousePointer2, Layers,
  Activity, Cpu, Globe2, Scan, Share2, Instagram, Facebook, 
  Twitter, Play, Clock, Filter, Eye, Hash, Users, Target,
  ArrowUpRight, PieChart, Smartphone, Wifi, Server
} from 'lucide-react';
import { AppView, MainTab, Mode, Product, Order, SocialPost, SocialLead, SocialNetwork } from './types';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  // Navigation State
  const [view, setView] = useState<AppView>('splash');
  const [mode, setMode] = useState<Mode>('ecommerce');
  const [activeTab, setActiveTab] = useState<MainTab>('publish');
  
  // App State
  const [selectedLang, setSelectedLang] = useState('English');
  const [isRecording, setIsRecording] = useState(false);
  const [translatedText, setTranslatedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Splash logic
  useEffect(() => {
    if (view === 'splash') {
      const timer = setTimeout(() => setView('language'), 3800);
      return () => clearTimeout(timer);
    }
  }, [view]);

  // Mock Data
  const [products] = useState<Product[]>([
    { id: '1', name: 'Cerulean Glass Vase', sales: 2840, rating: 4.9, inStock: true, price: 89.00 },
    { id: '2', name: 'Artisan Bamboo Watch', sales: 112, rating: 4.7, inStock: true, price: 145.00 },
    { id: '3', name: 'Saffron Silk Scarf', sales: 67, rating: 4.4, inStock: false, price: 55.00 },
  ]);

  const [orders] = useState<Order[]>([
    { id: 'MARK-X901', productName: 'Cerulean Glass Vase', platform: 'Shopify Global', status: 'SHIPPED', date: 'Just now' },
    { id: 'MARK-X902', productName: 'Artisan Bamboo Watch', platform: 'Amazon US', status: 'PROCESSING', date: '14 mins ago' },
    { id: 'MARK-X903', productName: 'Saffron Silk Scarf', platform: 'Etsy Worldwide', status: 'DELIVERED', date: '2 hours ago' },
  ]);

  const [socialPosts] = useState<SocialPost[]>([
    { id: 'P-101', title: 'Winter Collection Teaser', platform: 'Instagram', status: 'SCHEDULED', date: 'Tomorrow', time: '09:00 AM' },
    { id: 'P-102', title: 'Handmade Mug Spotlight', platform: 'TikTok', status: 'DRAFT', date: 'Oct 30', time: '06:30 PM' },
    { id: 'P-103', title: 'Global Shipping Reveal', platform: 'Facebook', status: 'PUBLISHED', date: 'Yesterday', time: '11:15 AM' },
    { id: 'P-104', title: 'Flash Sale Announcement', platform: 'X', status: 'SCHEDULED', date: 'Oct 29', time: '02:00 PM' },
  ]);

  const [leads] = useState<SocialLead[]>([
    { id: 'L-01', name: 'Alisha K.', avatar: 'AK', message: 'Is the silk scarf available in cosmic blue for global shipping?', platform: 'Instagram', time: '12m ago', isHot: true },
    { id: 'L-02', name: 'Rahul M.', avatar: 'RM', message: 'Interested in bulk order for the ceramic mugs. Do you offer corporate branding?', platform: 'LinkedIn', time: '1h ago', isHot: false },
    { id: 'L-03', name: 'Emily Chen', avatar: 'EC', message: 'Love the artisan watch! Do you have a physical studio in London?', platform: 'Facebook', time: 'Yesterday', isHot: true },
    { id: 'L-04', name: 'James Wilson', avatar: 'JW', message: 'Can you provide custom gift wrapping for the Cerulean Vase?', platform: 'TikTok', time: '3h ago', isHot: false },
  ]);

  const [networks] = useState<SocialNetwork[]>([
    { id: 'N-01', name: 'Instagram', status: 'Connected', icon: 'IG', followers: '12.4K' },
    { id: 'N-02', name: 'Facebook', status: 'Connected', icon: 'FB', followers: '4.8K' },
    { id: 'N-03', name: 'TikTok', status: 'Pending', icon: 'TT', followers: '--' },
    { id: 'N-04', name: 'Twitter / X', status: 'Disconnected', icon: 'X', followers: '--' },
    { id: 'N-05', name: 'LinkedIn Business', status: 'Connected', icon: 'LI', followers: '1.2K' },
  ]);

  const handleSimulateVoice = async () => {
    setIsRecording(true);
    setTimeout(async () => {
      setIsRecording(false);
      setIsProcessing(true);
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Generate a premium, high-converting product description for a 'Handcrafted Cerulean Glass Vase' using sensory language and an elite brand voice."
        });
        setTranslatedText(response.text || "Exquisite cerulean hand-blown glass, capturing the essence of Mediterranean tides. A masterpiece of light and form.");
      } catch (err) {
        setTranslatedText("Intelligent processing interrupted. Please verify your connection.");
      } finally {
        setIsProcessing(false);
      }
    }, 2500);
  };

  // --- Views ---

  const SplashScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden bg-[#050507]">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-12"
      >
        <div className="absolute inset-0 bg-blue-500/30 blur-[100px] rounded-full animate-pulse"></div>
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 2, 0, -2, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-64 h-64 bg-white rounded-[70px] flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.3)] relative z-10 p-8 border-[8px] border-slate-900 group"
        >
           <motion.img 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
            src="https://raw.githubusercontent.com/george-coder-ai/MarkitUp-Frontend-Live/main/logo.png" 
            className="w-full h-full object-contain"
            alt="MarkitUp Logo"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <svg viewBox="0 0 100 100" class="w-full h-full text-blue-600" fill="currentColor">
                    <path d="M20 20 L80 20 L80 80 L20 80 Z" opacity="0.1" />
                    <path d="M30 35 L70 35 L75 65 L25 65 Z" fill="url(#grad1)" />
                    <circle cx="35" cy="75" r="8" fill="#1e293b" />
                    <circle cx="65" cy="75" r="8" fill="#1e293b" />
                    <path d="M25 50 L65 50 L55 40 M65 50 L55 60" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" />
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
                      </linearGradient>
                    </defs>
                  </svg>
                `;
              }
            }}
           />
        </motion.div>
      </motion.div>

      <div className="text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "-0.1em" }}
          animate={{ opacity: 1, letterSpacing: "-0.04em" }}
          transition={{ delay: 1, duration: 1 }}
          className="text-8xl font-black text-white italic tracking-tighter shimmer-text"
          style={{ textShadow: "0 0 30px rgba(59,130,246,0.4)" }}
        >
          Mark<span className="text-blue-500">It</span>Up
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="flex items-center justify-center gap-4 mt-6"
        >
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-blue-500/50"></div>
          <span className="text-blue-400 text-sm font-black uppercase tracking-[0.6em] whitespace-nowrap">Unified Commerce Protocol</span>
          <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-blue-500/50"></div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-20 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="text-[10px] font-black text-slate-700 uppercase tracking-widest">Initialising Secure Neural Link</div>
        <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 2.6, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );

  const renderLanguage = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center min-h-screen p-6">
      <motion.div 
        initial={{ y: 40, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        className="glass rounded-[48px] p-12 w-full max-w-lg shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] border border-white/10"
      >
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-black text-white tracking-tight">System Language</h2>
            <p className="text-slate-500 text-sm mt-1">Select your primary operational dialect</p>
          </div>
          <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
            <Globe2 className="text-blue-400 w-7 h-7" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-12">
          {['English', 'Hindi', 'Telugu', 'Tamil', 'Kannada', 'Malayalam', 'Marathi', 'Gujarati', 'Bengali', 'Punjabi', 'Odia', 'Urdu'].map(lang => (
            <motion.button
              key={lang}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedLang(lang)}
              className={`py-4 px-6 rounded-2xl text-xs font-black transition-all border ${selectedLang === lang ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'}`}
            >
              {lang}
            </motion.button>
          ))}
        </div>

        <button 
          onClick={() => setView('login')}
          className="w-full btn-premium py-6 rounded-[32px] font-black text-lg text-white uppercase tracking-widest flex items-center justify-center gap-3"
        >
          Initialize Workspace <ArrowRight className="w-6 h-6" />
        </button>
      </motion.div>
    </motion.div>
  );

  const renderLogin = () => (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="glass rounded-[48px] p-12 w-full max-md shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] -z-10"></div>
        <button onClick={() => setView('language')} className="flex items-center gap-2 text-slate-500 text-xs font-black mb-8 hover:text-white transition-all group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO DIALECT
        </button>
        <div className="flex items-center gap-4 mb-2">
           <div className="w-12 h-12 bg-white rounded-2xl p-2 shadow-xl">
             <img src="https://raw.githubusercontent.com/george-coder-ai/MarkitUp-Frontend-Live/main/logo.png" className="w-full h-full object-contain" alt="Logo" />
           </div>
           <h2 className="text-5xl font-black text-white italic tracking-tighter">Login</h2>
        </div>
        <p className="text-slate-500 text-sm mb-12">Authorized access required for secure terminal</p>
        
        <div className="space-y-6 mb-12">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 ml-4 tracking-[0.2em]">IDENTIFIER</label>
            <div className="relative group">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
              <input type="text" placeholder="Email Address" className="w-full bg-black/40 border border-white/5 rounded-3xl py-6 pl-16 pr-6 outline-none focus:border-blue-500/40 transition-all font-medium" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 ml-4 tracking-[0.2em]">ACCESS KEY</label>
            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
              <input type="password" placeholder="••••••••" className="w-full bg-black/40 border border-white/5 rounded-3xl py-6 pl-16 pr-6 outline-none focus:border-blue-500/40 transition-all font-medium" />
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setView('main')}
          className="w-full btn-premium py-6 rounded-[32px] font-black text-lg text-white uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(59,130,246,0.3)]"
        >
          AUTHENTICATE <Zap className="w-5 h-5" />
        </button>
        
        <div className="text-center mt-10 pt-6 border-t border-white/5">
          <p className="text-slate-500 text-sm font-medium">
            New to MarkItUp? <button onClick={() => setView('register')} className="text-blue-400 font-black hover:text-blue-300 transition-colors underline-offset-4 hover:underline">Create Account</button>
          </p>
        </div>
      </div>
    </motion.div>
  );

  const renderRegister = () => (
    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="glass rounded-[48px] p-12 w-full max-md shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 blur-[50px] -z-10"></div>
        <button onClick={() => setView('login')} className="flex items-center gap-2 text-slate-500 text-xs font-black mb-8 hover:text-white transition-all group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> BACK TO LOGIN
        </button>
        <div className="flex items-center gap-4 mb-2">
           <div className="w-12 h-12 bg-white rounded-2xl p-2 shadow-xl">
             <img src="https://raw.githubusercontent.com/george-coder-ai/MarkitUp-Frontend-Live/main/logo.png" className="w-full h-full object-contain" alt="Logo" />
           </div>
           <h2 className="text-5xl font-black text-white italic tracking-tighter">Register</h2>
        </div>
        <p className="text-slate-500 text-sm mb-12">Join the elite global merchant network</p>
        
        <div className="space-y-6 mb-12">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 ml-4 tracking-[0.2em]">FULL NAME</label>
            <div className="relative group">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
              <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/5 rounded-3xl py-6 pl-16 pr-6 outline-none focus:border-blue-500/40 transition-all font-medium" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 ml-4 tracking-[0.2em]">IDENTIFIER</label>
            <div className="relative group">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
              <input type="text" placeholder="Email Address" className="w-full bg-black/40 border border-white/5 rounded-3xl py-6 pl-16 pr-6 outline-none focus:border-blue-500/40 transition-all font-medium" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 ml-4 tracking-[0.2em]">ACCESS KEY</label>
            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
              <input type="password" placeholder="••••••••" className="w-full bg-black/40 border border-white/5 rounded-3xl py-6 pl-16 pr-6 outline-none focus:border-blue-500/40 transition-all font-medium" />
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => setView('main')}
          className="w-full btn-premium py-6 rounded-[32px] font-black text-lg text-white uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(59,130,246,0.3)]"
        >
          CREATE ACCOUNT <Zap className="w-5 h-5" />
        </button>
        
        <div className="text-center mt-10 pt-6 border-t border-white/5">
          <p className="text-slate-500 text-sm font-medium">
            Already have an account? <button onClick={() => setView('login')} className="text-blue-400 font-black hover:text-blue-300 transition-colors underline-offset-4 hover:underline">Login</button>
          </p>
        </div>
      </div>
    </motion.div>
  );

  const renderDashboard = () => (
    <div className="flex flex-col min-h-screen">
      <header className="p-8 flex items-center justify-between sticky top-0 z-40 bg-black/20 backdrop-blur-2xl border-b border-white/5">
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl border-2 border-slate-900 cursor-pointer"
          >
             <img src="https://raw.githubusercontent.com/george-coder-ai/MarkitUp-Frontend-Live/main/logo.png" className="w-7 h-7 object-contain" alt="M" />
          </motion.div>
          <div>
            <h1 className="text-2xl font-black text-white italic tracking-tighter leading-none">MarkItUp <span className="text-blue-500">Pro</span></h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></span>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Neural Link Active</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <nav className="bg-black/40 p-1.5 rounded-2xl flex gap-1 border border-white/5 shadow-inner">
            <button 
              onClick={() => { setMode('ecommerce'); setActiveTab('publish'); }}
              className={`px-6 py-3 rounded-xl text-[10px] font-black transition-all ${mode === 'ecommerce' ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30' : 'text-slate-500 hover:text-white'}`}
            >
              ECOMMERCE
            </button>
            <button 
              onClick={() => { setMode('social'); setActiveTab('post'); }}
              className={`px-6 py-3 rounded-xl text-[10px] font-black transition-all ${mode === 'social' ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30' : 'text-slate-500 hover:text-white'}`}
            >
              SOCIAL
            </button>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white/5 rounded-2xl border border-white/5 text-slate-400 hover:text-white transition-all relative">
              <Bell className="w-5 h-5" />
              <div className="absolute top-3 right-3 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#0a0a0c]"></div>
            </button>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 p-[2px]">
              <div className="w-full h-full bg-[#0a0a0c] rounded-[14px] flex items-center justify-center font-black text-xs text-blue-400 cursor-pointer hover:bg-transparent hover:text-white transition-all">
                GE
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 px-8 py-10 pb-36 max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {mode === 'ecommerce' ? (
            <motion.div key="ecommerce-viewport" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-10">
              {activeTab === 'publish' && <EcommercePublish handleSimulateVoice={handleSimulateVoice} isRecording={isRecording} isProcessing={isProcessing} translatedText={translatedText} setTranslatedText={setTranslatedText} />}
              {activeTab === 'products' && <EcommerceProducts products={products} />}
              {activeTab === 'orders' && <EcommerceOrders orders={orders} />}
              {activeTab === 'profile' && <MerchantProfile setView={setView} />}
            </motion.div>
          ) : (
            <motion.div key="social-viewport" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="space-y-10">
              {activeTab === 'post' && <SocialStudio setActiveTab={setActiveTab} setMode={setMode} />}
              {activeTab === 'schedule' && <SocialSchedule posts={socialPosts} />}
              {activeTab === 'stats' && <SocialGrowth />}
              {activeTab === 'inbox' && <SocialLeads leads={leads} />}
              {activeTab === 'connect' && <SocialNetworkSettings networks={networks} />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 h-24 glass rounded-[48px] flex items-center justify-around px-6 py-2 border border-white/10 shadow-[0_40px_100px_-10px_rgba(0,0,0,0.8)] z-50 w-[95%] max-w-3xl backdrop-blur-3xl">
        {mode === 'ecommerce' ? (
          <>
            <NavIcon icon={<Plus />} label="Deploy" active={activeTab === 'publish'} onClick={() => setActiveTab('publish')} />
            <NavIcon icon={<Package />} label="Inventory" active={activeTab === 'products'} onClick={() => setActiveTab('products')} />
            <NavIcon icon={<ShoppingBag />} label="Orders" active={activeTab === 'orders'} onClick={() => setActiveTab('orders')} />
            <NavIcon icon={<User />} label="Principal" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
          </>
        ) : (
          <>
            <NavIcon icon={<Plus />} label="Studio" active={activeTab === 'post'} onClick={() => setActiveTab('post')} />
            <NavIcon icon={<Calendar />} label="Schedule" active={activeTab === 'schedule'} onClick={() => setActiveTab('schedule')} />
            <NavIcon icon={<BarChart3 />} label="Growth" active={activeTab === 'stats'} onClick={() => setActiveTab('stats')} />
            <NavIcon icon={<MessageSquare />} label="Leads" active={activeTab === 'inbox'} onClick={() => setActiveTab('inbox')} />
            <NavIcon icon={<LinkIcon />} label="Network" active={activeTab === 'connect'} onClick={() => setActiveTab('connect')} />
          </>
        )}
      </nav>

      <AnimatePresence>
        {isProcessing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-[#0a0a0c]/90 backdrop-blur-xl z-[100] flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 mb-12 flex items-center justify-center">
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[6px] border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full shadow-[0_0_30px_rgba(59,130,246,0.2)]" />
               <Cpu className="w-16 h-16 text-blue-400 animate-pulse" />
            </div>
            <h2 className="text-4xl font-black italic text-white">Gemini Pro Scaling</h2>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mt-3">Synthesizing Market Intelligence...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {view === 'splash' && <SplashScreen key="splash" />}
        {view === 'language' && renderLanguage()}
        {view === 'login' && renderLogin()}
        {view === 'register' && renderRegister()}
        {view === 'main' && renderDashboard()}
      </AnimatePresence>
    </div>
  );
};

// --- Ecommerce Sub-Views ---

const EcommercePublish = ({ handleSimulateVoice, isRecording, isProcessing, translatedText, setTranslatedText }: any) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
    <div className="lg:col-span-8 space-y-8">
      <section className="glass rounded-[48px] p-10 shadow-2xl relative overflow-hidden group border border-white/5">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity"><Cpu className="w-64 h-64" /></div>
        
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30"><Plus className="text-blue-400 w-6 h-6" /></div>
          <div><h3 className="text-3xl font-black text-white italic tracking-tight">Create & Scale</h3><p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1">Multi-Channel Deployment</p></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 ml-4 tracking-[0.2em] uppercase">Visual Assets</label>
              <div className="flex gap-4">
                <motion.button whileHover={{ scale: 1.05 }} className="w-32 h-32 border-2 border-dashed border-white/10 rounded-[32px] flex flex-col items-center justify-center gap-3 text-slate-500 hover:border-blue-500 hover:bg-blue-500/5 hover:text-blue-400 transition-all bg-black/20">
                  <ImageIcon className="w-8 h-8" /><span className="text-[9px] font-black uppercase tracking-widest">Upload</span>
                </motion.button>
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 ml-4 tracking-[0.2em] uppercase">Neural Voice Capture</label>
              <button onClick={handleSimulateVoice} className={`w-full p-8 rounded-[40px] border transition-all flex flex-col items-center justify-center gap-4 ${isRecording ? 'bg-blue-500/10 border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.3)]' : 'bg-black/30 border-white/5 hover:bg-white/5 hover:border-white/20'}`}>
                <div className={`p-6 rounded-full shadow-2xl transition-all ${isRecording ? 'bg-blue-500 scale-110' : 'bg-slate-800'}`}><Mic className="w-7 h-7 text-white" /></div>
                <div className="text-center"><span className="text-sm font-black uppercase tracking-[0.2em] block">{isRecording ? 'Listening...' : 'Voice Input'}</span><span className="text-[10px] text-slate-500 font-bold uppercase mt-1 italic">Speak your product story</span></div>
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center ml-4">
                <label className="text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase">AI Content Generator</label>
                <span className="px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 text-[8px] font-black text-blue-400 uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-pulse">Gemini Ultra 2.0</span>
              </div>
              <textarea value={isProcessing ? "Processing neural translation..." : translatedText} onChange={(e) => setTranslatedText(e.target.value)} placeholder="Your high-fidelity description will appear here instantly..." className="w-full bg-black/40 border border-white/5 rounded-[40px] p-8 outline-none h-64 resize-none text-sm text-slate-300 font-medium leading-relaxed focus:border-blue-500/30 transition-all shadow-inner" />
            </div>
          </div>
        </div>

        {/* Updated Section Based on User Photo */}
        <div className="mt-10 pt-10 border-t border-white/5 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <div className="space-y-4">
              <label className="text-[11px] font-black text-slate-500 tracking-[0.2em] uppercase ml-1">Product Name</label>
              <input type="text" placeholder="e.g. Silk Scarf" className="w-full bg-[#121214] border border-white/10 rounded-[28px] py-6 px-8 outline-none text-sm font-bold focus:border-blue-500/40 text-slate-200 placeholder-slate-600" />
            </div>
            <div className="space-y-4">
              <label className="text-[11px] font-black text-slate-500 tracking-[0.2em] uppercase ml-1">Category</label>
              <select className="w-full bg-[#121214] border border-white/10 rounded-[28px] py-6 px-8 outline-none text-sm font-bold appearance-none cursor-pointer focus:border-blue-500/40 text-slate-200">
                <option value="">Select Category</option>
                <option>Premium Artisan</option>
                <option>Global Marketplace</option>
                <option>Fashion & Apparel</option>
                <option>Home Decor</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[11px] font-black text-slate-500 tracking-[0.2em] uppercase ml-1">Price (₹)</label>
              <input type="text" placeholder="0.00" className="w-full bg-[#121214] border border-white/10 rounded-[28px] py-6 px-8 outline-none text-sm font-bold focus:border-blue-500/40 text-slate-200 placeholder-slate-600" />
            </div>
            <div className="space-y-4">
              <label className="text-[11px] font-black text-slate-500 tracking-[0.2em] uppercase ml-1">Quantity</label>
              <input type="text" placeholder="1" className="w-full bg-[#121214] border border-white/10 rounded-[28px] py-6 px-8 outline-none text-sm font-bold focus:border-blue-500/40 text-slate-200 placeholder-slate-600" />
            </div>
          </div>

          <div className="flex gap-6">
            <button className="flex-1 py-7 rounded-[32px] bg-[#121214] border border-white/5 text-cyan-400 font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white/5 transition-all">
              <Scan className="w-4 h-4" /> AI Market Check
            </button>
            <button className="flex-1 py-7 rounded-[32px] bg-[#121214] border border-white/5 text-purple-400 font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white/5 transition-all">
              <CheckCircle2 className="w-4 h-4" /> Save Content
            </button>
          </div>

          <button className="w-full py-9 rounded-[36px] font-black text-2xl uppercase italic tracking-[-0.04em] text-white shadow-[0_20px_60px_-10px_rgba(30,144,255,0.4)] transition-all transform active:scale-[0.98]" 
            style={{ background: 'linear-gradient(90deg, #4c1d95 0%, #0891b2 100%)' }}>
            Proceed to Marketplace
          </button>
        </div>
      </section>
    </div>
    
    <aside className="lg:col-span-4 space-y-8">
      <section className="glass rounded-[40px] p-8 shadow-2xl relative overflow-hidden border border-white/5">
        <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-8 text-center">System Insight</h4>
        <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl text-center">
           <Zap className="w-8 h-8 text-blue-400 mx-auto mb-4" />
           <p className="text-xs text-slate-400 italic font-medium leading-relaxed">"High sales potential detected for Artisan categories in the EU region this week."</p>
        </div>
      </section>
    </aside>
  </div>
);

const EcommerceProducts = ({ products }: any) => (
  <div className="glass rounded-[48px] p-12 shadow-2xl relative overflow-hidden border border-white/5">
    <div className="flex justify-between items-end mb-12">
      <div><h3 className="text-5xl font-black text-white tracking-tighter italic">Live Inventory</h3><p className="text-[11px] text-slate-500 uppercase font-black tracking-[0.5em] mt-2">Real-time synchronized data stream</p></div>
      <button className="btn-premium px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest">New Asset</button>
    </div>
    <div className="space-y-6">
      {products.map((p: any) => (
        <motion.div key={p.id} whileHover={{ x: 10 }} className="glass-card p-8 rounded-[40px] flex items-center justify-between group">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-black/40 rounded-3xl border border-white/10 flex items-center justify-center"><ImageIcon className="w-8 h-8 text-slate-600" /></div>
            <div><h4 className="text-2xl font-black text-white italic group-hover:text-blue-400 transition-colors">{p.name}</h4><div className="flex gap-4 text-[10px] font-black text-slate-500 uppercase tracking-widest"><span className="text-cyan-400">{p.rating}★ Rating</span><span>{p.sales} Sold</span></div></div>
          </div>
          <div className="flex items-center gap-10">
            <div className="text-right"><p className="text-[10px] font-black text-slate-600 uppercase mb-1">Price</p><p className="text-2xl font-black text-white">₹{p.price}</p></div>
            <div className={`w-14 h-7 rounded-full p-1.5 cursor-pointer ${p.inStock ? 'bg-blue-600' : 'bg-slate-800'}`}><div className={`bg-white w-4 h-4 rounded-full transition-all ${p.inStock ? 'translate-x-7' : ''}`} /></div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const EcommerceOrders = ({ orders }: any) => (
  <div className="glass rounded-[48px] p-12 shadow-2xl border border-white/5">
    <h3 className="text-5xl font-black text-white italic tracking-tighter mb-10">Command Center</h3>
    <div className="space-y-4">
      {orders.map((o: any) => (
        <div key={o.id} className="bg-black/40 border border-white/5 p-8 rounded-[40px] flex justify-between items-center group hover:border-blue-500/20 transition-all">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400"><ShoppingBag /></div>
            <div><h4 className="text-xl font-black text-white">{o.productName}</h4><span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{o.platform} • {o.id}</span></div>
          </div>
          <div className="text-right flex flex-col items-end gap-2">
            <span className={`text-[10px] font-black px-4 py-2 rounded-full tracking-widest ${o.status === 'SHIPPED' ? 'bg-blue-600 text-white' : 'bg-amber-500/10 text-amber-500'}`}>{o.status}</span>
            <span className="text-[9px] font-black text-slate-600 uppercase">{o.date}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MerchantProfile = ({ setView }: any) => (
  <div className="glass rounded-[56px] p-12 shadow-2xl relative overflow-hidden flex flex-col items-center border border-white/5">
    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-700 rounded-[48px] flex items-center justify-center text-4xl font-black italic shadow-2xl mb-8">GE</div>
    <h3 className="text-6xl font-black text-white italic tracking-tighter">George</h3>
    <p className="text-[12px] text-slate-500 font-black uppercase tracking-[0.5em] mt-3">Principal Merchant Hub</p>
    <div className="grid grid-cols-2 gap-6 w-full mt-12">
      <button className="glass-card p-10 rounded-[48px] flex flex-col items-center gap-4 hover:border-blue-500/30 transition-all"><BarChart3 className="w-10 h-10 text-blue-400" /><span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Analytics</span></button>
      <button onClick={() => setView('login')} className="glass-card p-10 rounded-[48px] flex flex-col items-center gap-4 hover:border-rose-500/30 transition-all"><LogOut className="w-10 h-10 text-rose-500" /><span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Log Out</span></button>
    </div>
  </div>
);

const SocialStudio = ({ setActiveTab, setMode }: any) => (
  <div className="flex flex-col items-center justify-center min-h-[500px]">
    <div className="glass rounded-[56px] p-16 w-full max-w-xl text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-indigo-500/20 relative overflow-hidden">
      <div className="absolute -right-32 -bottom-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]"></div>
      <div className="w-24 h-24 bg-indigo-600/20 rounded-[32px] flex items-center justify-center mx-auto mb-10 border border-indigo-500/30"><Cpu className="w-12 h-12 text-indigo-400 animate-pulse" /></div>
      <h3 className="text-5xl font-black mb-4 italic tracking-tighter">Social Content Lab</h3>
      <p className="text-sm text-slate-500 mb-10 leading-relaxed font-medium uppercase tracking-wide">Autonomous viral content generation powered by Gemini Vision Pro.</p>
      <div className="bg-black/30 p-10 rounded-[40px] mb-12 border border-white/5">
        <p className="text-[12px] text-slate-500 italic font-medium leading-loose uppercase tracking-[0.2em]">"Project Status: Offline. To activate neural content generation, please establish a product base first."</p>
      </div>
      <button onClick={() => { setMode('ecommerce'); setActiveTab('publish'); }} className="w-full py-8 rounded-[40px] btn-premium font-black uppercase tracking-widest text-lg flex items-center justify-center gap-4">ENTER PUBLISH ENGINE <ArrowRight className="w-6 h-6" /></button>
    </div>
  </div>
);

const SocialSchedule = ({ posts }: { posts: SocialPost[] }) => (
  <div className="glass rounded-[48px] p-12 shadow-2xl border border-white/5 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] -z-10"></div>
    <div className="flex justify-between items-end mb-12">
      <div><h3 className="text-5xl font-black text-white italic tracking-tighter">Viral Queue</h3><p className="text-[11px] text-slate-500 uppercase font-black tracking-[0.5em] mt-2">Planned automation sequence</p></div>
      <button className="btn-premium px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2"><Plus className="w-4 h-4" /> Schedule New</button>
    </div>
    <div className="space-y-6">
      {posts.map((post, idx) => (
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} key={post.id} className="glass-card p-8 rounded-[40px] flex items-center justify-between group">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50 transition-all">
              {post.platform === 'Instagram' && <Instagram className="text-pink-500" />}
              {post.platform === 'TikTok' && <Play className="text-cyan-400" />}
              {post.platform === 'Facebook' && <Facebook className="text-blue-500" />}
              {post.platform === 'X' && <Twitter className="text-slate-400" />}
            </div>
            <div>
              <h4 className="text-2xl font-black text-white italic">{post.title}</h4>
              <div className="flex items-center gap-4 mt-1 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.time}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className={`text-[9px] font-black px-4 py-2 rounded-full tracking-widest border ${post.status === 'SCHEDULED' ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' : post.status === 'DRAFT' ? 'text-slate-500 border-white/5' : 'text-blue-400 border-blue-500/20 bg-blue-500/5'}`}>
              {post.status}
            </span>
            <button className="p-3 bg-white/5 rounded-xl text-slate-500 hover:text-rose-500 transition-colors"><Trash2 className="w-5 h-5" /></button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const SocialGrowth = () => (
  <div className="space-y-10">
    <div className="glass rounded-[48px] p-12 shadow-2xl border border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -z-10"></div>
      <div className="flex justify-between items-end mb-16">
        <div><h3 className="text-5xl font-black text-white italic tracking-tighter">Global Growth</h3><p className="text-[11px] text-slate-500 uppercase font-black tracking-[0.5em] mt-2">Omni-channel audience intelligence</p></div>
        <div className="flex gap-4"><button className="glass-card px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><Filter className="w-4 h-4" /> 30 Days</button></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="glass-card p-10 rounded-[40px] relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-[40px]"></div>
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-4">Total Impressions</p>
          <p className="text-5xl font-black text-white italic">1.2M <span className="text-[10px] font-black text-emerald-500 align-top">+12%</span></p>
          <div className="mt-6 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-emerald-500" /><span className="text-[9px] font-black text-slate-600 uppercase">Growth Velocity</span></div>
        </div>
        <div className="glass-card p-10 rounded-[40px] relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 blur-[40px]"></div>
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-4">Engagement Rate</p>
          <p className="text-5xl font-black text-pink-400 italic">8.4% <span className="text-[10px] font-black text-emerald-500 align-top">+2.1%</span></p>
          <div className="mt-6 flex items-center gap-2"><Target className="w-4 h-4 text-pink-400" /><span className="text-[9px] font-black text-slate-600 uppercase">High Relevance</span></div>
        </div>
        <div className="glass-card p-10 rounded-[40px] relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-[40px]"></div>
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-4">Lead Conversion</p>
          <p className="text-5xl font-black text-cyan-400 italic">4.2% <span className="text-[10px] font-black text-emerald-500 align-top">+0.8%</span></p>
          <div className="mt-6 flex items-center gap-2"><Users className="w-4 h-4 text-cyan-400" /><span className="text-[9px] font-black text-slate-600 uppercase">Qualified Buyers</span></div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 glass-card p-10 rounded-[40px]">
           <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-8">Viral Performance Index</h4>
           <div className="h-48 flex items-end justify-around gap-4">
              {[40, 65, 45, 85, 55, 95, 75].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-4">
                   <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1.5, delay: i * 0.1 }} className="w-full rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400 relative group">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 px-2 py-1 rounded text-[8px] font-bold text-white">{h}%</div>
                   </motion.div>
                   <span className="text-[8px] font-black text-slate-600 uppercase">D0{i+1}</span>
                </div>
              ))}
           </div>
        </div>
        <div className="lg:col-span-4 glass-card p-10 rounded-[40px] flex flex-col justify-center">
           <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6">Channel Share</h4>
           <div className="space-y-6">
              {[ { name: 'Instagram', p: 65, color: 'from-pink-500 to-orange-500' }, { name: 'TikTok', p: 25, color: 'from-cyan-400 to-blue-500' }, { name: 'Other', p: 10, color: 'from-slate-500 to-slate-700' } ].map(chan => (
                <div key={chan.name}>
                   <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2"><span>{chan.name}</span><span>{chan.p}%</span></div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${chan.p}%` }} transition={{ duration: 1.5 }} className={`h-full bg-gradient-to-r ${chan.color}`} /></div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  </div>
);

const SocialLeads = ({ leads }: { leads: SocialLead[] }) => (
  <div className="glass rounded-[48px] p-12 shadow-2xl border border-white/5">
    <div className="flex justify-between items-end mb-12">
      <div><h3 className="text-5xl font-black text-white italic tracking-tighter">Direct Channels</h3><p className="text-[11px] text-slate-500 uppercase font-black tracking-[0.5em] mt-2">AI-Qualified lead stream</p></div>
      <div className="flex gap-4"><button className="p-4 bg-white/5 rounded-2xl border border-white/10 text-slate-400"><Filter className="w-5 h-5" /></button></div>
    </div>
    <div className="space-y-6">
      {leads.map((lead, idx) => (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} key={lead.id} className={`glass-card p-8 rounded-[40px] flex flex-col gap-6 hover:border-blue-500/30 transition-all cursor-pointer ${lead.isHot ? 'border-l-8 border-indigo-600' : ''}`}>
          <div className="flex justify-between items-start">
             <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-3xl flex items-center justify-center font-black text-xl text-white shadow-xl">{lead.avatar}</div>
                <div>
                   <h4 className="text-2xl font-black text-white italic tracking-tight">{lead.name}</h4>
                   <div className="flex gap-3 mt-1 text-[9px] font-black text-slate-500 uppercase tracking-widest"><span>{lead.platform}</span><span>•</span><span>{lead.time}</span></div>
                </div>
             </div>
             {lead.isHot && <div className="flex items-center gap-2 px-4 py-1.5 bg-indigo-600/10 rounded-full border border-indigo-600/20 text-[9px] font-black text-indigo-400 uppercase tracking-widest animate-pulse"><Sparkles className="w-3 h-3" /> HOT LEAD</div>}
          </div>
          <p className="text-sm text-slate-300 font-medium leading-relaxed italic">"{lead.message}"</p>
          <div className="flex justify-end gap-4">
             <button className="text-[10px] font-black text-slate-600 uppercase tracking-widest hover:text-white transition-colors">Discard</button>
             <button className="text-[10px] font-black text-blue-400 uppercase tracking-widest hover:text-blue-300 transition-colors flex items-center gap-2">Response Terminal <ArrowRight className="w-3 h-3" /></button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const SocialNetworkSettings = ({ networks }: { networks: SocialNetwork[] }) => (
  <div className="glass rounded-[48px] p-12 shadow-2xl border border-white/5 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] -z-10"></div>
    <div className="flex justify-between items-end mb-16 text-center lg:text-left">
      <div><h3 className="text-5xl font-black text-white italic tracking-tighter">Global Hub</h3><p className="text-[11px] text-slate-500 uppercase font-black tracking-[0.5em] mt-2">Neural network integration center</p></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {networks.map((net, idx) => (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} key={net.id} className="glass-card p-8 rounded-[40px] flex items-center justify-between group">
          <div className="flex items-center gap-6">
            <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center font-black text-xl text-white shadow-2xl transition-transform group-hover:scale-110 ${net.name === 'Instagram' ? 'bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600' : net.name === 'Facebook' ? 'bg-blue-600' : net.name === 'TikTok' ? 'bg-black border border-white/10' : net.name.includes('LinkedIn') ? 'bg-blue-800' : 'bg-slate-800'}`}>
               {net.icon}
            </div>
            <div>
               <h4 className="text-2xl font-black text-white italic tracking-tight">{net.name}</h4>
               <p className={`text-[10px] font-black uppercase tracking-widest ${net.status === 'Connected' ? 'text-emerald-400' : 'text-slate-600'}`}>{net.status}</p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end gap-3">
             {net.status === 'Connected' ? (
               <>
                 <span className="text-sm font-black text-white">{net.followers} <span className="text-[8px] font-black text-slate-500">Global Reach</span></span>
                 <button className="text-[9px] font-black text-rose-500 uppercase tracking-widest hover:underline">Detach</button>
               </>
             ) : (
               <button className="btn-premium px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest">Connect</button>
             )}
          </div>
        </motion.div>
      ))}
    </div>
    <div className="mt-12 p-10 bg-blue-600/5 rounded-[48px] border border-blue-600/10 text-center">
       <Globe className="w-12 h-12 text-blue-500 mx-auto mb-6 opacity-30" />
       <h4 className="text-xl font-black text-white mb-4 italic tracking-tight uppercase">Unified Distribution Protocol</h4>
       <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-lg mx-auto uppercase tracking-wide">Autonomous distribution across global social fabrics. MarkItUp ensures platform-native optimization and consistent brand voice synthesis.</p>
    </div>
  </div>
);

const NavIcon: React.FC<{icon: React.ReactNode, label: string, active: boolean, onClick: () => void}> = ({icon, label, active, onClick}) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center gap-2 flex-1 py-1 rounded-[32px] transition-all relative ${active ? 'text-blue-400 scale-110' : 'text-slate-500 hover:text-slate-300'}`}>
    {active && <motion.div layoutId="nav-bg-premium" className="absolute inset-x-2 inset-y-1 bg-white/[0.05] rounded-[24px] border border-white/5" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
    <div className={`p-3.5 rounded-2xl transition-all ${active ? 'bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.35)] text-white' : 'hover:bg-white/5'}`}>
      {React.cloneElement(icon as React.ReactElement, { className: `w-6 h-6 transition-all ${active ? 'stroke-[2.5px]' : 'stroke-2'}` })}
    </div>
    <span className={`text-[9px] font-black uppercase tracking-[0.2em] transition-all ${active ? 'opacity-100 text-blue-400' : 'opacity-40'}`}>{label}</span>
  </button>
);

export default App;
