'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function Charts({ activeTab, stats }) {
  const totalPop = stats.population || 275000000;
  const health = stats.health || 50;
  const eco = stats.economy || 50;
  const edu = stats.education || 50;
  const mil = stats.military || 50;
  const env = stats.environment || 50;
  const infra = stats.infrastructure || 50;
  const civil = stats.civilLiberties || 50;

  if (activeTab === 'demographics') {
    const productiveRatio = Math.min(75, Math.max(50, 60 + (health * 0.1)));
    const elderlyRatio = Math.min(20, Math.max(5, 10 + (health * 0.08)));
    const youthRatio = Math.max(10, 100 - productiveRatio - elderlyRatio);

    const demoData = [
      { name: 'Usia Muda (0-14 thn)', value: youthRatio, color: '#3b82f6' },
      { name: 'Usia Produktif (15-64 thn)', value: productiveRatio, color: '#ef4444' },
      { name: 'Lansia (65+ thn)', value: elderlyRatio, color: '#a855f7' },
    ];

    const healthData = [
      { name: 'Layanan Optimal', value: health, color: '#38bdf8' },
      { name: 'Fasilitas Cukup', value: Math.max(0, 100 - health - 15), color: '#10b981' },
      { name: 'Kurang Terlayani', value: Math.min(30, Math.max(5, 100 - health)), color: '#f59e0b' },
    ];

    return (
      <div className="space-y-4 font-sans">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
          <h3 className="text-sm font-bold text-slate-300 mb-1">Struktur Demografi Penduduk</h3>
          <p className="text-xs text-slate-400">Total: <strong className="text-white">{totalPop.toLocaleString('id-ID')} Jiwa</strong> ({ (totalPop / 1000000).toFixed(1) } Juta)</p>
          <p className="text-xs text-blue-400 font-semibold mt-1">Usia Produktif: {productiveRatio.toFixed(1)}%</p>
          <div className="h-48 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={demoData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={65}>
                  {demoData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
          <h3 className="text-sm font-bold text-slate-300 mb-1">Kondisi Kesehatan Masyarakat</h3>
          <p className="text-xs text-emerald-400 font-semibold">Indikator Kesehatan Nasional: {health}%</p>
          <div className="h-48 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={healthData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={65}>
                  {healthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'finance') {
    // 1. Kalkulasi PDB & Pendapatan per Kapita Dinamis
    const totalGdpBillion = Math.round(5000 + (eco * 350) + (infra * 150));
    const gdpPerCapita = Math.round((totalGdpBillion * 1000000000) / totalPop);
    
    // Kesenjangan Ekonomi (10% Termiskin vs 10% Terkaya) berbasis Hak Sipil & Ekonomi
    const inequalityGap = Math.max(1.8, 4.5 - (civil * 0.03));
    const poorestIncome = Math.round(gdpPerCapita / (inequalityGap * 1.5));
    const richestIncome = Math.round(gdpPerCapita * inequalityGap);

    // 2. Proporsi Sektor Ekonomi NationStates (Dinamis dari Kebijakan)
    // Sektor Swasta naik jika ekonomi naik
    const privatePct = Math.min(65, Math.max(20, 25 + (eco * 0.4)));
    // BUMN naik jika ekonomi diatur intervensi negara
    const stateOwnedPct = Math.min(40, Math.max(10, 35 - (eco * 0.2) + (infra * 0.15)));
    // Pasar Gelap turun jika militer & hukum tinggi
    const blackMarketPct = Math.min(25, Math.max(2, 20 - (mil * 0.15) - (civil * 0.05)));
    // Sektor Pemerintah mengisi sisanya
    const govPct = Math.max(10, parseFloat((100 - privatePct - stateOwnedPct - blackMarketPct).toFixed(1)));

    const ecoSectorData = [
      { name: 'Pemerintah (Government)', value: govPct, color: '#2563eb' },
      { name: 'Industri Swasta (Private Industry)', value: privatePct, color: '#dc2626' },
      { name: 'Sektor BUMN (State-Owned)', value: stateOwnedPct, color: '#d97706' },
      { name: 'Pasar Gelap / Informal (Black Market)', value: blackMarketPct, color: '#334155' },
    ];

    // 3. Alokasi Pengeluaran APBN Sektor
    const totalPoints = edu + health + mil + env + infra + eco + civil + 150;
    const rawBudgetData = [
      { name: 'Pendidikan', points: edu, color: '#8b5cf6' },
      { name: 'Kesehatan', points: health, color: '#06b6d4' },
      { name: 'Pertahanan', points: mil, color: '#991b1b' },
      { name: 'Infrastruktur & Transportasi', points: infra, color: '#0284c7' },
      { name: 'Lingkungan', points: env, color: '#65a30d' },
      { name: 'Industri & Pasar', points: eco, color: '#d97706' },
      { name: 'Kesejahteraan Sosial', points: civil + health, color: '#bef264' },
      { name: 'Administrasi & Hukum', points: 70, color: '#1e3a8a' },
    ];

    const budgetPieData = rawBudgetData.map(item => ({
      name: item.name,
      value: parseFloat(((item.points / totalPoints) * 100).toFixed(1)),
      color: item.color
    }));

    return (
      <div className="space-y-6 font-sans">
        
        {/* KARTU STUKTUR EKONOMI PERSIS NATIONSTATES */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
          <h2 className="text-lg font-black text-slate-100">Perekonomian {stats.name || 'Negara'}</h2>
          <p className="text-xs text-slate-400 mt-1">
            PDB (GDP): <strong className="text-amber-400">{totalGdpBillion.toLocaleString('id-ID')} Miliar {stats.currency || 'Rupiah'}</strong>
          </p>
          <p className="text-xs text-slate-300 font-medium">
            {gdpPerCapita.toLocaleString('id-ID')} {stats.currency || 'Rupiah'} per jiwa
          </p>

          <div className="grid grid-cols-2 gap-2 mt-3 p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px]">
            <div>
              <span className="text-slate-400 block">10% Penduduk Termiskin:</span>
              <span className="text-rose-400 font-bold">{poorestIncome.toLocaleString('id-ID')} {stats.currency}/jiwa</span>
            </div>
            <div>
              <span className="text-slate-400 block">10% Penduduk Terkaya:</span>
              <span className="text-emerald-400 font-bold">{richestIncome.toLocaleString('id-ID')} {stats.currency}/jiwa</span>
            </div>
          </div>

          <div className="h-60 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={ecoSectorData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                  {ecoSectorData.map((entry, index) => (
                    <Cell key={`eco-cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3 text-[11px] text-left border-t border-slate-800 pt-3">
            {ecoSectorData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                <span className="text-slate-300 truncate">{item.name}: <strong className="text-white">{item.value}%</strong></span>
              </div>
            ))}
          </div>
        </div>

        {/* KARTU PENGELUARAN APBN MULTI SEKTOR */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
          <h3 className="text-base font-bold text-slate-100">Alokasi APBN per Sektor</h3>
          <p className="text-xs text-slate-400 mt-0.5">Persentase distribusi anggaran negara berdasarkan regulasi aktif</p>

          <div className="h-56 w-full mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={budgetPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75}>
                  {budgetPieData.map((entry, index) => (
                    <Cell key={`budget-cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3 text-[11px] text-left border-t border-slate-800 pt-3">
            {budgetPieData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                <span className="text-slate-300 truncate">{item.name}: <strong className="text-white">{item.value}%</strong></span>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }

  return null;
}
