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
  const [gameOverReason, setGameOverReason] = useState(null);

  const getRandomUnansweredIssue = (excludedIds) => {
    const availableIssues = ISSUES.filter((item) => !excludedIds.includes(item.id));
    if (availableIssues.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableIssues.length);
    return availableIssues[randomIndex];
  };

  useEffect(() => {
    setCurrentIssue(getRandomUnansweredIssue([]));
  }, []);

  useEffect(() => {
    if (stats.economy <= 0) {
      setGameOverReason("Ekonomi negara Anda hancur total! Kebangkrutan nasional memicu krisis multidimensi.");
    } else if (stats.civilLiberties <= 0) {
      setGameOverReason("Kebebasan sipil hilang total! Pemberontakan massal meruntuhkan rezim Anda.");
    } else if (stats.military >= 100) {
      setGameOverReason("Kekuatan militer terlalu dominan! Para jenderal melakukan kudeta mengambil alih kekuasaan.");
    } else if (stats.education <= 0) {
      setGameOverReason("Tingkat pendidikan menyentuh titik terendah! Krisis SDM membekukan sistem pemerintahan.");
    } else if (stats.environment <= 0) {
      setGameOverReason("Bencana ekologis total terjadi! Kerusakan lingkungan membuat wilayah negara tidak layak huni.");
    }
  }, [stats]);

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

    const updatedAnsweredIds = [...answeredIssueIds, currentIssue.id];
    setAnsweredIssueIds(updatedAnsweredIds);

    const nextIssue = getRandomUnansweredIssue(updatedAnsweredIds);
    setCurrentIssue(nextIssue);
  };

  const handleRestart = () => {
    setStats({
      name: "Republik Nusantara",
      motto: "Bhinneka Tunggal Ika",
      economy: 50,
      civilLiberties: 50,
      military: 50,
      education: 50,
      environment: 50,
    });
    setAnsweredIssueIds([]);
    setHistory([]);
    setGameOverReason(null);
    setCurrentIssue(getRandomUnansweredIssue([]));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Dashboard Negara */}
        <header className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl relative">
          {!isEditing ? (
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-extrabold tracking-tight text-white">{stats.name}</h1>
                  <p className="text-sm italic text-blue-200/70 mt-1">"{stats.motto}"</p>
                </div>
                {!gameOverReason && (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="text-xs bg-blue-600 hover:bg-blue-500 text-white font-medium px-3 py-1.5 rounded border border-blue-400/30 transition"
                  >
                    Edit Profil
                  </button>
                )}
              </div>
              <p className="text-sm text-slate-300 mt-3">
                Klasifikasi Rezim: <span className="text-blue-400 font-semibold">{getGovernmentType()}</span>
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
                  className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400">Motto Negara</label>
                <input 
                  type="text" 
                  value={tempMotto} 
                  onChange={(e) => setTempMotto(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-sm text-slate-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <button type="submit" className="text-xs bg-blue-600 hover:bg-blue-500 text-white font-bold px-3 py-1.5 rounded">
                  Simpan
                </button>
                <button type="button" onClick={() => setIsEditing(false)} className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded">
                  Batal
                </button>
              </div>
            </form>
          )}

          {/* Grid Progress Bar Statistik */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
            
            {/* Ekonomi */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Ekonomi</span>
                <span className="text-xs font-bold text-sky-400">{stats.economy}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className="bg-sky-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${stats.economy}%` }}></div>
              </div>
            </div>

            {/* Kebebasan Sipil */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Kebebasan Sipil</span>
                <span className="text-xs font-bold text-emerald-400">{stats.civilLiberties}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${stats.civilLiberties}%` }}></div>
              </div>
            </div>

            {/* Militer */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Militer</span>
                <span className="text-xs font-bold text-rose-400">{stats.military}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className="bg-rose-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${stats.military}%` }}></div>
              </div>
            </div>

            {/* Pendidikan */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Pendidikan</span>
                <span className="text-xs font-bold text-indigo-400">{stats.education}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className="bg-indigo-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${stats.education}%` }}></div>
              </div>
            </div>

            {/* Lingkungan */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Lingkungan</span>
                <span className="text-xs font-bold text-teal-400">{stats.environment}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className="bg-teal-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${stats.environment}%` }}></div>
              </div>
            </div>

          </div>
        </header>

        {/* Main Issue Card / Game Over */}
        <main className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl min-h-[250px] flex items-center justify-center">
          {gameOverReason ? (
            <div className="text-center py-6 space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase tracking-widest">
                GAME OVER - PEMERINTAHAN RUNTUH
              </span>
              <p className="text-lg font-medium text-slate-100 max-w-lg mx-auto">{gameOverReason}</p>
              <p className="text-xs text-slate-400">Anda bertahan selama {answeredIssueIds.length} keputusan kebijakan.</p>
              <button
                onClick={handleRestart}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition shadow-md mt-2"
              >
                Mulai Ulang Negara Baru
              </button>
            </div>
          ) : currentIssue ? (
            <div className="w-full">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Isu Ditangani: #{answeredIssueIds.length + 1}
                </span>
                <span className="text-xs text-slate-400">Sisa Isu: {ISSUES.length - answeredIssueIds.length}</span>
              </div>
              <h2 className="text-xl font-bold mt-4 mb-2 text-white">{currentIssue.title}</h2>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">{currentIssue.description}</p>

              <div className="space-y-3">
                {currentIssue.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChoice(option.effects, option.text)}
                    className="w-full text-left p-4 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 transition duration-150 text-sm leading-snug text-slate-200 hover:border-blue-500/50"
                  >
                    <span className="font-bold text-blue-400 mr-2">{idx + 1}.</span> {option.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-6">
              <h2 className="text-2xl font-bold text-white mb-2">Semua Isu Selesai!</h2>
              <p className="text-slate-400 text-sm">
                Selamat! Anda berhasil memimpin negara dengan baik tanpa mengalami keruntuhan.
              </p>
              <button
                onClick={handleRestart}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition shadow-md mt-4"
              >
                Mainkan Lagi
              </button>
            </div>
          )}
        </main>

        {/* History */}
        {history.length > 0 && (
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl">
            <h3 className="text-base font-bold mb-4 text-white">Riwayat Kebijakan Terbaru</h3>
            <ul className="space-y-3 text-sm text-slate-400 divide-y divide-slate-800 max-h-60 overflow-y-auto">
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

