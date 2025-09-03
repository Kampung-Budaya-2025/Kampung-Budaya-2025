import { ButtonData, CardData } from "../types";
import { DecorationGroup, DecorationItem } from "../types";
import { downloadDocument } from "@/Utils/documentUtils";

const buttonData: ButtonData[] = [
    {
        id: "booklet",
        text: "Booklet",
        onClick: downloadDocument.booklet.download,
    },
    {
        id: "formulir",
        text: "Formulir",
        onClick: downloadDocument.form.download,
    },
] as const;

const cardData: CardData[] = [
    {
        id: "kolaborasi-musik",
        title: "Kolaborasi Musik",
        icon: "/icon/kolaborasi-musik.svg",
        description:
            "Kolaborasi Musik Nusantara adalah kompetisi menyanyikan lagu daerah yang menggabungkan unsur alat musik tradisional dan musik modern. Kegiatan ini bertujuan untuk melestarikan kekayaaan budaya musik Indonesia melalui pendekatan kreatif dan inovatif, dengan harapan dapat membangkitkan kecintaan generasi muda terhadap musik tradisional dalam balutan nuansa kekinian",
    },
    {
        id: "bazar-kebudayaan",
        title: "Bazar Kebudayaan",
        icon: "/icon/bazar-kebudayaan.svg",
        description:
            "Kegiatan ini berupa perlombaan yang memberikan kebabsan kepada Forum Daerah (FORDA) untuk merancang stand mereka secara kreatif. FORDA juga berkesempatan untuk menjual makanan dan aksesoris khas dari daerah masing-masing. Selain itu, tersedia stand khusus bagi mahasiswa internasional untuk memperkenalkan budaya asal mereka. Tak hanya itu, stand UMKM juga akan disediakan dan dapat disewa oleh masyarakat umum, serta untuk meningkatkan minat wirausaha pada mahasiswa wirausaha juga dapat menyewa stand ini.",
    },
    {
        id: "gemilang-busana-adat",
        title: "Gemilang Busana Adat",
        icon: "/icon/busana-adat.svg",
        description:
            "Kegiatan lomba yang menampilkan kreativitas mahasiswa dalam memperagakan busana adat khas daerahnya masing-masing, dikemas dengan konsep fashion show. Kegiatan ini ditujukan bagi Forum Daerah (FORDA) dan Universitas Brawijaya sebagai bentuk apresiasi terhadap kekayaan budaya nusantara.",
    },
    {
        id: "gelanggang-tari-nusantara",
        title: "Gelanggang Tari Nusantara",
        icon: "/icon/tari-tradisional.svg",
        description:
            "Gelanggang tari nusantara adalah ajang perlombaan tari tradisional yang menampilkan keragaman budaya dari berbagai daerah di Indonesia. Kegiatan ini menjadi wadah ekspresi seni, pelestarian budaya. Kegiatan ini ditujukan bagi forum daerah (FORDA) Universitas Brawijaya sebagai bentuk apresiasi terhadap kekayaan tari nusantara.",
    },
    {
        id: "panggung-budaya-nusantara",
        title: "Panggung Budaya Nusantara",
        icon: "/icon/cerita-nusantara.svg",
        description:
            "Lomba bercerita dengan tema legenda dan cerita rakyat dari berbagai daerah di Nusantara.",
    },
    {
        id: "karya-citra-inklusif",
        title: "Karya Citra Inklusif",
        icon: "/icon/lomba-bercerita.svg",
        description:
            "Lomba bercerita dengan tema legenda dan cerita rakyat dari berbagai daerah di Nusantara.",
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
        "absolute w-[80vw] lg:w-[50vw] -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/4 z-0",
} as const;

export {
    buttonData,
    cardData,
    bungaMahkotaDecoration,
    batikDecorations,
    bungaDecorations,
};
