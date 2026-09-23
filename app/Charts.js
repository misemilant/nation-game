'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function Charts({ activeTab, stats }) {
  // Palette warna khas NationStates
  const COLORS = [
    '#3b71ca', '#a94442', '#a877db', '#778f3d', '#5bc0de', 
    '#f0ad4e', '#10b981', '#0284c7', '#d97706', '#92400e', 
    '#ec4899', '#a3e635'
  ];

  // ==================== KALKULASI DEMOGRAFI ====================
  const totalPop = stats.population;
  const popInMillions = (totalPop / 1000000).toFixed(1);

  // Demografi Usia
  const youthPct = Math.max(15, Math.min(35, 30 - Math.round((stats.education - 50) * 0.1)));
  const elderlyPct = Math.max(5, Math.min(25, 10 + Math.round((stats.environment - 50) * 0.1)));
  const workingPct = 100 - youthPct - elderlyPct;

  const ageData = [
    { name: 'Youth (0-14 yrs)', value: youthPct },
    { name: 'Working Age (15-64 yrs)', value: workingPct },
    { name: 'Elderly (65+ yrs)', value: elderlyPct }
  ];

  // Status Kesehatan Populasi
  const optimalHealth = Math.max(20, Math.min(80, Math.round((stats.environment + stats.education) / 2)));
  const chronicHealth = Math.max(5, Math.min(40, Math.round((100 - stats.environment) * 0.4)));
  const minorHealth = 100 - optimalHealth - chronicHealth;

  const healthData = [
    { name: 'Optimal Health', value: optimalHealth },
    { name: 'Minor Illness', value: minorHealth },
    { name: 'Chronic Condition', value: chronicHealth }
  ];

  // ==================== KALKULASI EKONOMI & APBN ====================
  const totalGDP = Math.round(stats.economy * 2.66);
  const avgIncome = Math.round((totalGDP * 1000000000) / totalPop);
  const poorest10 = Math.round(avgIncome * 0.73 * (stats.civilLiberties / 50));
  const richest10 = Math.round(avgIncome * 1.32 * (stats.economy / 50));

  const expenditureData = [
    { name: 'Administration', value: Math.max(5, Math.round(stats.civilLiberties * 0.4)) },
    { name: 'Defense', value: stats.military },
    { name: 'Education', value: stats.education },
    { name: 'Environment', value: stats.environment },
    { name: 'Healthcare', value: Math.max(8, Math.round(stats.education * 0.7)) },
    { name: 'Industry', value: Math.max(10, Math.round(stats.economy * 0.8)) },
    { name: 'International Aid', value: 5 },
    { name: 'Law & Order', value: Math.max(10, Math.round(stats.military * 0.6)) },
    { name: 'Public Transport', value: Math.max(8, Math.round(stats.civilLiberties * 0.6)) },
    { name: 'Social Policy', value: Math.max(7, Math.round(stats.civilLiberties * 0.5)) },
    { name: 'Spirituality', value: 4 },
    { name: 'Welfare', value: Math.max(8, Math.round(stats.civilLiberties * 0.7)) },
  ];

  const economyBreakdownData = [
    { name: 'Government', value: Math.max(20, Math.round(100 - stats.economy + 20)) },
    { name: 'State-Owned Industry', value: Math.max(10, Math.round(stats.military * 0.3)) },
    { name: 'Private Industry', value: Math.max(15, Math.round(stats.economy * 0.8)) },
    { name: 'Black Market (estimated)', value: Math.max(2, Math.round((100 - stats.civilLiberties) * 0.1)) },
  ];

  const totalExpenditure = expenditureData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 text-white font-sans max-w-xl mx-auto space-y-8">
      
      {activeTab === 'demographics' ? (
        <>
          {/* CHART DEMOGRAFI 1: AGE STRUCTURE */}
          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-100">
              The {stats.name} Demographics
            </h2>
            <div className="text-xs text-slate-300 space-y-1">
              <p className="font-bold text-slate-100">
                Total Population: {totalPop.toLocaleString('id-ID')} citizens ({popInMillions} million)
              </p>
              <p className="text-slate-400">
                Working-Age Ratio: <span className="text-sky-400 font-semibold">{workingPct}%</span>
              </p>
            </div>

            <div className="h-64 w-full my-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ageData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    stroke="#0f172a"
                    strokeWidth={1.5}
                  >
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

          {/* CHART DEMOGRAFI 2: HEALTH STATUS */}
          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-100">
              Public Health Breakdown
            </h2>
            <p className="text-xs text-slate-400">
              Optimal Healthcare Coverage: <span className="text-emerald-400 font-semibold">{optimalHealth}%</span>
            </p>

            <div className="h-64 w-full my-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={healthData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    stroke="#0f172a"
                    strokeWidth={1.5}
                  >
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
          {/* CHART APBN 1: GOVERNMENT EXPENDITURE */}
          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-100">
              {stats.name} Government Expenditure
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              <span className="font-bold text-slate-200">{totalExpenditure}.0 billion {stats.currency}</span> • {Math.min(85, Math.round(stats.economy * 0.85))}% of GDP
            </p>

            <div className="h-64 w-full my-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenditureData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    stroke="#0f172a"
                    strokeWidth={1.5}
                  >
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

          {/* CHART APBN 2: ECONOMY & INCOME BREAKDOWN */}
          <div className="text-center space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-100">
              The {stats.name} Economy
            </h2>
            
            <div className="text-xs text-slate-300 space-y-1">
              <p className="font-bold text-slate-100">
                GDP: {totalGDP} billion {stats.currency}
              </p>
              <p className="text-slate-400">
                {avgIncome.toLocaleString('id-ID')} {stats.currency} per person
              </p>
              <div className="pt-2 text-[11px] text-slate-400 space-y-0.5">
                <p>Poorest 10%: <span className="text-rose-400 font-semibold">{poorest10.toLocaleString('id-ID')} {stats.currency}</span> per person</p>
                <p>Richest 10%: <span className="text-emerald-400 font-semibold">{richest10.toLocaleString('id-ID')} {stats.currency}</span> per person</p>
              </div>
            </div>

            <div className="h-64 w-full my-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={economyBreakdownData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    stroke="#0f172a"
                    strokeWidth={1.5}
                  >
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

