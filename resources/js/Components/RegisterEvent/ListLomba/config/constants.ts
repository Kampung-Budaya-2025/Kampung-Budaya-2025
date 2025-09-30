import { ButtonData, CardData } from "../types";
import { DecorationGroup, DecorationItem } from "../types";

const buttonData: ButtonData[] = [
    {
        id: "booklet",
        text: "Booklet",
        href: "https://drive.google.com/drive/folders/1uVciYKRaAQKgwp6zye7-HeLMQEUmftgD",
    },
    {
        id: "formulir",
        text: "Formulir MP3 Musik Tari",
        href: "https://drive.google.com/drive/folders/1LL-5aK_JJ6pDeLoj94TOFpQpHtF_lsIk?usp=sharing",
    },
] as const;

const cardData: CardData[] = [
    {
        id: "kolaborasi-musik-nusantara",
        title: "Kolaborasi Musik Nusantara",
        icon: "/icon/kolaborasi-musik.svg",
        date: "25 September - 5 Oktober",
        category: "Lomba Umum",
        description:
            "Kolaborasi Musik Nusantara adalah kompetisi menyanyikan lagu daerah yang menggabungkan unsur alat musik tradisional dan musik modern. Kegiatan ini bertujuan untuk melestarikan kekayaaan budaya musik Indonesia melalui pendekatan kreatif dan inovatif, dengan harapan dapat membangkitkan kecintaan generasi muda terhadap musik tradisional dalam balutan nuansa kekinian",
        registrationStart: "2025-09-25",
        registrationEnd: "2025-10-05",
    },
    {
        id: "bazar-kebudayaan",
        title: "Bazar Kebudayaan",
        icon: "/icon/bazar-kebudayaan.svg",
        date: "6 September - 20 September",
        category: "Lomba Forum Daerah",
        description:
            "Kegiatan ini berupa perlombaan yang memberikan kebabsan kepada Forum Daerah (FORDA) untuk merancang stand mereka secara kreatif. FORDA juga berkesempatan untuk menjual makanan dan aksesoris khas dari daerah masing-masing. Selain itu, tersedia stand khusus bagi mahasiswa internasional untuk memperkenalkan budaya asal mereka. Tak hanya itu, stand UMKM juga akan disediakan dan dapat disewa oleh masyarakat umum, serta untuk meningkatkan minat wirausaha pada mahasiswa wirausaha juga dapat menyewa stand ini.",
        registrationStart: "2025-09-06",
        registrationEnd: "2025-09-20",
    },
    {
        id: "gemilang-busana-adat",
        title: "Gemilang Busana Adat",
        icon: "/icon/busana-adat.svg",
        date: "6 September - 20 September",
        category: "Lomba Forum Daerah",
        description:
            "Kegiatan lomba yang menampilkan kreativitas mahasiswa dalam memperagakan busana adat khas daerahnya masing-masing, dikemas dengan konsep fashion show. Kegiatan ini ditujukan bagi Forum Daerah (FORDA) dan Universitas Brawijaya sebagai bentuk apresiasi terhadap kekayaan budaya nusantara.",
        registrationStart: "2025-09-06",
        registrationEnd: "2025-09-20",
    },

    {
        id: "gelanggang-tari-nusantara",
        title: "Gelanggang Tari Nusantara",
        icon: "/icon/tari-tradisional.svg",
        date: "27 September - 02 Oktober",
        category: "Lomba Forum Daerah",
        description:
            "Gelanggang tari nusantara adalah ajang perlombaan tari tradisional yang menampilkan keragaman budaya dari berbagai daerah di Indonesia. Kegiatan ini menjadi wadah ekspresi seni, pelestarian budaya. Kegiatan ini ditujukan bagi forum daerah (FORDA) Universitas Brawijaya sebagai bentuk apresiasi terhadap kekayaan tari nusantara.",
        registrationStart: "2025-09-27",
        registrationEnd: "2025-10-02",
    },
    {
        id: "panggung-budaya-nusantara",
        title: "Panggung Budaya Nusantara",
        icon: "/icon/cerita-nusantara.svg",
        date: "21 September - 17 Oktober",
        category: "Lomba Forum Daerah",
        description:
            "Rangkaian puncak acara dan penutupan dari Kampung Budaya 2025. Panggung budaya nusantara merupakan kegiatan yang berisi penampilan dari pemenang lomba dan penampilan dari tamu undangan.",
        registrationStart: "2025-09-21",
        registrationEnd: "2025-10-17",

    },
    {
        id: "teater-cakrawala-budaya",
        title: "Teater Cakrawala Budaya",
        icon: "/icon/teater-cakrawala.svg",
        date: "6 September - 20 September",
        category: "Lomba Umum",
        description:
            "Teater Cakrawala Budaya adalah sebuah ajang kompetisi seni peran yang berfokus pada pementasan teater dengan mengangkat cerita rakyar dari segala penjuru nusantara. Lomba ini bertujuan untuk melestarikan, mengembangkan, dan mengapresiasi warisan budaya lisan nusantara dengan media teater, ",
        registrationStart: "2025-09-06",
        registrationEnd: "2025-09-20",
    },
] as const;

const bungaDecorations: DecorationGroup = {
    id: "bunga-group",
    containerClassName:
        "absolute top-110 left-0 w-full flex justify-between pt-4 pointer-events-none opacity-30",
    items: [
        {
            id: "bunga-kiri",
            src: "/icon/bunga.svg",
            alt: "Bunga Kiri",
            className: "absolute -left-30 w-[240px] h-[240px]",
        },
        {
            id: "bunga-kanan",
            src: "/icon/bunga.svg",
            alt: "Bunga Kanan",
            className: "absolute -right-30 w-[240px] h-[240px] scale-x-[-1]",
        },
    ],
} as const;

const batikDecorations: DecorationGroup = {
    id: "batik-group",
    containerClassName:
        "absolute bottom-50 left-0 w-full flex justify-between pb-4 pointer-events-none overflow-visible z-0",
    items: [
        {
            id: "batik-kiri",
            src: "/icon/batik.svg",
            alt: "Batik Kiri",
            className: "absolute left-0 w-[30.5vh] h-auto",
        },
        {
            id: "batik-kanan",
            src: "/icon/batik.svg",
            alt: "Batik Kanan",
            className: "absolute right-0 w-[30.5vh] h-auto scale-x-[-1]",
        },
    ],
} as const;

const bungaMahkotaDecoration: DecorationItem = {
    id: "bunga-mahkota",
    src: "/icon/bunga-mahkota.svg",
    alt: "Bunga Mahkota",
    className:
        "absolute w-[80vw] lg:w-[50vw] -bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 translate-y-1/4 z-50 md:z-0",
} as const;

export {
    buttonData,
    cardData,
    bungaMahkotaDecoration,
    batikDecorations,
    bungaDecorations,
};
