export const ISSUES = [
  // --- 20 ISU AWAL/SEBELUMNYA ---
  {
    id: 1,
    title: "Program Transisi Energi Hijau vs Subsidi Listrik Fosil",
    description: "Kementerian Lingkungan Hidup mengusulkan penghentian bertahap subsidi energi fosil untuk mempercepat peralihan ke energi terbarukan. Namun, pengusaha industri dan masyarakat berpenghasilan rendah khawatir biaya hidup akan melonjak.",
    options: [
      { text: "Hentikan subsidi fosil secara bertahap dan alihkan dana ke pembangkit listrik tenaga surya dan angin.", effects: { environment: +15, economy: -5, civilLiberties: +5 } },
      { text: "Pertahankan subsidi energi fosil demi menjaga stabilitas harga dan daya beli masyarakat.", effects: { environment: -15, economy: +10, civilLiberties: -5 } }
    ]
  },
  {
    id: 2,
    title: "Modernisasi Sistem Pertahanan Batas Laut",
    description: "Seringnya terjadi pelanggaran batas wilayah laut oleh kapal asing memicu desakan dari pihak militer untuk menambah anggaran armada kapal patroli dan radar bawah laut.",
    options: [
      { text: "Setujui penambahan anggaran militer laut secara signifikan.", effects: { military: +20, economy: -10 } },
      { text: "Gunakan pendekatan diplomasi dan porsi anggaran difokuskan pada infrastruktur pelabuhan sipil.", effects: { military: -10, civilLiberties: +10, economy: +5 } }
    ]
  },
  {
    id: 3,
    title: "Wajib Belajar Koding & Kecerdasan Buatan (AI) di Sekolah",
    description: "Dewan Pendidikan Nasional menyarankan pengubahan kurikulum untuk mewajibkan pembelajaran teknologi koding dan AI sejak sekolah dasar.",
    options: [
      { text: "Terapkan kurikulum teknologi baru secara nasional dengan investasi besar di pelatihan guru.", effects: { education: +20, economy: +5, environment: -5 } },
      { text: "Biarkan sekolah memilih kurikulum mandiri dan fokus pada pendidikan karakter standar.", effects: { education: -10, civilLiberties: +10 } }
    ]
  },
  {
    id: 4,
    title: "Subsidi Angkutan Umum & Pembatasan Kendaraan Pribadi",
    description: "Kemacetan parah di kota-kota besar mendorong pengalihan anggaran APBN untuk menggratiskan angkutan umum serta menerapkan pajak karbon tinggi bagi mobil pribadi.",
    options: [
      { text: "Gratiskan transportasi publik dan naikkan pajak kendaraan pribadi.", effects: { environment: +15, economy: +10, civilLiberties: -10 } },
      { text: "Serahkan ke mekanisme pasar dan fokus pada pembangunan jalan tol baru.", effects: { environment: -10, economy: +5, civilLiberties: +5 } }
    ]
  },
  {
    id: 5,
    title: "Pengetatan Regulasi Rokok & Cukai Hasil Tembakau",
    description: "Kementerian Kesehatan menuntut kenaikan cukai rokok hingga 50% untuk menekan angka perokok usia muda, namun ditolak asosiasi petani tembakau.",
    options: [
      { text: "Naikkan cukai rokok setinggi-tingginya demi kesehatan masyarakat.", effects: { environment: +10, economy: -5, civilLiberties: -5 } },
      { text: "Lindungi industri tembakau dan keberlangsungan petani lokal.", effects: { environment: -10, economy: +15, civilLiberties: +5 } }
    ]
  },
  {
    id: 6,
    title: "Peningkatan Anggaran Riset Sains & Teknologi",
    description: "Para ilmuwan meminta alokasi 5% dari APBN khusus untuk riset pengembangan teknologi dan bioteknologi dalam negeri.",
    options: [
      { text: "Alokasikan dana riset besar demi kemandirian teknologi nasional.", effects: { education: +20, economy: +10, military: +5 } },
      { text: "Prioritaskan anggaran untuk bantuan langsung tunai dan kebutuhan mendesak.", effects: { education: -10, civilLiberties: +10 } }
    ]
  },
  {
    id: 7,
    title: "Pemberlakuan Jam Malam Pemuda & Patroli Keamanan",
    description: "Meningkatnya angka kejahatan jalanan pada malam hari memicu usulan pemberlakuan jam malam ketat bagi remaja di bawah 18 tahun.",
    options: [
      { text: "Terapkan jam malam dan perketat patroli aparat keamanan.", effects: { military: +15, civilLiberties: -15 } },
      { text: "Tolak jam malam dan tingkatkan fasilitas kegiatan pemuda di malam hari.", effects: { civilLiberties: +15, military: -5, education: +5 } }
    ]
  },
  {
    id: 8,
    title: "Insentif Industri Kendaraan Listrik Nasional",
    description: "Pemerintah berencana memberikan subsidi besar bagi pabrik yang memproduksi kendaraan listrik berbasis baterai lokal.",
    options: [
      { text: "Berikan subsidi penuh untuk mempercepat ekosistem kendaraan listrik.", effects: { economy: +15, environment: +10 } },
      { text: "Hentikan subsidi kendaraan dan biarkan pasar berkembang alami.", effects: { economy: -5, environment: -5, civilLiberties: +5 } }
    ]
  },
  {
    id: 9,
    title: "Sertifikasi Halal Wajib Bagi Produk Makanan",
    description: "Regulasi baru mewajibkan seluruh UMKM dan industri makanan memiliki sertifikasi halal yang ditanggung oleh pemerintah.",
    options: [
      { text: "Wajibkan sertifikasi halal terintegrasi dan berikan subsidi bagi UMKM.", effects: { civilLiberties: -5, economy: +10 } },
      { text: "Bebaskan pelaku usaha menentukan sertifikasi secara sukarela.", effects: { civilLiberties: +10, economy: -5 } }
    ]
  },
  {
    id: 10,
    title: "Reformasi Pelayanan Kesehatan Universal (BPJS)",
    description: "Sistem jaminan kesehatan nasional mengalami defisit. Didebatkan apakah tarif iuran dinaikkan atau cakupan layanan yang dikurangi.",
    options: [
      { text: "Tanggung penuh defisit dengan dana APBN agar layanan tetap gratis.", effects: { economy: -15, civilLiberties: +15 } },
      { text: "Naikkan iuran bulanan peserta sesuai dengan tingkat pendapatan.", effects: { economy: +10, civilLiberties: -10 } }
    ]
  },
  {
    id: 11,
    title: "Otomatisasi Pelabuhan & Digitalisasi Logistik",
    description: "Penggunaan robot dan sistem otomatis di pelabuhan akan menekan biaya logistik nasional, tetapi mengancam pekerjaan puluhan ribu buruh pelabuhan.",
    options: [
      { text: "Terapkan otomatisasi penuh pelabuhan demi efisiensi perdagangan.", effects: { economy: +20, civilLiberties: -10 } },
      { text: "Batasi otomatisasi untuk melindungi lapangan kerja buruh pelabuhan.", effects: { economy: -10, civilLiberties: +10 } }
    ]
  },
  {
    id: 12,
    title: "Konservasi Hutan Tropis vs Ekspansi Perkebunan Sawit",
    description: "Permintaan ekspor minyak sawit tinggi, namun konversi hutan tropis memicu kritikan internasional terkait deforestasi.",
    options: [
      { text: "Moratorium total izin baru lahan sawit demi kelestarian hutan.", effects: { environment: +25, economy: -15 } },
      { text: "Izinkan pembukaan lahan baru dengan batas kuota khusus produksi.", effects: { environment: -20, economy: +20 } }
    ]
  },
  {
    id: 13,
    title: "Pembangunan Sentra Industri Pengolahan Sampah Modern",
    description: "Diusulkan pembangunan PLTSa (Pembangkit Listrik Tenaga Sampah) di setiap kota besar untuk mengatasi krisis limbah plastik.",
    options: [
      { text: "Bangun PLTSa nasional dengan investasi teknologi pengolahan sampah.", effects: { environment: +15, economy: +10, education: +5 } },
      { text: "Fokus pada larangan plastik sekali pakai tanpa pembangunan fasilitas mahal.", effects: { environment: +10, civilLiberties: -5 } }
    ]
  },
  {
    id: 14,
    title: "Penguatan Kewenangan Lembaga Antikorupsi",
    description: "Dilema antara memberikan wewenang penyadapan penuh tanpa izin pengadilan kepada lembaga antikorupsi atau membatasi wewenangnya.",
    options: [
      { text: "Berikan wewenang penuh penyadapan dan penindakan tegas.", effects: { economy: +15, civilLiberties: -10 } },
      { text: "Batasi wewenang melalui mekanisme pengawasan peradilan.", effects: { civilLiberties: +10, economy: -10 } }
    ]
  },
  {
    id: 15,
    title: "Uji Coba 4 Hari Kerja Dalam Seminggu",
    description: "Kementerian Ketenagakerjaan mengusulkan uji coba 4 hari kerja seminggu untuk meningkatkan produktivitas dan kesehatan mental pekerja.",
    options: [
      { text: "Terapkan 4 hari kerja bagi sektor pemerintahan dan industri kreatif.", effects: { civilLiberties: +15, economy: -5 } },
      { text: "Pertahankan 5-6 hari kerja sesuai standar industri tradisional.", effects: { economy: +10, civilLiberties: -5 } }
    ]
  },
  {
    id: 16,
    title: "Pemberian Beasiswa Pendidikan Tinggi Luar Negeri",
    description: "Program beasiswa negara ke universitas top dunia diusulkan diwajibkan kembali mengabdi di tanah air selama minimal 10 tahun.",
    options: [
      { text: "Wajibkan ikatan dinas ketat bagi alumni penerima beasiswa.", effects: { education: +15, civilLiberties: -10 } },
      { text: "Bebaskan alumni berkarier di mana saja selama berkontribusi bagi negara.", effects: { education: +5, civilLiberties: +10 } }
    ]
  },
  {
    id: 17,
    title: "Standardisasi & Perlindungan Pekerja Imigran (TKI)",
    description: "Pengetatan syarat pengiriman tenaga kerja ke luar negeri demi mencegah penyiksaan dan penipuan oleh agen ilegal.",
    options: [
      { text: "Perketat syarat keberangkatan dan berikan sertifikasi keterampilan gratis.", effects: { education: +10, civilLiberties: +10, economy: -5 } },
      { text: "Permudah prosedur keberangkatan untuk mempercepat remitansi devisa.", effects: { economy: +10, civilLiberties: -10 } }
    ]
  },
  {
    id: 18,
    title: "Penyediaan Air Bersih Perpipaan Gratis Bagi Warga Miskin",
    description: "Pemerintah berencana menasionalisasi perusahaan air daerah untuk menjamin akses air minum bersih bebas biaya.",
    options: [
      { text: "Gratiskan air bersih perpipaan untuk rumah tangga kurang mampu.", effects: { civilLiberties: +15, economy: -10, environment: +5 } },
      { text: "Tetapkan tarif komersial berjenjang untuk menutup biaya operasional.", effects: { economy: +10, civilLiberties: -5 } }
    ]
  },
  {
    id: 19,
    title: "Pusat Pengembangan Atlet Bebas Biaya & Akademi Olahraga",
    description: "Diusulkan pembangunan pusat pelatihan olahraga prestasi di setiap provinsi untuk mencetak atlet berprestasi internasional.",
    options: [
      { text: "Bangun akademi olahraga modern berbasis sains olahraga nasional.", effects: { education: +10, civilLiberties: +5, economy: -5 } },
      { text: "Serahkan pembinaan atlet pada klub swasta dan sponsor independen.", effects: { economy: +5, education: -5 } }
    ]
  },
  {
    id: 20,
    title: "Penataan Wilayah Pesisir & Tanggul Laut Raksasa (Giant Sea Wall)",
    description: "Ancaman tenggelamnya kota-kota pesisir memicu usulan proyek infrastruktur penahan banjir rob raksasa.",
    options: [
      { text: "Bangun tanggul laut raksasa dengan pendanaan konsorsium negara.", effects: { environment: +15, economy: -15, military: +5 } },
      { text: "Relokasi pemukiman warga pesisir secara bertahap ke wilayah daratan tinggi.", effects: { civilLiberties: -10, environment: +10 } }
    ]
  },

  // --- 10 ISU TAMBAHAN POLIK & HUKUM INDONESIA ---
  {
    id: 21,
    title: "Subsidi BBM Tepat Sasaran vs Kebijakan Satu Harga",
    description: "Pemerintah memperdebatkan apakah BBM bersubsidi harus dibatasi ketat hanya untuk masyarakat kurang mampu menggunakan aplikasi digital, atau dibebaskan untuk menjaga kelancaran distribusi logistik.",
    options: [
      { text: "Batasi ketat penerima subsidi menggunakan pendaftaran digital tepat sasaran.", effects: { economy: +15, civilLiberties: -10, environment: +5 } },
      { text: "Pertahankan BBM Subsidi terbuka demi menekan laju inflasi dan menjaga daya beli.", effects: { economy: -15, civilLiberties: +10, environment: -10 } }
    ]
  },
  {
    id: 22,
    title: "Pembangunan Pembangkit Listrik Tenaga Nuklir (PLTN)",
    description: "Dewan Energi Nasional mengusulkan pembangunan PLTN pertama untuk memenuhi kebutuhan listrik industri nasional yang melonjak, namun penolakan warga terkait risiko keamanan cukup tinggi.",
    options: [
      { text: "Setujui proyek PLTN demi kemandirian energi dan pasokan industri beban puncak.", effects: { economy: +20, environment: -10, civilLiberties: -5 } },
      { text: "Tolak PLTN dan fokus pada pengembangan energi terbarukan ramah lingkungan.", effects: { environment: +15, economy: -10, civilLiberties: +5 } }
    ]
  },
  {
    id: 23,
    title: "RUU Perampasan Aset Koruptor & Hukuman Mati",
    description: "Masyarakat menuntut pengesahan RUU Perampasan Aset hasil tindak pidana korupsi serta pembuktian terbalik harta pejabat demi memberikan efek jera maksimal bagi pelaku kejahatan keuangan negara.",
    options: [
      { text: "Sahkan RUU Perampasan Aset koruptor tanpa kompromi demi memiskinkan pelaku kejahatan keuangan.", effects: { economy: +20, civilLiberties: +10, military: +5 } },
      { text: "Utamakan pengembalian kerugian negara melalui mekanisme perdata dan pembinaan tanpa hukuman ekstrem.", effects: { civilLiberties: -10, economy: -10 } }
    ]
  },
  {
    id: 24,
    title: "Batas Usia Minimal & Syarat Pencalonan Presiden",
    description: "Muncul wacana penyesuaian syarat usia minimal pencalonan kepala negara dan kepala daerah untuk memberi ruang bagi tokoh muda, namun dikhawatirkan memicu politik dinasti.",
    options: [
      { text: "Turunkan batas usia minimum calon pimpinan untuk mendorong regenerasi kepemimpinan muda.", effects: { civilLiberties: +10, education: +5, military: -5 } },
      { text: "Pertahankan batasan usia ketat demi menjamin pematangan rekam jejak kepemimpinan.", effects: { civilLiberties: -5, economy: +5 } }
    ]
  },
  {
    id: 25,
    title: "Program Wajib Komponen Cadangan (Komcad) Sipil",
    description: "Kementerian Pertahanan mengusulkan pelatihan militer dasar selama tiga bulan bagi warga negara usia produktif guna membentuk Komponen Cadangan (Komcad) pertahanan negara.",
    options: [
      { text: "Wajibkan pelatihan Komcad bagi pemuda usia produktif demi kesiapsiagaan bela negara.", effects: { military: +25, civilLiberties: -15, economy: -5 } },
      { text: "Terapkan Komcad secara sukarela tanpa kewajiban nasional demi kebebasan sipil.", effects: { civilLiberties: +15, military: -10 } }
    ]
  },
  {
    id: 26,
    title: "Pembentukan Badan Penerimaan Negara (BPN)",
    description: "Diusulkan pemisahan Ditjen Pajak dan Bea Cukai dari Kemenkeu menjadi Badan Penerimaan Negara (BPN) independen yang bertanggung jawab langsung kepada Presiden.",
    options: [
      { text: "Bentuk BPN terpisah untuk memaksimalkan penerimaan pajak dan kedaulatan fiskal.", effects: { economy: +20, military: +5, civilLiberties: -5 } },
      { text: "Pertahankan struktur Kemenkeu terpadu untuk mencegah pembengkakan birokrasi baru.", effects: { economy: +5, civilLiberties: +5 } }
    ]
  },
  {
    id: 27,
    title: "Legalisasi & Tata Kelola Ekspor Pasir Laut",
    description: "Pemerintah mempertimbangkan pembukaan kembali ekspor pasir laut hasil pengerukan untuk menambah pendapatan negara, namun ditentang aktivis lingkungan.",
    options: [
      { text: "Izinkan ekspor pasir laut dengan syarat hasil pengerukan sedimentasi laut secara terukur.", effects: { economy: +15, environment: -20 } },
      { text: "Larang total ekspor pasir laut untuk melindungi ekosistem pesisir dan pulau kecil.", effects: { environment: +20, economy: -10 } }
    ]
  },
  {
    id: 28,
    title: "Moratorium Impor Beras Saat Panen Raya",
    description: "Pemerintah dihadapkan pada dilema antara melakukan impor beras demi menjaga cadangan pangan dan harga konsumen, atau menutup impor demi melindungi harga jual petani lokal.",
    options: [
      { text: "Hentikan impor beras dan wajibkan Perum Bulog menyerap seluruh hasil panen petani lokal.", effects: { economy: +10, civilLiberties: +10, environment: +5 } },
      { text: "Buka kuota impor beras demi menjamin ketersediaan stok nasional dan menekan inflasi pasar.", effects: { economy: -10, civilLiberties: -5 } }
    ]
  },
  {
    id: 29,
    title: "Pengangkatan Tenaga Honorer Jadi PPPK Massal",
    description: "Jutaan tenaga honorer, guru, dan tenaga kesehatan menuntut pengangkatan langsung menjadi Pegawai Pemerintah dengan Perjanjian Kerja (PPPK) tanpa seleksi rumit.",
    options: [
      { text: "Angkat seluruh tenaga honorer secara massal menjadi PPPK dengan jaminan kesejahteraan.", effects: { education: +15, civilLiberties: +15, economy: -15 } },
      { text: "Terapkan tes seleksi ketat berbasis kompetensi untuk menjaga kualitas efisiensi birokrasi.", effects: { economy: +10, education: -5, civilLiberties: -5 } }
    ]
  },
  {
    id: 30,
    title: "Pengawasan Konten Digital & Platform Streamer/Creator",
    description: "Wacana perluasan wewenang Lembaga Penyiaran untuk mengawasi konten tayangan di platform siaran digital (YouTube/TikTok/OTT) guna menjaga norma.",
    options: [
      { text: "Perketat regulasi dan sensor tayangan konten digital demi menjaga norma budaya.", effects: { civilLiberties: -20, military: +5 } },
      { text: "Bebaskan kreator konten digital berkarya tanpa intervensi sensor berlebihan.", effects: { civilLiberties: +20, economy: +10 } }
    ]
  }
];

