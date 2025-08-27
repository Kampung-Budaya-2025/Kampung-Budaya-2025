import { FAQItem } from "../types";

const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Apa itu Kampung Budaya?",
      answer: "Kampung Budaya adalah tempat wisata yang menampilkan kekayaan budaya Indonesia dengan berbagai atraksi tradisional, rumah adat, dan pertunjukan seni budaya."
    },
    {
      id: 2,
      question: "Berapa harga tiket masuk Kampung Budaya?",
      answer: "Harga tiket masuk mulai dari Rp 25.000 untuk dewasa dan Rp 15.000 untuk anak-anak. Tersedia juga paket family dan paket grup dengan harga khusus asdaiubfafsiausf aisfiasfa asfasif asfafsias bausfiasfaf."
    },
    {
      id: 3,
      question: "Jam operasional Kampung Budaya?",
      answer: "Kampung Budaya buka setiap hari mulai pukul 08.00 - 17.00 WIB. Pada hari libur nasional dan weekend, jam operasional dapat diperpanjang hingga 18.00 WIB."
    },
    {
      id: 4,
      question: "Apa saja fasilitas yang tersedia?",
      answer: "Fasilitas yang tersedia meliputi area parkir luas, toilet, mushola, food court dengan makanan tradisional, toko souvenir, dan area bermain anak."
    },
    {
      id: 5,
      question: "Apakah ada pertunjukan khusus?",
      answer: "Ya, setiap hari terdapat pertunjukan tari tradisional pada pukul 10.00, 14.00, dan 16.00. Pada weekend ada pertunjukan musik gamelan dan workshop membatik."
    },
    {
      id: 6,
      question: "Bagaimana cara menuju ke Kampung Budaya?",
      answer: "Kampung Budaya dapat diakses melalui transportasi umum seperti bus, angkot, atau kendaraan pribadi. Tersedia juga layanan shuttle bus dari pusat kota pada akhir pekan."
    },
    {
      id: 7,
      question: "Apakah ada paket wisata yang tersedia?",
      answer: "Ya, tersedia berbagai paket wisata mulai dari paket half day, full day, hingga paket 2 hari 1 malam yang termasuk akomodasi dan makan."
    },
    {
      id: 8,
      question: "Bolehkah membawa makanan dari luar?",
      answer: "Pengunjung diperbolehkan membawa makanan ringan dan minuman sendiri. Namun untuk menjaga kebersihan, harap membuang sampah pada tempatnya."
    },
    {
      id: 9,
      question: "Apakah ada guide atau pemandu wisata?",
      answer: "Ya, tersedia layanan pemandu wisata professional yang dapat menjelaskan sejarah dan budaya setiap atraksi dengan biaya tambahan Rp 50.000 per grup."
    },
    {
      id: 10,
      question: "Bagaimana cara booking tiket secara online?",
      answer: "Tiket dapat dibeli secara online melalui website resmi atau aplikasi mobile Kampung Budaya. Pembayaran dapat dilakukan via transfer bank atau e-wallet."
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
    besar: { size: 360, translateDistance: 120, duration: "2.5s" },
    besarmobile: { size: 180, translateDistance: 120, duration: "2.5s" },
    sedang: { size: 230, translateDistance: 130, duration: "2.8s" },
    kecil1: { size: 76, translateDistance: 120, duration: "3s" },
    kecil2: { size: 76, translateDistance: 140, duration: "3.5s" },
} as const;

  export { faqData, ANIMATION_CONFIG, ANIMATION_ONCE_CONFIG, FLOWER_CONFIGS };