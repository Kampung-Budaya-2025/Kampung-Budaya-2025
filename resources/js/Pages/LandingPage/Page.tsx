import FilosofiLogi from "@/Components/LandingPage/FilosofiLogo/Page";
import Hero from "@/Components/LandingPage/Hero/Page";
import PengengalanMaskot from "@/Components/LandingPage/PengenalanMaskot/Page";
import RangkaianKegiatan from "@/Components/LandingPage/RangkaianKegiatan/Page";
import React from "react";
import { Link } from "@inertiajs/react";

const LandingPage = () => (
    <div className="overflow-x-hidden overflow-y-hidden">
        <Hero />
        <RangkaianKegiatan />
        <PengengalanMaskot />
        <FilosofiLogi />
    </div>
);

export default LandingPage;
