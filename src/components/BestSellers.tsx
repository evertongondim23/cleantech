import { Eye, ShoppingCart, Star, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BestSellers() {
  const bestSellingProducts = [
    {
      id: 1,
      name: "MOP ULTRA CLEAN PRO",
      price: "R$ 89,90",
      originalPrice: "R$ 109,90",
      image: "https://images.unsplash.com/photo-1749214317455-efbdd57df844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMG1vcCUyMHByb2R1Y3R8ZW58MXx8fHwxNzU5MjU3NjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      salesCount: 2847,
      badge: "Mais Vendido",
      discount: 18,
      category: "MOPS"
    },
    {
      id: 2,
      name: "KIT PANOS MICROFIBRA PREMIUM",
      price: "R$ 45,90",
      originalPrice: "R$ 59,90",
      image: "https://images.unsplash.com/photo-1714058948946-8fc9c3fa6a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2ZpYmVyJTIwY2xlYW5pbmclMjBjbG90aHN8ZW58MXx8fHwxNzU5MjU3NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      salesCount: 1923,
      badge: "Top #2",
      discount: 23,
      category: "PANOS"
    },
    {
      id: 3,
      name: "ESPONJA MULTIUSO CLEANTECH",
      price: "R$ 24,90",
      originalPrice: "R$ 32,90",
      image: "https://images.unsplash.com/photo-1722356541555-eeabc38f80a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNwb25nZSUyMGtpdGNoZW58ZW58MXx8fHwxNzU5MjU3NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      salesCount: 1654,
      badge: "Top #3",
      discount: 24,
      category: "ESPONJAS"
    },
    {
      id: 4,
      name: "ESCOVA LIMPEZA MULTIUSO",
      price: "R$ 32,90",
      originalPrice: "R$ 42,90",
      image: "https://images.unsplash.com/photo-1630325459372-36f3f86281cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMGJydXNoJTIwc2NydWJ8ZW58MXx8fHwxNzU5MjU4ODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.6,
      salesCount: 1432,
      badge: "Top #4",
      discount: 23,
      category: "ESCOVAS"
    }
  ];

  const handleViewProduct = (productId: number) => {
    console.log('Clicou no produto:', productId);
    console.log('Função navegação disponível:', !!(window as any).navigateToProduct);
    
    // Navegação usando função global (simula roteamento)
    if ((window as any).navigateToProduct) {
      (window as any).navigateToProduct(productId);
    } else {
      // Fallback: log para desenvolvimento
      console.log(`Função de navegação não encontrada. Produto ${productId}`);
    }
  };

  const handleAddToCartQuick = (productId: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Evitar navegação quando clicar no botão do carrinho
    
    const product = bestSellingProducts.find(p => p.id === productId);
    if (!product) return;

    const cartItem = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace('R$ ', '').replace(',', '.')),
      image: product.image
    };

    // Adicionar ao carrinho usando função global
    if ((window as any).addToCart) {
      (window as any).addToCart(cartItem);
    }

    // Atualizar contador no header
    if ((window as any).updateCartCount) {
      (window as any).updateCartCount();
    }

    // Mostrar notificação toast
    if ((window as any).showCartToast) {
      (window as any).showCartToast(product.name);
    }
  };

  return (
    <section className="py-20 bg-[var(--cleantech-neutral-150)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-[var(--cleantech-accent)]" />
            <span className="px-4 py-2 bg-gradient-to-r from-[var(--cleantech-accent)] to-[var(--cleantech-secondary)] text-white rounded-full text-sm font-light tracking-wider uppercase">
              Ranking de Vendas
            </span>
            <Award className="w-8 h-8 text-[var(--cleantech-accent)]" />
          </div>
          
          <h2 className="text-bd font-light text-[var(--cleantech-primary)] uppercase mb-4 text-[36px] font-bold font-normal">
            PRODUTOS MAIS VENDIDOS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)] mx-auto mb-6"></div>
          <p className="text-[var(--cleantech-neutral-600)] max-w-2xl mx-auto">
            Descubra os produtos favoritos dos nossos clientes. Qualidade comprovada 
            por milhares de pessoas que escolheram CleanTech para suas necessidades de limpeza.
          </p>
        </div>

        {/* Products Grid - 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellingProducts.map((product, index) => (
            <div key={product.id} className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-300">
              {/* Product Card */}
              <div className="bg-white border border-[var(--cleantech-neutral-200)] hover:border-[var(--cleantech-cyan-light)] transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge de Ranking */}
                  <div className="absolute top-3 left-3">
                    <div className={`px-3 py-1.5 rounded-full text-xs font-medium text-white tracking-wide ${
                      index === 0 
                        ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-400/30' 
                        : index === 1 
                        ? 'bg-gradient-to-r from-gray-400 to-gray-600 shadow-lg shadow-gray-400/30'
                        : index === 2
                        ? 'bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg shadow-orange-400/30'
                        : 'bg-gradient-to-r from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)]'
                    }`}>
                      {product.badge}
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg">
                      -{product.discount}%
                    </div>
                  </div>
                  
                  {/* Overlay com ícone de coração */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <span className="text-[var(--cleantech-primary)] text-sm">♡</span>
                    </button>
                  </div>

                  {/* Sales Counter */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-[var(--cleantech-neutral-700)] font-medium">
                        {product.salesCount.toLocaleString()} vendidos
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 text-center">
                  <h4 className="category-title tracking-[0.1em] text-[var(--cleantech-neutral-700)] uppercase mb-3 leading-tight group-hover:text-[var(--cleantech-primary)] transition-colors duration-300 min-h-[2.8rem] flex items-center justify-center">
                    {product.name}
                  </h4>
                  
                  {/* Pricing with discount */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="font-medium text-[var(--cleantech-primary)]">
                        {product.price}
                      </span>
                      <span className="text-sm text-[var(--cleantech-neutral-400)] line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-[var(--cleantech-neutral-700)]">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <button 
                      onClick={() => handleViewProduct(product.id)}
                      className="w-full font-light tracking-[0.1em] text-[var(--cleantech-primary)] uppercase border border-[var(--cleantech-primary)] px-4 py-2.5 hover:bg-[var(--cleantech-primary)] hover:text-white transition-all duration-300 rounded-md flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>VER MAIS</span>
                    </button>
                    
                    <button 
                      onClick={(e) => handleAddToCartQuick(product.id, e)}
                      className="w-full font-light tracking-[0.1em] text-white uppercase bg-[var(--cleantech-cyan-light)] hover:bg-[var(--cleantech-cyan-vibrant)] px-4 py-2.5 transition-all duration-300 rounded-md flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>CARRINHO</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-[var(--cleantech-neutral-500)] mb-4">
            Junte-se a mais de <span className="font-semibold text-[var(--cleantech-primary)]">10.000 clientes</span> satisfeitos
          </p>
          <button 
            className="px-8 py-3 bg-gradient-to-r from-[var(--cleantech-primary)] to-[var(--cleantech-secondary)] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[var(--cleantech-primary)]/30 transition-all duration-300 hover:scale-105"
            onClick={() => (window as any).navigateToCategories?.()}
          >
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
}