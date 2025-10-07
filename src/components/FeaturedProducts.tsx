import { Eye, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import cordaColorida from 'figma:asset/9f9c89864d5dab3d8585fa2a2f67fafac7b394ff.png';
import removedorPelos from 'figma:asset/79c7a7efb690810a3c54d6f5a97eb07e52d6605e.png';
import roloRemovedor from 'figma:asset/7bc8216f6a2d707d57f0469c4096b37fa13d92d4.png';
import tapeteFelpudo from 'figma:asset/0bb5f26735a47f275346f4e320ed3c417524c96f.png';
import tapeteBanheira from 'figma:asset/3ed27078e33e9c59f1c9e8c7ac814fd363be524c.png';
import limpaVidro from 'figma:asset/f00dce8cfccfb5141f2db4ead54d1180912fa67e.png';
import cortinasMarrons from 'figma:asset/4fd6619a4c1d81c0cf0c08c60cd50968bfc60a6f.png';
import panoMicrofibra from 'figma:asset/9eebf322ebe8763ecf6ad9c27b19e7b7e0d0cf21.png';
import sacoOrganizador from 'figma:asset/b34da5e491138d7d23f4f98ab6ca5ad92c9fd570.png';

export function FeaturedProducts() {

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
    
    const product = products.find(p => p.id === productId);
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

  const products = [
    {
      id: 1,
      name: "CORDA VARAL MULTICOLORIDA",
      price: "R$ 89,90",
      image: cordaColorida
    },
    {
      id: 2,
      name: "REMOVEDOR DE PELOS PORTÁTIL",
      price: "R$ 159,90",
      image: removedorPelos
    },
    {
      id: 3,
      name: "ROLO REMOVEDOR DE PELOS REFIL",
      price: "R$ 45,90",
      image: roloRemovedor
    },
    {
      id: 4,
      name: "TAPETE FELPUDO PREMIUM BEGE",
      price: "R$ 124,90",
      image: tapeteFelpudo
    },
    {
      id: 5,
      name: "TAPETE ANTIDERRAPANTE BANHEIRA",
      price: "R$ 79,90",
      image: tapeteBanheira
    },
    {
      id: 6,
      name: "LIMPA VIDRO MAGNÉTICO CLEANTECH",
      price: "R$ 189,90",
      image: limpaVidro
    },
    {
      id: 7,
      name: "FRONHA ALICE ST TROPEZ CHERRY",
      price: "R$ 312,00",
      image: "https://images.unsplash.com/photo-1699436639670-1e5799b14aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJpcGVkJTIwcGlsbG93JTIwY292ZXJ8ZW58MXx8fHwxNzU4MDMzMjg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 8,
      name: "ALMOFADA ST TROPEZ NATURAL",
      price: "R$ 504,00",
      image: "https://images.unsplash.com/photo-1592836115175-237e5f25ff93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxpbmVuJTIwcGlsbG93fGVufDF8fHx8MTc1ODAzMzI4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 9,
      name: "FRONHA LINHO PREMIUM",
      price: "R$ 245,00",
      image: "https://images.unsplash.com/photo-1642786518358-45626f9ce9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWlnZSUyMHBpbGxvdyUyMGNvdmVyfGVufDF8fHx8MTc1ODAzMzI4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 10,
      name: "CORTINAS BLACKOUT ELEGANCE",
      price: "R$ 299,90",
      image: cortinasMarrons
    },
    {
      id: 11,
      name: "PANO MICROFIBRA PREMIUM AZUL",
      price: "R$ 34,90",
      image: panoMicrofibra
    },
    {
      id: 12,
      name: "SACO ORGANIZADOR A VÁCUO",
      price: "R$ 149,90",
      image: sacoOrganizador
    }
  ];

  // Dividir produtos em 3 linhas de 4 produtos cada
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(8, 12);

  return (
    <section id="featured-products" className="py-20 bg-[var(--cleantech-neutral-50)]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-bd font-light  text-[var(--cleantech-primary)] uppercase mb-4 text-[36px] font-bold font-normal">
            PRODUTOS EM DESTAQUE
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)] mx-auto mb-6"></div>
          <p className="text-[var(--cleantech-neutral-600)] max-w-2xl mx-auto">
            Descubra nossa seleção de produtos CleanTech com tecnologia avançada para limpeza inteligente
          </p>
        </div>

        {/* Primeira linha - 4 produtos */}
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {firstRow.map((product) => (
              <div key={product.id} className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-300">
                {/* Product Card */}
                <div className="bg-white border border-[var(--cleantech-neutral-200)] hover:border-[var(--cleantech-cyan-light)] transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay com ícone de coração */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <span className="text-[var(--cleantech-primary)] text-sm">♡</span>
                      </button>
                    </div>
                    
                    {/* Badge de destaque */}
                    {product.id <= 3 && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)] text-white text-xs px-2 py-1 rounded-full font-medium">
                          NOVO
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5 text-center">
                    <h4 className="category-title tracking-[0.1em] text-[var(--cleantech-neutral-700)] uppercase mb-3 leading-tight group-hover:text-[var(--cleantech-primary)] transition-colors duration-300 min-h-[2.8rem] flex items-center justify-center">
                      {product.name}
                    </h4>
                    <p className="font-medium text-[var(--cleantech-primary)] mb-4">
                      {product.price}
                    </p>
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
        </div>

        {/* Segunda linha - 4 produtos */}
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondRow.map((product) => (
              <div key={product.id} className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-300">
                {/* Product Card */}
                <div className="bg-white border border-[var(--cleantech-neutral-200)] hover:border-[var(--cleantech-cyan-light)] transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay com ícone de coração */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <span className="text-[var(--cleantech-primary)] text-sm">♡</span>
                      </button>
                    </div>
                    
                    {/* Badge de destaque */}
                    {product.id <= 3 && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)] text-white text-xs px-2 py-1 rounded-full font-medium">
                          NOVO
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5 text-center">
                    <h4 className="category-title tracking-[0.1em] text-[var(--cleantech-neutral-700)] uppercase mb-3 leading-tight group-hover:text-[var(--cleantech-primary)] transition-colors duration-300 min-h-[2.8rem] flex items-center justify-center">
                      {product.name}
                    </h4>
                    <p className="font-medium text-[var(--cleantech-primary)] mb-4">
                      {product.price}
                    </p>
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
        </div>

        {/* Terceira linha - 4 produtos */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {thirdRow.map((product) => (
              <div key={product.id} className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-300">
                {/* Product Card */}
                <div className="bg-white border border-[var(--cleantech-neutral-200)] hover:border-[var(--cleantech-cyan-light)] transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay com ícone de coração */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <span className="text-[var(--cleantech-primary)] text-sm">♡</span>
                      </button>
                    </div>
                    
                    {/* Badge de destaque */}
                    {product.id <= 3 && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)] text-white text-xs px-2 py-1 rounded-full font-medium">
                          NOVO
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5 text-center">
                    <h4 className="category-title tracking-[0.1em] text-[var(--cleantech-neutral-700)] uppercase mb-3 leading-tight group-hover:text-[var(--cleantech-primary)] transition-colors duration-300 min-h-[2.8rem] flex items-center justify-center">
                      {product.name}
                    </h4>
                    <p className="font-medium text-[var(--cleantech-primary)] mb-4">
                      {product.price}
                    </p>
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
        </div>
      </div>
    </section>
  );
}