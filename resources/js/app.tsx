import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/Layouts/Layout';
import LandingPage from './Pages/LandingPage/Page';
import FAQPages from './Pages/FAQ/Page';
import RegisterEvent from './Pages/Galeri/Page';
import './bootstrap';
import '../css/app.css';

const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/faq" element={<FAQPages />} />
          <Route path="/galeri" element={<RegisterEvent />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
