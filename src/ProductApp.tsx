import { Header } from "./components/Header";
import { ProductPage } from "./components/ProductPage";
import { Footer } from "./components/Footer";

export default function ProductApp() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16"> {/* Espaço para o header fixo */}
        <ProductPage />
      </main>
      <Footer />
    </div>
  );
}