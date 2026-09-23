'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function Charts({ ageData, healthData, budgetAllocationData, taxContributionData, COLORS }) {
  return (
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
  );
}

