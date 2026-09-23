'use client';

import { useState, useEffect } from 'react';
import { ISSUES } from '@/lib/issues';

export default function Game() {
  const [stats, setStats] = useState({
    name: "Republik Nusantara",
    motto: "Bhinneka Tunggal Ika",
    economy: 50,
    civilLiberties: 50,
    military: 50,
    education: 50,
    environment: 50,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(stats.name);
  const [tempMotto, setTempMotto] = useState(stats.motto);

  const [currentIssue, setCurrentIssue] = useState(null);
  const [answeredIssueIds, setAnsweredIssueIds] = useState([]);
  const [history, setHistory] = useState([]);

  // Fungsi untuk mengambil isu acak yang BELUM pernah dijawab
  const getRandomUnansweredIssue = (excludedIds) => {
    const availableIssues = ISSUES.filter((item) => !excludedIds.includes(item.id));
    if (availableIssues.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableIssues.length);
    return availableIssues[randomIndex];
  };

  useEffect(() => {
    setCurrentIssue(getRandomUnansweredIssue([]));
  }, []);

  const getGovernmentType = () => {
    if (stats.military > 75 && stats.civilLiberties < 35) return "Kediktatoran Militer";
    if (stats.economy > 75 && stats.environment < 35) return "Oligarki Industri";
    if (stats.civilLiberties > 70 && stats.education > 70) return "Utopia Demokrasi Terpelajar";
    if (stats.environment > 75) return "Republik Hijau Ekologis";
    return "Masyarakat Berkembang";
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setStats((prev) => ({ ...prev, name: tempName, motto: tempMotto }));
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
    }));

    setHistory((prev) => [
      { issueTitle: currentIssue.title, choice: optionText },
      ...prev
    ]);

    // Tandai isu ini sudah dijawab
    const updatedAnsweredIds = [...answeredIssueIds, currentIssue.id];
    setAnsweredIssueIds(updatedAnsweredIds);

    // Ambil isu baru yang belum pernah dijawab
    const nextIssue = getRandomUnansweredIssue(updatedAnsweredIds);
    setCurrentIssue(nextIssue);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Dashboard Negara */}
        <header className="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-xl relative">
          {!isEditing ? (
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-amber-400">{stats.name}</h1>
                  <p className="text-sm italic text-slate-400 mt-1">"{stats.motto}"</p>
                </div>
                <button 
                  onClick={() => setIsEditing(true)}
                  className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded border border-slate-600 transition"
                >
                  Edit Profil
                </button>
              </div>
              <p className="text-sm text-slate-300 mt-3">
                Klasifikasi Rezim: <span className="text-emerald-400 font-semibold">{getGovernmentType()}</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSaveProfile} className="space-y-3">
              <div>
                <label className="text-xs text-slate-400">Nama Negara</label>
                <input 
                  type="text" 
                  value={tempName} 
                  onChange={(e) => setTempName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm text-amber-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400">Motto Negara</label>
                <input 
                  type="text" 
                  value={tempMotto} 
                  onChange={(e) => setTempMotto(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-sm text-slate-300 focus:outline-none"
                />
              </div>
              <div className="flex gap-2">
                <button type="submit" className="text-xs bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-3 py-1.5 rounded">
                  Simpan
                </button>
                <button type="button" onClick={() => setIsEditing(false)} className="text-xs bg-slate-700 px-3 py-1.5 rounded">
                  Batal
                </button>
              </div>
            </form>
          )}

          {/* Grid Statistik */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
            <div className="bg-slate-900 p-3 rounded border border-slate-700">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Ekonomi</span>
              <p className="text-xl font-bold text-blue-400">{stats.economy}/100</p>
            </div>
            <div className="bg-slate-900 p-3 rounded border border-slate-700">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Kebebasan Sipil</span>
              <p className="text-xl font-bold text-green-400">{stats.civilLiberties}/100</p>
            </div>
            <div className="bg-slate-900 p-3 rounded border border-slate-700">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Militer</span>
              <p className="text-xl font-bold text-red-400">{stats.military}/100</p>
            </div>
            <div className="bg-slate-900 p-3 rounded border border-slate-700">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Pendidikan</span>
              <p className="text-xl font-bold text-purple-400">{stats.education}/100</p>
            </div>
            <div className="bg-slate-900 p-3 rounded border border-slate-700 col-span-2 md:col-span-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Lingkungan</span>
              <p className="text-xl font-bold text-emerald-400">{stats.environment}/100</p>
            </div>
          </div>
        </header>

        {/* Issue Card */}
        <main className="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-xl min-h-[250px] flex items-center justify-center">
          {currentIssue ? (
            <div className="w-full">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  Isu Ditangani: #{answeredIssueIds.length + 1}
                </span>
                <span className="text-xs text-slate-400">Sisa Isu: {ISSUES.length - answeredIssueIds.length}</span>
              </div>
              <h2 className="text-xl font-bold mt-3 mb-2">{currentIssue.title}</h2>
              <p className="text-slate-300 leading-relaxed mb-6">{currentIssue.description}</p>

              <div className="space-y-3">
                {currentIssue.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChoice(option.effects, option.text)}
                    className="w-full text-left p-4 rounded-lg bg-slate-700 hover:bg-slate-600 border border-slate-600 transition duration-150 text-sm leading-snug"
                  >
                    <span className="font-bold text-amber-400 mr-2">{idx + 1}.</span> {option.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-6">
              <h2 className="text-2xl font-bold text-amber-400 mb-2">Semua Isu Terkini Selesai!</h2>
              <p className="text-slate-400 text-sm">
                Kamu sudah menyelesaikan seluruh ({answeredIssueIds.length}) kebijakan negara yang tersedia saat ini.
              </p>
            </div>
          )}
        </main>

        {/* History */}
        {history.length > 0 && (
          <section className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-slate-300">Riwayat Kebijakan Terbaru</h3>
            <ul className="space-y-3 text-sm text-slate-400 divide-y divide-slate-700 max-h-60 overflow-y-auto">
              {history.map((item, index) => (
                <li key={index} className="pt-3 first:pt-0">
                  <span className="font-semibold text-slate-200">{item.issueTitle}:</span> "{item.choice}"
                </li>
              ))}
            </ul>
          </section>
        )}

      </div>
    </div>
  );
}

