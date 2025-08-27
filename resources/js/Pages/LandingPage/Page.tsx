
import FilosofiLogi from '@/Components/LandingPage/FilosofiLogo/Page';
import Hero from '@/Components/LandingPage/Hero/Page';
import KilasBalik from '@/Components/LandingPage/KilasBalik/Page';
import PengengalanMaskot from '@/Components/LandingPage/PengenalanMaskot/Page';
import RangkaianKegiatanPB from '@/Components/LandingPage/RangkaianKegiatanPB/Page';
import RangkaianKegiatan from '@/Components/LandingPage/RangkaianKegiatan/Page';
import VisiMisi from '@/Components/LandingPage/VisiMisi/Page';
import React from 'react';
import { Link } from 'react-router-dom';
import Partisipasi from '@/Components/LandingPage/Partisipasi/Page';
import MediaPartner from '@/Components/LandingPage/MediaPartner/Page';

const LandingPage = () => (
  <div className='overflow-x-hidden overflow-y-hidden'>
    <Hero />
    <RangkaianKegiatanPB />
    <PengengalanMaskot />
    <FilosofiLogi />
    <VisiMisi />
    <KilasBalik />
    <RangkaianKegiatan />
    <Partisipasi />
    <MediaPartner />
  </div>

);

export default LandingPage;
