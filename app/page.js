'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { supabase } from '@/lib/supabase';
import { ISSUES } from '@/lib/issues';

const Charts = dynamic(() => import('./Charts'), { ssr: false });

export default function Game() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authMode, setAuthMode] = useState('login');
  const [authError, setAuthError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    name: "Republik Nusantara",
    motto: "Bhinneka Tunggal Ika",
    currency: "Rupiah",
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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) loadGameData(session.user.id);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) loadGameData(session.user.id);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadGameData = async (userId) => {
    const { data, error } = await supabase
      .from('nation_saves')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (data && !error) {
      setStats(data.stats);
      setAnsweredIssueIds(data.answered_issue_ids || []);
      setHistory(data.history || []);
      setCurrentIssue(getRandomUnansweredIssue(data.answered_issue_ids || []));
    } else {
      setCurrentIssue(getRandomUnansweredIssue([]));
    }
  };

  const saveGameData = async (newStats, newAnsweredIds, newHistory) => {
    if (!session) return;
    await supabase.from('nation_saves').upsert({
      user_id: session.user.id,
      stats: newStats,
      answered_issue_ids: newAnsweredIds,
      history: newHistory,
      updated_at: new Date(),
    });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setAuthError(null);
    setLoading(true);

    if (authMode === 'register') {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setAuthError(error.message);
      else alert('Registrasi berhasil! Silakan login.');
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setAuthError(error.message);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  // FUNGSI HAPUS AKUN & DATA SAVES
  const handleDeleteAccount = async () => {
    const confirmDelete = confirm("Apakah Anda yakin ingin menghapus akun ini? Seluruh data simpanan negara Anda akan dihapus secara permanen!");
    if (!confirmDelete) return;

    setLoading(true);
    // 1. Hapus simpanan data game di database
    await supabase.from('nation_saves').delete().eq('user_id', session.user.id);

    // 2. Keluar dari sesi
    await supabase.auth.signOut();
    setSession(null);
    setLoading(false);
    alert("Akun dan data simpanan negara Anda telah berhasil dihapus.");
  };

  const getRandomUnansweredIssue = (excludedIds) => {
    const available = ISSUES.filter((item) => !excludedIds.includes(item.id));
    if (available.length === 0) return null;
    return available[Math.floor(Math.random() * available.length)];
  };

  const handleChoice = (effects, optionText) => {
    const newStats = {
      ...stats,
      economy: Math.min(100, Math.max(0, stats.economy + (effects.economy || 0))),
      civilLiberties: Math.min(100, Math.max(0, stats.civilLiberties + (effects.civilLiberties || 0))),
      military: Math.min(100, Math.max(0, stats.military + (effects.military || 0))),
      education: Math.min(100, Math.max(0, stats.education + (effects.education || 0))),
      environment: Math.min(100, Math.max(0, stats.environment + (effects.environment || 0))),
      population: Math.round(stats.population * (1 + ((effects.economy || 0) * 0.001))),
    };

    const newHistory = [{ issueTitle: currentIssue.title, choice: optionText }, ...history];
    const newAnsweredIds = [...answeredIssueIds, currentIssue.id];

    setStats(newStats);
    setHistory(newHistory);
    setAnsweredIssueIds(newAnsweredIds);
    setCurrentIssue(getRandomUnansweredIssue(newAnsweredIds));

    saveGameData(newStats, newAnsweredIds, newHistory);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const updatedStats = {
      ...stats,
      name: tempName,
      motto: tempMotto,
      currency: tempCurrency,
      nationalAnimal: tempAnimal,
    };
    setStats(updatedStats);
    setIsEditing(false);
    saveGameData(updatedStats, answeredIssueIds, history);
  };

  const getBarColor = (val) => val >= 100 ? "bg-emerald-500" : val < 50 ? "bg-rose-500" : "bg-amber-400";

  const getIdeology = () => {
    if (stats.military > 70) return "Militerisme Nasionalis";
    if (stats.environment > 60 && stats.civilLiberties > 60) return "Sosialis Hijau";
    if (stats.economy > 70 && stats.civilLiberties > 50) return "Kapitalisme Pasar Bebas";
    if (stats.education > 70 && stats.economy > 60) return "Teknokrasi Modern";
    if (stats.civilLiberties < 35) return "Otoritarianisme Terpimpin";
    return "Pancasila / Centrisme Pragmatis";
  };

  const getReligion = () => {
    if (stats.education > 75 && stats.civilLiberties > 75) return "Sekularisme Moderat";
    if (stats.civilLiberties < 35 && stats.education < 40) return "Religius Konservatif";
    return "Pluralisme Moderat";
  };

  const getNationSummaryNarrative = () => {
    const popFormatted = (stats.population / 1000000).toFixed(1);
    
    let p1 = `${stats.name} adalah negara yang berkembang, terkenal karena `;
    p1 += stats.military > 60 ? "kekuatan militer yang sangat dominan dan pengawasan ketat. " : "kebebasan publik serta stabilitas kawasan yang terjaga. ";
    p1 += `Populasi sebanyak ${popFormatted} juta jiwa hidup dalam tatanan sosial dengan tingkat kebebasan sipil yang `;
    p1 += stats.civilLiberties > 60 ? "sangat tinggi serta meletakkan hak asasi manusia sebagai prioritas utama. " : "cukup terbatas dan berada dalam pengawasan ketat pemerintah. ";

    let p2 = `Pemerintah ${stats.name} secara aktif mengatur alokasi anggaran APBN. Prioritas pengeluaran negara ditujukan untuk sektor `;
    let focuses = [];
    if (stats.education > 50) focuses.push("Pendidikan");
    if (stats.military > 50) focuses.push("Pertahanan Nasional");
    if (stats.environment > 50) focuses.push("Pelestarian Lingkungan");
    if (stats.economy > 50) focuses.push("Industri & Transportasi Publik");
    p2 += focuses.length > 0 ? focuses.join(", ") : "kebutuhan dasar masyarakat";
    p2 += `. Beban pajak rata-rata bagi warga negara diperkirakan mencapai ${Math.round(10 + (stats.economy * 0.3))}% dari total pendapatan bulanan.`;

    let p3 = `Sektor perekonomian ${stats.name} memiliki PDB mencapai ribuan Triliun ${stats.currency}, dipimpin oleh `;
    p3 += stats.economy > 60 ? "industri swasta dan perdagangan pasar bebas yang berkembang pesat. " : "dominasi sektor BUMN dan intervensi regulasi pemerintah yang kuat. ";
    p3 += `Hewan resmi yang dilindungi dan menjadi simbol kebanggaan nasional negara ini adalah ${stats.nationalAnimal}.`;

    let p4 = `Tingkat keamanan dan kriminalitas tergolong `;
    p4 += stats.civilLiberties < 40 || stats.military > 60 ? "sangat terkendali berkat tindakan tegas aparat penegak hukum. " : "stabil dengan pendekatan sosial yang edukatif. ";
    p4 += `Masyarakat menjunjung tinggi motto nasional "${stats.motto}".`;

    return [p1, p2, p3, p4];
  };

  if (loading) {
    return <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-sm">Memuat Game...</div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 font-sans">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl w-full max-w-md space-y-4 shadow-2xl">
          <h1 className="text-2xl font-bold text-center">Simulasi Negara</h1>
          <p className="text-xs text-slate-400 text-center">Masuk ke akun untuk melanjutkan simpanan negara Anda.</p>

          {authError && <div className="p-2 bg-rose-500/20 text-rose-400 text-xs border border-rose-500/30 rounded">{authError}</div>}

          <form onSubmit={handleAuth} className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-400 mb-1">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white" />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white" />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold p-2.5 rounded text-xs transition">
              {authMode === 'login' ? 'Masuk Game' : 'Daftar Akun Baru'}
            </button>
          </form>

          <div className="text-center text-xs text-slate-400">
            {authMode === 'login' ? 'Belum punya akun?' : 'Sudah punya akun?'} {' '}
            <button onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')} className="text-blue-400 underline font-semibold">
              {authMode === 'login' ? 'Daftar Sekarang' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const statLabels = [
    { key: 'economy', label: 'Ekonomi' },
    { key: 'civilLiberties', label: 'Kebebasan Sipil' },
    { key: 'military', label: 'Militer' },
    { key: 'education', label: 'Pendidikan' },
    { key: 'environment', label: 'Lingkungan' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Navigation Bar & Tombol Hapus Akun */}
        <div className="flex justify-between items-center text-xs bg-slate-900 border border-slate-800 p-3 rounded-xl">
          <span className="text-slate-400">Akun: <strong className="text-white">{session.user.email}</strong></span>
          <div className="flex gap-2">
            <button onClick={handleLogout} className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded border border-slate-700 transition">
              Keluar
            </button>
            <button onClick={handleDeleteAccount} className="text-xs bg-rose-600/20 hover:bg-rose-600 text-rose-400 hover:text-white px-3 py-1 rounded border border-rose-500/30 transition">
              Hapus Akun
            </button>
          </div>
        </div>

        <header className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-xl">
          {!isEditing ? (
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold">{stats.name}</h1>
                  <p className="text-xs italic text-slate-400">"{stats.motto}"</p>
                </div>
                <button onClick={() => {
                  setTempName(stats.name);
                  setTempMotto(stats.motto);
                  setTempCurrency(stats.currency);
                  setTempAnimal(stats.nationalAnimal);
                  setIsEditing(true);
                }} className="text-xs bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded">Edit Profil</button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-4 pt-3 border-t border-slate-800 text-xs">
                <div><span className="text-slate-400 block">Ideologi</span><span className="text-blue-400 font-semibold">{getIdeology()}</span></div>
                <div><span className="text-slate-400 block">Agama</span><span className="text-purple-400 font-semibold">{getReligion()}</span></div>
                <div><span className="text-slate-400 block">Mata Uang</span><span className="text-amber-400 font-semibold">{stats.currency}</span></div>
                <div><span className="text-slate-400 block">Hewan Khas</span><span className="text-emerald-400 font-semibold">{stats.nationalAnimal}</span></div>
                <div className="col-span-2 md:col-span-1"><span className="text-slate-400 block">Populasi</span><span className="text-sky-400 font-semibold">{stats.population.toLocaleString('id-ID')}</span></div>
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

          <div className="grid grid-cols-5 gap-2 mt-4">
            {statLabels.map((item) => (
              <div key={item.key} className="bg-slate-950 p-2 rounded border border-slate-800">
                <span className="text-[9px] uppercase block text-slate-400 truncate font-semibold">{item.label}</span>
                <div className="w-full bg-slate-800 rounded-full h-1.5 mt-1">
                  <div className={`h-1.5 rounded-full ${getBarColor(stats[item.key])}`} style={{ width: `${stats[item.key]}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </header>

        <nav className="flex gap-2 bg-slate-900 p-2 rounded-xl border border-slate-800 text-xs overflow-x-auto">
          <button onClick={() => setActiveTab('summary')} className={`px-3 py-1.5 rounded whitespace-nowrap ${activeTab === 'summary' ? 'bg-blue-600' : 'text-slate-400'}`}>📋 Ringkasan Negara</button>
          <button onClick={() => setActiveTab('issues')} className={`px-3 py-1.5 rounded whitespace-nowrap ${activeTab === 'issues' ? 'bg-blue-600' : 'text-slate-400'}`}>📰 Warta Isu ({ISSUES.length - answeredIssueIds.length})</button>
          <button onClick={() => setActiveTab('policies')} className={`px-3 py-1.5 rounded whitespace-nowrap ${activeTab === 'policies' ? 'bg-blue-600' : 'text-slate-400'}`}>📜 Kebijakan Aktif ({history.length})</button>
          <button onClick={() => setActiveTab('finance')} className={`px-3 py-1.5 rounded whitespace-nowrap ${activeTab === 'finance' ? 'bg-blue-600' : 'text-slate-400'}`}>💰 APBN & Ekonomi</button>
          <button onClick={() => setActiveTab('demographics')} className={`px-3 py-1.5 rounded whitespace-nowrap ${activeTab === 'demographics' ? 'bg-blue-600' : 'text-slate-400'}`}>👥 Demografi</button>
        </nav>

        {activeTab === 'summary' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 font-serif text-slate-200 leading-relaxed text-sm">
            {getNationSummaryNarrative().map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
          </div>
        )}

        {activeTab === 'policies' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 text-slate-100 font-sans">
            <h2 className="text-xl font-bold tracking-tight text-slate-100 border-b border-slate-800 pb-3">
              Kebijakan & Keputusan Negara
            </h2>

            {history.length === 0 ? (
              <p className="text-xs text-slate-400 py-4 text-center italic">
                Belum ada kebijakan yang diambil. Selesaikan isu di "Warta Isu" untuk memberlakukan hukum dan kebijakan baru.
              </p>
            ) : (
              <div className="space-y-4">
                {history.map((item, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800/80 rounded-lg p-4 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">
                      Kebijakan #{history.length - idx}
                    </span>
                    <h3 className="text-sm font-bold text-slate-200">{item.issueTitle}</h3>
                    <p className="text-xs text-slate-300 italic bg-slate-900/60 p-2.5 rounded border border-slate-800 mt-2">
                      "{item.choice}"
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'issues' && (
          <main className="bg-[#f4ebd0] text-slate-900 border-2 border-[#d3c49d] rounded-xl p-5 font-serif">
            {currentIssue ? (
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

