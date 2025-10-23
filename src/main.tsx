import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ServicesDetails from "./components/pages/ServicesDetails";
import ProjectDetails from "./components/pages/ProjectDetails";
import { NotFound } from "./components/pages/NotFound";
import { LanguageProvider } from "./components/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:lang/services/:id" element={<ServicesDetails />} />
          <Route path="/:lang/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);
