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
    // 1. PDB & Pendapatan per Kapita Dinamis
    const totalGdpBillion = Math.round(5000 + (eco * 350) + (infra * 150));
    const gdpPerCapita = Math.round((totalGdpBillion * 1000000000) / totalPop);

    // 2. Distribusi Pendapatan Rakyat (Miskin 10%, Menengah 80%, Terkaya 10%)
    const inequalityGap = Math.max(1.8, 4.5 - (civil * 0.03));
    const poorestIncome = Math.round(gdpPerCapita / (inequalityGap * 1.5));
    const richestIncome = Math.round(gdpPerCapita * inequalityGap);
    const middleIncome = Math.round((gdpPerCapita * 0.9));

    // Pie Chart Porsi Kue Pendapatan Rakyat (Persentase Penguasaan Ekonomi)
    const richestShare = Math.min(65, Math.max(25, 45 + (eco * 0.15) - (civil * 0.1)));
    const poorestShare = Math.max(2, Math.min(15, 5 + (civil * 0.08)));
    const middleShare = parseFloat((100 - richestShare - poorestShare).toFixed(1));

    const incomeDistributionData = [
      { name: '10% Penduduk Terkaya', value: richestShare, color: '#eab308', avg: richestIncome },
      { name: '80% Kelas Menengah', value: middleShare, color: '#3b82f6', avg: middleIncome },
      { name: '10% Penduduk Termiskin', value: poorestShare, color: '#ef4444', avg: poorestIncome },
    ];

    // 3. Pendapatan Pajak Negara (Tax Revenue Breakdown)
    const avgTaxRate = Math.min(50, Math.max(10, 15 + (eco * 0.2) + (infra * 0.1)));
    const totalTaxRevenueBillion = Math.round((totalGdpBillion * avgTaxRate) / 100);

    const incomeTaxPct = Math.min(45, Math.max(20, 30 + (eco * 0.1)));
    const corporateTaxPct = Math.min(40, Math.max(15, 25 + (infra * 0.1)));
    const vatTaxPct = Math.min(30, Math.max(10, 20 + (civil * 0.05)));
    const otherTaxPct = parseFloat((100 - incomeTaxPct - corporateTaxPct - vatTaxPct).toFixed(1));

    const taxRevenueData = [
      { name: 'Pajak Penghasilan (PPh)', value: incomeTaxPct, color: '#10b981' },
      { name: 'Pajak Korporasi / Badan', value: corporateTaxPct, color: '#8b5cf6' },
      { name: 'Pajak Pertambahan Nilai (PPN)', value: vatTaxPct, color: '#f97316' },
      { name: 'Bea Cukai & Pajak Lainnya', value: otherTaxPct, color: '#64748b' },
    ];

    // 4. Proporsi Sektor Perekonomian
    const privatePct = Math.min(65, Math.max(20, 25 + (eco * 0.4)));
    const stateOwnedPct = Math.min(40, Math.max(10, 35 - (eco * 0.2) + (infra * 0.15)));
    const blackMarketPct = Math.min(25, Math.max(2, 20 - (mil * 0.15) - (civil * 0.05)));
    const govPct = Math.max(10, parseFloat((100 - privatePct - stateOwnedPct - blackMarketPct).toFixed(1)));

    const ecoSectorData = [
      { name: 'Pemerintah (Government)', value: govPct, color: '#2563eb' },
      { name: 'Industri Swasta (Private Industry)', value: privatePct, color: '#dc2626' },
      { name: 'Sektor BUMN (State-Owned)', value: stateOwnedPct, color: '#d97706' },
      { name: 'Pasar Gelap / Informal (Black Market)', value: blackMarketPct, color: '#334155' },
    ];

    return (
      <div className="space-y-6 font-sans">
        
        {/* KARTU PENDAPATAN PAJAK NEGARA */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
          <h2 className="text-lg font-black text-slate-100">Pendapatan Pajak Negara (Tax Revenue)</h2>
          <p className="text-xs text-slate-400 mt-1">
            Total Penerimaan Pajak: <strong className="text-emerald-400">{totalTaxRevenueBillion.toLocaleString('id-ID')} Miliar {stats.currency || 'Rupiah'}</strong>
          </p>
          <p className="text-xs text-slate-300">Rata-rata Tarif Pajak Efektif: <strong className="text-amber-400">{avgTaxRate.toFixed(1)}%</strong> dari PDB</p>

          <div className="h-56 w-full mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={taxRevenueData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75}>
                  {taxRevenueData.map((entry, index) => (
                    <Cell key={`tax-cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3 text-[11px] text-left border-t border-slate-800 pt-3">
            {taxRevenueData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                <span className="text-slate-300 truncate">{item.name}: <strong className="text-white">{item.value}%</strong></span>
              </div>
            ))}
          </div>
        </div>

        {/* KARTU DISTRIBUSI PENDAPATAN RAKYAT */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
          <h3 className="text-base font-bold text-slate-100">Distribusi Pendapatan & Kesenjangan Rakyat</h3>
          <p className="text-xs text-slate-400 mt-0.5">Proporsi penguasaan kue ekonomi nasional berdasarkan kelompok ekonomi</p>

          <div className="h-56 w-full mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={incomeDistributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75}>
                  {incomeDistributionData.map((entry, index) => (
                    <Cell key={`inc-cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2 mt-3 text-[11px] text-left border-t border-slate-800 pt-3">
            {incomeDistributionData.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center bg-slate-950 p-2 rounded border border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                  <span className="text-slate-300 font-medium">{item.name} ({item.value}% Kue Ekonomi)</span>
                </div>
                <span className="text-amber-400 font-bold">{item.avg.toLocaleString('id-ID')} {stats.currency}/jiwa</span>
              </div>
            ))}
          </div>
        </div>

        {/* KARTU STRUKTUR EKONOMI */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
          <h3 className="text-base font-bold text-slate-100">Sektor Perekonomian</h3>
          <p className="text-xs text-slate-400 mt-0.5">PDB: <strong className="text-amber-400">{totalGdpBillion.toLocaleString('id-ID')} Miliar {stats.currency || 'Rupiah'}</strong> ({gdpPerCapita.toLocaleString('id-ID')} /jiwa)</p>

          <div className="h-56 w-full mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={ecoSectorData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75}>
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

      </div>
    );
  }

  return null;
}
