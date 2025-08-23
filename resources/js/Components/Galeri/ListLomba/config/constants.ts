import { ButtonData, CardData } from "../types";

const buttonData: ButtonData[] = [
        {
            id: "booklet",
            text: "Booklet",
            onClick: () => console.log("Booklet clicked")
        },
        {
            id: "formulir", 
            text: "Formulir",
            onClick: () => console.log("Formulir clicked")
        }
    ] as const;

    const cardData: CardData[] = [
        {
            id: "kolaborasi-musik",
            title: "Kolaborasi Musik",
            icon: "/icon/kolaborasi-musik.svg",
            description: "Lomba yang mempresentasikan dan menampilkan busana tradisional khas daerahnya. Dikemas dengan konsep fashion show, dengan target peserta forum daerah (FORDA) dan mahasiswa internasional.\nKegiatan akan dilaksanakan secara offline pada:\nTanggal: 1 - 2 Oktober\nKategori Lomba : Forum Daerah"
        },
        {
            id: "bazar-kebudayaan",
            title: "Bazar Kebudayaan",
            icon: "/icon/bazar-kebudayaan.svg",
            description: "Pameran dan penjualan produk kebudayaan lokal dari berbagai daerah di Indonesia."
        },
        {
            id: "busana-adat",
            title: "Busana Adat",
            icon: "/icon/busana-adat.svg",
            description: "Lomba menampilkan keindahan dan keunikan busana adat dari seluruh Indonesia."
        },
        {
            id: "tari-tradisional",
            title: "Tari Tradisional",
            icon: "/icon/tari-tradisional.svg",
            description: "Kompetisi tari tradisional yang mempertahankan keaslian dan nilai budaya Indonesia."
        },
        {
            id: "cerita-nusantara",
            title: "Cerita Nusantara",
            icon: "/icon/cerita-nusantara.svg",
            description: "Lomba bercerita dengan tema legenda dan cerita rakyat dari berbagai daerah di Nusantara."
        }
    ] as const;

    export { buttonData, cardData };
