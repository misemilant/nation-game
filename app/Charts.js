'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function Charts({ activeTab, stats }) {
  const ageData = [{ name: 'Anak', value: 25 }, { name: 'Produktif', value: 65 }, { name: 'Lansia', value: 10 }];
  const healthData = [{ name: 'Sehat', value: Math.max(10, stats.environment + 10) }, { name: 'Sakit Ringan', value: 30 }, { name: 'Kronis', value: Math.max(5, 100 - stats.environment) }];
  const budgetData = [{ name: 'Militer', value: stats.military }, { name: 'Pendidikan', value: stats.education }, { name: 'Ekonomi', value: stats.economy }, { name: 'Lingkungan', value: stats.environment }, { name: 'Sipil', value: stats.civilLiberties }];
  const taxData = [{ name: '10% Kaya', value: Math.min(80, Math.max(40, stats.economy + 20)) }, { name: '80% Menengah', value: 30 }, { name: '10% Miskin', value: Math.max(2, 100 - stats.civilLiberties - 40) }];
  const COLORS = ['#38bdf8', '#34d399', '#f43f5e', '#a855f7', '#fbbf24'];

  const renderChart = (title, data) => (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
      <h3 className="text-xs font-bold mb-2">{title}</h3>
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {activeTab === 'demographics' ? (
        <>
          {renderChart('Struktur Usia', ageData)}
          {renderChart('Status Kesehatan', healthData)}
        </>
      ) : (
        <>
          {renderChart('Alokasi Anggaran APBN', budgetData)}
          {renderChart('Kontribusi Pajak', taxData)}
        </>
      )}
    </div>
  );
}

