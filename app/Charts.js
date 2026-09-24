'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function Charts({ activeTab, stats }) {
  if (!stats) return null;

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-sans text-white">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
          <h3 className="text-sm font-bold text-slate-300 mb-1">Struktur Demografi Penduduk</h3>
          <p className="text-xs text-slate-400">Total: <strong className="text-white">{totalPop.toLocaleString('id-ID')} Jiwa</strong> ({ (totalPop / 1000000).toFixed(1) } Juta)</p>
          <p className="text-xs text-blue-400 font-semibold mt-1">Usia Produktif: {productiveRatio.toFixed(1)}%</p>
          <div className="h-52 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={demoData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70}>
                  {demoData.map((entry, index) => (
                    <Cell key={`demo-cell-${index}`} fill={entry.color} />
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
          <div className="h-52 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={healthData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70}>
                  {healthData.map((entry, index) => (
                    <Cell key={`health-cell-${index}`} fill={entry.color} />
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
    // Perhitungan Ekonomi & PDB
    const totalGdpTrillion = Math.round(12000 + (eco * 350) + (infra * 150));
    const expenditureGdpPct = (20 + (eco * 0.25) + (infra * 0.1)).toFixed(1);
    const totalExpenditureTrillion = ((totalGdpTrillion * expenditureGdpPct) / 100).toFixed(1);

    // 1. ALOKASI APBN SEKTOR BERNEGARA (12 Sektor - Bahasa Indonesia)
    const totalExpenditurePoints = edu + health + mil + env + infra + eco + civil + 200;
    const rawExpenditureData = [
      { name: 'Administrasi Pemerintahan', points: 40, color: '#2563eb' },
      { name: 'Pertahanan & Militer', points: mil, color: '#991b1b' },
      { name: 'Pendidikan', points: edu, color: '#a855f7' },
      { name: 'Lingkungan Hidup', points: env, color: '#65a30d' },
      { name: 'Layanan Kesehatan', points: health, color: '#06b6d4' },
      { name: 'Industri & Perdagangan', points: eco, color: '#d97706' },
      { name: 'Bantuan Luar Negeri', points: Math.max(5, civil - 20), color: '#10b981' },
      { name: 'Hukum & Ketertiban', points: Math.max(20, 100 - civil + mil * 0.3), color: '#0284c7' },
      { name: 'Transportasi Publik', points: infra, color: '#eab308' },
      { name: 'Kebijakan Sosial', points: Math.max(15, civil + health * 0.5), color: '#78350f' },
      { name: 'Keagamaan & Kebudayaan', points: 30, color: '#ec4899' },
      { name: 'Kesejahteraan Sosial (Welfare)', points: Math.max(20, civil + health + edu * 0.3), color: '#bef264' },
    ];

    const expenditurePieData = rawExpenditureData.map(item => ({
      name: item.name,
      value: parseFloat(((item.points / totalExpenditurePoints) * 100).toFixed(1)),
      color: item.color
    }));

    // 2. PENDAPATAN PAJAK NEGARA (6 Sektor Pajak - Bahasa Indonesia)
    const taxGdpPct = (12 + (eco * 0.2) + (civil * 0.05)).toFixed(1);
    const totalTaxRevenueTrillion = ((totalGdpTrillion * taxGdpPct) / 100).toFixed(1);

    const rawTaxData = [
      { name: 'Pajak Penghasilan (PPh)', points: 30 + (eco * 0.1), color: '#10b981' },
      { name: 'Pajak Korporasi & Badan', points: 25 + (infra * 0.1), color: '#8b5cf6' },
      { name: 'Pajak Pertambahan Nilai (PPN)', points: 20 + (civil * 0.05), color: '#f97316' },
      { name: 'Bea Cukai & Tarif Impor', points: 15 + (mil * 0.05), color: '#0284c7' },
      { name: 'Pajak Properti & Barang Mewah', points: 10 + (eco * 0.05), color: '#ec4899' },
      { name: 'Penerimaan Pajak Lainnya', points: 10, color: '#64748b' },
    ];
    const totalTaxPoints = rawTaxData.reduce((acc, curr) => acc + curr.points, 0);
    const taxPieData = rawTaxData.map(item => ({
      name: item.name,
      value: parseFloat(((item.points / totalTaxPoints) * 100).toFixed(1)),
      color: item.color
    }));

    // 3. PENDAPATAN BULANAN PENDUDUK (Dinamis dalam Juta Rupiah/Bulan)
    const monthlyAvgIncomeRupiah = Math.round(((totalGdpTrillion * 1000000000) / totalPop) / 12);
    const inequalityFactor = Math.max(1.8, 4.5 - (civil * 0.03));
    
    // Konversi ke satuan Juta Rupiah
    const poorMonthlyJuta = ((monthlyAvgIncomeRupiah / (inequalityFactor * 1.6)) / 1000000).toFixed(2);
    const middleMonthlyJuta = ((monthlyAvgIncomeRupiah * 0.85) / 1000000).toFixed(2);
    const richMonthlyJuta = ((monthlyAvgIncomeRupiah * inequalityFactor) / 1000000).toFixed(2);
    const avgMonthlyJuta = (monthlyAvgIncomeRupiah / 1000000).toFixed(2);

    const richShare = Math.min(65, Math.max(25, 45 + (eco * 0.15) - (civil * 0.1)));
    const poorShare = Math.max(2, Math.min(15, 5 + (civil * 0.08)));
    const middleShare = parseFloat((100 - richShare - poorShare).toFixed(1));

    const incomeDistributionData = [
      { name: '10% Penduduk Termiskin', value: poorShare, color: '#ef4444', juta: poorMonthlyJuta },
      { name: '80% Kelas Menengah', value: middleShare, color: '#3b82f6', juta: middleMonthlyJuta },
      { name: '10% Penduduk Terkaya', value: richShare, color: '#eab308', juta: richMonthlyJuta },
    ];

    return (
      <div className="space-y-6 font-sans text-white">
        
        {/* KARTU 1: ALOKASI APBN (Grid 1 Kolom di HP, 2 Kolom di Desktop) */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-center">
          <h2 className="text-base sm:text-lg font-bold text-slate-100">Alokasi Pengeluaran APBN</h2>
          <p className="text-xs text-slate-300 mt-1">
            Total APBN: <strong className="text-amber-400">{totalExpenditureTrillion} Triliun {stats.currency || 'Rupiah'}</strong> ({expenditureGdpPct}% dari PDB)
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-4">
            <div className="h-60 sm:h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={expenditurePieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                    {expenditurePieData.map((entry, index) => (
                      <Cell key={`exp-cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-left">
                {expenditurePieData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-900 p-2 rounded border border-slate-800/80">
                    <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                    <span className="text-slate-300 truncate">{item.name}: <strong className="text-white">{item.value}%</strong></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* KARTU 2: PENDAPATAN PAJAK NEGARA */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-center">
          <h2 className="text-base sm:text-lg font-bold text-slate-100">Pendapatan Pajak Negara</h2>
          <p className="text-xs text-slate-300 mt-1">
            Total Penerimaan Pajak: <strong className="text-emerald-400">{totalTaxRevenueTrillion} Triliun {stats.currency || 'Rupiah'}</strong> ({taxGdpPct}% dari PDB)
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-4">
            <div className="h-56 sm:h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={taxPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75}>
                    {taxPieData.map((entry, index) => (
                      <Cell key={`tax-cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-left">
                {taxPieData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-900 p-2 rounded border border-slate-800/80">
                    <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                    <span className="text-slate-300 truncate">{item.name}: <strong className="text-white">{item.value}%</strong></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* KARTU 3: PENDAPATAN BULANAN PENDUDUK (JUTA RUPIAH/BULAN) */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-center">
          <h2 className="text-base sm:text-lg font-bold text-slate-100">Pendapatan Bulanan Penduduk</h2>
          <p className="text-xs text-slate-300 mt-1">
            Rata-rata Nasional: <strong className="text-sky-400">{avgMonthlyJuta} Juta {stats.currency || 'Rupiah'}/bulan</strong>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-4">
            <div className="h-56 sm:h-60 w-full">
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

            <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-2 text-[11px] text-left">
              {incomeDistributionData.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-slate-900 p-2.5 rounded border border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                    <span className="text-slate-200 font-semibold">{item.name} ({item.value}% Porsi)</span>
                  </div>
                  <span className="text-amber-400 font-bold text-xs">{item.juta} Juta/bln</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    );
  }

  return null;
}
