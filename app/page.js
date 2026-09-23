'use client';

import { useState, useEffect } from 'react';
import { ISSUES } from '@/lib/issues';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

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

  const getBarColor = (val) => {
    if (val >= 100) return "bg-emerald-500";
    if (val < 50) return "bg-rose-500";
    return "bg-amber-400";
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setStats((prev) => ({ 
      ...prev, 
      name: tempName, 
      motto: tempMotto,
      currency: tempCurrency,
      nationalAnimal: tempAnimal
    }));
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
      currency: "Rupiah (IDR)",
      nationalAnimal: "Komodo",
      population: 275000000,
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

  // Data Diagram Usia
  const ageData = [
    { name: 'Anak (0-14 th)', value: 25 },
    { name: 'Usia Produktif (15-64 th)', value: 65 },
    { name: 'Lansia (65+ th)', value: 10 },
  ];

  // Data Diagram Kesehatan
  const healthData = [
    { name: 'Sehat Optimal', value: Math.max(10, stats.environment + 10) },
    { name: 'Sakit Ringan/Keluarga', value: 30 },
    { name: 'Kondisi Kronis/Kritis', value: Math.max(5, 100 - stats.environment) },
  ];

  // Data Alokasi Anggaran
  const budgetAllocationData = [
    { name: 'Militer & Pertahanan', value: stats.military },
    { name: 'Pendidikan & Kebudayaan', value: stats.education },
    { name: 'Infrastruktur & Ekonomi', value: stats.economy },
    { name: 'Lingkungan & Energi', value: stats.environment },
    { name: 'Layanan Sipil & Sosial', value: stats.civilLiberties },
  ];

  // Data Kontribusi Pajak Penduduk
  const taxContributionData = [
    { name: '10% Penduduk Kaya', value: Math.min(80, Math.max(40, stats.economy + 20)) },
    { name: '80% Kelas Menengah', value: 30 },
    { name: '10% Penduduk Miskin', value: Math.max(2, 100 - stats.civilLiberties - 40) },
  ];

  const COLORS = ['#38bdf8', '#34d399', '#f43f5e', '#a855f7', '#fbbf24'];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Profil Negara */}
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

              {/* Detail Identitas Negara */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block">Mata Uang</span>
                  <span className="font-semibold text-amber-400">{stats.currency}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Hewan Khas</span>
                  <span className="font-semibold text-emerald-400">{stats.nationalAnimal}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Jumlah Populasi</span>
                  <span className="font-semibold text-sky-400">{stats.population.toLocaleString('id-ID')} Jiwa</span>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSaveProfile} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400">Nama Negara</label>
                  <input 
                    type="text" 
                    value={tempName} 
                    onChange={(e) => setTempName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-sm text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400">Motto Negara</label>
                  <input 
                    type="text" 
                    value={tempMotto} 
                    onChange={(e) => setTempMotto(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-sm text-slate-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400">Mata Uang</label>
                  <input 
                    type="text" 
                    value={tempCurrency} 
                    onChange={(e) => setTempCurrency(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-sm text-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400">Hewan Khas</label>
                  <input 
                    type="text" 
                    value={tempAnimal} 
                    onChange={(e) => setTempAnimal(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-sm text-emerald-400 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <button type="submit" className="text-xs bg-blue-600 hover:bg-blue-500 text-white font-bold px-3 py-1.5 rounded">
                  Simpan Profil
                </button>
                <button type="button" onClick={() => setIsEditing(false)} className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded">
                  Batal
                </button>
              </div>
            </form>
          )}

          {/* Grid Progress Bar Statistik */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Ekonomi</span>
                <span className="text-xs font-bold text-slate-200">{stats.economy}/100</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(stats.economy)}`} style={{ width: `${stats.economy}%` }}></div>
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Sipil</span>
                <span className="text-xs font-bold text-slate-200">{stats.civilLiberties}/100</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(stats.civilLiberties)}`} style={{ width: `${stats.civilLiberties}%` }}></div>
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Militer</span>
                <span className="text-xs font-bold text-slate-200">{stats.military}/100</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(stats.military)}`} style={{ width: `${stats.military}%` }}></div>
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Pendidikan</span>
                <span className="text-xs font-bold text-slate-200">{stats.education}/100</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(stats.education)}`} style={{ width: `${stats.education}%` }}></div>
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">Lingkungan</span>
                <span className="text-xs font-bold text-slate-200">{stats.environment}/100</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className={`h-2.5 rounded-full transition-all duration-500 ${getBarColor(stats.environment)}`} style={{ width: `${stats.environment}%` }}></div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Diagram Statistik */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Demografi Populasi */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
            <h3 className="text-sm font-bold text-slate-200 mb-1">Struktur Demografi & Usia</h3>
            <p className="text-xs text-slate-400 mb-4">Komposisi penduduk berdasarkan kelompok umur.</p>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={ageData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label>
                    {ageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Kondisi Kesehatan */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
            <h3 className="text-sm font-bold text-slate-200 mb-1">Status Kesehatan Populasi</h3>
            <p className="text-xs text-slate-400 mb-4">Kondisi kesehatan umum warga masyarakat.</p>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={healthData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" label>
                    {healthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[(index + 1) % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Alokasi Anggaran Sektor */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
            <h3 className="text-sm font-bold text-slate-200 mb-1">Alokasi Anggaran Sektor Negara</h3>
            <p className="text-xs text-slate-400 mb-4">Distribusi pengeluaran kas APBN ke sektor kunci.</p>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={budgetAllocationData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#ffc658" label>
                    {budgetAllocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Distribusi Pajak Penduduk */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
            <h3 className="text-sm font-bold text-slate-200 mb-1">Pendapatan Pajak Menurut Demografi</h3>
            <p className="text-xs text-slate-400 mb-4">Proporsi kontribusi pajak 10% penduduk kaya vs miskin.</p>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={taxContributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#ff7300" label>
                    {taxContributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[(index + 3) % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

        </section>

        {/* Card Koran Isu */}
        <main className="bg-[#f4ebd0] text-slate-900 border-2 border-[#d3c49d] rounded-xl p-6 shadow-2xl min-h-[250px] flex items-center justify-center font-serif">
          {gameOverReason ? (
            <div className="text-center py-6 space-y-4 font-sans">
              <span className="text-xs font-bold px-3 py-1 rounded bg-rose-500/20 text-rose-700 border border-rose-500/30 uppercase tracking-widest">
                GAME OVER - PEMERINTAHAN RUNTUH
              </span>
              <p className="text-lg font-serif font-bold text-slate-900 max-w-lg mx-auto">{gameOverReason}</p>
              <button
                onClick={handleRestart}
                className="bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold px-6 py-2.5 rounded-lg text-sm transition shadow-md mt-2"
              >
                Mulai Ulang Negara Baru
              </button>
            </div>
          ) : currentIssue ? (
            <div className="w-full">
              <div className="border-b-2 border-slate-800 pb-3 mb-4 flex justify-between items-end font-sans">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">WARTA HARIAN NASIONAL</span>
                  <div className="text-xs font-bold text-slate-800">ISU KEBIJAKAN #{answeredIssueIds.length + 1}</div>
                </div>
                <span className="text-xs font-medium text-slate-600">Sisa Warta: {ISSUES.length - answeredIssueIds.length}</span>
              </div>

              <h2 className="text-2xl font-black text-amber-900 leading-tight mb-3 tracking-tight">
                {currentIssue.title}
              </h2>
              <p className="text-slate-800 leading-relaxed mb-6 text-sm md:text-base border-l-2 border-slate-400 pl-3">
                {currentIssue.description}
              </p>

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
            <div className="text-center py-
