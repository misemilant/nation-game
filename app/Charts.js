'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function Charts({ activeTab, stats }) {
  const COLORS = [
    '#3b71ca', '#a94442', '#a877db', '#778f3d', '#5bc0de', 
    '#f0ad4e', '#10b981', '#0284c7', '#d97706', '#92400e', 
    '#ec4899', '#a3e635'
  ];

  // ==================== KALKULASI DEMOGRAFI ====================
  const totalPop = stats.population;
  const popInMillions = (totalPop / 1000000).toFixed(1);

  const youthPct = Math.max(15, Math.min(35, 30 - Math.round((stats.education - 50) * 0.1)));
  const elderlyPct = Math.max(5, Math.min(25, 10 + Math.round((stats.environment - 50) * 0.1)));
  const workingPct = 100 - youthPct - elderlyPct;

  const ageData = [
    { name: 'Usia Muda (0-14 thn)', value: youthPct },
    { name: 'Usia Produktif (15-64 thn)', value: workingPct },
    { name: 'Lansia (65+ thn)', value: elderlyPct }
  ];

  const optimalHealth = Math.max(20, Math.min(80, Math.round((stats.environment + stats.education) / 2)));
  const chronicHealth = Math.max(5, Math.min(40, Math.round((100 - stats.environment) * 0.4)));
  const minorHealth = 100 - optimalHealth - chronicHealth;

  const healthData = [
    { name: 'Kesehatan Optimal', value: optimalHealth },
    { name: 'Sakit Ringan', value: minorHealth },
    { name: 'Kondisi Kronis', value: chronicHealth }
  ];

  // ==================== KALKULASI EKONOMI & PENDAPATAN BULANAN REALISTIS ====================
  const totalGDP = Math.round(stats.economy * 2.66); // Triliun/Miliar

  // Kalkulasi Pendapatan Bulanan Realistis (Rupiah)
  const avgIncomeMonthly = Math.round(6000000 * (stats.economy / 50));
  const poorest10Monthly = Math.round(2000000 * (stats.civilLiberties / 50));
  const richest10Monthly = Math.round(25000000 * (stats.economy / 50));

  const expenditureData = [
    { name: 'Pemerintahan & Birokrasi', value: Math.max(5, Math.round(stats.civilLiberties * 0.4)) },
    { name: 'Pertahanan & Militer', value: stats.military },
    { name: 'Pendidikan', value: stats.education },
    { name: 'Lingkungan Hidup', value: stats.environment },
    { name: 'Layanan Kesehatan', value: Math.max(8, Math.round(stats.education * 0.7)) },
    { name: 'Industri & Manufaktur', value: Math.max(10, Math.round(stats.economy * 0.8)) },
    { name: 'Bantuan Luar Negeri', value: 5 },
    { name: 'Hukum & Keamanan', value: Math.max(10, Math.round(stats.military * 0.6)) },
    { name: 'Transportasi Publik', value: Math.max(8, Math.round(stats.civilLiberties * 0.6)) },
    { name: 'Kebijakan Sosial', value: Math.max(7, Math.round(stats.civilLiberties * 0.5)) },
    { name: 'Keagamaan', value: 4 },
    { name: 'Kesejahteraan Rakyat', value: Math.max(8, Math.round(stats.civilLiberties * 0.7)) },
  ];

  const economyBreakdownData = [
    { name: 'Sektor Pemerintah', value: Math.max(20, Math.round(100 - stats.economy + 20)) },
    { name: 'BUMN / Industri Negara', value: Math.max(10, Math.round(stats.military * 0.3)) },
    { name: 'Industri Swasta', value: Math.max(15, Math.round(stats.economy * 0.8)) },
    { name: 'Pasar Gelap (Prakiraan)', value: Math.max(2, Math.round((100 - stats.civilLiberties) * 0.1)) },
  ];

  const totalExpenditure = expenditureData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 text-white font-sans max-w-xl mx-auto space-y-8">
      
      {activeTab === 'demographics' ? (
        <>
          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-100">
              Demografi Penduduk {stats.name}
            </h2>
            <div className="text-xs text-slate-300 space-y-1">
              <p className="font-bold text-slate-100">
                Total Populasi: {totalPop.toLocaleString('id-ID')} Jiwa ({popInMillions} Juta)
              </p>
              <p className="text-slate-400">
                Rasio Usia Produktif: <span className="text-sky-400 font-semibold">{workingPct}%</span>
              </p>
            </div>

            <div className="h-64 w-full my-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={ageData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} stroke="#0f172a" strokeWidth={1.5}>
                    {ageData.map((_, idx) => (
                      <Cell key={`age-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="border border-slate-700 rounded-lg p-3 bg-slate-950/60 text-[11px] text-slate-300">
              <div className="grid grid-cols-3 gap-y-2 gap-x-1 text-left">
                {ageData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></span>
                    <span className="truncate">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-slate-800" />

          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-100">
              Kondisi Kesehatan Masyarakat
            </h2>
            <p className="text-xs text-slate-400">
              Cakupan Layanan Kesehatan Optimal: <span className="text-emerald-400 font-semibold">{optimalHealth}%</span>
            </p>

            <div className="h-64 w-full my-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={healthData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} stroke="#0f172a" strokeWidth={1.5}>
                    {healthData.map((_, idx) => (
                      <Cell key={`hlth-${idx}`} fill={COLORS[(idx + 4) % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="border border-slate-700 rounded-lg p-3 bg-slate-950/60 text-[11px] text-slate-300">
              <div className="grid grid-cols-3 gap-y-2 gap-x-1 text-left">
                {healthData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: COLORS[(idx + 4) % COLORS.length] }}></span>
                    <span className="truncate">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-100">
              Alokasi Anggaran APBN {stats.name}
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              <span className="font-bold text-slate-200">{totalExpenditure}.0 Miliar {stats.currency}</span> • {Math.min(85, Math.round(stats.economy * 0.85))}% dari PDB
            </p>

            <div className="h-64 w-full my-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={expenditureData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} stroke="#0f172a" strokeWidth={1.5}>
                    {expenditureData.map((_, idx) => (
                      <Cell key={`exp-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="border border-slate-700 rounded-lg p-3 bg-slate-950/60 text-[11px] text-slate-300">
              <div className="grid grid-cols-3 gap-y-2 gap-x-1 text-left">
                {expenditureData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></span>
                    <span className="truncate">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* APBN & PENDAPATAN REALISTIS */}
          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-100">
              Perekonomian & Pendapatan Warga {stats.name}
            </h2>
            
            <div className="text-xs text-slate-300 space-y-1">
              <p className="font-bold text-slate-100">
                PDB: {totalGDP} Triliun {stats.currency}
              </p>
              <p className="text-slate-400">
                Pendapatan Rata-Rata: <span className="text-amber-400 font-semibold">{stats.currency} {avgIncomeMonthly.toLocaleString('id-ID')}</span> / bulan
              </p>
              <div className="pt-2 text-[11px] text-slate-400 space-y-1 border-t border-slate-800/60 mt-2">
                <p>10% Penduduk Termiskin: <span className="text-rose-400 font-semibold">{stats.currency} {poorest10Monthly.toLocaleString('id-ID')}</span> / bulan</p>
                <p>10% Penduduk Terkaya: <span className="text-emerald-400 font-semibold">{stats.currency} {richest10Monthly.toLocaleString('id-ID')}</span> / bulan</p>
              </div>
            </div>

            <div className="h-64 w-full my-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={economyBreakdownData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} stroke="#0f172a" strokeWidth={1.5}>
                    {economyBreakdownData.map((_, idx) => (
                      <Cell key={`eco-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="border border-slate-700 rounded-lg p-3 bg-slate-950/60 text-[11px] text-slate-300">
              <div className="grid grid-cols-2 gap-y-2 gap-x-2 text-left">
                {economyBreakdownData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></span>
                    <span className="truncate">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  );
}

