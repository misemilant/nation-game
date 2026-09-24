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
    // Estimasi Total Anggaran Pengeluaran APBN berbasis PDB & Ekonomi
    const gdpTrillion = Math.round(15000 + (eco * 250)); 
    const expenditureRate = (15 + (eco * 0.3)).toFixed(1);
    const totalExpenditure = ((gdpTrillion * expenditureRate) / 100).toFixed(1);

    // Hitung bobot alokasi multi-sektor berbasis indikator statistik game
    const totalPoints = edu + health + mil + env + infra + eco + civil + 150;

    const rawBudgetData = [
      { name: 'Pendidikan (Education)', points: edu, color: '#8b5cf6' },
      { name: 'Kesehatan (Healthcare)', points: health, color: '#06b6d4' },
      { name: 'Pertahanan (Defense)', points: mil, color: '#991b1b' },
      { name: 'Transportasi & Infrastruktur', points: infra, color: '#0284c7' },
      { name: 'Lingkungan (Environment)', points: env, color: '#65a30d' },
      { name: 'Industri & Perdagangan', points: eco, color: '#d97706' },
      { name: 'Hukum & Keamanan Publik', points: 100 - civil + 30, color: '#2563eb' },
      { name: 'Kesejahteraan Sosial (Welfare)', points: civil + health, color: '#bef264' },
      { name: 'Administrasi Pemerintahan', points: 40, color: '#1e3a8a' },
      { name: 'Keagamaan & Kebudayaan', points: 30, color: '#db2777' },
    ];

    const budgetPieData = rawBudgetData.map(item => {
      const percentage = ((item.points / totalPoints) * 100).toFixed(1);
      return {
        name: item.name,
        value: parseFloat(percentage),
        color: item.color
      };
    });

    return (
      <div className="space-y-4 font-sans">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
          <h3 className="text-base font-bold text-slate-100">Anggaran Pengeluaran Negara (APBN)</h3>
          <p className="text-xs text-slate-400 mt-1">
            Total APBN: <strong className="text-amber-400">{totalExpenditure} Triliun {stats.currency || 'Rupiah'}</strong> ({expenditureRate}% dari PDB)
          </p>

          <div className="h-64 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={budgetPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={85}>
                  {budgetPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] text-left border-t border-slate-800 pt-3">
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
