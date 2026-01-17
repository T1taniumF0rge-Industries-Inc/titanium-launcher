import { useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();
  const [ram, setRam] = useState(4);
  const [server, setServer] = useState("");

  const handleLaunch = () => {
    invoke('launch_game', { ram, server });
  };

  return (
    <div className="h-screen bg-[#0c0c0c] text-slate-200 flex flex-col font-sans select-none">
      {/* Sidebar Area */}
      <div className="flex flex-1">
        <nav className="w-64 bg-black/50 p-6 border-r border-white/5 flex flex-col">
          <h1 className="text-cyan-500 font-black text-2xl italic tracking-tighter mb-10">TITANIUM</h1>
          <button className="text-left py-2 px-4 rounded hover:bg-white/5 transition">{t('play')}</button>
          <button className="text-left py-2 px-4 rounded hover:bg-white/5 transition opacity-50">{t('settings')}</button>
          
          <div className="mt-auto">
            <select 
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-transparent text-xs text-slate-500 border border-white/10 p-1 rounded"
            >
              <option value="en_US">English</option>
              <option value="pl_PL">Polski</option>
              <option value="zh_CN">Chinese</option>
              <option value="ru_RU">Russian</option>
            </select>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col justify-center items-center p-10">
          <div className="w-full max-w-md bg-white/5 p-8 rounded-2xl border border-white/10">
            <label className="block text-xs font-bold text-cyan-500 uppercase tracking-widest mb-4">
              {t('ram')}: {ram}GB
            </label>
            <input 
              type="range" min="1" max="32" value={ram} 
              onChange={(e) => setRam(parseInt(e.target.value))}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-500 mb-8"
            />

            <input 
              placeholder={t('server')}
              value={server}
              onChange={(e) => setServer(e.target.value)}
              className="w-full bg-black/30 border border-white/10 p-3 rounded-lg mb-6 outline-none focus:border-cyan-500/50"
            />

            <button 
              onClick={handleLaunch}
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-black font-black py-4 rounded-xl shadow-lg shadow-cyan-900/20 transition-all active:scale-95"
            >
              {t('play').toUpperCase()}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;