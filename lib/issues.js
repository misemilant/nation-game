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
,
{
  "id": 25,
  "title": "Implementasi Program Makan Bergizi Gratis",
  "category": "Social",
  "description": "Pemerintah merencanakan distribusi makan siang gratis secara masif untuk anak sekolah guna menekan angka stunting. Sektor anggaran mendesak efisiensi di pos kementerian lain.",
  "options": [
    {
      "text": "Alokasikan anggaran APBN secara fleksibel demi kesehatan generasi muda.",
      "effects": {
        "civilLiberties": 5,
        "education": 10,
        "economy": -5
      }
    },
    {
      "text": "Alihkan ke skema kemitraan swasta dan UMKM lokal agar beban APBN ringan.",
      "effects": {
        "economy": 5,
        "civilLiberties": 0,
        "education": 5
      }
    },
    {
      "text": "Tunda program hingga pendapatan dan penerimaan negara stabil.",
      "effects": {
        "economy": 5,
        "education": -5,
        "civilLiberties": -5
      }
    }
  ]
},
{
  "id": 26,
  "title": "Kontroversi Program Tabungan Perumahan Rakyat (Tapera)",
  "category": "Labor",
  "description": "Wacana pemotongan gaji pekerja swasta dan PNS untuk tabungan perumahan mendapat penolakan keras dari asosiasi buruh dan pengusaha.",
  "options": [
    {
      "text": "Wajibkan iuran untuk menjamin kepemilikan rumah rakyat berpenghasilan rendah.",
      "effects": {
        "economy": -5,
        "civilLiberties": -10,
        "environment": 5
      }
    },
    {
      "text": "Jadikan program sukarela khusus bagi pekerja yang membutuhkan.",
      "effects": {
        "civilLiberties": 5,
        "economy": 5
      }
    }
  ]
},
{
  "id": 27,
  "title": "Subsidi Kereta Cepat & Transportasi Massal Nasional",
  "category": "Economic",
  "description": "Operasional kereta cepat memerlukan dukungan dana APBN untuk menutup beban hutang konstruksi dan menjaga harga tiket tetap terjangkau.",
  "options": [
    {
      "text": "Berikan subsidi penuh dari APBN agar menjadi tulang punggung transportasi publik.",
      "effects": {
        "economy": -5,
        "environment": 10,
        "military": 0
      }
    },
    {
      "text": "Naikkan harga tiket sesuai tarif keekonomian tanpa subsidi negara.",
      "effects": {
        "economy": 10,
        "environment": -5,
        "civilLiberties": -5
      }
    }
  ]
},
{
  "id": 28,
  "title": "Pemberantasan Judi Online & Pemblokiran Akses Internet",
  "category": "Legal",
  "description": "Maraknya platform perjudian siber merusak perekonomian kelas menengah bawah. Pemerintah berencana memperketat sensor lalu lintas internet nasional.",
  "options": [
    {
      "text": "Bentuk Satgas Siber khusus dan blokir platform serta rekening terindikasi.",
      "effects": {
        "civilLiberties": -5,
        "military": 10,
        "economy": 5
      }
    },
    {
      "text": "Legalkan dan kenakan pajak tinggi untuk dialokasikan ke rehabilitasi.",
      "effects": {
        "economy": 15,
        "civilLiberties": 5,
        "education": -10
      }
    }
  ]
},
{
  "id": 29,
  "title": "Evaluasi Kurikulum & Wacana Pengembalian Ujian Nasional (UN)",
  "category": "Education",
  "description": "Perdebatan kembali timbul mengenai perlunya Ujian Nasional sebagai standar pemetaaan mutu pendidikan secara merata.",
  "options": [
    {
      "text": "Kembalikan Ujian Nasional untuk mendorong standar kelulusan yang objektif.",
      "effects": {
        "education": 10,
        "civilLiberties": -5
      }
    },
    {
      "text": "Pertahankan Asesmen Nasional tanpa membebani kelulusan siswa.",
      "effects": {
        "civilLiberties": 5,
        "education": 0
      }
    }
  ]
},
{
  "id": 30,
  "title": "Transisi Energi Hijau & Subsidi Kendaraan Listrik",
  "category": "Environment",
  "description": "Guna menekan polusi udara kota besar, pemerintah menggalakkan insentif konversi dan pembelian kendaraan listrik massal.",
  "options": [
    {
      "text": "Gelontorkan insentif pajak masif untuk pabrikan dan pembeli kendaraan listrik.",
      "effects": {
        "environment": 15,
        "economy": -5
      }
    },
    {
      "text": "Fokuskan anggaran pada perbaikan armada transportasi umum listrik.",
      "effects": {
        "environment": 10,
        "civilLiberties": 5,
        "economy": 5
      }
    }
  ]
},
{
  "id": 31,
  "title": "Penerapan Kelas Rawat Inap Standar (KRIS) BPJS Kesehatan",
  "category": "Human Rights",
  "description": "Penghapusan tingkatan kelas 1, 2, dan 3 BPJS Kesehatan bertujuan menciptakan keadilan layanan medis, namun berisiko memicu pendaftaran tunggakan tarif.",
  "options": [
    {
      "text": "Terapkan sistem satu kelas seragam untuk semua lapisan masyarakat.",
      "effects": {
        "civilLiberties": 10,
        "economy": -5
      }
    },
    {
      "text": "Pertahankan sistem berjenjang agar warga mampu tetap berkontribusi lebih.",
      "effects": {
        "economy": 5,
        "civilLiberties": -5
      }
    }
  ]
},
{
  "id": 32,
  "title": "Regulasi Perkembangan AI & Perlindungan Hak Cipta Kreator",
  "category": "Technology",
  "description": "Penggunaan Generative AI kian tidak terkendali dalam mengambil karya seni dan data tanpa izin pencipta.",
  "options": [
    {
      "text": "Atur ketat penggunaan AI dan wajibkan royalti bagi pemilik data.",
      "effects": {
        "education": 5,
        "economy": -5,
        "civilLiberties": 5
      }
    },
    {
      "text": "Bebaskan eksplorasi teknologi AI agar sektor riset digital melaju pesat.",
      "effects": {
        "economy": 10,
        "education": 5,
        "civilLiberties": -5
      }
    }
  ]
},
{
  "id": 33,
  "title": "Restrukturisasi & Efisiensi Jumlah Kementerian",
  "category": "Political",
  "description": "Penambahan kabinet kerja menimbulkan perdebatan mengenai potensi pemborosan anggaran birokrasi negara.",
  "options": [
    {
      "text": "Dukung pemekaran kementerian agar penanganan fokus di setiap bidang.",
      "effects": {
        "economy": -5,
        "military": 5
      }
    },
    {
      "text": "Pangkas dan rampingkan jumlah lembaga demi efisiensi APBN.",
      "effects": {
        "economy": 10,
        "civilLiberties": 5
      }
    }
  ]
},
{
  "id": 34,
  "title": "Pembangunan Bandar Antariksa & Industri Kedirgantaraan",
  "category": "Science",
  "description": "Badan riset mengusulkan peluncuran roket mandiri dengan membangun antariksawan dan pelabuhan roket antariksa nasional.",
  "options": [
    {
      "text": "Danai proyek antariksa nasional sebagai simbol kemajuan sains.",
      "effects": {
        "education": 15,
        "economy": -5,
        "military": 5
      }
    },
    {
      "text": "Fokuskan riset pada teknologi terapan komersial dan pertanian.",
      "effects": {
        "economy": 10,
        "education": 5
      }
    }
  ]
},
{
  "id": 35,
  "title": "Perlindungan Industri Tekstil Lokal dari Produk Impor Murah",
  "category": "Economic",
  "description": "Gelombang PHK melanda pabrik tekstil dalam negeri akibat serbuan barang impor ilegal dan murah dari luar negeri.",
  "options": [
    {
      "text": "Pemberlakuan Bea Masuk Tindakan Pengamanan (BMTP) dan kuota ketat.",
      "effects": {
        "economy": 5,
        "civilLiberties": -5
      }
    },
    {
      "text": "Pertahankan pasar terbuka dan dorong modernisasi mesin pabrik lokal.",
      "effects": {
        "economy": 10,
        "environment": -5
      }
    }
  ]
},
{
  "id": 36,
  "title": "Lisensi Izin Konten Kreator & Penyiaran Streaming",
  "category": "Media/Entertainment",
  "description": "Komisi Penyiaran mengusulkan agar tayangan YouTube, TikTok, dan platform streaming tunduk pada aturan pengawasan seperti TV konvensional.",
  "options": [
    {
      "text": "Wajibkan lisensi dan sensor konten digital yang bertentangan dengan norma.",
      "effects": {
        "civilLiberties": -10,
        "military": 5
      }
    },
    {
      "text": "Biarkan industri kreatif digital bergerak bebas tanpa sensor berlebih.",
      "effects": {
        "civilLiberties": 10,
        "economy": 5
      }
    }
  ]
}
,
{
  "id": 37,
  "title": "Pembatasan Akses Media Sosial bagi Anak di Bawah Umur",
  "category": "Social",
  "description": "Pemerintah memberlakukan Peraturan Perlindungan Anak Digital guna membatasi dan memverifikasi kepemilikan akun media sosial bagi anak di bawah usia 16 tahun demi mencegah perundungan siber.",
  "options": [
    {
      "text": "Terapkan verifikasi identitas (KTP/NIK) secara wajib bagi setiap pembuat akun baru.",
      "effects": {
        "civilLiberties": -10,
        "education": 10,
        "economy": -5
      }
    },
    {
      "text": "Serahkan pengawasan penuh kepada orang tua tanpa pembatasan platform dari pemerintah.",
      "effects": {
        "civilLiberties": 10,
        "education": -5,
        "economy": 5
      }
    }
  ]
},
{
  "id": 38,
  "title": "Proteksi Industri Tekstil Lokal dari Serbuan Produk Impor",
  "category": "Economic",
  "description": "Sektor manufaktur tekstil dalam negeri mengalami krisis akibat dibanjiri barang impor murah. Pemerintah didesak mengenakan bea masuk tindakan pengamanan tinggi.",
  "options": [
    {
      "text": "Berlakukan tarif impor tinggi dan perketat pengawasan jalur pelabuhan.",
      "effects": {
        "economy": 10,
        "civilLiberties": -5
      }
    },
    {
      "text": "Jaga pasar tetap terbuka agar konsumsi masyarakat mendapat barang harga terjangkau.",
      "effects": {
        "economy": -10,
        "civilLiberties": 5
      }
    }
  ]
},
{
  "id": 39,
  "title": "Pengawasan Wajib Halal untuk Produk UMKM dan Restoran",
  "category": "Religion",
  "description": "Implementasi regulasi Wajib Halal bagi seluruh produk konsumsi UMKM memicu perdebatan terkait biaya sertifikasi dan kesiapan pelaku usaha kecil.",
  "options": [
    {
      "text": "Subsidi penuh sertifikasi halal untuk seluruh UMKM agar tidak membebani pedagang.",
      "effects": {
        "economy": -5,
        "civilLiberties": 5,
        "education": 5
      }
    },
    {
      "text": "Berikan sanksi dan batasi izin edar bagi produk yang belum tersertifikasi tepat waktu.",
      "effects": {
        "economy": 5,
        "civilLiberties": -10
      }
    }
  ]
},
{
  "id": 40,
  "title": "Penyesuaian Harga BBM Nonsubsidi & Stabilitas Nilai Tukar",
  "category": "Economic",
  "description": "Gejolak pasar global mendorong lonjakan harga BBM nonsubsidi dan menekan nilai tukar Rupiah terhadap mata uang asing.",
  "options": [
    {
      "text": "Naikkan suku bunga acuan dan biarkan harga BBM menyesuaikan tarif keekonomian.",
      "effects": {
        "economy": 10,
        "civilLiberties": -5
      }
    },
    {
      "text": "Gelontorkan cadangan devisa untuk intervensi mata uang dan intervensi harga BBM.",
      "effects": {
        "economy": -15,
        "civilLiberties": 5
      }
    }
  ]
},
{
  "id": 41,
  "title": "Pengesahan Rancangan Jabatan Polisi pada Lembaga Sipil",
  "category": "Legal",
  "description": "RUU Organisasi Kepolisian membuka ruang bagi personel aktif untuk menduduki jabatan struktural di kementerian dan lembaga pemerintahan sipil.",
  "options": [
    {
      "text": "Setujui penempatan guna memperkuat penegakan hukum dan stabilitas birokrasi.",
      "effects": {
        "military": 10,
        "civilLiberties": -10
      }
    },
    {
      "text": "Tolak aturan dan tegaskan batasan profesionalisme tugas kepolisian di luar ranah sipil.",
      "effects": {
        "civilLiberties": 10,
        "military": -5
      }
    }
  ]
},
{
  "id": 42,
  "title": "Pelunasan Kewajiban Aset Bantuan Likuiditas Bank",
  "category": "Legal",
  "description": "Satgas Penagihan Negara terus mengejar penyerahan aset dan pembayaran utang para obligor BLBI demi menutup kerugian APBN masa lalu.",
  "options": [
    {
      "text": "Sita seluruh aset keluarga dan pemegang saham obligor tanpa kompromi.",
      "effects": {
        "economy": 15,
        "civilLiberties": -5,
        "military": 5
      }
    },
    {
      "text": "Buka skema restrukturisasi pembayaran utang jangka panjang yang fleksibel.",
      "effects": {
        "economy": 5,
        "civilLiberties": 5
      }
    }
  ]
}
];
