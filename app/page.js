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

  // Fungsi penentu warna Progress Bar
  const getBarColor = (val) => {
    if (val >= 100) return "bg-emerald-500";
    if (val < 50) return "bg-rose-500";
    return "bg-amber-400"; // Di bawah 70 sampai 50
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
                  <p className="text-sm italic text-slate-400 mt-1">"{stats.motto}"</p>
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

          {/* Grid Progress Bar + Logo/Ikon SVG */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
            
            {/* Ekonomi */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                  <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Ekonomi</span>
                </div>
                <span className="text-xs font-bold text-slate-200">{stats.economy}/100</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(stats.economy)}`} style={{ width: `${stats.economy}%` }}></div>
              </div>
            </div>

            {/* Kebebasan Sipil */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Sipil</span>
                </div>
                <span className="text-xs font-bold text-slate-200">{stats.civilLiberties}/100</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(stats.civilLiberties)}`} style={{ width: `${stats.civilLiberties}%` }}></div>
              </div>
            </div>

            {/* Militer */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Militer</span>
                </div>
                <span className="text-xs font-bold text-slate-200">{stats.military}/100</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(stats.military)}`} style={{ width: `${stats.military}%` }}></div>
              </div>
            </div>

            {/* Pendidikan */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
                  <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Pendidikan</span>
                </div>
                <span className="text-xs font-bold text-slate-200">{stats.education}/100</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(stats.education)}`} style={{ width: `${stats.education}%` }}></div>
              </div>
            </div>

            {/* Lingkungan */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                  <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Lingkungan</span>
                </div>
                <span className="text-xs font-bold text-slate-200">{stats.environment}/100</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(stats.environment)}`} style={{ width: `${stats.environment}%` }}></div>
              </div>
            </div>

          </div>
        </header>

        {/* Issue Card Bertema Koran Klasik */}
        <main className="bg-[#f4ebd0] text-slate-900 border-2 border-[#d3c49d] rounded-xl p-6 shadow-2xl min-h-[250px] flex items-center justify-center font-serif">
          {gameOverReason ? (
            <div className="text-center py-6 space-y-4 font-sans">
              <span className="text-xs font-bold px-3 py-1 rounded bg-rose-500/20 text-rose-700 border border-rose-500/30 uppercase tracking-widest">
                GAME OVER - PEMERINTAHAN RUNTUH
              </span>
              <p className="text-lg font-serif font-bold text-slate-900 max-w-lg mx-auto">{gameOverReason}</p>
              <p className="text-xs text-slate-600">Anda bertahan selama {answeredIssueIds.length} keputusan kebijakan.</p>
              <button
                onClick={handleRestart}
                className="bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold px-6 py-2.5 rounded-lg text-sm transition shadow-md mt-2"
              >
                Mulai Ulang Negara Baru
              </button>
            </div>
          ) : currentIssue ? (
            <div className="w-full">
              {/* Header Koran */}
              <div className="border-b-2 border-slate-800 pb-3 mb-4 flex justify-between items-end font-sans">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">WARTA HARIAN NASIONAL</span>
                  <div className="text-xs font-bold text-slate-800">ISU KEBIJAKAN #{answeredIssueIds.length + 1}</div>
                </div>
                <span className="text-xs font-medium text-slate-600">Sisa Warta: {ISSUES.length - answeredIssueIds.length}</span>
              </div>

              {/* Judul & Deskripsi Berita Koran */}
              <h2 className="text-2xl font-black text-amber-900 leading-tight mb-3 tracking-tight">
                {currentIssue.title}
              </h2>
              <p className="text-slate-800 leading-relaxed mb-6 text-sm md:text-base border-l-2 border-slate-400 pl-3">
                {currentIssue.description}
              </p>

              {/* Opsi Pilihan Kebijakan */}
              <div className="space-y-3 font-sans">
                {currentIssue.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChoice(option.effects, option.text)}
                    className="w-full text-left p-4 rounded-lg bg-[#e8dcbe] hover:bg-[#decfa9] border border-[#c9b78c] transition duration-150 text-sm leading-snug text-slate-900 font-medium shadow-sm hover:border-slate-800"
                  >
                    <span className="font-bold text-amber-900 mr-2">{idx + 1}.</span> {option.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-6 font-sans">
              <h2 className="text-2xl font-bold text-amber-900 mb-2">Semua Isu Selesai!</h2>
              <p className="text-slate-700 text-sm">
                Selamat! Anda berhasil memimpin negara dengan baik tanpa mengalami keruntuhan.
              </p>
              <button
                onClick={handleRestart}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition shadow-md mt-4"
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

