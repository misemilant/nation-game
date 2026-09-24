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

  // TAB 1: DEMOGRAFI & KESEHATAN
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

  // TAB 2: SEKTOR BERNEGARA (11 SEKTOR LENGKAP)
  if (activeTab === 'sectors') {
    const lawOrder = Math.min(100, Math.max(10, Math.round((100 - civil) * 0.4 + mil * 0.6)));
    const welfare = Math.min(100, Math.max(10, Math.round((health + edu + env) / 3)));
    const culture = Math.min(100, Math.max(10, Math.round((civil + edu) / 2)));
    const agriculture = Math.min(100, Math.max(10, Math.round((env * 0.6 + infra * 0.4))));
    const housing = Math.min(100, Math.max(10, Math.round((infra * 0.6 + eco * 0.4))));

    const sectorList = [
      { label: 'Sektor Pendidikan', val: edu, color: 'bg-purple-500', desc: 'Mutu sekolah, riset, dan literasi masyarakat' },
      { label: 'Hukum & Ketertiban', val: lawOrder, color: 'bg-sky-500', desc: 'Penegakan hukum, stabilitas, dan keamanan siber' },
      { label: 'Pertahanan & Militer', val: mil, color: 'bg-rose-600', desc: 'Kesiapsiagaan alutsista dan ketahanan wilayah' },
      { label: 'Industri & Perdagangan', val: eco, color: 'bg-amber-500', desc: 'Pertumbuhan pasar swasta, BUMN, dan ekspor' },
      { label: 'Transportasi Publik', val: infra, color: 'bg-yellow-400', desc: 'Konektivitas kereta, bus, jalan, dan pelabuhan' },
      { label: 'Layanan Kesehatan', val: health, color: 'bg-emerald-500', desc: 'Fasilitas medis, BPJS, dan penanganan gizi' },
      { name: 'Agama & Budaya', val: culture, color: 'bg-pink-500', desc: 'Pluralisme, norma sosial, dan seni kebudayaan' },
      { label: 'Lingkungan Hidup', val: env, color: 'bg-lime-500', desc: 'Konservasi hutan, emisi, dan pencegahan bencana' },
      { label: 'Kesejahteraan Sosial', val: welfare, color: 'bg-teal-400', desc: 'Perlindungan sosial dan bantuan masyarakat' },
      { label: 'Pertanian & Perikanan', val: agriculture, color: 'bg-green-600', desc: 'Ketahanan pangan nasional dan swasembada' },
      { label: 'Perumahan Layak', val: housing, color: 'bg-indigo-500', desc: 'Akses hunian terjangkau bagi warga negara' },
    ];

    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-white font-sans space-y-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-100">📊 Indikator 11 Sektor Pembangunan Bernegara</h2>
          <p className="text-xs text-slate-400 mt-0.5">Persentase kualitas dan efektivitas sektor nasional berdasarkan regulasi aktif</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {sectorList.map((sec, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800/80 p-3 rounded-lg space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <strong className="text-slate-200">{sec.label || sec.name}</strong>
                <span className="font-bold text-amber-400">{sec.val}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div className={`h-2 rounded-full transition-all duration-500 ${sec.color}`} style={{ width: `${sec.val}%` }}></div>
              </div>
              <p className="text-[10px] text-slate-400 italic">{sec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // TAB 3: APBN & KEUANGAN
  
  // TAB BARU: STRUKTUR PEREKONOMIAN KHAS NATIONSTATES
  if (activeTab === "economy_structure") {
    const totalGdpTrillion = Math.round(15000 + (eco * 150) + (infra * 100));
    const gdpPerCapita = Math.round((totalGdpTrillion * 1000000000) / totalPop);

    const inequalityRatio = Math.max(1.8, 4.5 - (civil * 0.03));
    const poorestMonthly = Math.round((gdpPerCapita / 12) / (inequalityRatio * 1.5));
    const richestMonthly = Math.round((gdpPerCapita / 12) * inequalityRatio);

    // Proporsi Sektor Ekonomi (Dinamis sesuai Kebijakan)
    const privatePct = Math.min(65, Math.max(20, 25 + (eco * 0.4)));
    const stateOwnedPct = Math.min(40, Math.max(10, 35 - (eco * 0.2) + (infra * 0.15)));
    const blackMarketPct = Math.min(25, Math.max(2, 20 - (mil * 0.15) - (civil * 0.05)));
    const govPct = Math.max(10, parseFloat((100 - privatePct - stateOwnedPct - blackMarketPct).toFixed(1)));

    const ecoSectorData = [
      { name: "Sektor Pemerintah (Government)", value: govPct, color: "#2563eb" },
      { name: "Industri Swasta (Private Industry)", value: privatePct, color: "#dc2626" },
      { name: "Sektor BUMN (State-Owned)", value: stateOwnedPct, color: "#d97706" },
      { name: "Pasar Gelap / Informal (Black Market)", value: blackMarketPct, color: "#334155" },
    ];

    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-center text-white font-sans space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-100">Perekonomian {stats.name || "Negara"}</h2>
          <p className="text-xs text-slate-300 mt-1">
            Total PDB (GDP): <strong className="text-amber-400">{totalGdpTrillion.toLocaleString("id-ID")} Triliun {stats.currency || "Rupiah"}</strong>
          </p>
          <p className="text-xs text-sky-400 font-medium">
            Rp {gdpPerCapita.toLocaleString("id-ID")} per jiwa / tahun
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px]">
          <div>
            <span className="text-slate-400 block">10% Penduduk Termiskin:</span>
            <span className="text-rose-400 font-bold">Rp {(poorestMonthly / 1000000).toFixed(2)} Juta/bln</span>
          </div>
          <div>
            <span className="text-slate-400 block">10% Penduduk Terkaya:</span>
            <span className="text-emerald-400 font-bold">Rp {(richestMonthly / 1000000).toFixed(2)} Juta/bln</span>
          </div>
        </div>

        <div className="h-64 sm:h-72 w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={ecoSectorData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90}>
                {ecoSectorData.map((entry, index) => (
                  <Cell key={`eco-struct-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-left border-t border-slate-800 pt-3">
          {ecoSectorData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-slate-950 p-2.5 rounded border border-slate-800">
              <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }}></span>
              <span className="text-slate-300 truncate">{item.name}: <strong className="text-white">{item.value}%</strong></span>
            </div>
          ))}
        </div>
      </div>
    );
  }


  if (activeTab === 'finance') {
    const totalGdpTrillion = Math.round(15000 + (eco * 150) + (infra * 100));
    const expenditureGdpPct = (18 + (eco * 0.15) + (infra * 0.08)).toFixed(1);
    const totalExpenditureTrillion = ((totalGdpTrillion * expenditureGdpPct) / 100).toFixed(1);

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

    const taxGdpPct = (11 + (eco * 0.12) + (civil * 0.03)).toFixed(1);
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

    const baseMonthlyAvg = 3.5 + (eco * 0.04) + (infra * 0.02);
    const gapRatio = Math.max(2.5, 6.0 - (civil * 0.04));

    const poorMonthlyJuta = Math.max(1.2, baseMonthlyAvg / 2.2).toFixed(2);
    const middleMonthlyJuta = (baseMonthlyAvg * 1.1).toFixed(2);
    const richMonthlyJuta = (baseMonthlyAvg * gapRatio).toFixed(2);

    const richShare = Math.min(60, Math.max(30, 48 + (eco * 0.12) - (civil * 0.1)));
    const poorShare = Math.max(3, Math.min(12, 4 + (civil * 0.06)));
    const middleShare = parseFloat((100 - richShare - poorShare).toFixed(1));

    const incomeDistributionData = [
      { name: '10% Penduduk Termiskin', value: poorShare, color: '#ef4444', juta: poorMonthlyJuta },
      { name: '80% Kelas Menengah', value: middleShare, color: '#3b82f6', juta: middleMonthlyJuta },
      { name: '10% Penduduk Terkaya', value: richShare, color: '#eab308', juta: richMonthlyJuta },
    ];

    return (
      <div className="space-y-6 font-sans text-white">
        
        {/* KARTU 1: ALOKASI APBN */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-center">
          <h2 className="text-base sm:text-lg font-bold text-slate-100">Alokasi Pengeluaran APBN</h2>
          <p className="text-xs text-slate-300 mt-1">
            Total PDB (GDP): <strong className="text-emerald-400">{totalGdpTrillion.toLocaleString('id-ID')} Triliun {stats.currency || 'Rupiah'}</strong> • PDB/Jiwa: <strong className="text-sky-400">Rp {Math.round((totalGdpTrillion * 1000000000) / totalPop).toLocaleString('id-ID')}</strong><br/><span className="text-[11px] text-slate-400">Total APBN: <strong className="text-amber-400">{totalExpenditureTrillion} Triliun {stats.currency || 'Rupiah'}</strong> ({expenditureGdpPct}% dari PDB)</span>
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

        {/* KARTU 3: PENDAPATAN BULANAN PENDUDUK */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-center">
          <h2 className="text-base sm:text-lg font-bold text-slate-100">Pendapatan Bulanan Penduduk</h2>
          <p className="text-xs text-slate-300 mt-1">
            Rata-rata Nasional: <strong className="text-sky-400">{baseMonthlyAvg.toFixed(2)} Juta {stats.currency || 'Rupiah'}/bulan</strong>
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
                  <span className="text-amber-400 font-bold text-xs">Rp {item.juta} Juta/bln</span>
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
