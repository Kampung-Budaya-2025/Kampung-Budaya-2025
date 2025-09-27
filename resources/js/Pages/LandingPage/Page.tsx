
import FilosofiLogo from '@/Components/Common/LandingPage/FilosofiLogo/Page';
import Hero from '@/Components/Common/LandingPage/Hero/Page';
import KilasBalik from '@/Components/Common/LandingPage/KilasBalik/Page';
import PengenalanMaskot from '@/Components/Common/LandingPage/PengenalanMaskot/Page';
import RangkaianKegiatanPB from '@/Components/Common/LandingPage/RangkaianKegiatanPB/Page';
import RangkaianKegiatan from '@/Components/Common/LandingPage/RangkaianKegiatan/Page';
import VisiMisi from '@/Components/Common/LandingPage/VisiMisi/Page';
import React from 'react';
import { Link } from 'react-router-dom';
import Partisipasi from '@/Components/Common/LandingPage/Partisipasi/Page';
import MediaPartner from '@/Components/Common/LandingPage/MediaPartner/Page';

const LandingPage = () => (
  <div className='overflow-x-hidden overflow-y-hidden'>
    <Hero />
    <RangkaianKegiatanPB />
    <PengenalanMaskot />
    <FilosofiLogo />
    <VisiMisi />
    <KilasBalik />
    <RangkaianKegiatan />
    <Partisipasi />
    {/* <MediaPartner /> */}
  </div>

);

export default LandingPage;
