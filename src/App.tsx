/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { PizzaPage } from "./pages/PizzaPage";
import { PastaPage } from "./pages/PastaPage";
import { SpecialtiesPage } from "./pages/SpecialtiesPage";
import { CafeExperiencePage } from "./pages/CafeExperiencePage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { OurFoodPage } from "./pages/OurFoodPage";
import { Why18HoursPage } from "./pages/Why18HoursPage";
import { CustomerReviewsPage } from "./pages/CustomerReviewsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { FAQPage } from "./pages/FAQPage";
import { OrderInquiryPage } from "./pages/OrderInquiryPage";
import { ContactPage } from "./pages/ContactPage";
import { VisitUsPage } from "./pages/VisitUsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace("#", "").trim();
    const validPages = [
      "home",
      "menu",
      "pizza",
      "pasta",
      "specialties",
      "cafe-experience",
      "about",
      "our-food",
      "why-18-hours",
      "reviews",
      "gallery",
      "faq",
      "order",
      "contact",
      "visit-us",
    ];
    return validPages.includes(hash) ? hash : "home";
  });

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").trim();
      if (hash) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update page title dynamically for enhanced SEO
  useEffect(() => {
    const titles: Record<string, string> = {
      home: "18 Hours Pizza & Cafe | Pizza Restaurant in Khanewal",
      menu: "Menu Discovery | 18 Hours Pizza & Cafe Khanewal",
      pizza: "Artisan Pizza | 18 Hours Pizza & Cafe Khanewal",
      pasta: "Special Pasta | 18 Hours Pizza & Cafe Khanewal",
      specialties: "House Specialties | 18 Hours Pizza & Cafe Khanewal",
      "cafe-experience": "Cafe & Food Experience | 18 Hours Pizza & Cafe",
      about: "About Us | 18 Hours Pizza & Cafe Khanewal",
      "our-food": "Our Food Philosophy | 18 Hours Pizza & Cafe",
      "why-18-hours": "Why 18 Hours | Pizza Restaurant Khanewal",
      reviews: "Customer Reviews (4.6★ / 85 Reviews) | 18 Hours Pizza & Cafe",
      gallery: "Food & Atmosphere Gallery | 18 Hours Pizza & Cafe",
      faq: "Frequently Asked Questions | 18 Hours Pizza & Cafe",
      order: "Order / Inquiry | 18 Hours Pizza & Cafe Khanewal",
      contact: "Contact & Directions | 18 Hours Pizza & Cafe Khanewal",
      "visit-us": "Visit Us on Jamia Annatia Road | Khanewal",
    };

    document.title = titles[currentPage] || "18 Hours Pizza & Cafe | Pizza Restaurant in Khanewal";
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "menu":
        return <MenuPage onNavigate={handleNavigate} />;
      case "pizza":
        return <PizzaPage onNavigate={handleNavigate} />;
      case "pasta":
        return <PastaPage onNavigate={handleNavigate} />;
      case "specialties":
        return <SpecialtiesPage onNavigate={handleNavigate} />;
      case "cafe-experience":
        return <CafeExperiencePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutUsPage onNavigate={handleNavigate} />;
      case "our-food":
        return <OurFoodPage onNavigate={handleNavigate} />;
      case "why-18-hours":
        return <Why18HoursPage onNavigate={handleNavigate} />;
      case "reviews":
        return <CustomerReviewsPage onNavigate={handleNavigate} />;
      case "gallery":
        return <GalleryPage />;
      case "faq":
        return <FAQPage />;
      case "order":
        return <OrderInquiryPage />;
      case "contact":
        return <ContactPage />;
      case "visit-us":
        return <VisitUsPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121316] text-[#FAF8F5] selection:bg-[#E11D48] selection:text-white">
      {/* Sticky Header with 3-zone contract */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1 pb-16 md:pb-0">
        {renderPage()}
      </main>

      {/* Multi-column Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Order Bar */}
      <MobileStickyBar onNavigate={handleNavigate} />
    </div>
  );
}
