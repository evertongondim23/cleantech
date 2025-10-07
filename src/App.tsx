import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Benefits } from "./components/Benefits";
import { Categories } from "./components/Categories";
import { BestSellers } from "./components/BestSellers";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Statistics } from "./components/Statistics";
import { OpportunityCuration } from "./components/OpportunityCuration";
import { IdeasInspiration } from "./components/IdeasInspiration";
import { CallToActionCards } from "./components/CallToActionCards";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { ProductPage } from "./components/ProductPage";
import { AboutPage } from "./components/AboutPage";
import { CategoriesPage } from "./components/CategoriesPage";
import { CategoryPagePro } from "./components/CategoryPagePro";
import { OffersPage } from "./components/OffersPage";
import { SupportPage } from "./components/SupportPage";
import { Cart } from "./components/Cart";
import { CartToast } from "./components/CartToast";
import { ProfileDrawer } from "./components/ProfileDrawer";
import { RegisterDrawer } from "./components/RegisterDrawer";
import { CategoryBar } from "./components/CategoryBar";
import { GalleryPage } from "./components/GalleryPage";

type Page =
  | "home"
  | "product"
  | "about"
  | "categories"
  | "category-pro"
  | "offers"
  | "support"
  | "gallery";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProductId, setSelectedProductId] = useState<
    number | null
  >(null);
  const [showCartToast, setShowCartToast] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] =
    useState<string>("");
  // Estados removidos pois os drawers gerenciam internamente

  // Atualizar título da página baseado na navegação
  useEffect(() => {
    const titles = {
      home: "CleanTech - Produtos de Limpeza Inteligente",
      product: "Produto - CleanTech",
      about: "Sobre Nós - CleanTech",
      categories: "Categorias - CleanTech",
      "category-pro": "Produtos Profissionais - CleanTech",
      offers: "Ofertas - CleanTech",
      support: "Suporte - CleanTech",
      gallery: "Galeria de Inspirações - CleanTech",
    };

    document.title =
      titles[currentPage] ||
      "CleanTech - Produtos de Limpeza Inteligente";
  }, [currentPage]);

  // Notificar header sobre página atual
  useEffect(() => {
    if ((window as any).setHeaderInternalPage) {
      (window as any).setHeaderInternalPage(
        currentPage === "product" ||
          currentPage === "about" ||
          currentPage === "categories" ||
          currentPage === "category-pro" ||
          currentPage === "offers" ||
          currentPage === "support" ||
          currentPage === "gallery",
      );
    }
  }, [currentPage]);

  // Configurar sistema de notificação do carrinho
  useEffect(() => {
    (window as any).showCartToast = (productName: string) => {
      setLastAddedProduct(productName);
      setShowCartToast(true);
    };

    return () => {
      delete (window as any).showCartToast;
    };
  }, []);

  // Sistema de drawers é gerenciado internamente pelos componentes

  // Configurar navegação global
  useEffect(() => {
    (window as any).navigateToProduct = (productId: number) => {
      setSelectedProductId(productId);
      setCurrentPage("product");
      // Notificar header sobre página interna
      if ((window as any).setHeaderInternalPage) {
        (window as any).setHeaderInternalPage(true);
      }
      // Scroll para o topo
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    (window as any).navigateToAbout = () => {
      setCurrentPage("about");
      setSelectedProductId(null);
      // Notificar header sobre página interna
      if ((window as any).setHeaderInternalPage) {
        (window as any).setHeaderInternalPage(true);
      }
      // Scroll para o topo
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    (window as any).navigateToCategories = () => {
      setCurrentPage("categories");
      setSelectedProductId(null);
      // Notificar header sobre página interna
      if ((window as any).setHeaderInternalPage) {
        (window as any).setHeaderInternalPage(true);
      }
      // Scroll para o topo
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    (window as any).navigateToCategoryPro = () => {
      setCurrentPage("category-pro");
      setSelectedProductId(null);
      // Notificar header sobre página interna
      if ((window as any).setHeaderInternalPage) {
        (window as any).setHeaderInternalPage(true);
      }
      // Scroll para o topo
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    (window as any).navigateToOffers = () => {
      setCurrentPage("offers");
      setSelectedProductId(null);
      // Notificar header sobre página interna
      if ((window as any).setHeaderInternalPage) {
        (window as any).setHeaderInternalPage(true);
      }
      // Scroll para o topo
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    (window as any).navigateToSupport = () => {
      setCurrentPage("support");
      setSelectedProductId(null);
      // Notificar header sobre página interna
      if ((window as any).setHeaderInternalPage) {
        (window as any).setHeaderInternalPage(true);
      }
      // Scroll para o topo
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    (window as any).navigateToHome = () => {
      setCurrentPage("home");
      setSelectedProductId(null);
      // Notificar header sobre página home
      if ((window as any).setHeaderInternalPage) {
        (window as any).setHeaderInternalPage(false);
      }
      // Scroll para o topo
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    (window as any).navigateToGallery = () => {
      setCurrentPage("gallery");
      setSelectedProductId(null);
      // Notificar header sobre página interna
      if ((window as any).setHeaderInternalPage) {
        (window as any).setHeaderInternalPage(true);
      }
      // Scroll para o topo
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Navegação para categorias específicas
    (window as any).navigateToCategory = (
      categoryName: string,
    ) => {
      console.log(`Navegando para categoria: ${categoryName}`);
      // Por enquanto, vai para a página de categorias
      setCurrentPage("categories");
      setSelectedProductId(null);
      if ((window as any).setHeaderInternalPage) {
        (window as any).setHeaderInternalPage(true);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Cleanup
    return () => {
      delete (window as any).navigateToProduct;
      delete (window as any).navigateToAbout;
      delete (window as any).navigateToCategories;
      delete (window as any).navigateToCategoryPro;
      delete (window as any).navigateToOffers;
      delete (window as any).navigateToSupport;
      delete (window as any).navigateToHome;
      delete (window as any).navigateToGallery;
      delete (window as any).navigateToCategory;
    };
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case "product":
        return (
          <main className="pt-24">
            <ProductPage />
          </main>
        );
      case "about":
        return (
          <main className="pt-24">
            <AboutPage />
          </main>
        );
      case "categories":
        return (
          <main className="pt-24">
            <CategoriesPage />
          </main>
        );
      case "category-pro":
        return (
          <main className="pt-24">
            <CategoryPagePro />
          </main>
        );
      case "offers":
        return (
          <main className="pt-24">
            <OffersPage />
          </main>
        );
      case "support":
        return (
          <main className="pt-24">
            <SupportPage />
          </main>
        );
      case "gallery":
        return (
          <main className="pt-24">
            <GalleryPage />
          </main>
        );
      case "home":
      default:
        return (
          <main className="relative pt-32">
            <CategoryBar />
            <HeroBanner />
            <Benefits />
            <Categories />
            <BestSellers />
            <FeaturedProducts />
            <Statistics />
            <OpportunityCuration />
            <IdeasInspiration />
            <CallToActionCards />
            <Newsletter />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {renderContent()}
      <Footer />
      <Cart />
      <CartToast
        isVisible={showCartToast}
        onClose={() => setShowCartToast(false)}
        productName={lastAddedProduct}
      />
      <ProfileDrawer />
      <RegisterDrawer />
    </div>
  );
}