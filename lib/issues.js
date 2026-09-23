export const ISSUES = [
  // ==================== 1. ISU SOSIAL ====================
  {
    id: 1,
    title: "Subsidi Angkutan Umum vs Pembatasan Kendaraan Pribadi",
    description: "Kemacetan dan kesenjangan akses transportasi mendorong pengalihan APBN untuk menggratiskan angkutan umum serta menerapkan pajak tinggi bagi kendaraan pribadi.",
    options: [
      { text: "Gratiskan transportasi publik dan naikkan pajak kendaraan pribadi.", effects: { environment: +15, economy: +10, civilLiberties: -10 } },
      { text: "Serahkan ke mekanisme pasar dan fokus pada pembangunan jalan tol baru.", effects: { environment: -10, economy: +5, civilLiberties: +5 } }
    ]
  },
  {
    id: 2,
    title: "Program Pemenuhan Gizi & Makanan Gratis Pelajar",
    description: "Pemerintah merencanakan program bantuan gizi gratis bagi pelajar demi menekan angka stunting, namun membutuhkan alokasi APBN yang sangat besar.",
    options: [
      { text: "Laksanakan program makan gratis menyeluruh dengan alokasi APBN khusus.", effects: { education: +15, civilLiberties: +10, economy: -10 } },
      { text: "Fokuskan anggaran pada infrastruktur sekolah dan peningkatan gaji guru.", effects: { education: +20, economy: +5 } }
    ]
  },

  // ==================== 2. ISU POLITIK ====================
  {
    id: 3,
    title: "Batas Usia Minimal & Syarat Pencalonan Presiden",
    description: "Muncul wacana penyesuaian syarat usia minimal pencalonan presiden demi mendorong tokoh muda, namun dikhawatirkan memicu politik dinasti.",
    options: [
      { text: "Turunkan batas usia minimum calon pimpinan untuk regenerasi kepemimpinan muda.", effects: { civilLiberties: +10, education: +5, military: -5 } },
      { text: "Pertahankan batasan usia ketat demi menjamin pematangan rekam jejak kepemimpinan.", effects: { civilLiberties: -5, economy: +5 } }
    ]
  },
  {
    id: 4,
    title: "Pembangunan Ibu Kota Baru & Pemerataan Wilayah",
    description: "Proyek pemindahan ibu kota negara dirancang untuk mengurangi beban pulau utama dan mempercepat pertumbuhan ekonomi di daerah luar.",
    options: [
      { text: "Percepat pemindahan ibu kota dengan dukungan investasi publik dan swasta.", effects: { economy: +15, environment: -10, civilLiberties: +5 } },
      { text: "Tunda pemindahan ibu kota dan alokasikan dana untuk perbaikan kota-kota eksisting.", effects: { economy: +5, environment: +10, education: +5 } }
    ]
  },

  // ==================== 3. ISU EKONOMI ====================
  {
    id: 5,
    title: "Hilirisasi Mineral Tambang & Larangan Ekspor Mentah",
    description: "Pemerintah melarang ekspor bijih nikel dan mineral mentah demi mewajibkan pembangunan smelter dalam negeri meski diprotes organisasi dunia.",
    options: [
      { text: "Tegaskan kebijakan hilirisasi demi nilai tambah ekonomi dalam negeri.", effects: { economy: +25, environment: -15, military: +5 } },
      { text: "Buka kembali ekspor mentah secara terbatas untuk menjaga perdagangan internasional.", effects: { economy: -10, environment: +10, civilLiberties: +5 } }
    ]
  },
  {
    id: 6,
    title: "Subsidi BBM Tepat Sasaran vs Kebijakan Satu Harga",
    description: "Pemerintah memperdebatkan apakah BBM bersubsidi harus dibatasi ketat menggunakan pendaftaran digital, atau dibebaskan untuk menjaga logistik.",
    options: [
      { text: "Batasi ketat penerima subsidi menggunakan pendaftaran digital tepat sasaran.", effects: { economy: +15, civilLiberties: -10, environment: +5 } },
      { text: "Pertahankan BBM Subsidi terbuka demi menekan inflasi dan menjaga daya beli.", effects: { economy: -15, civilLiberties: +10, environment: -10 } }
    ]
  },

  // ==================== 4. ISU HUKUM ====================
  {
    id: 7,
    title: "RUU Perampasan Aset Koruptor & Hukuman Mati",
    description: "Masyarakat menuntut pengesahan RUU Perampasan Aset hasil korupsi serta pembuktian terbalik harta pejabat demi memberikan efek jera.",
    options: [
      { text: "Sahkan RUU Perampasan Aset koruptor tanpa kompromi demi memiskinkan pelaku kejahatan.", effects: { economy: +20, civilLiberties: +10, military: +5 } },
      { text: "Utamakan pengembalian kerugian negara melalui mekanisme perdata tanpa hukuman ekstrem.", effects: { civilLiberties: -10, economy: -10 } }
    ]
  },
  {
    id: 8,
    title: "Penguatan Kewenangan Lembaga Antikorupsi",
    description: "Dilema antara memberikan wewenang penyadapan penuh tanpa izin pengadilan kepada lembaga antikorupsi atau membatasi wewenangnya.",
    options: [
      { text: "Berikan wewenang penuh penyadapan dan penindakan tegas.", effects: { economy: +15, civilLiberties: -10 } },
      { text: "Batasi wewenang melalui mekanisme pengawasan peradilan.", effects: { civilLiberties: +10, economy: -10 } }
    ]
  },

  // ==================== 5. ISU HAK ASASI MANUSIA (HAM) ====================
  {
    id: 9,
    title: "Pemberlakuan Jam Malam Pemuda & Patroli Keamanan",
    description: "Meningkatnya kejahatan jalanan memicu usulan pemberlakuan jam malam ketat bagi remaja, namun membatasi ruang gerak publik.",
    options: [
      { text: "Terapkan jam malam dan perketat patroli aparat keamanan.", effects: { military: +15, civilLiberties: -15 } },
      { text: "Tolak jam malam dan tingkatkan fasilitas kegiatan pemuda di malam hari.", effects: { civilLiberties: +15, military: -5, education: +5 } }
    ]
  },
  {
    id: 10,
    title: "Reformasi Pelayanan Kesehatan Universal (BPJS)",
    description: "Sistem jaminan kesehatan mengalami defisit. Didebatkan apakah iuran dinaikkan atau dilindungi penuh oleh APBN.",
    options: [
      { text: "Tanggung penuh defisit dengan dana APBN agar layanan kesehatan gratis.", effects: { economy: -15, civilLiberties: +15 } },
      { text: "Naikkan iuran bulanan peserta sesuai dengan tingkat pendapatan.", effects: { economy: +10, civilLiberties: -10 } }
    ]
  },

  // ==================== 6. ISU LINGKUNGAN HIDUP ====================
  {
    id: 11,
    title: "Program Transisi Energi Hijau vs Fosil",
    description: "Kementerian Lingkungan Hidup mengusulkan penghentian bertahap subsidi energi fosil untuk mempercepat peralihan ke energi terbarukan.",
    options: [
      { text: "Hentikan subsidi fosil secara bertahap dan alihkan dana ke pembangkit tenaga surya dan angin.", effects: { environment: +15, economy: -5, civilLiberties: +5 } },
      { text: "Pertahankan subsidi energi fosil demi menjaga stabilitas harga dan daya beli masyarakat.", effects: { environment: -15, economy: +10, civilLiberties: -5 } }
    ]
  },
  {
    id: 12,
    title: "Legalisasi & Tata Kelola Ekspor Pasir Laut",
    description: "Pemerintah mempertimbangkan pembukaan kembali ekspor pasir laut hasil pengerukan untuk menambah pendapatan negara, namun ditentang aktivis.",
    options: [
      { text: "Izinkan ekspor pasir laut dengan syarat pengerukan sedimentasi terukur.", effects: { economy: +15, environment: -20 } },
      { text: "Larang total ekspor pasir laut untuk melindungi ekosistem pesisir.", effects: { environment: +20, economy: -10 } }
    ]
  },

  // ==================== 7. ISU AGAMA ====================
  {
    id: 13,
    title: "Pengelolaan Konsesi Tambang oleh Organisasi Keagamaan",
    description: "Pemerintah memberikan penawaran izin usaha pertambangan khusus kepada organisasi kemasyarakatan keagamaan untuk kemandirian ekonomi.",
    options: [
      { text: "Dukung Ormas keagamaan mengelola tambang untuk pemerataan ekonomi dan kegiatan sosial.", effects: { economy: +15, civilLiberties: +5, environment: -10 } },
      { text: "Batasi pengelolaan tambang hanya pada korporasi profesional demi kepatuhan AMDAL.", effects: { environment: +15, economy: -5 } }
    ]
  },
  {
    id: 14,
    title: "Sertifikasi Halal Wajib Bagi Produk Makanan",
    description: "Regulasi baru mewajibkan seluruh UMKM dan industri makanan memiliki sertifikasi halal yang ditanggung oleh pemerintah.",
    options: [
      { text: "Wajibkan sertifikasi halal terintegrasi dan berikan subsidi bagi UMKM.", effects: { civilLiberties: -5, economy: +10 } },
      { text: "Bebaskan pelaku usaha menentukan sertifikasi secara sukarela.", effects: { civilLiberties: +10, economy: -5 } }
    ]
  },

  // ==================== 8. ISU PENDIDIKAN ====================
  {
    id: 15,
    title: "Wajib Belajar 12 Tahun & Perguruan Tinggi Gratis",
    description: "Kementerian Pendidikan mengusulkan penggratisan biaya pendidikan tinggi bagi mahasiswa berprestasi dari keluarga kurang mampu.",
    options: [
      { text: "Penuhi dana pendidikan tinggi gratis dengan efisiensi anggaran negara.", effects: { education: +25, civilLiberties: +15, economy: -10 } },
      { text: "Fokuskan subsidi hanya pada jenjang pendidikan dasar dan menengah.", effects: { education: +10, economy: +10 } }
    ]
  },
  {
    id: 16,
    title: "Pengangkatan Tenaga Honorer & Guru Jadi PPPK",
    description: "Jutaan tenaga honorer dan guru menuntut pengangkatan langsung menjadi Pegawai Pemerintah dengan Perjanjian Kerja (PPPK).",
    options: [
      { text: "Angkat seluruh tenaga honorer secara massal menjadi PPPK dengan jaminan kesejahteraan.", effects: { education: +15, civilLiberties: +15, economy: -15 } },
      { text: "Terapkan tes seleksi ketat berbasis kompetensi untuk efisiensi birokrasi.", effects: { economy: +10, education: -5, civilLiberties: -5 } }
    ]
  },

  // ==================== 9. ISU KETENAGAKERJAAN ====================
  {
    id: 17,
    title: "Uji Coba 4 Hari Kerja Dalam Seminggu",
    description: "Kementerian Ketenagakerjaan mengusulkan uji coba 4 hari kerja seminggu untuk meningkatkan produktivitas dan kesejahteraan pekerja.",
    options: [
      { text: "Terapkan 4 hari kerja bagi sektor pemerintahan dan industri kreatif.", effects: { civilLiberties: +15, economy: -5 } },
      { text: "Pertahankan 5-6 hari kerja sesuai standar industri tradisional.", effects: { economy: +10, civilLiberties: -5 } }
    ]
  },
  {
    id: 18,
    title: "Pengetatan Impor Tekstil & Perlindungan Pekerja Lokal",
    description: "Pasar lokal dibanjiri pakaian dan produk tekstil impor murah yang mengancam keberlangsungan pabrik tekstil serta UMKM dalam negeri.",
    options: [
      { text: "Terapkan bea masuk tinggi dan perketat syarat masuk barang impor.", effects: { economy: +15, civilLiberties: -5 } },
      { text: "Biarkan perdagangan bebas berlaku agar konsumen mendapatkan akses barang murah.", effects: { civilLiberties: +10, economy: -15 } }
    ]
  },

  // ==================== 10. ISU SAINS ====================
  {
    id: 19,
    title: "Peningkatan Anggaran Riset Sains & Teknologi",
    description: "Para ilmuwan meminta alokasi khusus dari APBN untuk riset pengembangan bioteknologi dan laboratorium sains dalam negeri.",
    options: [
      { text: "Alokasikan dana riset besar demi kemandirian sains nasional.", effects: { education: +20, economy: +10, military: +5 } },
      { text: "Prioritaskan anggaran untuk bantuan langsung tunai dan kebutuhan mendesak.", effects: { education: -10, civilLiberties: +10 } }
    ]
  },
  {
    id: 20,
    title: "Pembangunan Pembangkit Listrik Tenaga Nuklir (PLTN)",
    description: "Dewan Energi Nasional mengusulkan riset dan pembangunan PLTN pertama untuk pasokan listrik beban puncak industri.",
    options: [
      { text: "Setujui proyek PLTN demi kemandirian energi dan teknologi nasional.", effects: { economy: +20, environment: -10, civilLiberties: -5 } },
      { text: "Tolak PLTN dan fokus pada pengembangan energi terbarukan ramah lingkungan.", effects: { environment: +15, economy: -10, civilLiberties: +5 } }
    ]
  },

  // ==================== 11. ISU TEKNOLOGI ====================
  {
    id: 21,
    title: "Wajib Belajar Koding & Kecerdasan Buatan (AI)",
    description: "Dewan Pendidikan Nasional menyarankan wajib belajar teknologi koding dan AI sejak sekolah dasar untuk menghadapi era digital.",
    options: [
      { text: "Terapkan kurikulum teknologi baru secara nasional dengan investasi pelatihan guru.", effects: { education: +20, economy: +5, environment: -5 } },
      { text: "Biarkan sekolah memilih kurikulum mandiri dan fokus pada pendidikan karakter.", effects: { education: -10, civilLiberties: +10 } }
    ]
  },
  {
    id: 22,
    title: "Otomatisasi Pelabuhan & Digitalisasi Logistik",
    description: "Penggunaan robot dan sistem otomatis di pelabuhan menekan biaya logistik, namun mengancam pekerjaan puluhan ribu buruh pelabuhan.",
    options: [
      { text: "Terapkan otomatisasi penuh pelabuhan demi efisiensi perdagangan.", effects: { economy: +20, civilLiberties: -10 } },
      { text: "Batasi otomatisasi untuk melindungi lapangan kerja buruh pelabuhan.", effects: { economy: -10, civilLiberties: +10 } }
    ]
  },

  // ==================== 12. ISU MEDIA & ENTERTAINMENT ====================
  {
    id: 23,
    title: "Pengawasan Konten Digital & Platform Streamer/Creator",
    description: "Wacana perluasan wewenang Lembaga Penyiaran untuk mengawasi konten tayangan di platform siaran digital (YouTube/TikTok/OTT).",
    options: [
      { text: "Perketat regulasi dan sensor tayangan konten digital demi menjaga norma budaya.", effects: { civilLiberties: -20, military: +5 } },
      { text: "Bebaskan kreator konten digital berkarya tanpa intervensi sensor berlebihan.", effects: { civilLiberties: +20, economy: +10 } }
    ]
  },
  {
    id: 24,
    title: "Penindakan Judi Online & Pengetatan Akses Internet",
    description: "Maraknya judi online yang merugikan perekonomian masyarakat memicu wacana pemblokiran situs-situs luar negeri dan pengawasan lalulintas data.",
    options: [
      { text: "Blokir ketat platform digital luar negeri dan perketat pengawasan internet.", effects: { civilLiberties: -20, economy: +10, military: +5 } },
      { text: "Utamakan edukasi literasi keuangan dan tindak hukum penyedia situs secara spesifik.", effects: { civilLiberties: +15, education: +10, economy: -5 } }
    ]
  }
];

