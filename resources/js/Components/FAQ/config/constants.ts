import { FAQItem } from "../types";

const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Apa itu Kampung Budaya 2025?",
      answer: `Kampung Budaya 2025 adalah mega program kerja Eksekutif Mahasiswa Universitas Brawijaya 2025 yang berskala nasional, melibatkan FORDA, 	Perguruan Tinggi seluruh Indonesia, hingga SMA/sederajat se-Malang Raya. Acara ini menjadi wadah kolaborasi untuk melestarikan adat dan budaya nusantara, sekaligus media edukasi serta panggung apresiasi seni bagi generasi muda.`
    },
    {
      id: 2,
      question: "Apa saja rangkaian acara kampung budaya UB 2025?",
      answer: `Kampung Budaya 2025 terdiri atas tiga rangkaian acara: 
      <li><strong>Pre-event</strong> (Kampung Budaya Blusukan, Lomba Gemilang Busana Adat & Parade, Lomba Gelanggang Tari Nusantara, Seminar Kebudayaan, Teater Cakrawala Budaya, dan Lomba Kolaborasi Musik Nusantara)</li>
      <li><strong>Main Event</strong> Gelora Puncak Budaya dengan Panggung Budaya Nusantara, Kampung Interaktif, Bazar Kebudayaan, dan Tenant UMKM.</li>
      <li><strong>Pasca-event</strong> berupa After Movie dan Digital Heritage Museum.</li>`
    },
    {
      id: 3,
      question: "Kapan dan dimana Kampung Budaya 2025 akan diselenggarakan?",
      answer: `Rangkaian Kampung Budaya 2025 akan diselenggarakan pada <strong>rentang bulan September-Oktober 2025</strong> di lingkungan Universitas Brawijaya.`
    },
    {
      id: 4,
      question: "Siapa saja yang dapat mengikuti acara Kampung Budaya 2025?",
      answer: `<li>Mahasiswa Universitas Brawijaya</li>
        <li>Seluruh Forum Mahasiswa Daerah di Universitas Brawijaya dan Kota Malang.</li>
        <li>Mahasiswa/i perguruan tinggi nasional dan masyarakat umum.</li>
        <li>Siswa/i SMA/sederajat se-Malang Raya.</li>
        <li>Masyarakat umum.</li>`
    },
    {
      id: 5,
      question: "Gemilang busana adat & parade budaya itu apa?",
      answer: `Gemilang Busana Adat adalah lomba fashion show busana tradisional yang diikuti perwakilan FORDA Universitas Brawijaya sebagai bentuk apresiasi terhadap kekayaan budaya nusantara. Setelah lomba, acara dilanjutkan dengan Parade Budaya, di mana peserta bersama mahasiswa internasional, komunitas budaya, dan masyarakat menampilkan busana adat mengelilingi area Universitas Brawijaya.`
    },
    {
      id: 6,
      question: "Apa yang saja yang menjadi faktor penilaian lomba gemilang busana adat?",
      answer: `Sobat budaya yang mengikuti lomba gemilang busana adat akan dinilai oleh dewan juri dengan beberapa kriteria, antara lain:
      <li>Busana adat</li>
      <li>Pembawaan </li>
      <li>Ekspresi</li>
      <li>Orisinalitas</li>`
    },
    {
      id: 7,
      question: "Apa itu Triloka Budaya dan siapa saja yang bisa ikut Triloka Budaya?",
      answer: `Triloka Budaya adalah rangkaian acara yang mencakup Lomba Gelanggang Tari Nusantara, Seminar Kebudayaan, dan Lomba Teater Cakrawala Budaya. Ketiganya menjadi wadah ekspresi, edukasi, dan pelestarian budaya melalui seni tari, ruang dialog kebudayaan, serta pementasan teater yang mengangkat cerita rakyat nusantara.
      <br><br>Triloka Budaya terbuka untuk semua kalangan. Gelanggang Tari Nusantara khusus diikuti oleh Forum Daerah (FORDA), sementara Seminar Kebudayaan bisa diikuti oleh mahasiswa umum. Untuk Lomba Teater Cakrawala Budaya, pesertanya adalah siswa/i SMA/sederajat se-Malang Raya. Tak hanya itu, masyarakat umum juga bisa ikut meramaikan dengan menyaksikan langsung seluruh rangkaian acaranya.`
    },
    {
      id: 8,
      question: "Apa itu Gelora Puncak Budaya?",
      answer: `
      <li>Apa saja yang ada di Gelora Puncak Budaya?</li>
      Gelora Puncak Budaya adalah main event sekaligus penutup Kampung Budaya 2025, berisi Panggung Budaya Nusantara, Kampung Interaktif, serta Bazar Kebudayaan dan tenant UMKM yang menampilkan ragam pertunjukan, pengalaman budaya, hingga kuliner dan produk lokal.<br><br>
      <li>Apa pengunjung bisa hadir?</li>
      Pastinya seluruh sobat budaya dari berbagai penjuru indonesia dapat menghadiri dan meramaikan Gelora Puncak Budaya 2025.`
    },
    {
      id: 9,
      question: "Bagaimana cara pendaftaran lomba Kampung Budaya 2025?",
      answer: `Pendaftaran lomba dapat dilakukan melalui link berikut: <a href="https://linktr.ee/KampungBudaya2025">https://linktr.ee/KampungBudaya2025</a>`
    },
    {
      id: 10,
      question: "Apa hadiah dari perlombaan di Kampung Budaya 2025?",
      answer: `Pemenang akan mendapatkan <strong>piala, sertifikat, serta uang tunai.</strong> Selain itu, juara 1, 2, dan 3 juga berkesempatan untuk tampil pada malam Gelora Puncak Budaya 2025.`
    },
    {
      id: 11,
      question: "Jika ada pertanyaan lebih lanjut, siapa yang dapat dihubungi?",
      answer: `Sobat budaya dapat menghubungi narahubung dibawah ini:
      <li>0895413977649 (Naya)</li>
      <li>083119598809  (Fina)</li>`
    }
  ] as const;

  // Constants
const ANIMATION_CONFIG = {
    once: false,
    margin: "0px",
    amount: 0.2,
} as const;

const ANIMATION_ONCE_CONFIG = {
    once: true,
    margin: "0px",
    amount: 0.2,
} as const;

const FLOWER_CONFIGS = {
    besar: { size: "20vw" , translateDistance: 120, duration: "2.5s" },
    besarmobile: { size: "9.375vw", translateDistance: 120, duration: "2.5s" },
    sedang: { size: "12vw", translateDistance: 130, duration: "2.8s" },
    kecil1: { size: "3.958vw", translateDistance: 120, duration: "3s" },
    kecil2: { size: "3.958vw", translateDistance: 140, duration: "3.5s" },

} as const;

  export { faqData, ANIMATION_CONFIG, ANIMATION_ONCE_CONFIG, FLOWER_CONFIGS };