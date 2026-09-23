export const ISSUES = [
  {
    id: 1,
    title: "Penertiban & Pemblokiran Situs Judi Online",
    description: "Pemerintah berencana memblokir massal ribuan situs judi online serta rekening bank terkait demi menyelamatkan keuangan masyarakat.",
    options: [
      { text: "Blokir total semua situs dan tindak tegas pelaku tanpa ampun!", effects: { economy: 5, civilLiberties: -5, military: 5 } },
      { text: "Legalkan dan kenakan pajak tinggi pada industri perjudian nasional.", effects: { economy: 25, civilLiberties: 5, education: -10 } },
      { text: "Fokus pada edukasi masyarakat dan pemulihan korban kecanduan.", effects: { economy: -5, civilLiberties: 5, education: 15 } }
    ]
  },
  {
    id: 2,
    title: "Pembangunan Ibu Kota Nusantara (IKN)",
    description: "Pemerintah mempercepat pembangunan fasilitas pusat pemerintahan di IKN dan meminta alokasi tambahan dari APBN.",
    options: [
      { text: "Kucurkan anggaran maksimal dari APBN! Pembangunan infrastruktur prioritas.", effects: { economy: 15, education: -10, environment: -15 } },
      { text: "Hentikan proyek IKN, alokasikan dana untuk perbaikan sekolah & RS daerah.", effects: { economy: -5, education: 20, environment: 10 } }
    ]
  },
  {
    id: 3,
    title: "Kebijakan Iuran Tabungan Perumahan Rakyat (Tapera)",
    description: "Muncul penolakan atas pemotongan gaji pekerja swasta dan buruh sebesar beberapa persen setiap bulan untuk program dana Tapera.",
    options: [
      { text: "Wajibkan potongan Tapera! Semua warga berhak memiliki rumah.", effects: { economy: -10, civilLiberties: -10, education: 10 } },
      { text: "Batalkan iuran Tapera untuk pekerja swasta, jadikan opsional saja.", effects: { economy: 10, civilLiberties: 10, education: -5 } }
    ]
  },
  {
    id: 4,
    title: "Kenaikan Pajak Pertambahan Nilai (PPN 12%)",
    description: "Menteri Keuangan berencana menaikkan tarif PPN menjadi 12% untuk menggenjot penerimaan kas negara.",
    options: [
      { text: "Terapkan PPN 12% agar kas negara kuat untuk pembangunan.", effects: { economy: 20, civilLiberties: -10, education: 0 } },
      { text: "Tolak kenaikan PPN! Daya beli masyarakat miskin dan menengah harus dijaga.", effects: { economy: -15, civilLiberties: 10, education: 5 } }
    ]
  },
  {
    id: 5,
    title: "Program Makan Siang Gratis di Sekolah",
    description: "Pemerintah merancang program pembagian makan siang dan susu gratis untuk seluruh anak sekolah demi menekan angka stunting.",
    options: [
      { text: "Jalankan program secara nasional! Kesehatan anak adalah modal bangsa.", effects: { economy: -15, education: 20, military: 0 } },
      { text: "Batal dijalankan karena membebankan anggaran negara secara masif.", effects: { economy: 15, education: -10, military: 0 } }
    ]
  },
  {
    id: 6,
    title: "Pembatasan Kuota Pertalite & Solar Subsidi",
    description: "Pemerintah merencanakan pembatasan pembelian BBM bersubsidi menggunakan aplikasi khusus berdasarkan jenis kendaraan.",
    options: [
      { text: "Perketat pembatasan agar subsidi benar-benar tepat sasaran.", effects: { economy: 10, civilLiberties: -5, environment: 5 } },
      { text: "Bebaskan pembelian BBM subsidi untuk semua warga tanpa syarat rumit.", effects: { economy: -15, civilLiberties: 5, environment: -10 } }
    ]
  },
  {
    id: 7,
    title: "Aturan Wajib Asuransi Kendaraan (TPL)",
    description: "DPR mengusulkan kewajiban asuransi Third Party Liabilities bagi seluruh pemilik mobil dan sepeda motor.",
    options: [
      { text: "Wajibkan! Ini menjamin ganti rugi jika terjadi kecelakaan di jalan.", effects: { economy: 5, civilLiberties: -10, education: 0 } },
      { text: "Tolak! Jangan bebani rakyat dengan biaya bulanan tambahan.", effects: { economy: -5, civilLiberties: 10, education: 0 } }
    ]
  },
  {
    id: 8,
    title: "Hilirisasi Tambang & Moratorium Ekspor Bijih Mentah",
    description: "Pemerintah melarang total ekspor mineral mentah dan mewajibkan pengolahan smelter di dalam negeri.",
    options: [
      { text: "Pertahankan larangan ekspor mentah! Industri dalam negeri harus tumbuh.", effects: { economy: 20, environment: -15, military: 5 } },
      { text: "Buka kembali ekspor mentah demi pemasukan pajak daerah yang cepat.", effects: { economy: -10, environment: 10, military: 0 } }
    ]
  },
  {
    id: 9,
    title: "Pemberantasan Pinjaman Online (Pinjol) Ilegal",
    description: "Banyak warga terjerat bunga pinjol ilegal ekstrem hingga menimbulkan masalah sosial dan kriminalitas.",
    options: [
      { text: "Tutup semua aplikasi pinjol tidak berizin dan tangkap pimpinannya!", effects: { economy: -5, civilLiberties: 5, military: 10 } },
      { text: "Biarkan pasar finansial berjalan bebas dengan pengawasan minimal.", effects: { economy: 10, civilLiberties: -5, military: -5 } }
    ]
  },
  {
    id: 10,
    title: "Eksploitasi & Ekspor Pasir Laut",
    description: "Pemerintah membuka kembali izin pengerukan dan ekspor pasir laut yang sempat dilarang selama puluhan tahun.",
    options: [
      { text: "Buka izin pengerukan! Pemasukan negara dari devisa ekspor sangat besar.", effects: { economy: 15, environment: -25, civilLiberties: 0 } },
      { text: "Batalkan izin ekspor pasir laut demi mencegah abrasi dan kerusakan pulau.", effects: { economy: -10, environment: 25, civilLiberties: 0 } }
    ]
  },
  {
    id: 11,
    title: "Jam Malam & Penertiban Geng Motor / Begal",
    description: "Aksi kejahatan jalanan dan geng motor meresahkan warga di berbagai kota besar pada malam hari.",
    options: [
      { text: "Terapkan jam malam dan tindakan tegas terukur bagi pembuat onar!", effects: { economy: -5, civilLiberties: -15, military: 20 } },
      { text: "Fokus pada patroli simpatik dan ruang kreativitas remaja.", effects: { economy: 5, civilLiberties: 10, military: -10 } }
    ]
  },
  {
    id: 12,
    title: "Sertifikasi Halal Wajib untuk UMKM Kuliner",
    description: "Pemerintah mewajibkan seluruh produk makanan dan minuman memiliki sertifikat halal resmi.",
    options: [
      { text: "Wajibkan tanpa terkecuali untuk kepastian perlindungan konsumen.", effects: { economy: -5, civilLiberties: -10, education: 5 } },
      { text: "Gratiskan dan jadikan sukarela khusus pedagang kecil/UMKM.", effects: { economy: 10, civilLiberties: 10, education: 0 } }
    ]
  },
  {
    id: 13,
    title: "Konversi Kompor LPG ke Kompor Induksi Listrik",
    description: "Program pembagian kompor listrik gratis untuk menghemat impor gas LPG 3 kg yang membengkak.",
    options: [
      { text: "Genjot konversi listrik! Beban subsidi LPG negara terlalu berat.", effects: { economy: 10, environment: 10, civilLiberties: -5 } },
      { text: "Batalkan! Jaringan listrik warga kurang mampu belum siap menampung daya.", effects: { economy: -5, environment: -5, civilLiberties: 5 } }
    ]
  },
  {
    id: 14,
    title: "Pemanfaatan Pembangkit Listrik Tenaga Nuklir (PLTN)",
    description: "Dewan Energi Nasional mengusulkan pembangunan PLTN pertama untuk memenuhi kebutuhan listrik industri.",
    options: [
      { text: "Bangun PLTN! Pasokan listrik murah dan minim emisi karbon.", effects: { economy: 20, environment: 10, military: 10 } },
      { text: "Tolak risiko nuklir! Utamakan energi surya dan angin yang lebih aman.", effects: { economy: -10, environment: 15, military: 0 } }
    ]
  },
  {
    id: 15,
    title: "Wajib Militer / Komponen Cadangan untuk Pemuda",
    description: "Kementerian Pertahanan mengajak para pekerja muda mengikuti pelatihan militer Komponen Cadangan (Komcad).",
    options: [
      { text: "Wajibkan untuk seluruh lulusan sekolah demi kedisiplinan dan bela negara!", effects: { economy: -10, civilLiberties: -20, military: 25 } },
      { text: "Jadikan program sukarela saja tanpa ada unsur pemaksaan.", effects: { economy: 5, civilLiberties: 15, military: -5 } }
    ]
  },
  {
    id: 16,
    title: "Impor Beras Saat Musim Panen Lokal",
    description: "Pemerintah berencana mengimpor beras cadangan untuk menjaga harga pasar, namun diprotes petani lokal.",
    options: [
      { text: "Lakukan impor agar harga beras di pasar stabil dan rakyat tidak menjerit.", effects: { economy: -5, civilLiberties: 5, education: 0 } },
      { text: "Stop impor! Beli seluruh hasil panen raya dari petani lokal dengan harga tinggi.", effects: { economy: 10, civilLiberties: -5, education: 0 } }
    ]
  },
  {
    id: 17,
    title: "Aturan Distribusi & Jam Buka Minimarket Modern",
    description: "Pasar tradisional terancam sepi akibat menjamurnya ritel minimarket modern di pemukiman warga.",
    options: [
      { text: "Batasi jam operasional dan jarak minimarket dari pasar tradisional.", effects: { economy: -5, civilLiberties: -5, education: 0 } },
      { text: "Biarkan bersaing secara bebas sesuai pilihan kemudahan konsumen.", effects: { economy: 10, civilLiberties: 10, education: 0 } }
    ]
  },
  {
    id: 18,
    title: "Pengawasan AI & Otomatisasi Tenaga Kerja",
    description: "Serikat buruh menuntut regulasi pembatasan penggunaan teknologi AI yang mengancam pemutusan hubungan kerja (PHK).",
    options: [
      { text: "Batasi penggunaan AI di perusahaan yang berpotensi melakukan PHK massal.", effects: { economy: -10, civilLiberties: 5, education: 10 } },
      { text: "Bebaskan efisiensi AI demi daya saing teknologi nasional di tingkat global.", effects: { economy: 15, civilLiberties: -5, education: -5 } }
    ]
  },
  {
    id: 19,
    title: "Pengenaan Cukai Minuman Berpemanis Dalam Kemasan (MBDK)",
    description: "Kementerian Kesehatan mendorong penerapan cukai minuman kemasan manis untuk menekan tingkat diabetes.",
    options: [
      { text: "Terapkan cukai tinggi! Kesehatan masyarakat harus dilindungi.", effects: { economy: 5, education: 15, environment: 0 } },
      { text: "Tolak cukai! Industri makanan/minuman bisa lesu dan memicu PHK.", effects: { economy: -5, education: -10, environment: 0 } }
    ]
  },
  {
    id: 20,
    title: "Legalitas Angkutan Ojek Online & Status Pekerja",
    description: "Pengemudi ojol menuntut kepastian status sebagai pekerja tetap dengan hak gaji UMR dan jaminan kesehatan.",
    options: [
      { text: "Wajibkan perusahaan aplikasi mengangkat pengemudi jadi karyawan tetap.", effects: { economy: -15, civilLiberties: 10, education: 5 } },
      { text: "Tetapkan status sebagai mitra independen agar tarif perjalanan tetap murah.", effects: { economy: 15, civilLiberties: -10, education: 0 } }
    ]
  }
];

