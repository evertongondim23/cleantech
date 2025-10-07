import { Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function OpportunityCuration() {
  const opportunities = [
    {
      id: 1,
      category: "Banheiro",
      startingPrice: "R$ 36,00",
      image: "https://images.unsplash.com/photo-1573162274701-6f12588e35b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGNsZWFuaW5nJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzU5MzMyNTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      products: ["Detergente para azulejos", "Desentupidor", "Esponja premium"],
      gradient: "from-blue-600/90 to-cyan-600/90"
    },
    {
      id: 2,
      category: "Cozinha", 
      startingPrice: "R$ 54,00",
      image: "https://images.unsplash.com/photo-1737372805905-be0b91ec86fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2xlYW5pbmclMjBzdXBwbGllc3xlbnwxfHx8fDE3NTkzMzI1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      products: ["Multiuso", "Detergente para louças", "Panos microfibra"],
      gradient: "from-green-600/90 to-emerald-600/90"
    },
    {
      id: 3,
      category: "Quarto",
      startingPrice: "R$ 64,00", 
      image: "https://images.unsplash.com/photo-1613924550362-f9320392117d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwY2xlYW5pbmclMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTkzMzI1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      products: ["Removedor de poeira", "Limpa móveis", "Aspirador portátil"],
      gradient: "from-purple-600/90 to-pink-600/90"
    },
    {
      id: 4,
      category: "Sala de estar",
      startingPrice: "R$ 198,00",
      image: "https://images.unsplash.com/photo-1758272422189-b10f36fd4ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZpbmclMjByb29tJTIwY2xlYW5pbmclMjBzdXBwbGllc3xlbnwxfHx8fDE3NTkzMzI1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      products: ["Kit completo", "Limpa sofá", "Organizador"],
      gradient: "from-orange-600/90 to-red-600/90"
    }
  ];

  const handleCategoryClick = (categoryName: string) => {
    console.log(`Clicou na categoria: ${categoryName}`);
    
    // Navegação usando função global
    if ((window as any).navigateToCategory) {
      (window as any).navigateToCategory(categoryName);
    } else {
      console.log(`Função de navegação não encontrada. Categoria: ${categoryName}`);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--cleantech-neutral-50)] to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-[var(--cleantech-accent)]" />
            <span className="px-4 py-2 bg-gradient-to-r from-[var(--cleantech-accent)] to-[var(--cleantech-secondary)] text-white rounded-full text-sm font-light tracking-wider uppercase">
              Soluções Personalizadas
            </span>
            <ShoppingBag className="w-8 h-8 text-[var(--cleantech-accent)]" />
          </div>
          
          <h2 className="text-bd font-light text-[var(--cleantech-primary)] uppercase mb-4 text-[36px] font-bold font-normal">
            CURADORIA POR OPORTUNIDADE
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[var(--cleantech-cyan-light)] to-[var(--cleantech-cyan-vibrant)] mx-auto mb-6"></div>
          <p className="text-[var(--cleantech-neutral-600)] max-w-3xl mx-auto">
            Descubra soluções de limpeza inteligente organizadas por ambiente. 
            Cada cômodo tem suas necessidades específicas, e nós temos os produtos perfeitos para cada situação.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {opportunities.map((opportunity) => (
            <div 
              key={opportunity.id} 
              className="group cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
              onClick={() => handleCategoryClick(opportunity.category)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Background Image */}
                <div className="relative h-96">
                  <ImageWithFallback
                    src={opportunity.image}
                    alt={`Produtos de limpeza para ${opportunity.category}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${opportunity.gradient} group-hover:opacity-90 transition-opacity duration-500`}></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                    {/* Price Badge */}
                    <div className="self-start">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/30">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-light tracking-wider uppercase opacity-90">
                            A partir de
                          </span>
                          <span className="text-sm font-semibold tracking-wide">
                            {opportunity.startingPrice}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Category Label */}
                    <div className="self-end text-right">
                      <h3 className="text-2xl font-light tracking-[0.1em] uppercase mb-2 transform rotate-[-90deg] origin-bottom-right translate-x-6 translate-y-2">
                        {opportunity.category}
                      </h3>
                    </div>
                  </div>

                  {/* Hover Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ArrowRight className="w-6 h-6 text-[var(--cleantech-primary)]" />
                    </div>
                  </div>
                </div>

                {/* Product Hint */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-white text-center">
                    <p className="text-xs opacity-90 mb-1">Produtos inclusos:</p>
                    <p className="text-sm font-light">
                      {opportunity.products.join(" • ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-sm text-[var(--cleantech-neutral-500)] mb-6">
            Transforme cada ambiente com as soluções certas. 
            <span className="font-semibold text-[var(--cleantech-primary)]">Economia garantida</span> em kits personalizados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-[var(--cleantech-primary)] to-[var(--cleantech-secondary)] text-white rounded-xl font-medium hover:shadow-lg hover:shadow-[var(--cleantech-primary)]/30 transition-all duration-300 hover:scale-105"
              onClick={() => (window as any).navigateToCategories?.()}
            >
              Ver Todas as Categorias
            </button>
            
            <button 
              className="px-8 py-3 border-2 border-[var(--cleantech-primary)] text-[var(--cleantech-primary)] rounded-xl font-medium hover:bg-[var(--cleantech-primary)] hover:text-white transition-all duration-300"
              onClick={() => (window as any).navigateToOffers?.()}
            >
              Ofertas Especiais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}