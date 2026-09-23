'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ISSUES } from '@/lib/issues';

const Charts = dynamic(() => import('./Charts'), { ssr: false });

export default function Game() {
  const [stats, setStats] = useState({
    name: "Republik Nusantara",
    motto: "Bhinneka Tunggal Ika",
    currency: "Rupiah (IDR)",
    nationalAnimal: "Komodo",
    population: 275000000,
    economy: 50,
    civilLiberties: 50,
    military: 50,
    education: 50,
    environment: 50,
  });

  const [activeTab, setActiveTab] = useState('summary');
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(stats.name);
  const [tempMotto, setTempMotto] = useState(stats.motto);
  const [tempCurrency, setTempCurrency] = useState(stats.currency);
  const [tempAnimal, setTempAnimal] = useState(stats.nationalAnimal);

  const [currentIssue, setCurrentIssue] = useState(null);
  const [answeredIssueIds, setAnsweredIssueIds] = useState([]);
  const [history, setHistory] = useState([]);
  const [gameOverReason, setGameOverReason] = useState(null);

  const getRandomUnansweredIssue = (excludedIds) => {
    const available = ISSUES.filter((item) => !excludedIds.includes(item.id));
    if (available.length === 0) return null;
    return available[Math.floor(Math.random() * available.length)];
  };

  useEffect(() => {
    setCurrentIssue(getRandomUnansweredIssue([]));
  }, []);

  useEffect(() => {
    if (stats.economy <= 0) setGameOverReason("Ekonomi hancur total! Bangkrut nasional.");
    else if (stats.civilLiberties <= 0) setGameOverReason("Kebebasan sipil hilang! Pemberontakan massal.");
    else if (stats.military >= 100) setGameOverReason("Militer terlalu kuat! Terjadi kudeta.");
    else if (stats.education <= 0) setGameOverReason("Pendidikan hancur! Krisis SDM total.");
    else if (stats.environment <= 0) setGameOverReason("Bencana ekologis total!");
  }, [stats]);

  const getBarColor = (val) => val >= 100 ? "bg-emerald-500" : val < 50 ? "bg-rose-500" : "bg-amber-400";

  const getGovernmentType = () => {
    if (stats.military > 75 && stats.civilLiberties < 35) return "Kediktatoran Militer";
    if (stats.economy > 75 && stats.environment < 35) return "Oligarki Industri";
    if (stats.civilLiberties > 70 && stats.education > 70) return "Utopia Demokrasi Terpelajar";
    if (stats.environment > 75) return "Republik Hijau Ekologis";
    return "Masyarakat Berkembang";
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setStats((prev) => ({ ...prev, name: tempName, motto: tempMotto, currency: tempCurrency, nationalAnimal: tempAnimal }));
    setIsEditing(false);
  };

  const handleChoice = (effects, optionText) => {
    setStats((prev) => ({
      ...prev,
      economy: Math.min(100, Math.max(0, prev.economy + (effects.economy || 0))),
      civilLiberties: Math.min(100, Math.max(0, prev.civilLiberties + (effects.civilLiberties || 0))),
      military: Math.min(100, Math.max(0, prev.military + (effects.military || 0))),
      education: Math.min(100, Math.max(0, prev.education + (effects.education || 0))),
      environment: Math.min(100, Math.max(0, prev.environment + (effects.environment || 0))),
      population: Math.round(prev.population * (1 + ((effects.economy || 0) * 0.001))),
    }));

    setHistory((prev) => [{ issueTitle: currentIssue.title, choice: optionText }, ...prev]);
    const updated = [...answeredIssueIds, currentIssue.id];
    setAnsweredIssueIds(updated);
    setCurrentIssue(getRandomUnansweredIssue(updated));
  };

  const handleRestart = () => {
    setStats({ name: "Republik Nusantara", motto: "Bhinneka Tunggal Ika", currency: "Rupiah (IDR)", nationalAnimal: "Komodo", population: 275000000, economy: 50, civilLiberties: 50, military: 50, education: 50, environment: 50 });
    setAnsweredIssueIds([]);
    setHistory([]);
    setGameOverReason(null);
    setCurrentIssue(getRandomUnansweredIssue([]));
    setActiveTab('summary');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Header */}
        <header className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
          {!isEditing ? (
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold">{stats.name}</h1>
                  <p className="text-xs italic text-slate-400">"{stats.motto}"</p>
                </div>
                {!gameOverReason && (
                  <button onClick={() => setIsEditing(true)} className="text-xs bg-blue-600 px-3 py-1 rounded">Edit Profil</button>
                )}
              </div>

              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800 text-xs">
                <div><span className="text-slate-400 block">Mata Uang</span><span className="text-amber-400 font-semibold">{stats.currency}</span></div>
                <div><span className="text-slate-400 block">Hewan Khas</span><span className="text-emerald-400 font-semibold">{stats.nationalAnimal}</span></div>
                <div><span className="text-slate-400 block">Populasi</span><span className="text-sky-400 font-semibold">{stats.population.toLocaleString('id-ID')}</span></div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSaveProfile} className="space-y-2 text-xs">
              <input type="text" value={tempName} onChange={(e) => setTempName(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1.5" placeholder="Nama Negara" />
              <input type="text" value={tempMotto} onChange={(e) => setTempMotto(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1.5" placeholder="Motto" />
              <div className="flex gap-2">
                <input type="text" value={tempCurrency} onChange={(e) => setTempCurrency(e.target.value)} className="w-1/2 bg-slate-950 border border-slate-700 rounded p-1.5" placeholder="Mata Uang" />
                <input type="text" value={tempAnimal} onChange={(e) => setTempAnimal(e.target.value)} className="w-1/2 bg-slate-950 border border-slate-700 rounded p-1.5" placeholder="Hewan Khas" />
              </div>
              <div className="flex gap-2 pt-1">
                <button type="submit" className="bg-blue-600 px-3 py-1 rounded">Simpan</button>
                <button type="button" onClick={() => setIsEditing(false)} className="bg-slate-800 px-3 py-1 rounded">Batal</button>
              </div>
            </form>
          )}

          {/* Progress Bars */}
          <div className="grid grid-cols-5 gap-2 mt-4">
            {['economy', 'civilLiberties', 'military', 'education', 'environment'].map((item) => (
              <div key={item} className="bg-slate-950 p-2 rounded border border-slate-800">
                <span className="text-[9px] uppercase block text-slate-400 truncate">{item}</span>
                <div className="w-full bg-slate-800 rounded-full h-1.5 mt-1">
                  <div className={`h-1.5 rounded-full ${getBarColor(stats[item])}`} style={{ width: `${stats[item]}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* Navigation Bar */}
        <nav className="flex gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800 text-xs overflow-x-auto">
          <button onClick={() => setActiveTab('summary')} className={`px-3 py-1.5 rounded whitespace-nowrap ${activeTab === 'summary' ? 'bg-blue-600' : 'text-slate-400'}`}>📋 Ringkasan</button>
          <button onClick={() => setActiveTab('issues')} className={`px-3 py-1.5 rounded whitespace-nowrap ${activeTab === 'issues' ? 'bg-blue-600' : 'text-slate-400'}`}>📰 Warta Isu ({ISSUES.length - answeredIssueIds.length})</button>
          <button onClick={() => setActiveTab('demographics')} className={`px-3 py-1.5 rounded whitespace-nowrap ${activeTab === 'demographics' ? 'bg-blue-600' : 'text-slate-400'}`}>👥 Demografi</button>
          <button onClick={() => setActiveTab('finance')} className={`px-3 py-1.5 rounded whitespace-nowrap ${activeTab === 'finance' ? 'bg-blue-600' : 'text-slate-400'}`}>💰 APBN & Ekonomi</button>
        </nav>

        {/* Content */}
        {activeTab === 'summary' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <h2 className="text-lg font-bold">Ringkasan Negara</h2>
            <p className="text-sm text-slate-300">Klasifikasi Rezim: <span className="text-blue-400 font-semibold">{getGovernmentType()}</span></p>
            <p className="text-xs text-slate-400">Total Kebijakan Dikeluarkan: {answeredIssueIds.length}</p>
          </div>
        )}

        {activeTab === 'issues' && (
          <main className="bg-[#f4ebd0] text-slate-900 border-2 border-[#d3c49d] rounded-xl p-5 font-serif">
            {gameOverReason ? (
              <div className="text-center py-4 font-sans space-y-3">
                <span className="text-xs font-bold px-2 py-1 bg-rose-500/20 text-rose-700 rounded">GAME OVER</span>
                <p className="font-bold text-sm">{gameOverReason}</p>
                <button onClick={handleRestart} className="bg-slate-900 text-white text-xs px-4 py-2 rounded">Main Lagi</button>
              </div>
            ) : currentIssue ? (
              <div>
                <h2 className="text-xl font-black text-amber-900 mb-2">{currentIssue.title}</h2>
                <p className="text-xs leading-relaxed mb-4">{currentIssue.description}</p>
                <div className="space-y-2 font-sans">
                  {currentIssue.options.map((opt, idx) => (
                    <button key={idx} onClick={() => handleChoice(opt.effects, opt.text)} className="w-full text-left p-3 rounded bg-[#e8dcbe] text-xs font-medium border border-[#c9b78c]">
                      {idx + 1}. {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center font-sans">
                <p className="text-sm font-bold">Semua Isu Selesai!</p>
                <button onClick={handleRestart} className="bg-slate-900 text-white text-xs px-4 py-2 rounded mt-2">Main Lagi</button>
              </div>
            )}
          </main>
        )}

        {(activeTab === 'demographics' || activeTab === 'finance') && (
          <Charts activeTab={activeTab} stats={stats} />
        )}

      </div>
    </div>
  );
}

