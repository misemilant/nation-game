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

  const youthPct = Math.max(15, Math.min(35, 26 - Math.round((stats.education - 50) * 0.1)));
  const elderlyPct = Math.max(5, Math.min(25, 7 + Math.round((stats.environment - 50) * 0.1)));
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

  // ==================== KALKULASI EKONOMI & APBN REALISTIS ====================
  // PDB Indonesia ~ Rp 21.000 Triliun
  const totalGDP = Math.round(21000 * (stats.economy / 50)); 

  // Total APBN ~ 16-18% dari PDB (Sekitar Rp 3.300 - 3.800 Triliun)
  const totalExpenditureTrillion = Math.round(totalGDP * 0.165);
  const apbnPctOfGdp = Math.round((totalExpenditureTrillion / totalGDP) * 100);

  // Standar Pendapatan Bulanan Riil Indonesia (Rupiah)
  const avgIncomeMonthly = Math.round(5200000 * (stats.economy / 50));
  const poorest10Monthly = Math.round(1800000 * (stats.civilLiberties / 50));
  const richest10Monthly = Math.round(28000000 * (stats.economy / 50));

  // Alokasi APBN Proorsional Riil (Total 100%)
  const eduBudget = Math.max(15, Math.round(20 * (stats.education / 50)));
  const milBudget = Math.max(5, Math.round(10 * (stats.military / 50)));
  const healthBudget = Math.max(5, Math.round(10 * (stats.education / 50)));
  const infraBudget = Math.max(10, Math.round(15 * (stats.economy / 50)));
  const envBudget = Math.max(3, Math.round(6 * (stats.environment / 50)));
  const socialBudget = Math.max(8, Math.round(14 * (stats.civilLiberties / 50)));
  const govBudget = 15; // Birokrasi & Pelayanan Publik
  const otherBudget = Math.max(2, 100 - (eduBudget + milBudget + healthBudget + infraBudget + envBudget + socialBudget + govBudget));

  const expenditureData = [
    { name: 'Pendidikan & Kebudayaan', value: eduBudget },
    { name: 'Infrastruktur & Transportasi', value: infraBudget },
    { name: 'Pemerintahan & Birokrasi', value: govBudget },
    { name: 'Perlindungan Sosial & Bantuan', value: socialBudget },
    { name: 'Pertahanan & Keamanan', value: milBudget },
    { name: 'Layanan Kesehatan', value: healthBudget },
    { name: 'Lingkungan Hidup & Energi', value: envBudget },
    { name: 'Sektor Lainnya', value: otherBudget },
  ];

  // Struktur Sektor Pembentuk PDB (Total 100%)
  const privateSector = Math.max(30, Math.round(45 * (stats.economy / 50)));
  const umkmSector = Math.max(20, Math.round(30 * (stats.civilLiberties / 50)));
  const bumnSector = Math.max(10, Math.round(15 * (stats.military / 50)));
  const informalSector = Math.max(5, 100 - (privateSector + umkmSector + bumnSector));

  const economyBreakdownData = [
    { name: 'Industri Swasta & Korporasi', value: privateSector },
    { name: 'UMKM & Perdagangan Rakyat', value: umkmSector },
    { name: 'BUMN & Perusahaan Negara', value: bumnSector },
    { name: 'Sektor Informal & Swadaya', value: informalSector },
  ];

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
          {/* ALOKASI APBN TRILIUN */}
          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-100">
              Alokasi Anggaran APBN {stats.name}
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              <span className="font-bold text-slate-200">{totalExpenditureTrillion.toLocaleString('id-ID')} Triliun {stats.currency}</span> • {apbnPctOfGdp}% dari PDB
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
              <div className="grid grid-cols-2 gap-y-2 gap-x-1 text-left">
                {expenditureData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></span>
                    <span className="truncate">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* EKONOMI & PENDAPATAN */}
          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-100">
              Perekonomian & Pendapatan Warga {stats.name}
            </h2>
            
            <div className="text-xs text-slate-300 space-y-1">
              <p className="font-bold text-slate-100">
                PDB: {totalGDP.toLocaleString('id-ID')} Triliun {stats.currency}
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
                    <span className="truncate">{item.name}: {item.value}%</span>
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

