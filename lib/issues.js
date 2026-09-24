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
,
{
  "id": 43,
  "title": "Penanganan Gempa Bumi & Tsunami di NTT",
  "category": "Social",
  "description": "Gempa tektonik kuat mengguncang wilayah Nusa Tenggara Timur yang merusak fasilitas umum dan pemukiman warga. Pemerintah dihadapkan pada pilihan percepatan rekonstruksi bangunan tahan gempa.",
  "options": [
    {
      "text": "Alokasikan dana darurat APBN untuk relokasi total warga ke zona aman.",
      "effects": {
        "economy": -10,
        "civilLiberties": 5,
        "environment": 10
      }
    },
    {
      "text": "Fokuskan anggaran pada bantuan logistik singkat dan perbaikan infrastruktur vital.",
      "effects": {
        "economy": -5,
        "civilLiberties": -5
      }
    }
  ]
},
{
  "id": 44,
  "title": "Banjir Bandang & Tanah Longsor di Sumatra",
  "category": "Environment",
  "description": "Hujan lebat berhari-hari memicu banjir bandang dan pemukiman terendam di wilayah Sumatra. Aktivitas pembalakan liar di kawasan hulu diduga menjadi pemicu utama.",
  "options": [
    {
      "text": "Moratorium penuh izin tambang dan kelapa sawit di sekitar resapan air Sumatra.",
      "effects": {
        "environment": 15,
        "economy": -10,
        "civilLiberties": 5
      }
    },
    {
      "text": "Bangun tanggul raksasa dan normalisasi sungai tanpa mengganggu izin usaha.",
      "effects": {
        "economy": -5,
        "environment": 5
      }
    }
  ]
},
{
  "id": 45,
  "title": "Erupsi Gunung Semeru & Pengungsian Jawa Timur",
  "category": "Social",
  "description": "Erupsi Gunung Semeru melontarkan awan panas guguran yang mengancam zona pemukiman warga di Lumajang dan sekitarnya.",
  "options": [
    {
      "text": "Tetapkan Kawasan Rawan Bencana (KRB) permanen dan larang warga kembali.",
      "effects": {
        "civilLiberties": -10,
        "environment": 10,
        "economy": -5
      }
    },
    {
      "text": "Bangun sistem Peringatan Dini (EWS) canggih dan izinkan warga bertani di lereng gunung.",
      "effects": {
        "civilLiberties": 10,
        "education": 5,
        "environment": -5
      }
    }
  ]
},
{
  "id": 46,
  "title": "Kebakaran Hutan dan Lahan (Karhutla) di Kalimantan",
  "category": "Environment",
  "description": "Musim kemarau panjang memicu kebakaran lahan gambut di Kalimantan yang menciptakan kabut asap tebal hingga mengganggu kesehatan dan negara tetangga.",
  "options": [
    {
      "text": "Sanksi pidana berat serta pencabutan izin konsesi bagi perusahaan pemilik lahan terbakar.",
      "effects": {
        "environment": 15,
        "economy": -5,
        "military": 5
      }
    },
    {
      "text": "Kerahkan armada pemadam udara (water bombing) dan teknologi modifikasi cuaca masif.",
      "effects": {
        "economy": -10,
        "environment": 10
      }
    }
  ]
},
{
  "id": 47,
  "title": "Krisis Air Bersih & Kekeringan di Nusa Tenggara Barat (NTB)",
  "category": "Environment",
  "description": "Dampak El Nino menyebabkan puluhan desa di NTB mengalami kekeringan ekstrem dan krisis air bersih untuk pertanian.",
  "options": [
    {
      "text": "Bangun proyek desalinasi air laut dan sumur bor dalam secara masif.",
      "effects": {
        "economy": -10,
        "education": 5,
        "environment": 10
      }
    },
    {
      "text": "Distribusikan tangki air darurat dan batasi penggunaan air untuk sektor industri pariwisata.",
      "effects": {
        "economy": -5,
        "civilLiberties": -5
      }
    }
  ]
},
{
  "id": 48,
  "title": "Banjir Rob & Penurunan Muka Tanah di Pesisir Jawa",
  "category": "Environment",
  "description": "Kenaikan permukaan air laut dan penyerapan air tanah berlebih membuat kota-kota pesisir utara Jawa terancam tenggelam.",
  "options": [
    {
      "text": "Bangun Tanggul Laut Raksasa (Giant Sea Wall) di sepanjang pesisir utara Jawa.",
      "effects": {
        "economy": -15,
        "environment": 10,
        "military": 5
      }
    },
    {
      "text": "Larang total penyedotan air tanah oleh industri dan percepat reforestasi mangrove.",
      "effects": {
        "environment": 15,
        "economy": -5,
        "civilLiberties": -5
      }
    }
  ]
}
,
{
  "id": 49,
  "title": "Kasus Keracunan Massal Program Makan Bergizi Gratis (MBG)",
  "category": "Social",
  "description": "Ratusan siswa dan warga di beberapa daerah mengalami keracunan massal usai menyantap menu MBG dari Dapur Satuan Pelayanan Pangan Gizi (SPPG). Terjadi dorongan kuat untuk evaluasi total dan sanksi pengelola.",
  "options": [
    {
      "text": "Hentikan sementara operasional dapur bermasalah dan perketat standar higienis serta ISO pangan.",
      "effects": {
        "health": 10,
        "economy": -5,
        "education": 5
      }
    },
    {
      "text": "Serahkan pengelolaan penuh anggaran makan ke sekolah dan komite orang tua.",
      "effects": {
        "civilLiberties": 10,
        "health": 5,
        "economy": 5
      }
    }
  ]
},
{
  "id": 50,
  "title": "Konflik Agraria & Sengketa Lahan Petani vs Korporasi",
  "category": "Legal",
  "description": "Sengketa izin Hak Guna Usaha (HGU) perkebunan dan tambang memicu gesekan fisik antara petani lokal dan aparat keamanan di berbagai daerah.",
  "options": [
    {
      "text": "Sahkan Pengadilan Khusus Agraria dan redistribusi tanah sengketa ke petani lokal.",
      "effects": {
        "civilLiberties": 10,
        "economy": -5,
        "infrastructure": -5
      }
    },
    {
      "text": "Lindungi izin investasi korporasi demi menjamin kepastian hukum ekosistem bisnis.",
      "effects": {
        "economy": 10,
        "civilLiberties": -10,
        "military": 5
      }
    }
  ]
},
{
  "id": 51,
  "title": "Tindakan Aksi Premanisme & Pungli oleh Ormas",
  "category": "Legal",
  "description": "Ulah oknum Organisasi Kemasyarakatan (Ormas) yang melakukan pungutan liar, pemalakan di kawasan industri, dan intimidasi pedagang makin meresahkan masyarakat.",
  "options": [
    {
      "text": "Revisi UU Ormas, perketat audit keuangan, dan tindak tegas pidana premanisme.",
      "effects": {
        "civilLiberties": -5,
        "military": 10,
        "economy": 10
      }
    },
    {
      "text": "Lakukan pembinaan dan rangkul Ormas ke dalam proyek pemberdayaan ekonomi daerah.",
      "effects": {
        "civilLiberties": 5,
        "economy": -5,
        "military": -5
      }
    }
  ]
},
{
  "id": 52,
  "title": "Kontroversi Pawai & Karnaval Budaya Berbau Eksentrik",
  "category": "Social",
  "description": "Penyelenggaraan karnaval jalanan yang menampilkan simboleksentrik dan kostum kontroversial memicu kemarahan tokoh agama dan ormas karena dinilai merusak moral.",
  "options": [
    {
      "text": "Pemerintah daerah berhak menyensor serta memberlakukan izin etika norma norma lokal.",
      "effects": {
        "civilLiberties": -10,
        "health": 0
      }
    },
    {
      "text": "Bebaskan bentuk ekspresi seni dan kebudayaan sebagai wujud kebebasan berkreasi.",
      "effects": {
        "civilLiberties": 10,
        "economy": 5
      }
    }
  ]
},
{
  "id": 53,
  "title": "Penangkapan & Penanganan Gelombang Demonstrasi Mahasiswa",
  "category": "Human Rights",
  "description": "Aksi unjuk rasa mahasiswa menolak kebijakan ekonomi berakhir ricuh. Aparat mengamankan puluhan aktivis kampus yang memicu kecaman represifitas.",
  "options": [
    {
      "text": "Lepaskan seluruh aktivis dan buka ruang dialog terbuka bersama perwakilan mahasiswa.",
      "effects": {
        "civilLiberties": 15,
        "military": -5,
        "education": 5
      }
    },
    {
      "text": "Proses hukum demonstran yang terbukti merusak fasilitas umum demi ketertiban publik.",
      "effects": {
        "civilLiberties": -10,
        "military": 10,
        "infrastructure": 5
      }
    }
  ]
},
{
  "id": 54,
  "title": "Teror Siber & Intimidasi Doxing Terhadap Aktivis Kritikus",
  "category": "Human Rights",
  "description": "Aktivis lingkungan dan pengamat hukum yang mengkritik kebijakan pemerintah mengalami serangan meretas akun pribadi, doxing data keluarga, hingga teror fisik.",
  "options": [
    {
      "text": "Bentuk Satgas Keamanan Siber Independen untuk melindungi hak privasi warga negara.",
      "effects": {
        "civilLiberties": 10,
        "health": 5,
        "economy": -5
      }
    },
    {
      "text": "Fokuskan pemantauan siber negara pada penanganan isu kejahatan siber finansial saja.",
      "effects": {
        "civilLiberties": -5,
        "economy": 5
      }
    }
  ]
},
{
  "id": 55,
  "title": "Lonjakan Harga RAM & Komponen Komputer Imbas AI",
  "category": "Technology",
  "description": "Permintaan chip memori dan RAM untuk pusat data (data center) AI global melonjak drastis, menyebabkan kelangkaan dan lonjakan harga komponen teknologi dalam negeri.",
  "options": [
    {
      "text": "Berikan subsidi impor komponen teknologi khusus bagi industri lokal dan mahasiswa.",
      "effects": {
        "education": 10,
        "economy": -5,
        "infrastructure": 5
      }
    },
    {
      "text": "Biarkan harga mengikuti mekanisme pasar global sembari mendorong efisiensi komputasi.",
      "effects": {
        "economy": 5,
        "education": -5
      }
    }
  ]
}
,
{
  "id": 56,
  "title": "Kerusakan Massal Gedung Sekolah Akibat Bencana di Aceh",
  "category": "Disaster",
  "description": "Serangkaian bencana alam di Aceh menyebabkan puluhan gedung sekolah rusak berat dan merobohkan fasilitas belajar mengajar, memaksa ribuan siswa belajar di tenda darurat.",
  "options": [
    {
      "text": "Alokasikan dana darurat APBN untuk percepatan pembangunan ulang sekolah tahan gempa.",
      "effects": {
        "education": 10,
        "infrastructure": 10,
        "economy": -5
      }
    },
    {
      "text": "Alihkan kegiatan pembelajaran ke metode daring sementara waktu hingga anggaran daerah siap.",
      "effects": {
        "education": -5,
        "infrastructure": 0,
        "economy": 5
      }
    }
  ]
},
{
  "id": 57,
  "title": "Tragedi Kecelakaan Kapal Penyeberangan KMP Virgo",
  "category": "Infrastructure",
  "description": "Insiden kecelakaan pelayaran yang menimpa KMP Virgo memicu sorotan tajam terkait kelaikan armada kapal tua, standar keselamatan penyeberangan, dan kelebihan muatan.",
  "options": [
    {
      "text": "Pensiunkan kapal berusia di atas 30 tahun dan perketat audit kelaikan laut secara ketat.",
      "effects": {
        "infrastructure": 10,
        "health": 5,
        "economy": -5
      }
    },
    {
      "text": "Berikan toleransi operasional dengan syarat peningkatan peralatan keselamatan di atas kapal.",
      "effects": {
        "infrastructure": -5,
        "economy": 5,
        "health": -5
      }
    }
  ]
},
{
  "id": 58,
  "title": "Krisis Hunian Terjangkau & Lonjakan Harga Properti",
  "category": "Social",
  "description": "Generasi muda dan masyarakat berpenghasilan rendah makin kesulitan memiliki rumah akibat melonjaknya harga tanah dan terbatasnya pasokan hunian murah di kawasan perkotaan.",
  "options": [
    {
      "text": "Luncurkan program insentif Kredit Kepemilikan Rumah (KKR) bersubsidi dan bangun rumah susun rakyat.",
      "effects": {
        "infrastructure": 10,
        "civilLiberties": 5,
        "economy": -5
      }
    },
    {
      "text": "Serahkan dinamika harga properti pada mekanisme pasar serta dorong skema sewa jangka panjang.",
      "effects": {
        "economy": 5,
        "civilLiberties": -5,
        "infrastructure": -5
      }
    }
  ]
},
{
  "id": 59,
  "title": "Dominasi Pekerja Informal & Ketimpangan Lapangan Kerja Formal",
  "category": "Economy",
  "description": "Laporan statistik menunjukkan mayoritas angkatan kerja terjebak di sektor informal tanpa jaminan pensiun dan BPJS Ketenagakerjaan karena minimnya pembukaan lapangan kerja formal.",
  "options": [
    {
      "text": "Berikan insentif pajak bagi perusahaan yang merekrut karyawan tetap dan wajibkan jaminan sosial pekerja.",
      "effects": {
        "economy": 5,
        "health": 5,
        "civilLiberties": 5
      }
    },
    {
      "text": "Permudah regulasi fleksibilitas jam kerja (outsourcing) demi menyerap tenaga kerja sebanyak-banyaknya.",
      "effects": {
        "economy": 10,
        "civilLiberties": -5,
        "health": -5
      }
    }
  ]
},
{
  "id": 60,
  "title": "Gelombang Aksi Demonstrasi Hari Tani Nasional",
  "category": "Human Rights",
  "description": "Ribuan petani menggelar aksi demonstrasi serentak menuntut penyelesaian konflik agraria, penolakan impor pangan saat panen raya, dan jaminan harga komoditas.",
  "options": [
    {
      "text": "Kabulkan tuntutan petani dengan menghentikan impor pangan dan mempercepat redistribusi lahan.",
      "effects": {
        "civilLiberties": 10,
        "environment": 5,
        "economy": -5
      }
    },
    {
      "text": "Tetap jalankan kebijakan pemenuhan stok pangan nasional lewat impor demi menjaga stabilitas harga pasar.",
      "effects": {
        "economy": 5,
        "civilLiberties": -10,
        "environment": -5
      }
    }
  ]
}
,
{
  "id": 61,
  "title": "Eskalasi Serangan KKB & Stabilitas Keamanan di Papua",
  "category": "Military",
  "description": "Kelompok Kriminal Bersenjata (KKB) kembali melakukan penyerangan terhadap fasilitas publik dan tenaga medis di wilayah pegunungan Papua, memicu perdebatan penanganan militer.",
  "options": [
    {
      "text": "Tingkatkan status operasi militer terpadu untuk penindakan hukum tegas terhadap KKB.",
      "effects": {
        "military": 10,
        "civilLiberties": -5,
        "infrastructure": 5
      }
    },
    {
      "text": "Kedepankan pendekatan dialog kebudayaan dan pengerahan tokoh masyarakat adat lokal.",
      "effects": {
        "civilLiberties": 10,
        "military": -5,
        "economy": 5
      }
    }
  ]
},
{
  "id": 62,
  "title": "Intoleransi Keagamaan & Pembubaran Penyelenggaraan Ibadah",
  "category": "Human Rights",
  "description": "Sekelompok massa melakukan aksi pembubaran acara keagamaan Kristen serta menolak pembangunan gereja berizin di beberapa daerah dengan alasan norma lingkungan.",
  "options": [
    {
      "text": "Tindak tegas oknum pembubar ibadah dan jamin perlindungan penuh kebebasan beragama.",
      "effects": {
        "civilLiberties": 10,
        "military": 5,
        "education": 5
      }
    },
    {
      "text": "Hentikan kegiatan sementara demi menjaga kondusivitas serta melakukan musyawarah antarwarga.",
      "effects": {
        "civilLiberties": -10,
        "economy": 5
      }
    }
  ]
},
{
  "id": 63,
  "title": "Proyek Food Estate Juta Hektar vs Hak Lahan Adat Papua",
  "category": "Environment",
  "description": "Pembukaan lahan skala raksasa untuk proyek Food Estate mengancam kelestarian hutan sagu dan mengikis hak ulayat masyarakat adat Papua.",
  "options": [
    {
      "text": "Evaluasi proyek Food Estate dan kembalikan hak kelola hutan ulayat kepada masyarakat adat.",
      "effects": {
        "environment": 10,
        "civilLiberties": 10,
        "economy": -5
      }
    },
    {
      "text": "Lanjutkan proyek demi menjamin kedaulatan pangan nasional dan integrasi ekonomi daerah.",
      "effects": {
        "economy": 10,
        "environment": -10,
        "civilLiberties": -5
      }
    }
  ]
},
{
  "id": 64,
  "title": "Pembakaran Lahan Gambut untuk Ekspansi Kebun Kelapa Sawit",
  "category": "Environment",
  "description": "Maraknya praktik pembakaran hutan di wilayah lahan gambut oleh oknum korporasi menyebabkan kabut asap pekat dan merusak ekosistem keanekaragaman hayati.",
  "options": [
    {
      "text": "Moratorium penuh izin kebun sawit di lahan gambut dan cabut izin usaha perusahaan pelanggar.",
      "effects": {
        "environment": 15,
        "health": 5,
        "economy": -5
      }
    },
    {
      "text": "Berikan sanksi denda administratif tanpa menghentikan kegiatan operasional industri ekspor.",
      "effects": {
        "economy": 10,
        "environment": -10,
        "health": -5
      }
    }
  ]
},
{
  "id": 65,
  "title": "Erupsi Anak Krakatau, Krisis Anggaran BMKG & Pemblokiran Rekening Aktivis",
  "category": "Disaster",
  "description": "Peningkatan aktivitas Gunung Anak Krakatau menyoroti minimnya alokasi anggaran mitigasi BMKG, bersamaan dengan gelombang protes akibat aksi pemblokiran rekening bank aktivis demonstrasi.",
  "options": [
    {
      "text": "Buka kembali rekening aktivis serta alokasikan suntikan dana darurat untuk modernisasi alat BMKG.",
      "effects": {
        "civilLiberties": 10,
        "health": 10,
        "infrastructure": 5,
        "economy": -5
      }
    },
    {
      "text": "Pertahankan pemblokiran rekening atas indikasi aliran dana mencurigakan serta efisiensikan anggaran alat BMKG.",
      "effects": {
        "civilLiberties": -10,
        "military": 5,
        "economy": 5
      }
    }
  ]
}
,
{
  "id": 66,
  "title": "Darurat Perjudian Online & Jeratan Pinjaman Online Ilegal",
  "category": "Social",
  "description": "Maraknya platform judi online dan pinjaman online ilegal memicu krisis keuangan keluarga, peningkatan angka kriminalitas, dan gangguan psikologis di kalangan generasi muda.",
  "options": [
    {
      "text": "Bentuk Satgas Keuangan Siber untuk blokir massal situs judi, tindak tegas penyedia rekening penampung, dan jerat pidana pelaku.",
      "effects": {
        "civilLiberties": -5,
        "military": 10,
        "economy": 5,
        "health": 5
      }
    },
    {
      "text": "Legalkan dan kenakan pajak tinggi pada industri perjudian terbatas untuk diawasi ketat dan menambah pendapatan negara.",
      "effects": {
        "economy": 10,
        "civilLiberties": 5,
        "health": -10
      }
    }
  ]
},
{
  "id": 67,
  "title": "Krisis Polusi Udara Perkotaan & Transisi Kendaraan Listrik",
  "category": "Environment",
  "description": "Kualitas udara di pusat perkotaan memburuk hingga level berbahaya akibat emisi transportasi dan Pembangkit Listrik Tenaga Uap (PLTU) batu bara.",
  "options": [
    {
      "text": "Pensiunkan dini PLTU batu bara, berlakukan uji emisi ketat, dan berikan subsidi besar untuk angkutan umum serta Kendaraan Listrik (EV).",
      "effects": {
        "environment": 15,
        "health": 10,
        "infrastructure": 5,
        "economy": -5
      }
    },
    {
      "text": "Fokus pada penanaman pohon dan pembatasan ganjil-genap kendaraan tanpa mengganggu operasional industri energi batu bara.",
      "effects": {
        "economy": 5,
        "environment": -5,
        "health": -5
      }
    }
  ]
},
{
  "id": 68,
  "title": "Simalakama Impor Pakaian Bekas (Thrifting) vs Tekstil Lokal",
  "category": "Economy",
  "description": "Gelombang impor pakaian bekas impor ilegal digemari masyarakat karena murah, tetapi mengancam keberlangsungan industri tekstil dan UMKM konveksi dalam negeri.",
  "options": [
    {
      "text": "Sita dan bakar produk thrifting impor ilegal demi melindungi industri manufaktur tekstil dan lapangan kerja lokal.",
      "effects": {
        "economy": 10,
        "civilLiberties": -5,
        "infrastructure": 5
      }
    },
    {
      "text": "Izinkan dan kenakan bea masuk impor pakaian bekas sebagai bentuk regulasi pasar dan dukungan ekonomi kreatif murah.",
      "effects": {
        "civilLiberties": 5,
        "economy": -5
      }
    }
  ]
},
{
  "id": 69,
  "title": "Darurat Penumpukan Sampah Plastik & Krisis TPA Regional",
  "category": "Environment",
  "description": "Tempat Pembuangan Akhir (TPA) di berbagai kota besar mengalami overkapasitas dan sering terbakar, sementara mikroplastik mulai mencemari rantai makanan.",
  "options": [
    {
      "text": "Terapkan larangan total plastik sekali pakai, beri insentif pabrik Daur Ulang, dan bangun Pembangkit Listrik Berbasis Sampah (PLTSa).",
      "effects": {
        "environment": 10,
        "infrastructure": 10,
        "health": 5,
        "economy": -5
      }
    },
    {
      "text": "Serahkan pengelolaan sampah kepada sektor swasta dan terapkan retribusi kebersihan tambahan bagi setiap rumah tangga.",
      "effects": {
        "economy": 5,
        "environment": -5
      }
    }
  ]
},
{
  "id": 70,
  "title": "Polemik Penarikan Royalti Musik di Kafe, Restoran & UMKM",
  "category": "Legal",
  "description": "Penerapan aturan kewajiban pembayaran royalti lagu untuk penggunaan komersial di kafe kecil, warung, dan hotel memicu protes dari pemilik usaha mikro.",
  "options": [
    {
      "text": "Bebaskan UMKM dan kafe skala kecil dari kewajiban royalti, fokus penarikan hanya pada korporasi besar.",
      "effects": {
        "civilLiberties": 10,
        "economy": 5,
        "education": -5
      }
    },
    {
      "text": "Terapkan aturan royalti secara ketat tanpa pengecualian demi menjamin hak cipta dan kesejahteraan musisi nasional.",
      "effects": {
        "economy": -5,
        "civilLiberties": -5,
        "education": 10
      }
    }
  ]
},
{
  "id": 71,
  "title": "Kebocoran Data Nasional & Krisis Infrastruktur Siber",
  "category": "Technology",
  "description": "Peretasan dan kebocoran data jutaan warga dari server data pemerintah melumpuhkan beberapa layanan publik dan menurunkan kepercayaan publik.",
  "options": [
    {
      "text": "Alokasikan anggaran besar untuk pembentukan Lembaga Pengawas Data Pribadi independen dan rekrut talenta siber lokal.",
      "effects": {
        "infrastructure": 10,
        "civilLiberties": 10,
        "education": 5,
        "economy": -5
      }
    },
    {
      "text": "Serahkan audit dan pengelolaan keamanan data nasional kepada perusahaan keamanan siber asing terpilih.",
      "effects": {
        "economy": 5,
        "civilLiberties": -10,
        "military": -5
      }
    }
  ]
}
];
