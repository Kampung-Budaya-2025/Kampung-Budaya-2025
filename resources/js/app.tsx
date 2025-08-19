
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/Page";
import FAQPages from "./Pages/FAQ/Page";

import "./bootstrap";
import "../css/app.css";
import RegisterForm from "./Pages/RegisterForm/Page";
import RegisterUpload from "./Pages/RegisterConfirmation/RegisterUpload/Page";
import RegisterConfirmation from "./Pages/RegisterConfirmation/Page";



const container = document.getElementById("app");
if (container) {

    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/faq" element={<FAQPages />} />
                <Route path="/register-form" element={<RegisterForm />} />
                <Route path="/register-upload" element={<RegisterUpload />} />
                <Route path="/register-confirmation" element={<RegisterConfirmation />} />
               
            </Routes>
        </BrowserRouter>
    );

}
