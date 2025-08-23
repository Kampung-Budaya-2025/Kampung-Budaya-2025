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
            icon: "/icon/kolaborasi-musik.svg"
        },
        {
            id: "bazar-kebudayaan",
            title: "Bazar Kebudayaan",
            icon: "/icon/bazar-kebudayaan.svg"
        },
        {
            id: "busana-adat",
            title: "Busana Adat",
            icon: "/icon/busana-adat.svg"
        },
        {
            id: "tari-tradisional",
            title: "Tari Tradisional",
            icon: "/icon/tari-tradisional.svg"
        },
        {
            id: "cerita-nusantara",
            title: "Cerita Nusantara",
            icon: "/icon/cerita-nusantara.svg"
        }
    ] as const;

    export { buttonData, cardData };
