import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import LandingPage from "./Pages/LandingPage/Page";
import FAQPages from "./Pages/FAQ/Page";
import RegisterForm from "./Pages/RegisterForm/Page";
import RegisterUpload from "./Pages/RegisterConfirmation/RegisterUpload/Page";
import RegisterConfirmation from "./Pages/RegisterConfirmation/Page";
import RegisterEventPage from "./Pages/RegisterEvent/Page";


import "./bootstrap";
import "../css/app.css";


const container = document.getElementById("app");
if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/faq" element={<FAQPages />} />
                    <Route path="/register-event" element={<RegisterEventPage />} />
                    <Route path="/register-form" element={<RegisterForm />} />
                    <Route path="/register-upload" element={<RegisterUpload />} />
                    <Route path="/register-confirmation" element={<RegisterConfirmation />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
