'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function Charts({ activeTab, stats }) {
  const COLORS = ['#38bdf8', '#34d399', '#f43f5e', '#a855f7', '#fbbf24', '#f97316'];

  // Kalkulasi Pendapatan Rata-Rata Warga per Bulan
  const baseIncome = Math.max(1000000, stats.economy * 150000);
  const incomePoor = Math.round(baseIncome * 0.35 * (stats.civilLiberties / 50));
  const incomeMiddle = Math.round(baseIncome * 1.0);
  const incomeRich = Math.round(baseIncome * 4.2 * (stats.economy / 50));

  // Kalkulasi Pendapatan Pajak Sektor (miliar Rupiah)
  const taxHealth = Math.round(stats.education * 15);
  const taxIndustry = Math.round(stats.economy * 45);
  const taxTransport = Math.round(stats.civilLiberties * 20);

  // Data Diagram Alokasi Anggaran Sektor (%)
  const budgetData = [
    { name: 'Kesehatan', value: Math.max(10, Math.round(stats.education * 0.7)) },
    { name: 'Industri', value: Math.max(10, Math.round(stats.economy * 0.9)) },
    { name: 'Transportasi Publik', value: Math.max(10, Math.round(stats.civilLiberties * 0.8)) },
    { name: 'Militer', value: stats.military },
    { name: 'Pendidikan', value: stats.education },
    { name: 'Lingkungan', value: stats.environment }
  ];

  // Data Diagram Demografi & Kesehatan
  const ageData = [
    { name: 'Anak-Anak', value: 25 },
    { name: 'Usia Produktif', value: 65 },
    { name: 'Lansia', value: 10 }
  ];
  const healthData = [
    { name: 'Sehat Optimal', value: Math.max(10, stats.environment + 10) },
    { name: 'Sakit Ringan', value: 30 },
    { name: 'Kondisi Kronis', value: Math.max(5, 100 - stats.environment) }
  ];

  const renderChart = (title, data) => (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
      <h3 className="text-xs font-bold mb-2 text-slate-200">{title}</h3>
      <div className="h-44 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} label>
              {data.map((_, idx) => <Cell key={idx} fill={COLORS[idx % COLORS.length]} />)}
            </Pie>
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: '10px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {activeTab === 'demographics' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderChart('Struktur Usia Populasi', ageData)}
          {renderChart('Kondisi Kesehatan Masyarakat', healthData)}
        </div>
      ) : (
        <div className="space-y-4">
          {/* Kartu Kartu Statistik 1: Pendapatan Rata-Rata Warga */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h3 className="text-xs font-bold text-slate-200 mb-3 uppercase tracking-wider">
              💵 Pendapatan Rata-Rata Warga (Per Bulan)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="text-rose-400 font-semibold block mb-1">Penduduk Miskin</span>
                <span className="text-base font-bold text-white">{stats.currency} {incomePoor.toLocaleString('id-ID')}</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="text-amber-400 font-semibold block mb-1">Kelas Menengah</span>
                <span className="text-base font-bold text-white">{stats.currency} {incomeMiddle.toLocaleString('id-ID')}</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="text-emerald-400 font-semibold block mb-1">Penduduk Kaya</span>
                <span className="text-base font-bold text-white">{stats.currency} {incomeRich.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>

          {/* Kartu Kartu Statistik 2: Pendapatan Pajak Menurut Sektor */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h3 className="text-xs font-bold text-slate-200 mb-3 uppercase tracking-wider">
              🏛️ Pendapatan Pajak Sektor Utama (Per Tahun)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="text-teal-400 font-semibold block mb-1">Sektor Kesehatan</span>
                <span className="text-base font-bold text-white">{stats.currency} {taxHealth.toLocaleString('id-ID')} Miliar</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="text-sky-400 font-semibold block mb-1">Sektor Industri</span>
                <span className="text-base font-bold text-white">{stats.currency} {taxIndustry.toLocaleString('id-ID')} Miliar</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="text-indigo-400 font-semibold block mb-1">Transportasi Publik</span>
                <span className="text-base font-bold text-white">{stats.currency} {taxTransport.toLocaleString('id-ID')} Miliar</span>
              </div>
            </div>
          </div>

          {/* Kartu Kartu Statistik 3: Diagram Alokasi Anggaran APBN */}
          <div>
            {renderChart('📊 Alokasi Anggaran APBN per Sektor', budgetData)}
          </div>
        </div>
      )}
    </div>
  );
}

