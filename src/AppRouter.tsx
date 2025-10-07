import { useState } from "react";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Categories } from "./components/Categories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { RoomShowcase } from "./components/RoomShowcase";
import { AboutSection } from "./components/AboutSection";
import { ImageGallery } from "./components/ImageGallery";
import { Footer } from "./components/Footer";
import { ProductPage } from "./components/ProductPage";

type Page = 'home' | 'product';

export default function AppRouter() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  // Simular navegação global
  (window as any).navigateToProduct = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentPage('product');
  };

  (window as any).navigateToHome = () => {
    setCurrentPage('home');
    setSelectedProductId(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'product':
        return (
          <main className="pt-16">
            <ProductPage />
          </main>
        );
      case 'home':
      default:
        return (
          <main className="relative">
            <HeroBanner />
            <Categories />
            <FeaturedProducts />
            <RoomShowcase />
            <AboutSection />
            <ImageGallery />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}