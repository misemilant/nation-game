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
    // Basic Economic Calculations
    const totalGdpTrillion = Math.round(12000 + (eco * 350) + (infra * 150));
    const expenditureGdpPct = (20 + (eco * 0.25) + (infra * 0.1)).toFixed(1);
    const totalExpenditureTrillion = ((totalGdpTrillion * expenditureGdpPct) / 100).toFixed(1);

    // 1. ALOKASI PENGELUARAN APBN (12 SEKTOR NATIONSTATES)
    const totalExpenditurePoints = edu + health + mil + env + infra + eco + civil + 200;
    const rawExpenditureData = [
      { name: 'Administration', points: 40, color: '#2563eb' },
      { name: 'Defense', points: mil, color: '#991b1b' },
      { name: 'Education', points: edu, color: '#a855f7' },
      { name: 'Environment', points: env, color: '#65a30d' },
      { name: 'Healthcare', points: health, color: '#06b6d4' },
      { name: 'Industry', points: eco, color: '#d97706' },
      { name: 'International Aid', points: Math.max(5, civil - 20), color: '#10b981' },
      { name: 'Law & Order', points: Math.max(20, 100 - civil + mil * 0.3), color: '#0284c7' },
      { name: 'Public Transport', points: infra, color: '#eab308' },
      { name: 'Social Policy', points: Math.max(15, civil + health * 0.5), color: '#78350f' },
      { name: 'Spirituality / Culture', points: 30, color: '#ec4899' },
      { name: 'Welfare', points: Math.max(20, civil + health + edu * 0.3), color: '#bef264' },
    ];

    const expenditurePieData = rawExpenditureData.map(item => ({
      name: item.name,
      value: parseFloat(((item.points / totalExpenditurePoints) * 100).toFixed(1)),
      color: item.color
    }));

    // 2. PENDAPATAN PAJAK NEGARA (TAX REVENUE)
    const taxGdpPct = (12 + (eco * 0.2) + (civil * 0.05)).toFixed(1);
    const totalTaxRevenueTrillion = ((totalGdpTrillion * taxGdpPct) / 100).toFixed(1);

    const rawTaxData = [
      { name: 'Income Tax (PPh)', points: 30 + (eco * 0.1), color: '#10b981' },
      { name: 'Corporate Tax (Badan/Usaha)', points: 25 + (infra * 0.1), color: '#8b5cf6' },
      { name: 'Value Added Tax (PPN)', points: 20 + (civil * 0.05), color: '#f97316' },
      { name: 'Customs & Tariffs (Bea Cukai)', points: 15 + (mil * 0.05), color: '#0284c7' },
      { name: 'Property & Luxury Tax', points: 10 + (eco * 0.05), color: '#ec4899' },
      { name: 'Other Tax Receipts', points: 10, color: '#64748b' },
    ];
    const totalTaxPoints = rawTaxData.reduce((acc, curr) => acc + curr.points, 0);
    const taxPieData = rawTaxData.map(item => ({
      name: item.name,
      value: parseFloat(((item.points / totalTaxPoints) * 100).toFixed(1)),
      color: item.color
    }));

    // 3. PENDAPATAN BULANAN PENDUDUK (MISKIN, MENENGAH, KAYA)
    const gdpPerPersonAnnual = Math.round((totalGdpTrillion * 1000000000) / totalPop);
    const monthlyAvgIncome = Math.round(gdpPerPersonAnnual / 12);

    const inequalityFactor = Math.max(1.8, 4.5 - (civil * 0.03));
    const poorMonthly = Math.round(monthlyAvgIncome / (inequalityFactor * 1.6));
    const middleMonthly = Math.round(monthlyAvgIncome * 0.85);
    const richMonthly = Math.round(monthlyAvgIncome * inequalityFactor);

    // Share Kue Pendapatan
    const richShare = Math.min(65, Math.max(25, 45 + (eco * 0.15) - (civil * 0.1)));
    const poorShare = Math.max(2, Math.min(15, 5 + (civil * 0.08)));
    const middleShare = parseFloat((100 - richShare - poorShare).toFixed(1));

    const incomeDistributionData = [
      { name: '10% Termiskin', value: poorShare, color: '#ef4444', monthly: poorMonthly },
      { name: '80% Kelas Menengah', value: middleShare, color: '#3b82f6', monthly: middleMonthly },
      { name: '10% Terkaya', value: richShare, color: '#eab308', monthly: richMonthly },
    ];

    return (
      <div className="space-y-6 font-serif text-slate-800">
        
        {/* 1. KARTU ALOKASI APBN (GOVERNMENT EXPENDITURE) */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center font-sans text-white">
          <h2 className="text-lg font-serif font-bold text-slate-100">Alokasi Pengeluaran APBN</h2>
          <p className="text-xs text-slate-300 mt-0.5">
            <strong className="text-amber-400">{totalExpenditureTrillion} Triliun {stats.currency || 'Rupiah'}</strong> • {expenditureGdpPct}% dari PDB
          </p>

          <div className="h-64 w-full mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenditurePieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={85}>
                  {expenditurePieData.map((entry, index) => (
                    <Cell key={`exp-cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg mt-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[11px] text-left">
              {expenditurePieData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded border border-slate-800">
                  <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                  <span className="text-slate-300 truncate">{item.name}: <strong className="text-white">{item.value}%</strong></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. KARTU PENDAPATAN PAJAK NEGARA (TAX REVENUE) */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center font-sans text-white">
          <h2 className="text-lg font-serif font-bold text-slate-100">Pendapatan Pajak Negara</h2>
          <p className="text-xs text-slate-300 mt-0.5">
            <strong className="text-emerald-400">{totalTaxRevenueTrillion} Triliun {stats.currency || 'Rupiah'}</strong> • {taxGdpPct}% dari PDB
          </p>

          <div className="h-60 w-full mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={taxPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                  {taxPieData.map((entry, index) => (
                    <Cell key={`tax-cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg mt-3">
            <div className="grid grid-cols-2 gap-2 text-[11px] text-left">
              {taxPieData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded border border-slate-800">
                  <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                  <span className="text-slate-300 truncate">{item.name}: <strong className="text-white">{item.value}%</strong></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. KARTU PENDAPATAN BULANAN PENDUDUK */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center font-sans text-white">
          <h2 className="text-lg font-serif font-bold text-slate-100">Pendapatan Bulanan Penduduk</h2>
          <p className="text-xs text-slate-300 mt-0.5">
            Rata-rata Nasional: <strong className="text-sky-400">{monthlyAvgIncome.toLocaleString('id-ID')} {stats.currency}/bulan</strong>
          </p>

          <div className="h-60 w-full mt-3">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={incomeDistributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                  {incomeDistributionData.map((entry, index) => (
                    <Cell key={`inc-cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg mt-3 space-y-2 text-[11px]">
            {incomeDistributionData.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center bg-slate-900 p-2 rounded border border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                  <span className="text-slate-200 font-medium">{item.name} ({item.value}% Ekonomi)</span>
                </div>
                <span className="text-amber-400 font-bold">{item.monthly.toLocaleString('id-ID')} {stats.currency}/bulan</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }

  return null;
}
