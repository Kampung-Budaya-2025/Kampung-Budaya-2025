import { ButtonData, CardData } from "../types";
import { DecorationGroup, DecorationItem } from '../types';

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

    const bungaDecorations: DecorationGroup = {
        id: 'bunga-group',
        containerClassName: 'absolute top-110 left-0 w-full flex justify-between pt-4 pointer-events-none opacity-30',
        items: [
            {
                id: 'bunga-kiri',
                src: '/icon/bunga.svg',
                alt: 'Bunga Kiri',
                className: 'absolute -left-30 w-[240px] h-[240px]'
            },
            {
                id: 'bunga-kanan',
                src: '/icon/bunga.svg',
                alt: 'Bunga Kanan',
                className: 'absolute -right-30 w-[240px] h-[240px] scale-x-[-1]'
            }
        ]
    } as const;

    const batikDecorations: DecorationGroup = {
        id: 'batik-group',
        containerClassName: 'absolute bottom-50 left-0 w-full flex justify-between pb-4 pointer-events-none overflow-visible z-0',
        items: [
            {
                id: 'batik-kiri',
                src: '/icon/batik.svg',
                alt: 'Batik Kiri',
                className: 'absolute left-0 w-[305px] h-auto'
            },
            {
                id: 'batik-kanan',
                src: '/icon/batik.svg',
                alt: 'Batik Kanan',
                className: 'absolute right-0 w-[305px] h-auto scale-x-[-1]'
            }
        ]
    } as const;

    const bungaMahkotaDecoration: DecorationItem = {
        id: 'bunga-mahkota',
        src: '/icon/bunga-mahkota.svg',
        alt: 'Bunga Mahkota',
        className: 'absolute w-[610px] -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/4 z-0'
    } as const;

    export { buttonData, cardData, bungaMahkotaDecoration, batikDecorations, bungaDecorations };
